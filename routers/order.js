const router = require('koa-router')();
const db = require('../db');
const {
  models
} = db;
const tokenMiddleware = require('../middlewares/token');
const Promise = require('bluebird');
const axios = require('axios');
const itemCountCtrl = require('../controllers/item_count');
const orderCtrl = require('../controllers/order');
const config = require('../config');
const validate = require('../validate');
const flashbuyCtrl  = require('../controllers/flashbuy');

router.prefix('/orders');

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
      }],
      order: [
        ['createTime', 'desc']
      ]
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
    let {
      orderId
    } = ctx.params;

    let rows = await models.order.findOne({
      where: {
        id: orderId,
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
      address = await models.user_addr.findOne({
        where: {
          id:addressId,
          userId: user.id
        }
      });
    }

    //没有选地址，使用默认地址
    if (!address) {
      address = await models.user_addr.findOne({
        where: {
          userId: user.id,
          isDefault: true
        }
      });
    }

    //没有默认地址,选择第一个地址
    if (!address) {
      address = await models.user_addr.findOne({
        where: {
          userId: user.id
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

      //限时抢购
      let flash = await flashbuyCtrl.getFlash(item.flashbuyId, itemId, skuId);

      //合计
      let price = flash && flash.status == 1 ? flash.sku.flashPrice : sku.price;
      itemFee += price * quantity;
      itemCount += quantity;

      item.setDataValue('imgList', item.imgList.split(','));
      orderItems.push({
        item,
        sku,
        flash,
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

      if (!coupon) throw new Error('该优惠券不存在或者不适用');

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

    let res = await orderCtrl.create(user.id, params);

    ctx.sendResObject(res);

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

        let res = await axios.post(`http://localhost:${config.port}/orders/${orderId}/payCallback`, {
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


    let order = await models.order.findOne({
      where: {
        id:orderId,
        userId: user.id
      },
      include: [{
        model: models.order_item
      }]
    });

    if (!order) throw new Error('该订单不存在');
    if (order.status != '1') throw new Error('订单状态异常');

    await order.update({
      status: '2',
      payTime: Date.now()
    });

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
    let {
      deliverCompany,
      deliverPostId
    } = ctx.request.body;

    let [invalid, msg] = new validate.Validator({
      deliverCompany,
      deliverPostId
    }, {
        'deliverCompany': [{
          name: 'required',
          msg: '物流公司不能为空'
        }],
        'deliverPostId': [{
          name: 'required',
          msg: '物流单号不能为空'
        }],
      }).validate();

    if (invalid) throw new Error(msg);

    let order = await models.order.findById(orderId, {
      include: [{
        model: models.order_item
      }]
    });

    if (!order) throw new Error('该订单不存在');
    if (order.status != '2') throw new Error('订单状态异常');

    await order.update({
      status: '3',
      deliverCompany,
      deliverPostId,
      deliverTime: Date.now()
    });

    ctx.sendRes(null, 0, '订单发货成功');
  } catch (err) {
    ctx.sendRes(null, -1, err.message);
  }
});

router.get('/:orderId/getDeliver', tokenMiddleware(), async function (ctx, next) {
  try {
    let user = ctx.user;
    let {
      orderId
    } = ctx.params;

    let order = await models.order.findOne({
      where: {
        id:orderId,
        userId: user.id
      }

    });

    if (!order) throw new Error('该订单不存在');

    let firstOrderItem = await models.order_item.findOne({
      where: {
        orderId
      }
    });

    let deliverCompany = await models.deliver.findOne({
      where: {
        code: order.deliverCompany
      }
    });

    let res = (await axios.get(`https://www.kuaidi100.com/query`, {
      params: {
        type: order.deliverCompany,
        postid: order.deliverPostId
      }
    })).data;

    let detailData = [];
    if (res.status == '200') {
      detailData = res.data;
    }

    ctx.sendRes({
      firstOrderItem,
      deliverCompany,
      deliverPostId: order.deliverPostId,
      state: res.state,
      detailData: detailData
    });



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

    let order = await models.order.findOne({
      where: {
        id:orderId,
        userId: user.id
      },
      include: [{
        model: models.order_item
      }]
    });

    if (!order) throw new Error('该订单不存在');
    if (order.status !== '3') throw new Error('订单状态异常');

    await order.update({
      status: '4',
      endTime: Date.now()
    });

    //商品销量+1
    await Promise.each(order.order_items, async (orderItem) => {
      await itemCountCtrl.itemCount(orderItem.itemId, 'saleCount', orderItem.quantity);
    });

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
    let {
      cancelReason
    } = ctx.request.body;

    let order = await models.order.findOne({
      where: {
        id:orderId,
        userId: user.id
      },
      include: [{
        model: models.order_item
      }]
    });

    if (!order) throw new Error('该订单不存在');
    if (order.status !== '1') throw new Error('订单状态异常');

    await db.transaction(async (t) => {

      await order.update({
        status: '9',
        endTime: Date.now(),
        cancelReason
      }, { transaction: t });

      await Promise.each(order.order_items, async orderItem => {

        //恢复库存
        let sku = await models.sku.findById(orderItem.skuId, {
          transaction: t
        });

        if (!sku) return;

        await sku.increment('quantity', {
          by: orderItem.quantity,
          transaction: t
        });
      });
    });


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
        userId: user.id
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
        userId: user.id
      }
    });

    if (num === 0) throw new Error('该订单不存在');

    ctx.sendRes(null, 0, '删除订单成功');
  } catch (err) {
    ctx.sendRes(null, -1, err.message);
  }
});

module.exports = router;