const router = require('koa-router')();
const db = require('../db');
const {
  models
} = db;
const tokenMiddleware = require('../middlewares/token');
const Promise = require('bluebird');
const axios = require('axios');

router.prefix('/orders');

function genOrderNo() {
  var outTradeNo = ""; //订单号
  for (var i = 0; i < 6; i++) //6位随机数，用以加在时间戳后面。
  {
    outTradeNo += Math.floor(Math.random() * 10);
  }
  return new Date().getTime() + outTradeNo;
}

//订单列表
router.get('/', tokenMiddleware(), async function (ctx, next) {
  try {
    let user = ctx.user;
    let {
      status
    } = ctx.query;
    let where = {
      userId: user.id
    };

    if (status) {
      where.status = status
    }

    let rows = await models.order.findAll({
      where,
      include: [{
        model: models.order_item
      }]
    });

    ctx.sendRes(rows);
  } catch (err) {
    ctx.sendRes(null, -1, err.message);
  }
});

//订单信息
router.get('/:orderId', tokenMiddleware(), async function (ctx, next) {
  try {
    let user = ctx.user;
    let {orderId} = ctx.params;

    let rows = await models.order.findOne({
      where:{
        id:orderId,
        userId: user.id,
      },
      include: [{
        model: models.order_item
      }]
    });

    ctx.sendRes(rows);
  } catch (err) {
    ctx.sendRes(null, -1, err.message);
  }
});

//建立订单（不保存数据库）
router.post('/build', tokenMiddleware(), async function (ctx, next) {
  try {
    let user = ctx.user;
    let {
      params
    } = ctx.request.body;
    let {
      itemParams,
      addressId,
      couponId
    } = params;

    //地址
    let address;
    if (addressId) {
      address = await models.user_addr.findById(addressId);
    } else {
      address = await models.user_addr.findOne({
        where: {
          isDefault: true
        }
      });
    }

    //订单商品
    let itemFee = 0;
    let itemCount = 0;
    let postFee = 0;
    let orderItems = [];
    let deductPrice = 0;
    let orderFee = 0;

    await Promise.each(itemParams, async param => {
      let {
        itemId,
        skuId,
        quantity
      } = param;

      let item = await models.item.findById(itemId);
      let sku = await models.sku.findById(skuId);

      itemFee += sku.price * quantity;
      itemCount += quantity;

      item.setDataValue('imgList', item.imgList.split(','));
      orderItems.push({
        item,
        sku,
        quantity
      })
    });

    //优惠券
    let couponList = await models.user_coupon.findAll({
      where: {
        userId: user.id,
        used: false
      },
      include: [{
        model: models.coupon,
        where: {
          limitPrice: {
            $lte: itemFee + postFee
          },
          endTime: {
            $gte: Date.now()
          }
        }
      }]
    });
    //优惠券减免
    let coupon;
    if (couponId) {
      coupon = couponList.find(item => item.id == couponId);
      deductPrice = coupon.coupon.deductPrice;
    }

    orderFee = itemFee - deductPrice;

    let order = {
      address,
      itemFee,
      itemCount,
      postFee,
      deductPrice,
      orderFee,
      orderItems,
      couponList,
      coupon
    }

    ctx.sendRes(order);
  } catch (err) {
    ctx.sendRes(null, -1, err.message);
  }
});

