const router = require('koa-router')();
const db = require('../db');
const {
  models
} = db;
const tokenMiddleware = require('../middlewares/token');
const utils = require('../utils');
const dbUtils = require('../utils/db-utils');
const Promise = require('bluebird');
const flashbuyCtrl = require('../controllers/flashbuy');

router.prefix('/items')


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

    pageSize = Number(pageSize || 10);
    query.order = query.order || 'normal';
    let limit = pageSize;
    let offset = Number(((pageIndex || 1) - 1) * pageSize);
    let where = [];
    if (searchText) {
      where.push(`\`item\`.\`name\` like '%${searchText}%'`);
    }
    if (categoryId) {
      let category = await models.category.findById(categoryId,{
        include:[
          {model:models.category, attributes:['id']}
        ]
      });
  
      let ids = [category.id].concat(category.categories.map(item=>item.id));
      where.push(`\`item\`.\`categoryId\` in (${ids.join(',')})`);
    }
    where = where.join('and');
    let rows;
    //综合排序
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

          \`item\`.\`id\`, \`item\`.\`name\`, \`item\`.\`desc\`, \`item\`.\`categoryId\`, \`item\`.\`imgList\`, \`item\`.\`propvalueList\`,\`item\`.\`disabled\`, \`item\`.\`detail\`,\`item\`.\`createTime\`,\`item\`.\`flashbuyId\`,
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
    } 
    //销量排序
    else if (query.order == 'sale') {
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
      
        \`item\`.\`id\`, \`item\`.\`name\`, \`item\`.\`desc\`, \`item\`.\`categoryId\`, \`item\`.\`imgList\`, \`item\`.\`propvalueList\`,\`item\`.\`disabled\`, \`item\`.\`detail\`,\`item\`.\`createTime\`,\`item\`.\`flashbuyId\`,
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
    } 
    //价格
    else if (query.order == 'priceAsc' || query.order == 'priceDesc') {
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

          \`item\`.\`id\`, \`item\`.\`name\`, \`item\`.\`desc\`, \`item\`.\`categoryId\`, \`item\`.\`imgList\`, \`item\`.\`propvalueList\`,\`item\`.\`disabled\`, \`item\`.\`detail\`,\`item\`.\`createTime\`,\`item\`.\`flashbuyId\`,
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

    let result = dbUtils.groupRows(rows, 'skus');

    await Promise.each(result,async row => {
      row.imgList = row.imgList.split(',')
      let prices = row.skus.map(item => item.price);
      row.minPrice = prices.length === 0 ? 0 : Math.min(...prices);
      row.maxPrice = prices.length === 0 ? 0 : Math.max(...prices);
      row.isNew = row.createTime >= utils.adjustDate(new Date(), 'd', -3);

      let flash = null;
      if(row.flashbuyId){
        flash = await flashbuyCtrl.getFlash(row.flashbuyId, row.id);
      }

      row.flash = flash;
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