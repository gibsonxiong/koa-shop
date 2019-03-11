const router = require('koa-router')();
const db = require('../db');
const {
  models
} = db;
const tokenMiddleware = require('../middlewares/token');
const utils = require('../utils');
const Promise = require('bluebird');
const flashbuyCtrl = require('../controllers/flashbuy');

router.prefix('/items')


function groupRows(rows, groupKey) {
  let result = [];
  let indexArr = {};   //key 为 row.id  value 为 数组下标
  let isNullRow = function (row) {
    return !(row && row.id != null)
  };

  rows.forEach(row => {
    let index;
    if ((index = indexArr[row.id]) != null) {
      if (isNullRow(row[groupKey])) return;
      result[index][groupKey].push(row[groupKey]);
    } else {
      if (isNullRow(row[groupKey])) {
        row[groupKey] = [];
      } else {
        row[groupKey] = [row[groupKey]];
      }
      result.push(row);
      indexArr[row.id] = result.length - 1;
    }

  });

  return result;
}

//商品列表
router.get('/', tokenMiddleware(false), async function (ctx) {
  try {
    let user = ctx.user;
    let query = ctx.query;
    let {
      categoryId,
      searchText,
      pageSize,
      pageIndex
    } = query;
    // let where = {};
    // let order = null;
    // if (categoryId) {
    //   where.categoryId = categoryId;
    // }
    // if (searchText) {
    //   where.name = {
    //     $like: `%${searchText}%`
    //   }

    //   //保存搜索历史
    //   if (user) {
    //     let [searchHistory, created] = await models.search_history.findCreateFind({
    //       defaults: {
    //         userId: user.id,
    //         keywords: searchText,
    //       },
    //       where: {
    //         userId: user.id
    //       }
    //     });

    //     if (!created) {
    //       let keywords = searchHistory.keywords.split(',');
    //       keywords.unshift(searchText);
    //       keywords = utils.uniqueArray(keywords).slice(0, 10).join(',');
    //       let res = searchHistory.update({
    //         keywords
    //       });

    //     }
    //   }

    // }

    // if (query.order == 'normal') {

    // } else if (query.order == 'sale') {
    //   order = [
    //     [
    //       [
    //         models.item_count,
    //         'saleCount',
    //         'DESC'
    //       ]
    //     ]
    //   ]
    // }
    // pageSize = Number(pageSize || 10);
    // let rows = await models.item.findAll({
    //   where,
    //   include: [{
    //     model: models.sku
    //   }, {
    //     model: models.item_count,
    //   }],
    //   order,
    //   limit: pageSize,
    //   offset: ((pageIndex || 1) - 1) * pageSize,
    // });

    // await Promise.each(rows, async row => {
    //   row.dataValues.imgList = row.imgList.split(',');

    //   let prices = row.dataValues.skus.map(item => item.price);
    //   row.dataValues.minPrice = prices.length === 0 ? 0 : Math.min(...prices);
    //   row.dataValues.maxPrice = prices.length === 0 ? 0 : Math.max(...prices);
    // });

    // ctx.sendRes(rows);


    pageSize = Number(pageSize || 10);
    query.order = query.order || 'normal';
    let limit = pageSize;
    let offset = Number(((pageIndex || 1) - 1) * pageSize);
    let where = [];
    if (searchText) {
      where.push(`\`item\`.\`name\` like '%${searchText}%'`);
    }
    if (categoryId) {
      where.push(`\`item\`.\`categoryId\` = ${categoryId}`);
    }
    where = where.join('and');
    let rows;
    if (query.order == 'normal') {
      rows = await db.query(`
      SELECT 
        \`item\`.*,
  
        \`skus\`.\`id\` AS \`skus.id\`,
        \`skus\`.\`itemId\` AS \`skus.itemId\`,
          \`skus\`.\`propvalueList\` AS \`skus.propvalueList\`,
        \`skus\`.\`propvalueTextList\` AS \`skus.propvalueTextList\`, 
        \`skus\`.\`quantity\` AS \`skus.quantity\`, 
        \`skus\`.\`price\` AS \`skus.price\`
      FROM 
        (SELECT * from (
        select

          \`item\`.\`id\`, \`item\`.\`name\`, \`item\`.\`desc\`, \`item\`.\`categoryId\`, \`item\`.\`imgList\`, \`item\`.\`propvalueList\`,\`item\`.\`disabled\`, \`item\`.\`detail\`,\`item\`.\`createTime\`,
          \`item_count\`.\`itemId\` AS \`item_count.itemId\`,
          \`item_count\`.\`saleCount\` AS \`item_count.saleCount\`, 
          \`item_count\`.\`viewCount\` AS \`item_count.viewCount\`,
          \`item_count\`.\`rateCount\` AS \`item_count.rateCount\`, 
          \`item_count\`.\`rateGoodCount\` AS \`item_count.rateGoodCount\`, 
          \`item_count\`.\`rateMiddleCount\` AS \`item_count.rateMiddleCount\`, 
          \`item_count\`.\`rateBadCount\` AS \`item_count.rateBadCount\`, 
          \`item_count\`.\`monthSaleCount\` AS \`item_count.monthSaleCount\`,
          \`item_count\`.\`rateGoodCount\`/\`item_count\`.\`rateCount\` as \`rateGoodRatio\`
  
        FROM \`item\` AS \`item\`
        LEFT JOIN \`item_count\` AS \`item_count\` ON \`item\`.\`id\` = \`item_count\`.\`itemId\`
  
        ${where ? `where ${where}` : ``}
  
        ) as \`a\`
        ORDER BY \`a\`.\`rateGoodRatio\` desc 
        LIMIT ${offset}, ${limit}
        ) 
          
        AS \`item\` 
        LEFT OUTER JOIN \`sku\` AS \`skus\` ON \`item\`.\`id\` = \`skus\`.\`itemId\` 
      `, {
          nest: true
        });
    } else if (query.order == 'sale') {
      rows = await db.query(`
    SELECT 
      \`item\`.*,

      \`skus\`.\`id\` AS \`skus.id\`,
      \`skus\`.\`itemId\` AS \`skus.itemId\`,
        \`skus\`.\`propvalueList\` AS \`skus.propvalueList\`,
      \`skus\`.\`propvalueTextList\` AS \`skus.propvalueTextList\`, 
      \`skus\`.\`quantity\` AS \`skus.quantity\`, 
      \`skus\`.\`price\` AS \`skus.price\`
    FROM 
      (SELECT 
      
        \`item\`.\`id\`, \`item\`.\`name\`, \`item\`.\`desc\`, \`item\`.\`categoryId\`, \`item\`.\`imgList\`, \`item\`.\`propvalueList\`,\`item\`.\`disabled\`, \`item\`.\`detail\`,\`item\`.\`createTime\`,
        \`item_count\`.\`itemId\` AS \`item_count.itemId\`,
        \`item_count\`.\`saleCount\` AS \`item_count.saleCount\`, 
        \`item_count\`.\`viewCount\` AS \`item_count.viewCount\`,
        \`item_count\`.\`rateCount\` AS \`item_count.rateCount\`, 
        \`item_count\`.\`rateGoodCount\` AS \`item_count.rateGoodCount\`, 
        \`item_count\`.\`rateMiddleCount\` AS \`item_count.rateMiddleCount\`, 
        \`item_count\`.\`rateBadCount\` AS \`item_count.rateBadCount\`, 
        \`item_count\`.\`monthSaleCount\` AS \`item_count.monthSaleCount\`

      FROM \`item\` AS \`item\`
      LEFT JOIN \`item_count\` AS \`item_count\` ON \`item\`.\`id\` = \`item_count\`.\`itemId\`

      ${where ? `where ${where}` : ``}

      ORDER BY \`item_count\`.\`saleCount\` desc 
      LIMIT ${offset}, ${limit}
      ) 
        
      AS \`item\` 
      LEFT OUTER JOIN \`sku\` AS \`skus\` ON \`item\`.\`id\` = \`skus\`.\`itemId\` 
    `, {
          nest: true
        });
    } else if (query.order == 'priceAsc' || query.order == 'priceDesc') {
      rows = await db.query(`
      SELECT 
        \`item\`.*,
  
        \`skus\`.\`id\` AS \`skus.id\`,
        \`skus\`.\`itemId\` AS \`skus.itemId\`,
          \`skus\`.\`propvalueList\` AS \`skus.propvalueList\`,
        \`skus\`.\`propvalueTextList\` AS \`skus.propvalueTextList\`, 
        \`skus\`.\`quantity\` AS \`skus.quantity\`, 
        \`skus\`.\`price\` AS \`skus.price\`
      FROM 
        (SELECT * from (
        select

          \`item\`.\`id\`, \`item\`.\`name\`, \`item\`.\`desc\`, \`item\`.\`categoryId\`, \`item\`.\`imgList\`, \`item\`.\`propvalueList\`,\`item\`.\`disabled\`, \`item\`.\`detail\`,\`item\`.\`createTime\`,
          \`item_count\`.\`itemId\` AS \`item_count.itemId\`,
          \`item_count\`.\`saleCount\` AS \`item_count.saleCount\`, 
          \`item_count\`.\`viewCount\` AS \`item_count.viewCount\`,
          \`item_count\`.\`rateCount\` AS \`item_count.rateCount\`, 
          \`item_count\`.\`rateGoodCount\` AS \`item_count.rateGoodCount\`, 
          \`item_count\`.\`rateMiddleCount\` AS \`item_count.rateMiddleCount\`, 
          \`item_count\`.\`rateBadCount\` AS \`item_count.rateBadCount\`, 
          \`item_count\`.\`monthSaleCount\` AS \`item_count.monthSaleCount\`,
          IFNULL((select MIN(\`sku\`.\`price\`) from \`sku\` as \`sku\` where \`sku\`.\`itemId\` = item.id),0) as \`itemPrice\`
  
        FROM \`item\` AS \`item\`
        LEFT JOIN \`item_count\` AS \`item_count\` ON \`item\`.\`id\` = \`item_count\`.\`itemId\`
  
        ${where ? `where ${where}` : ``}
  
        ) as \`a\`
        ORDER BY \`a\`.\`itemPrice\` ${query.order == 'priceAsc' ? 'asc' : 'desc'} 
        LIMIT ${offset}, ${limit}
        ) 
          
        AS \`item\` 
        LEFT OUTER JOIN \`sku\` AS \`skus\` ON \`item\`.\`id\` = \`skus\`.\`itemId\` 
      `, {
          nest: true
        });
    }

    let result = groupRows(rows, 'skus');

    result.forEach(row => {
      row.imgList = row.imgList.split(',');

      let prices = row.skus.map(item => item.price);
      row.minPrice = prices.length === 0 ? 0 : Math.min(...prices);
      row.maxPrice = prices.length === 0 ? 0 : Math.max(...prices);
      row.isNew = row.createTime >= utils.adjustDate(new Date(), 'd', -3);
    })

    ctx.sendRes(result);
  } catch (err) {
    ctx.sendRes(null, -1, err.message);
  }
});

