const router = require('koa-router')()
const {
  models
} = require('../db');
const tokenMiddleware = require('../middlewares/token');

router.prefix('/users');

//用户资料
router.get('/info', tokenMiddleware(), async function (ctx, next) {
  try {
    let user = ctx.user;
    let row = await models.user.findById(user.id);

    if (!row) throw new Error('没找到数据');

    //todo 日期
    let couponCount = await models.user_coupon.count({
      where: {
        userId: user.id,
        used: false,
      },
      include: [{
        model: models.coupon,
        where: {
          endTime: {
            $gte: Date.now()
          }
        }
      }]
    });

    row.setDataValue('couponCount', couponCount);

    ctx.sendRes(row);
  } catch (err) {
    ctx.sendRes(null, -1, err.message);
  }
})

//修改用户资料
router.post('/info', tokenMiddleware(), async function (ctx, next) {
  try {
    let user = ctx.user;
    let body = ctx.request.body;

    let [num] = await models.user.update(body, {
      where: {
        id: user.id
      }
    });

    if (!num === 0) throw new Error('更新用户资料失败');

    let row = await models.user.findById(user.id);

    ctx.sendRes(row, 0, '更新用户资料成功');
  } catch (err) {
    ctx.sendRes(null, -1, err.message);
  }
})




module.exports = router