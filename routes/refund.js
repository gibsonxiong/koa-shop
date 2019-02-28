const router = require('koa-router')()
const {
  models,
  query
} = require('../db');
const tokenMiddleware = require('../middlewares/token');
const utils = require('../utils');

router.prefix('/refunds');

//退款/售后列表
router.get('/', tokenMiddleware(), async function (ctx, next) {
  try {
    let user = ctx.user;
    let rows = await models.refund.findAll({
      where: {
        userId: user.id,
      },
      include:[
        {model:models.order_item}
      ]
    });

    rows.forEach(row=>{
      row.setDataValue('refundImgList', row.refundImgList.split(','));
    });

    ctx.sendRes(rows);
  } catch (err) {
    ctx.sendRes(null, -1, err.message);
  }
});

//申请页面初始数据
router.get('/applyInfo', tokenMiddleware(), async function (ctx, next) {
  try {
    let user = ctx.user;
    let {
      orderId,
      orderItemId
    } = ctx.query;

    let orderItem = await models.order_item.findById(orderItemId);
    let maxRefundFee = 100;
    let postFee = 0;


    ctx.sendRes({
      orderItem,
      maxRefundFee,
      postFee
    });
  } catch (err) {
    ctx.sendRes(null, -1, err.message);
  }
});

//退款详情
router.get('/:refundId', tokenMiddleware(), async function (ctx, next) {
  try {
    let user = ctx.user;
    let {
      refundId
    } = ctx.params;

    let refund = await models.refund.findById(refundId,{
      where:{
        userId:user.id
      },
      include:[
        {model:models.order_item}
      ]
    });

    ctx.sendRes(refund);
  } catch (err) {
    ctx.sendRes(null, -1, err.message);
  }
});


//提交退款申请
router.post('/apply', tokenMiddleware(), async function (ctx, next) {
  try {
    let user = ctx.user;
    let {
      orderId,
      orderItemId,
      reason,
      refundFee,
      refundDesc,
      refundImgList
    } = ctx.request.body;

    let row = await models.refund.create({
      refundNo:utils.genOrderNo(),
      orderId,
      orderItemId,
      userId:user.id,
      reason,
      refundFee,
      refundDesc,
      refundImgList: refundImgList.length > 0 ? refundImgList.join(',') : undefined,
      type: '1',
      status: '1',
    });

    if(!row) throw new Error('申请退款失败');

    ctx.sendRes(row, 0, '申请退款成功');
  } catch (err) {
    ctx.sendRes(null, -1, err.message);
  }
});

module.exports = router