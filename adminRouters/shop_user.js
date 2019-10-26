const router = require('koa-router')();
const db = require('../db');
const {
  models
} = db;
const adminToken = require('../middlewares/adminToken');
const bcryptUtils = require('../bcrypt-utils');

router.prefix('/shop_users')

//
router.get('/', adminToken(), async function (ctx, next) {
  try{
    let { shopId} = ctx.shopUser;
    let rows = await models.shop_user.findAll({
      where:{
        shopId,
        shopRoleId:{$not:null}
      },
      order:[
        ['id','desc'],
      ]
    });

    ctx.sendRes(rows);
  }catch(err){
    ctx.sendRes(null,-1, err.message);
  }
})

//新增
router.post('/',adminToken(), async function (ctx) {
  try {
    let { shopId} = ctx.shopUser;
    let body = ctx.request.body;

    //加密
    body.password = await bcryptUtils.hash(body.password);

    let row = await models.shop_user.create({
      ...body,
      shopId
    });

    ctx.sendRes(row);
  } catch (err) {
    ctx.sendRes(null, -1, err.message);
  }
});

//修改
router.post('/:id',adminToken(), async function (ctx) {
  try {
    let { shopId} = ctx.shopUser;
    let { id } = ctx.params;
    let body = ctx.request.body;

    await models.shop_user.update({
      ...body
    }, {
      where: {
        id,
        shopId
      }
    });

    ctx.sendRes(null,0, '修改成功');
  } catch (err) {
    ctx.sendRes(null, -1, err.message);
  }
});

//删除
router.delete('/:id',adminToken(), async function (ctx) {
  try {
    let { shopId} = ctx.shopUser;
    let {id} = ctx.params;

    let number = await models.shop_user.destroy({
      where:{
        id,
        shopId
      },
    });

    if(number === 0 ) throw new Error('删除失败');

    ctx.sendRes(null,0, '删除成功');
  } catch (err) {
    ctx.sendRes(null, -1, err.message);
  }
});



module.exports = router