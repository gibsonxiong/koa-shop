const router = require('koa-router')();
const db = require('../db');
const {
  models
} = db;
const adminToken = require('../middlewares/adminToken');

router.prefix('/categorys')

//获取所有分类
router.get('/', adminToken(), async function (ctx, next) {
  try{
    let shopUser = ctx.shopUser;

    let rows = await models.category.findAll({
      where:{
        shopId:shopUser.shopId
      },
      order:[
        ['parentId','asc'],
        ['sort','desc'],
        ['id','desc'],
      ]
    });

    ctx.sendRes(rows);
  }catch(err){
    ctx.sendRes(null,-1, err.message);
  }
})

router.post('/', async function (ctx) {
  try {
    let body = ctx.request.body;

    let row = await models.category.create({
      ...body
    });

    ctx.sendRes(row);
  } catch (err) {
    ctx.sendRes(null, -1, err.message);
  }
});

router.post('/:id', async function (ctx) {
  try {
    let {
      id
    } = ctx.params;
    let body = ctx.request.body;

    await models.category.update({
      ...body
    }, {
      where: {
        id,
      }
    });

    ctx.sendRes(null,0, '修改商品分类成功');
  } catch (err) {
    ctx.sendRes(null, -1, err.message);
  }
});

router.delete('/:id', async function (ctx) {
  try {
    let {
      id
    } = ctx.params;

    let rows = await models.category.findAll({
      where:{
        parentId:id
      }
    });

    if(rows.length > 0) throw new Error('删除失败（原因：分类存在下级，不能删除）');

    let number = await models.category.destroy({
      where:{
        id
      },
    });

    console.log(number)

    if(number === 0 ) throw new Error('删除失败');

    ctx.sendRes(null,0, '删除成功');
  } catch (err) {
    ctx.sendRes(null, -1, err.message);
  }
});



module.exports = router