//创建订单
router.post('/create', tokenMiddleware(), async function (ctx, next) {
  try {
    let user = ctx.user;
    let {
      params
    } = ctx.request.body;
    let {
      itemParams,
      addressId,
      couponId,
      remark
    } = params;

    //地址
    let address;
    if (addressId) {
      address = await models.user_addr.findById(addressId);
    } else {
      address = await models.user_addr.findOne({
        where: {
          isDefault: true
        }
      });
    }

    //订单商品
    let itemFee = 0;
    let itemCount = 0;
    let postFee = 0;
    let orderItems = [];
    let deductPrice = 0;
    let orderFee = 0;

    await Promise.each(itemParams, async param => {
      let {
        itemId,
        skuId,
        quantity
      } = param;

      let item = await models.item.findById(itemId);
      let sku = await models.sku.findById(skuId);

      itemFee += sku.price * quantity;
      itemCount += quantity;

      item.setDataValue('imgList', item.imgList.split(','));
      orderItems.push({
        item,
        sku,
        quantity
      })
    });

    //优惠券
    let couponList = await models.user_coupon.findAll({
      where: {
        userId: user.id,
        used: false
      },
      include: [{
        model: models.coupon,
        where: {
          limitPrice: {
            $lte: itemFee + postFee
          },
          endTime: {
            $gte: Date.now()
          }
        }
      }]
    });
    //优惠券减免
    let coupon;
    if (couponId != '' && couponId != null) {
      coupon = couponList.find(item => item.id == couponId);
      deductPrice = coupon.coupon.deductPrice;

      if (!coupon) throw new Error('该优惠券不适用');
    } else {
      couponId = undefined; //处理空字符串不能插入问题
    }

    orderFee = itemFee - deductPrice;

    //开启事务
    await db.transaction(async (t) => {
      //主订单
      let orderRow = await models.order.create({
        userId: user.id,
        orderNo: genOrderNo(),
        status: '1',
        title: `商品订单(${itemCount}件)`,
        receiverName: address.name,
        receiverPhone: address.phone,
        receiverProvince: address.province,
        receiverCity: address.city,
        receiverArea: address.area,
        receiverDetailAddr: address.detailAddr,
        remark: remark,
        itemCount,
        itemFee,
        postFee,
        orderFee,
        discountFee: deductPrice,
        userCouponId: couponId
      }, {
        transaction: t
      });

      //购物车清除
      let  shopcartIds = itemParams.map(item=>item.shopcartId).filter(item=>!!item);
      if(shopcartIds.length > 0){
        let num = await models.shopcart.destroy( {
          where: {
            id: {
              $in:shopcartIds
            },
            userId:user.id
          },
          transaction: t
        });

      }

      //更新优惠券状态
      if (couponId) {
        let [num] = await models.user_coupon.update({
          used: true
        }, {
          where: {
            id: couponId,
            used: false
          },
          transaction: t
        });

        if (num === 0) throw new Error('使用优惠券出错');
      }

      //子订单插入数据
      let orderItemData = orderItems.map(orderItem => {
        return {
          orderId: orderRow.id,
          itemImg: orderItem.item.getDataValue('imgList')[0],
          itemId: orderItem.item.id,
          itemName: orderItem.item.name,
          itemPropvalues: orderItem.sku.propvalueTextList,
          itemPrice: orderItem.sku.price,
          quantity: orderItem.quantity
        }
      });

      let orderItemRows = await models.order_item.bulkCreate(orderItemData, {
        transaction: t
      });

      ctx.sendRes({
        orderId: orderRow.id
      }, 0, '订单创建成功');
    });

  } catch (err) {
    ctx.sendRes(null, -1, err.message);
  }
});

//支付订单
router.post('/:orderId/pay', tokenMiddleware(), async function (ctx, next) {
  try {
    let user = ctx.user;
    let {
      orderId
    } = ctx.params;

    //模拟支付结果回调
    setTimeout(async () => {
      try {

        let res = await axios.post(`http://localhost:3001/orders/${orderId}/payCallback`, {
          result: true
        }, {
          headers: ctx.headers
        });

      } catch (err) {
        console.log(err);
      }

    }, 3000);

    ctx.sendRes(null, 0, '');
  } catch (err) {
    ctx.sendRes(null, -1, err.message);
  }
});

