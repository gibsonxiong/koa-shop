const router = require('koa-router')()
const {
  models
} = require('../db');
const tokenMiddleware = require('../middlewares/token');
const utils = require('../utils');

router.prefix('/flashbuy');

//抢购活动
router.get('/', async function (ctx, next) {
  try {
    let now = new Date();
    let rows = await models.flashbuy.findAll({
      where: {
        startTime: {
          $lte: utils.adjustDate( utils.getDayEndTime(now) , 'd', 1)
        },
        endTime: {
          $gte: now
        }
      },
      order: [
        ['startTime', 'asc']
      ]
    });

    ctx.sendRes(rows);
  } catch (err) {
    ctx.sendRes(null, -1, err.message);
  }
});

//某场抢购的商品
router.get('/items/:flashbuyId', async function (ctx, next) {
  try {
    let {flashbuyId} = ctx.params;

    let rows = await models.flashbuy_item.findAll({
      where: {
        flashbuyId,
      }
    });

    rows.forEach(row=>{
      row.setDataValue('progress', Number((row.soldCount/row.quantity * 100).toFixed(0)) );
    });

    ctx.sendRes(rows);
  } catch (err) {
    ctx.sendRes(null, -1, err.message);
  }
});

module.exports = router

