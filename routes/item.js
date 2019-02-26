const router = require('koa-router')();
const {
  models
} = require('../db');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const tokenMiddleware = require('../middlewares/token');
const utils = require('../utils');

router.prefix('/items')

router.get('/', async function (ctx) {
  try {
    let {
      categoryId,
      searchText,
      pageSize,
      pageIndex
    } = ctx.query;
    let where = {};
    if (categoryId) {
      where.categoryId = categoryId;
    }
    if (searchText) {
      where.name = {
        $like: `%${searchText}%`
      }
    }
    pageSize = pageSize || 10;
    let rows = await models.item.findAll({
      where,
      include:[
        {model:models.sku}
      ],
      limit: pageSize,
      offset: ((pageIndex || 1) - 1 )* pageSize,
    });

    rows.forEach(row => {
      row.dataValues.imgList = row.imgList.split(',');
      
      let prices = row.dataValues.skus.map(item => item.price);
      row.dataValues.minPrice = prices.length === 0 ? 0 : Math.min(...prices);
      row.dataValues.maxPrice = prices.length === 0 ? 0 : Math.max(...prices);
    })
    ctx.sendRes(rows);
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
      order:[
        ['createTime','desc']
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

    row.dataValues.skus = skuRows;
    let prices = row.dataValues.skus.map(item => item.price);
    row.dataValues.minPrice = prices.length === 0 ? 0 : Math.min(...prices);
    row.dataValues.maxPrice = prices.length === 0 ? 0 : Math.max(...prices);

    //记录足迹
    if (user) {
      let footprintRow = await models.footprint.findOne({
        where:{
          itemId,
          userId:user.id,
          createTime: {
            $gte:utils.getDayStartTime(),
            $lte:utils.getDayEndTime()
          }
        }
      });

      if(footprintRow){
        footprintRow.update({
          createTime:new Date()
        });
      }else{
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