const router = require('koa-router')();
const db = require('../db');
const {
  models
} = db;
const adminToken = require('../middlewares/adminToken');

router.prefix('/items')

//
router.get('/', adminToken(), async function (ctx, next) {
  try{
    let { shopId } = ctx.shopUser;
    let {pageIndex, pageSize} = ctx.query;

    let limit = Number(pageSize || 20);
    let offset = ((Number(pageIndex) || 1) - 1) * pageSize;

    let rows = await models.item.findAndCountAll({
      where:{
        shopId
      },
      include:[
        {model:models.category}
      ],
      order:[
        ['id','desc'],
      ],
      offset,
      limit
    });

    ctx.sendRes(rows);
  }catch(err){
    ctx.sendRes(null,-1, err.message);
  }
})

router.get('/:id', adminToken(), async function (ctx, next) {
  try{
    let { shopId } = ctx.shopUser;
    let { id } = ctx.params;

    let row = await models.item.find({
      where:{
        id,
        shopId
      },
      include:[
        {model:models.sku}
      ]
    });

    let propnames = [];
    let propvalues = [];
    row.propvalueList.split('|').forEach(item => {
      let pair = item.split(':');
      let propname = pair[0];
      let propvalueList = pair[1].split(',');

      propnames.push(Number(propname));
      propvalues.push(propvalueList.map(item=>Number(item)));
    });

    row.dataValues.propnames = propnames;
    row.dataValues.propvalues = propvalues;

    ctx.sendRes(row);
  }catch(err){
    ctx.sendRes(null,-1, err.message);
  }
})

//新增
router.post('/',adminToken(), async function (ctx) {
  try {
    let { shopId} = ctx.shopUser;
    let body = ctx.request.body;

    body.propvalueList = body.propnames.map((propnameId,index)=>{
      return propnameId + ':' + body.propvalues[index].join(',')
    }).join('|')
    let skus = body.skus

    let row = await models.item.create({
      ...body,
      shopId
    });

    //保存库存数据
    skus.forEach(item=>{
      item.itemId=row.id
      item.shopId=shopId
    });
    await models.sku.bulkCreate(skus);

    ctx.sendRes(row);
  } catch (err) {
    ctx.sendRes(null, -1, err.message);
  }
});

//修改
router.post('/:id',adminToken(), async function (ctx) {
  try {
    let { shopId} = ctx.shopUser;
    let { id } = ctx.params;
    let body = ctx.request.body;
    

    await models.item.update({
      ...body
    }, {
      where: {
        id,
        shopId
      }
    });

    //sku
    body.skus.forEach(async sku=>{
      await models.sku.update(sku,{
        fields:['price'],
        where:{
          id:sku.id
        }
      })
    })

    ctx.sendRes(null,0, '修改成功');
  } catch (err) {
    ctx.sendRes(null, -1, err.message);
  }
});

//删除
router.delete('/:id',adminToken(), async function (ctx) {
  try {
    let { shopId} = ctx.shopUser;
    let {id} = ctx.params;

    let number = await models.item.destroy({
      where:{
        id,
        shopId
      },
    });

    //库存数据
    await models.sku.destroy({
      where:{
        itemId:id,
        shopId
      },
    });

    if(number === 0 ) throw new Error('删除失败');

    ctx.sendRes(null,0, '删除成功');
  } catch (err) {
    ctx.sendRes(null, -1, err.message);
  }
});



module.exports = router