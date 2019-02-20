const router = require('koa-router')();
const {models} = require('../db');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

router.prefix('/items')

router.get('/', async function (ctx) {
  try{
    let { categoryId, searchText} = ctx.query;
    let where = {};
    if(categoryId){
      where.categoryId = categoryId;
    }
    if(searchText){
      where.name = {
        [Op.like]:`%${searchText}%`
      }
    }
    let rows = await models.item.findAll({
      where
    });

    rows.forEach(row=>{
      row.dataValues.imgList = row.imgList.split(',');
    })
    ctx.sendRes(rows);
  }catch(err){
    ctx.sendRes(null,-1, err.message);
  }
});

router.get('/:itemId', async function (ctx) {
  try{
    let { itemId } = ctx.params;

    let row = await models.item.findById(itemId);

    if(!row) throw new Error('没找到数据');

    row.dataValues.imgList = row.imgList.split(',');
    let propnames = [];
    let propvalues = [];
    row.propvalueList.split('|').forEach(item=>{
      let pair = item.split(':');
      let propname = pair[0];
      let propvalueList = pair[1].split(',');

      propnames.push(propname);
      propvalues.push(propvalueList);
    });

    propnames = await models.propname.findAll({
      where:{
        id:{
          [Op.in]:propnames
        }
      }
    });

    propvalues = await Promise.all(
      propvalues.map((item)=>{
        return models.propvalue.findAll({
          where:{
            id:{
              [Op.in]:item
            }
          }
        })
      })
    );

    row.dataValues.propnames= propnames;
    row.dataValues.propvalues= propvalues;

    //sku信息
    let skuRows = await models.sku.findAll({
      where:{
        itemId
      }
    });

    skuRows.forEach(sku=>{
      let names = [];
      let values = [];
      sku.propvalueList.split("|").forEach(item=>{
        names.push(item.split(':')[0]);
        values.push(item.split(':')[1]);
      });
      sku.dataValues.propnames = names;
      sku.dataValues.propvalues = values;
    });

    row.dataValues.skus= skuRows;

    ctx.sendRes(row);
  }catch(err){
    ctx.sendRes(null,-1, err.message);
  }
});

module.exports = router
