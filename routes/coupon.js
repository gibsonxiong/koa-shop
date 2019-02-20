const router = require('koa-router')()
const {
  models,
  query
} = require('../db');
const tokenMiddleware = require('../middlewares/token');

router.prefix('/coupons');

//可领取优惠券列表
router.get('/', async function (ctx, next) {
  try {
    let rows = await models.coupon.findAll({});

    ctx.sendRes(rows);
  } catch (err) {
    ctx.sendRes(null, -1, err.message);
  }
});



//用户优惠券列表
router.get('/userCoupons', tokenMiddleware(), async function (ctx, next) {
  try {
    let user = ctx.user;
    let {
      status
    } = ctx.query;

    let rows = await models.user_coupon.findAll({
      where: {
        userId: user.id
      },
      include: [{
        model: models.coupon
      }]
    });

    rows.forEach((row)=>{
      let status;
      if(row.used){
        status = 'used';
      }else if(row.coupon.endTime > new Date()){
        status = 'unused';
      }else{
        status = 'expired';
      }
      row.setDataValue('status',status);
    });

    if(status){
      rows = rows.filter(row=> row.getDataValue('status') === status);
    }

    ctx.sendRes(rows);
  } catch (err) {
    ctx.sendRes(null, -1, err.message);
  }
});

//用户领取优惠券
router.put('/userCoupons', tokenMiddleware(), async function (ctx, next) {
  try {
    let user = ctx.user;
    let {
      couponId
    } = ctx.request.body;

    //todo 检测已领取数量是否小于总数量

    //todo 是否已经领取

    let row = await models.user_coupon.create({
      userId: user.id,
      couponId
    });
    if (!row) throw new Error('领取优惠券失败');

    //更新优惠券已领取数量
    let [num] = await models.coupon.increment('sendQuantity', {
      where: {
        id: couponId
      }
    });
    if (num === 0) throw new Error('领取优惠券失败');

    ctx.sendRes(row, 0, '领取优惠券成功');
  } catch (err) {
    ctx.sendRes(null, -1, err.message);
  }
});

module.exports = router