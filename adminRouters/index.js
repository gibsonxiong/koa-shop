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
            refreshToken
        }, 0, '登录成功')

    } catch (err) {
        ctx.sendRes(null, -1, err.message);
    }
});

router.get('/userInfo', adminToken(),async function (ctx, next) {
    try {
        let {shopUser} = ctx;

        let role = await models.shop_role.findOne({
            where: {
                id:shopUser.shopRoleId
            }
        });

        shopUser.dataValues.role = role;

        ctx.sendRes(shopUser, 0)

    } catch (err) {
        ctx.sendRes(null, -1, err.message);
    }

});

module.exports = router