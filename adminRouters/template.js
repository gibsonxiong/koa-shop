const router = require('koa-router')();
const db = require('../db');
const {
  models
} = db;
const adminToken = require('../middlewares/adminToken');

router.prefix('/templates')

//
router.get('/', adminToken(), async function (ctx, next) {
  try{
    let { shopId } = ctx.shopUser;
    let {pageIndex, pageSize} = ctx.query;

    let limit = Number(pageSize || 20);
    let offset = ((Number(pageIndex) || 1) - 1) * pageSize;

    let rows = await models.template.findAndCountAll({
      where:{
        shopId
      },
      order:[
        ['id','desc'],
      ],
      offset,
      limit,
      distinct: true
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

    let row = await models.template.create({
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

    await models.template.update({
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

    let number = await models.template.destroy({
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