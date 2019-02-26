const router = require('koa-router')();
const {
  models
} = require('../db');
const tokenMiddleware = require('../middlewares/token');
const Promise  = require('bluebird')
router.prefix('/rates');


//评价列表
router.get('/', tokenMiddleware(), async function (ctx, next) {
  try {
    let user = ctx.user;
    let rows = await models.rate.findAll({
      where: {
        userId: user.id
      },
      include:[
        {model:models.user}
      ]
    });

    ctx.sendRes(rows);
  } catch (err) {
    ctx.sendRes(null, -1, err.message);
  }
});

//商品评价列表
router.get('/items/:itemId', tokenMiddleware(), async function (ctx, next) {
  try {
    let user = ctx.user;
    let {itemId} = ctx.params;

    let rows = await models.rate.findAll({
      where: {
        userId: user.id,
        itemId
      },
      include:[
        {model:models.user}
      ]
    });

    rows.forEach(row=>{
      row.setDataValue('rateImgList', row.rateImgList ? row.rateImgList.split(',') : []);
    });

    ctx.sendRes(rows);
  } catch (err) {
    ctx.sendRes(null, -1, err.message);
  }
});

//评价详情
router.get('/:rateId', tokenMiddleware(), async function (ctx, next) {
  try {
    let user = ctx.user;
    let {rateId} = ctx.params;
    let row = await models.rate.findOne({
      where: {
        id:rateId,
        userId: user.id
      },
      include:[
        {model:models.user}
      ]
    });

    if(!row) throw new Error('该评价不存在');

    row.setDataValue('rateImgList', row.rateImgList.split(','));

    ctx.sendRes(row);
  } catch (err) {
    ctx.sendRes(null, -1, err.message);
  }
});

//评价
router.put('/', tokenMiddleware(), async function (ctx, next) {
  try {
    let user = ctx.user;

    /*
      {
        orderId,
        data:[{
          orderItemId,
          itemId,
          score:4,
          content:'不错',
          rateImgList
        }]
      }
    */
    let params
     = ctx.request.body;
    let createData = [];

    await Promise.each(params.data, async p => {
      let orderItem = await models.order_item.findById(p.orderItemId);

      createData.push({
        orderId:params.orderId,
        orderItemId:p.orderItemId,
        userId: user.id,
        itemId:p.itemId,
        itemImg:orderItem.itemImg,
        itemName:orderItem.itemName,
        itemPropvalues:orderItem.itemPropvalues,
        itemPrice:orderItem.itemPrice,
        score:p.score,
        content:p.content,
        rateImgList:p.rateImgList ? p.rateImgList.join(',') : undefined
      });
    });
    

    let rows = await models.rate.bulkCreate(createData);

    ctx.sendRes(rows, 0, '评价成功');
  } catch (err) {
    ctx.sendRes(null, -1, err.message);
  }
});

module.exports = router