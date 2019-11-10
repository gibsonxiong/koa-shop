const router = require('koa-router')();
const {models} = require('../db');
const Promise = require('bluebird');
const utils = require('../utils');
const flashbuyCtrl = require('../controllers/flashbuy');
router.prefix('/categorys')

//获取一级分类
router.get('/', async function (ctx, next) {
  try{
    let id = ctx.params.id;
    let rows = await models.category.findAll({
      where:{
        parentId:null
      },
      order:[
        ['sort','desc'],
        ['id','asc']
      ]
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
      include:[
        {model:models.category}
      ],
      where:{
        parentId:id
      },
      order:[
        ['sort','desc'],
        ['id','asc']
      ]
    });

    ctx.sendRes(rows);
  }catch(err){
    ctx.sendRes(null,-1, err.message);
  }
})

router.get('/:categoryId/popular', async function (ctx, next) {
  try{
    let categoryId = ctx.params.categoryId;
    let category = await models.category.findById(categoryId,{
      include:[
        {model:models.category, attributes:['id']}
      ]
    });

    let ids = [category.id].concat(category.categories.map(item=>item.id));
    let items = await models.item.findAll({
      where:{
        categoryId:{
          $in:ids
        }
      },
      include:[
        {model:models.sku}
      ],
      limit:6
    });

    await Promise.each(items,async item => {
      item = item.dataValues;
      let prices = item.skus.map(item => item.price);
      item.minPrice = prices.length === 0 ? 0 : Math.min(...prices);
      item.maxPrice = prices.length === 0 ? 0 : Math.max(...prices);
      item.isNew = item.createTime >= utils.adjustDate(new Date(), 'd', -3);

      let flash = null;
      if(item.flashbuyId){
        flash = await flashbuyCtrl.getFlash(item.flashbuyId, item.id);
      }

      item.flash = flash;
    })

    let data = {
      ...category.dataValues,
      items
    }

    ctx.sendRes(data);
  }catch(err){
    ctx.sendRes(null,-1, err.message);
  }
})

module.exports = router
