const router = require('koa-router')();
const {models} = require('../db');
const tokenMiddleware = require('../middlewares/token');
const Promise = require('bluebird');

router.prefix('/shopcarts');

//购物车列表
router.get('/', tokenMiddleware(), async function (ctx, next) {
  try {
    let user = ctx.user;
    let rows = await models.shopcart.findAll({
      where: {
        userId: user.id
      },
      include: [{
        model: models.item
      }, {
        model: models.sku
      }]
    });

    await Promise.each(rows, async row => {
      row.item.setDataValue('imgList', row.item.imgList.split(','));
      // let propvalues = row.sku.propvalueList.split('|').map(item => item.split(':')[1]);
      // let values = await models.propvalue.findAll({
      //   where: {
      //     id: propvalues
      //   },
      //   raw: true
      // })
      // row.sku.setDataValue('propDesc', values.map(value=>value.name).join(';'));
    });

    ctx.sendRes(rows);
  } catch (err) {
    ctx.sendRes(null, -1, err.message);
  }
});

//加入购物车
router.put('/', tokenMiddleware(), async function (ctx, next) {
  try {
    let user = ctx.user;
    let {
      itemId,
      skuId,
      quantity
    } = ctx.request.body;

    let row = await models.shopcart.findOne({
      where:{
        userId: user.id,
        itemId,
        skuId,
      }
    });


    //该商品之前不在购物车
    if(row){
      await row.increment('quantity',{
        by:quantity
      });
    }else{
      row = await models.shopcart.create({
        userId: user.id,
        itemId,
        skuId,
        quantity
      });

      if (!row) throw new Error('加入购物车失败');
    }

    ctx.sendRes(null, 0, '加入购物车成功');
  } catch (err) {
    ctx.sendRes(null, -1, err.message);
  }
});

//删除购物车
router.delete('/:shopcartId', tokenMiddleware(), async function (ctx, next) {
  try {
    let user = ctx.user;
    let {
      shopcartId
    } = ctx.params;

    let number = await models.shopcart.destroy({
      where: {
        id: shopcartId,
        userId: user.id
      }
    });

    if (number === 0) throw new Error('删除购物车失败');

    ctx.sendRes(null, 0, '删除购物车成功');
  } catch (err) {
    ctx.sendRes(null, -1, err.message);
  }
});

//更新购物车
router.post('/:shopcartId', tokenMiddleware(), async function (ctx, next) {
  try {
    let user = ctx.user;
    let {
      shopcartId
    } = ctx.params;
    let {
      quantity
    } = ctx.request.body;

    let updatedValue = {};

    if (quantity != null) {
      updatedValue.quantity = quantity;
    }

    let [number] = await models.shopcart.update(updatedValue, {
      where: {
        id: shopcartId,
        userId: user.id
      }
    });

    if (number === 0) throw new Error('更新购物车失败');

    ctx.sendRes(null, 0, '更新购物车成功');
  } catch (err) {
    ctx.sendRes(null, -1, err.message);
  }
});

module.exports = router