//获取足迹列表
router.get('/footprints', tokenMiddleware(), async function (ctx) {
  try {
    let user = ctx.user;

    let rows = await models.footprint.findAll({
      where: {
        userId: user.id
      },
      order: [
        ['createTime', 'desc']
      ],
      include: [{
        model: models.item
      }]
    });

    ctx.sendRes(rows);
  } catch (err) {
    ctx.sendRes(null, -1, err.message);
  }
});

router.get('/:itemId', tokenMiddleware(false), async function (ctx) {
  try {
    let user = ctx.user;
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
    let flashbuy = await flashbuyCtrl.getFlashbuyInfo(row.flashbuyId, row.id);

    row.setDataValue('flashbuy',flashbuy);

    //记录足迹
    if (user) {
      let footprintRow = await models.footprint.findOne({
        where: {
          itemId,
          userId: user.id,
          createTime: {
            $gte: utils.getDayStartTime(),
            $lte: utils.getDayEndTime()
          }
        }
      });

      if (footprintRow) {
        footprintRow.update({
          createTime: new Date()
        });
      } else {
        footprintRow = await models.footprint.create({
          userId: user.id,
          itemId,
          itemImg: row.imgList[0],
          itemName: row.name,
          itemPrice: row.dataValues.minPrice
        });
      }

    }

    ctx.sendRes(row);
  } catch (err) {
    ctx.sendRes(null, -1, err.message);
  }
});



module.exports = router