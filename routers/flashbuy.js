const router = require('koa-router')()
const {
  models
} = require('../db');
const tokenMiddleware = require('../middlewares/token');
const utils = require('../utils');
const flashbuyCtrl = require('../controllers/flashbuy');

router.prefix('/flashbuy');

//抢购活动列表
router.get('/', async function (ctx, next) {
  try {
    let now = new Date();
    let rows = await models.flashbuy.findAll({
      where: {
        publicTime: {
          $lte: now
        },
        endTime: {
          $gte: now
        }
      },
      order: [
        ['startTime', 'asc']
      ]
    });

    let temp = rows.slice();
    let current = temp.reverse().find(item => {
      return item.startTime <= now
    });

    let currentId = current ? current.id : null;

    ctx.sendRes({
      list: rows,
      currentId
    });
  } catch (err) {
    ctx.sendRes(null, -1, err.message);
  }
});

//当前抢购活动
router.get('/current', async function (ctx, next) {
  try {

    let current = await flashbuyCtrl.getCurrentFlashbuy();

    ctx.sendRes(current);
  } catch (err) {
    ctx.sendRes(null, -1, err.message);
  }
});

//某场抢购的商品
router.get('/items/:flashbuyId', async function (ctx, next) {
  try {
    let { flashbuyId } = ctx.params;

    let flash = await models.flashbuy.findById(flashbuyId);
    let rows = await models.flashbuy_item.findAll({
      where: {
        flashbuyId,
      }
    });

    let status = 0;
    let now = new Date();
    if (flash.startTime > now) {
      status = 0;
    } else if (flash.endTime > now) {
      status = 1;
    }

    rows.forEach(row => {
      row.setDataValue('progress', Math.ceil(row.soldCount / row.quantity * 100));

      row.setDataValue('status', status);
    });

    ctx.sendRes(rows);
  } catch (err) {
    ctx.sendRes(null, -1, err.message);
  }
});

module.exports = router

