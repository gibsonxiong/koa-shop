const router = require('koa-router')();
const {models} = require('../db');

router.prefix('/categorys')

//获取一级分类
router.get('/', async function (ctx, next) {
  try{
    let id = ctx.params.id;
    let rows = await models.category.findAll({
      where:{
        parentId:null
      }
    });

    ctx.sendRes(rows);
  }catch(err){
    ctx.sendRes(null,-1, err.message);
  }
})

router.get('/:categoryId', async function (ctx, next) {
  try{
    let id = ctx.params.categoryId;
    let rows = await models.category.findAll({
      where:{
        parentId:id
      }
    });

    ctx.sendRes(rows);
  }catch(err){
    ctx.sendRes(null,-1, err.message);
  }
})


module.exports = router
