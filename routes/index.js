const router = require('koa-router')();
const {
  models
} = require('../db');
const axios = require('axios');
const tokenMiddleware = require('../middlewares/token');
const {
  upload,
  getUploadPath
} = require('../utils/upload');
// const sharp = require('sharp');
const validate = require('../validate');

function genNickname() {
  return 'v_' + (+new Date());
}

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: '欢迎访问VueShop API'
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

    let user = await models.user.findOne({
      where: {
        phone
      }
    });

    if (user) throw new Error('该手机号已注册');

    let result = await models.user.create({
      phone,
      password,
      nickname: genNickname()
    });

    if (!result) throw new Error('注册失败');

    ctx.sendRes(null, 0, '恭喜！注册成功');
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

    ctx.sendRes(null, 0, '发送验证码成功');
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

    let user = await models.user.findOne({
      where: {
        phone
      }
    });

    if (!user) throw new Error('该用户不存在');

    await user.update({
      password
    });

    ctx.sendRes(null, 0, '重置密码成功');
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

let addressValidateConfig = {
  'name': [{
      name: 'required',
      msg: '收货人不能为空'
    }
  ],
  'phone': [{
    name: 'required',
    msg: '联系电话不能为空'
  },{
    name: 'isMobile',
    msg: '联系电话不正确'
  }],
  'provinceId': [{
    name: 'required',
    msg: '所在地区不能为空'
  }],
  'cityId': [{
    name: 'required',
    msg: '所在地区不能为空'
  }],
  'areaId': [{
    name: 'required',
    msg: '所在地区不能为空'
  }],
  'detailAddr': [{
    name: 'required',
    msg: '详细地址不能为空'
  }]
};

//新增地址
router.put('/address', tokenMiddleware(), async function (ctx, next) {
  try {
    let user = ctx.user;
    let body = ctx.request.body;

 
    let [invalid, msg] = new validate.Validator(body, addressValidateConfig).validate();

    if(invalid) throw new Error(msg);

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

    if(validate.isEmpty(addressId) ) throw new Error('找不到该地址');

    let [invalid, msg] = new validate.Validator(body, addressValidateConfig).validate();

    if(invalid) throw new Error(msg);

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
router.put('/upload', upload.array('img'), async function (ctx, next) {
  try {
    let files = ctx.req.files;
    files.forEach((file) => {
      file.src = getUploadPath(file.filename);
    });

    ctx.sendRes(files, 0, '上传成功');

  } catch (err) {
    ctx.sendRes(null, -1, err.message);
  }
});

//搜索联想
router.get('/suggest', async function (ctx, next) {
  try {
    let q = ctx.query.q;

    q = encodeURIComponent(q);

    let res = (await axios.get(`https://suggest.taobao.com/sug?code=utf-8&q=${q}`)).data;

    ctx.sendRes(res.result);
  } catch (err) {
    ctx.sendRes(null, -1, err.message);
  }
});

//用户搜索历史
router.get('/searchs', tokenMiddleware(false), async function (ctx, next) {
  try {
    let user = ctx.user;

    if (!user) return ctx.sendRes([]);

    let row = await models.search_history.findOne({
      where: {
        userId: user.id
      }
    });

    let searchs = row && row.keywords ? row.keywords.split(',') : [];

    ctx.sendRes(searchs);
  } catch (err) {
    ctx.sendRes(null, -1, err.message);
  }
});

//用户搜索历史
router.delete('/searchs', tokenMiddleware(), async function (ctx, next) {
  try {
    let user = ctx.user;

    let number = await models.search_history.destroy({
      where: {
        userId: user.id
      }
    });

    ctx.sendRes(null, 0, '删除搜索历史成功');
  } catch (err) {
    ctx.sendRes(null, -1, err.message);
  }
});

// //图片处理
// router.get('/img', async function (ctx, next) {
//   try {
//     let {quality = 100, width, height} = ctx.query;
//     let resizeOptions = {};
//     if(width){
//       resizeOptions.width = Number(width);
//     }
//     if(height){
//       resizeOptions.height = Number(height);
//     }
//     let data = await sharp('public/upload/temp/1551667088744-Lighthouse.jpg')
//       .resize(resizeOptions)
//       .jpeg({
//         quality: Number(quality)
//       })
//       .toBuffer()

//       ctx.type = 'jpg';
//       ctx.body = data;

//   } catch (err) {
//     ctx.sendRes(null, -1, err.message);
//   }
// });

module.exports = router