//支付订单回调
router.post('/:orderId/payCallback', tokenMiddleware(), async function (ctx, next) {
  try {
    let user = ctx.user;
    let {
      orderId
    } = ctx.params;


    let [num] = await models.order.update({
      status: '2',
      payTime:Date.now()
    }, {
      where: {
        id: orderId,
        userId: user.id
      }
    });

    if (num === 0) throw new Error('该订单不存在');

    ctx.sendRes(null, 0, '');
  } catch (err) {
    ctx.sendRes(null, -1, err.message);
  }
});

//订单支付状态
router.get('/:orderId/orderPayStatus', tokenMiddleware(), async function (ctx, next) {
  try {
    let user = ctx.user;
    let {
      orderId
    } = ctx.params;

    let row = await models.order.findOne({
      where: {
        id: orderId,
        userId: user.id
      }
    });

    if (!row) throw new Error('该订单不存在');

    let result = row.status != '1';

    ctx.sendRes({
      result
    }, 0, '');
  } catch (err) {
    ctx.sendRes(null, -1, err.message);
  }
});

//提醒发货
router.post('/:orderId/remindDeliver', tokenMiddleware(), async function (ctx, next) {
  try {
    let {
      orderId
    } = ctx.params;

    //todo:一日一次

    ctx.sendRes(null, 0, '提醒发货成功');
  } catch (err) {
    ctx.sendRes(null, -1, err.message);
  }
});

//发货(商家用)
router.post('/:orderId/deliver', async function (ctx, next) {
  try {
    let {
      orderId
    } = ctx.params;


    let [num] = await models.order.update({
      status: '3',
      deliverTime:Date.now()
    },{
      where: {
        id: orderId
      }
    });

    if (num === 0) throw new Error('该订单不存在');

    ctx.sendRes(null, 0, '订单发货成功');
  } catch (err) {
    ctx.sendRes(null, -1, err.message);
  }
});

//确认收货
router.post('/:orderId/confirmReceive', tokenMiddleware(), async function (ctx, next) {
  try {
    let user = ctx.user;
    let {
      orderId
    } = ctx.params;

    let [num] = await models.order.update({
      status: '4',
      endTime:Date.now()
    },{
      where: {
        id: orderId,
        userId:user.id
      }
    });

    if (num === 0) throw new Error('该订单不存在');

    ctx.sendRes(null, 0, '确认收货成功');
  } catch (err) {
    ctx.sendRes(null, -1, err.message);
  }
});

//取消订单
router.post('/:orderId/cancel', tokenMiddleware(), async function (ctx, next) {
  try {
    let user = ctx.user;
    let {
      orderId
    } = ctx.params;
    let {cancelReason} = ctx.request.body;

    let [num] = await models.order.update({
      status: '9',
      endTime:Date.now(),
      cancelReason
    },{
      where: {
        id: orderId,
        userId:user.id
      }
    });

    if (num === 0) throw new Error('该订单不存在');

    ctx.sendRes(null, 0, '取消订单成功');
  } catch (err) {
    ctx.sendRes(null, -1, err.message);
  }
});

//删除订单
router.delete('/:orderId', tokenMiddleware(), async function (ctx, next) {
  try {
    let user = ctx.user;
    let {
      orderId
    } = ctx.params;

    //todo:判断订单状态，符不符合删除条件

    let num = await models.order.destroy({
      where: {
        id: orderId,
        userId:user.id
      }
    });

    //todo:子订单删除

    if (num === 0) throw new Error('该订单不存在');

    ctx.sendRes(null, 0, '删除订单成功');
  } catch (err) {
    ctx.sendRes(null, -1, err.message);
  }
});

//评价订单
router.put('/:orderId/rate', tokenMiddleware(), async function (ctx, next) {
  try {
    let user = ctx.user;
    let {
      orderId
    } = ctx.params;

    let num = await models.order.destroy({
      where: {
        id: orderId,
        userId:user.id
      }
    });

    if (num === 0) throw new Error('该订单不存在');

    ctx.sendRes(null, 0, '删除订单成功');
  } catch (err) {
    ctx.sendRes(null, -1, err.message);
  }
});

module.exports = router;