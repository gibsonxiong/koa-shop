const router = require('koa-router')();
const {
  models
} = require('../db');
const axios = require('axios');
const tokenMiddleware = require('../middlewares/token');
const {upload, getUploadPath} = require('../utils/upload')


router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
});

//注册
router.post('/register', async function (ctx, next) {
  try {
    let {
      phone,
      smsCode,
      password
    } = ctx.request.body;

    if (!phone) throw new Error('手机号不能为空');
    if (!smsCode) throw new Error('验证码不能为空');
    if (!password) throw new Error('密码不能为空');

    let result = await models.user.insertOrUpdate({
      phone,
      password
    });

    if (!result) throw new Error('注册失败');

    ctx.sendRes(null, 0, '注册成功');
  } catch (err) {
    ctx.sendRes(null, -1, err.message);
  }
});

//发送验证码
router.post('/getSmsCode', async function (ctx, next) {
  try {
    let {
      phone
    } = ctx.request.body;

    if (!phone) throw new Error('手机号不能为空');

    ctx.sendRes(null, 0, '发送验证码成功');
  } catch (err) {
    ctx.sendRes(null, -1, err.message);
  }
});

//发送验证码
router.post('/login', async function (ctx, next) {
  try {
    let {
      phone,
      password
    } = ctx.request.body;

    if (!phone) throw new Error('手机号不能为空');
    if (!password) throw new Error('密码不能为空');

    let row = await models.user.findOne({
      where: {
        phone,
        password
      }
    });

    if (!row) throw new Error('账户或密码错误');

    ctx.sendRes({
      token: row.id
    }, 0, '登录成功')

  } catch (err) {
    ctx.sendRes(null, -1, err.message);
  }
});

//获取省市区
router.get('/regions', async function (ctx, next) {
  try {

    let rows = await models.region.findAll();

    ctx.sendRes(rows)

  } catch (err) {
    ctx.sendRes(null, -1, err.message);
  }
});

//获取用户地址列表
router.get('/address', tokenMiddleware(), async function (ctx, next) {
  try {
    let user = ctx.user;
    let rows = await models.user_addr.findAll({
      where: {
        userId: user.id
      }
    });

    ctx.sendRes(rows);

  } catch (err) {
    ctx.sendRes(null, -1, err.message);
  }
});

//获取用户地址信息
router.get('/address/:addressId', tokenMiddleware(), async function (ctx, next) {
  try {
    let user = ctx.user;
    let {
      addressId
    } = ctx.params;
    let row = await models.user_addr.findOne({
      where: {
        id: addressId,
        userId: user.id
      }
    });

    if (!row) throw new Error('获取用户地址信息失败');

    ctx.sendRes(row);

  } catch (err) {
    ctx.sendRes(null, -1, err.message);
  }
});

//新增地址
router.put('/address', tokenMiddleware(), async function (ctx, next) {
  try {
    let user = ctx.user;
    let body = ctx.request.body;

    //先移除其他默认
    await models.user_addr.update({
      isDefault: false
    }, {
      where: {
        isDefault: true
      }
    });

    let row = await models.user_addr.create({
      ...body,
      userId: user.id,
    });

    ctx.sendRes(row, 0, '添加地址成功');

  } catch (err) {
    ctx.sendRes(null, -1, err.message);
  }
});

//修改地址
router.post('/address/:addressId', tokenMiddleware(), async function (ctx, next) {
  try {
    let user = ctx.user;
    let {
      addressId
    } = ctx.params;
    let body = ctx.request.body;

    //先移除其他默认
    await models.user_addr.update({
      isDefault: false
    }, {
      where: {
        isDefault: true
      }
    });

    let row = await models.user_addr.update({
      ...body,
    }, {
      where: {
        userId: user.id,
        id: addressId
      }
    });

    ctx.sendRes(row, 0, '修改地址成功');

  } catch (err) {
    ctx.sendRes(null, -1, err.message);
  }
});

//修改地址
router.delete('/address/:addressId', tokenMiddleware(), async function (ctx, next) {
  try {
    let user = ctx.user;
    let {
      addressId
    } = ctx.params;

    let number = await models.user_addr.destroy({
      where: {
        userId: user.id,
        id: addressId
      }
    });

    if (number === 0) throw new Error('删除地址失败');

    ctx.sendRes(null, 0, '删除地址成功');

  } catch (err) {
    ctx.sendRes(null, -1, err.message);
  }
});


//获取物流信息
//https://www.kuaidi100.com/query?type=zhongtong&postid=75124660965586
router.get('/deliver', async function (ctx, next) {
  try {
    let {
      type,
      postid
    } = ctx.query;
    let res = (await axios.get(`https://www.kuaidi100.com/query`, {
      params: {
        type,
        postid
      }
    })).data;

    if (res.status != '200') throw new Error(res.message);

    ctx.sendRes({
      type,
      data: res.data
    });

  } catch (err) {
    ctx.sendRes(null, -1, err.message);
  }
});

//上传
router.put('/upload' , upload.array('img'), async function (ctx, next) {
  try {
    let files = ctx.req.files;
    files.forEach((file)=>{
      file.src = getUploadPath(file.filename);
    });
    
    ctx.sendRes(files, 0, '上传成功');

  } catch (err) {
    ctx.sendRes(null, -1, err.message);
  }
});

module.exports = router