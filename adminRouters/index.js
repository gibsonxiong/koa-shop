const router = require('koa-router')();
const {
    upload,
    getUploadPath
} = require('../utils/upload');
const db = require('../db');
const { models } = db;
const oss = require('../utils/oss');
const fs = require('fs')
const validate = require('../validate');
const core = require('../core');
const bcryptUtils = require('../bcrypt-utils');
const adminToken = require('../middlewares/adminToken')
const utils = require('../utils');
const sms = require('../sms');
const redis = require('../redis');

let initData = {
    category:require('../db/data/category'),
    item:require('../db/data/item'),
    propname:require('../db/data/propname'),
    propvalue:require('../db/data/propvalue'),
}

//上传
router.put('/upload', upload.array('img'), async function (ctx, next) {
    try {
        let files = ctx.req.files;

        for (let i = 0; i < files.length; i++) {
            let file = files[i];

            let result = await oss.put(`upload/${file.filename}`, file.path, {
                mime: file.mimetype
            });

            fs.unlinkSync(file.path);

            file.src = result.url;
        }

        ctx.sendRes(files, 0, '上传成功');

    } catch (err) {
        ctx.sendRes(null, -1, err.message);
    }
});

//发送验证码
router.post('/getSmsCode', async function (ctx, next) {
    try {
        let {
            phone,
            type,
        } = ctx.request.body;

        let [invalid, msg] = new validate.Validator({
            phone
        }, {
            'phone': [{
                name: 'required',
                msg: '手机号不能为空'
            },
            {
                name: 'isMobile',
                msg: '手机号不正确'
            }
            ]
        }).validate();

        if (invalid) throw new Error(msg);

        let smsCode = utils.genSmsCode();

        let key = `sms_${type}_${phone}`;
        await redis.setAsync(key, smsCode);
        await redis.expireAsync(key, 5 * 60);

        await sms.sendSms(phone, smsCode, type);

        console.log('短信验证码', key, smsCode);
        ctx.sendRes(null, 0, '发送验证码成功');
    } catch (err) {
        ctx.sendRes(null, -1, err.message);
    }
});

//注册
router.post('/register', async function (ctx, next) {
    try {
        let {
            phone,
            smsCode,
            password
        } = ctx.request.body;

        let [invalid, msg] = new validate.Validator({
            phone,
            smsCode,
            password
        }, {
            'phone': [{
                name: 'required',
                msg: '手机号不能为空'
            },
            {
                name: 'isMobile',
                msg: '手机号不正确'
            }
            ],
            'smsCode': [{
                name: 'required',
                msg: '验证码不能为空'
            }],
            'password': [{
                name: 'required',
                msg: '密码不能为空'
            }, {
                name: 'isPassword',
                msg: '密码格式不正确'
            }]
        }).validate();

        if (invalid) throw new Error(msg);

        let redisSmsCode = await redis.getAsync(`sms_register_${phone}`);

        if (redisSmsCode !== smsCode) throw new Error('验证码不正确');

        let shopUser = await models.shop_user.findOne({
            where: {
                phone
            }
        });

        if (shopUser) throw new Error('该手机号已注册');

        //加密
        password = await bcryptUtils.hash(password);

        let result = await models.shop_user.create({
            phone,
            password
        });

        if (!result) throw new Error('注册失败');

        ctx.sendRes(null, 0, '恭喜！注册成功');
    } catch (err) {
        ctx.sendRes(null, -1, err.message);
    }
});

//登录
router.post('/login', async function (ctx, next) {
    try {
        let {
            phone,
            password
        } = ctx.request.body;

        let [invalid, msg] = new validate.Validator({
            phone,
            password
        }, {
            'phone': [{
                name: 'required',
                msg: '手机号不能为空'
            }],
            'password': [{
                name: 'required',
                msg: '密码不能为空'
            }],
        }).validate();

        if (invalid) throw new Error(msg);

        let row = await models.shop_user.findOne({
            where: {
                phone
            }
        });

        if (!row) throw new Error('账户或密码错误');

        let verify = await bcryptUtils.compare(password, row.password);

        if (!verify) throw new Error('账户或密码错误');

        let { token, refreshToken } = await core.genToken(row.id);

        ctx.sendRes({
            token,
            refreshToken,
            shopId:row.shopId
        }, 0, '登录成功')

    } catch (err) {
        ctx.sendRes(null, -1, err.message);
    }
});

