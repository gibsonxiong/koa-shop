const router = require('koa-router')();
const db = require('../db');
const {
  models
} = db;
const utils = require('../utils');
const Promise = require('bluebird');
const flashbuyCtrl = require('../controllers/flashbuy');
const dbUtils = require('../utils/db-utils');

router.prefix('/category');


router.get('/', async function (ctx) {
  try {
    let user = ctx.user;
    let query = ctx.query;
    let {
      categoryId,
      searchText,
      pageSize,
      pageIndex
    } = query;

    ctx.sendRes(result);
  } catch (err) {
    ctx.sendRes(null, -1, err.message);
  }
});


router.get('/:id', async function (ctx) {
  try {
    let {
      itemId
    } = ctx.params;

    let row = await models.item.findById(itemId);

    if (!row) throw new Error('没找到数据');

    row.dataValues.imgList = row.imgList.split(',');
    let propnames = [];
    let propvalues = [];
    row.propvalueList.split('|').forEach(item => {
      let pair = item.split(':');
      let propname = pair[0];
      let propvalueList = pair[1].split(',');

      propnames.push(propname);
      propvalues.push(propvalueList);
    });

    propnames = await models.propname.findAll({
      where: {
        id: {
          $in: propnames
        }
      }
    });

    propvalues = await Promise.all(
      propvalues.map((item) => {
        return models.propvalue.findAll({
          where: {
            id: {
              $in: item
            }
          }
        })
      })
    );

    row.dataValues.propnames = propnames;
    row.dataValues.propvalues = propvalues;


    //sku信息
    let skuRows = await models.sku.findAll({
      where: {
        itemId
      }
    });

    skuRows.forEach(sku => {
      let names = [];
      let values = [];
      sku.propvalueList.split("|").forEach(item => {
        names.push(item.split(':')[0]);
        values.push(item.split(':')[1]);
      });
      sku.dataValues.propnames = names;
      sku.dataValues.propvalues = values;
    });

    //商品统计表
    let itemCount = await models.item_count.findOne({
      where: {
        itemId
      }
    });

    row.dataValues.skus = skuRows;
    let prices = row.dataValues.skus.map(item => item.price);
    row.dataValues.minPrice = prices.length === 0 ? 0 : Math.min(...prices);
    row.dataValues.maxPrice = prices.length === 0 ? 0 : Math.max(...prices);
    row.dataValues.postFee = 0;
    row.dataValues.saleCount = itemCount ? itemCount.saleCount : 0;
    row.dataValues.rateCount = itemCount ? itemCount.rateCount : 0;

    //限时抢购
    let flashbuy = await flashbuyCtrl.getFlash(row.flashbuyId, row.id);

    row.setDataValue('flashbuy',flashbuy);

    ctx.sendRes(row);
  } catch (err) {
    ctx.sendRes(null, -1, err.message);
  }
});



module.exports = router