router.get('/userInfo', adminToken(), async function (ctx, next) {
    try {
        let { shopUser } = ctx;

        let role = await models.shop_role.findOne({
            where: {
                id: shopUser.shopRoleId
            }
        });

        shopUser.dataValues.role = role;

        ctx.sendRes(shopUser, 0)

    } catch (err) {
        ctx.sendRes(null, -1, err.message);
    }

});

//创建店铺
router.post('/createShop', adminToken(), async function (ctx, next) {
    try {
        let { shopUser } = ctx;
        let body = ctx.request.body;

        if(shopUser.shopId){
            throw new Error('该账户已经拥有店铺')
        }

        //开启事务
        let shop;
        await db.transaction(async (t) => {
            //创建店铺
            shop = await models.shop.create(body,{
                transaction:t
            });

            //设置user的shopId
            await models.shop_user.update({
                shopId:shop.id
            },{
                where:{
                    id: shopUser.id
                },
                transaction:t
            })

            //初始化店铺数据
            
            //处理id
            let [maxId] = await db.query(`select 
                max(propname.id) as propname,
                max(propvalue.id) as propvalue,
                max(category.id) as category,
                max(item.id) as item 
                    from 
                        propname,
                        propvalue,
                        category,
                        item
            `,{ type: db.QueryTypes.SELECT,transaction:t });

            // 属性
            initData.propname.forEach(item=>{
                item.shopId=shop.id
                item.id += maxId.propname
            });

            // 属性值
            initData.propvalue.forEach(item=>{
                item.shopId=shop.id
                item.propnameId += maxId.propname
                item.id += maxId.propvalue
            });

            // 分类
            initData.category.forEach(item=>{
                item.shopId=shop.id
                if(item.parentId){
                    item.parentId += maxId.category
                }
                item.id += maxId.category
            });

            //商品
            initData.item.forEach(item=>{
                item.shopId=shop.id
                item.categoryId += maxId.category
                item.id += maxId.item
            });
            
            await models.propname.bulkCreate(initData.propname,{
                transaction:t
            });

            await models.propvalue.bulkCreate(initData.propvalue,{
                transaction:t
            });

            await models.category.bulkCreate(initData.category,{
                transaction:t
            });
            
            await models.item.bulkCreate(initData.item,{
                transaction:t
            });
        });

        ctx.sendRes(shop, 0, '创建成功')

    } catch (err) {
        ctx.sendRes(null, -1, err.message);
    }

});

//刷新token
router.post('/token/refresh', async function (ctx, next) {
    try {
        let {
            body
        } = ctx.request;

        let { token, refreshToken } = await core.refreshToken(body.refreshToken);

        ctx.sendRes({
            token,
            refreshToken
        }, 0, '刷新Token成功');



    } catch (err) {
        ctx.sendRes(null, -1, err.message);
    }
});

//重置密码
router.post('/resetPassword', async function (ctx, next) {
    try {
        let {
            phone,
            smsCode,
            password
        } = ctx.request.body;

        let [invalid, msg] = new validate.Validator({
            phone,
            smsCode,
            password
        }, {
            'phone': [{
                name: 'required',
                msg: '手机号不能为空'
            },
            {
                name: 'isMobile',
                msg: '手机号不正确'
            }
            ],
            'smsCode': [{
                name: 'required',
                msg: '验证码不能为空'
            }],
            'password': [{
                name: 'required',
                msg: '密码不能为空'
            }, {
                name: 'isPassword',
                msg: '密码格式不正确'
            }]
        }).validate();

        if (invalid) throw new Error(msg);

        let redisSmsCode = await redis.getAsync(`sms_resetPassword_${phone}`);

        if (redisSmsCode !== smsCode) throw new Error('验证码不正确');

        let shopUser = await models.shop_user.findOne({
            where: {
                phone
            }
        });

        if (!shopUser) throw new Error('该用户不存在');

        password = await bcryptUtils.hash(password);

        await shopUser.update({
            password
        });

        ctx.sendRes(null, 0, '重置密码成功');
    } catch (err) {
        ctx.sendRes(null, -1, err.message);
    }
});

module.exports = router