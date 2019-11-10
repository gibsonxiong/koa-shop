const router = require('koa-router')();
const db = require('../db');
const {
  models
} = db;
const adminToken = require('../middlewares/adminToken');
const validate = require('../validate');

router.prefix('/orders')

//
router.get('/', adminToken(), async function (ctx, next) {
  try{
    let { shopId } = ctx.shopUser;
    let {pageIndex, pageSize} = ctx.query;

    let limit = Number(pageSize || 20);
    let offset = ((Number(pageIndex) || 1) - 1) * pageSize;

    let rows = await models.order.findAndCountAll({
      where:{
        shopId
      },
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

//detail
router.get('/:orderId', adminToken(), async function (ctx, next) {
  try{
    let { shopId } = ctx.shopUser;
    let {orderId} = ctx.params;

    let row = await models.order.find({
      where:{
        id:orderId,
        shopId
      },
      include:[
        {model:models.order_item}
      ]
    });

    ctx.sendRes(row);
  }catch(err){
    ctx.sendRes(null,-1, err.message);
  }
})

//删除
router.delete('/:id',adminToken(), async function (ctx) {
  try {
    let { shopId} = ctx.shopUser;
    let {id} = ctx.params;

    let number = await models.order.destroy({
      where:{
        id,
        shopId
      },
    });

    if(number === 0 ) throw new Error('删除失败');

    ctx.sendRes(null,0, '删除成功');
  } catch (err) {
    ctx.sendRes(null, -1, err.message);
  }
});

//发货
router.post('/:orderId/deliver',adminToken(), async function (ctx, next) {
  try {
    let { shopId} = ctx.shopUser;
    let {
      orderId
    } = ctx.params;
    let {
      deliverCompanyId,
      deliverPostNo
    } = ctx.request.body;

    let [invalid, msg] = new validate.Validator({
      deliverCompanyId,
      deliverPostNo
    }, {
        'deliverCompanyId': [{
          name: 'required',
          msg: '物流公司不能为空'
        }],
        'deliverPostNo': [{
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
      deliverCompanyId,
      deliverPostNo,
      deliverTime: Date.now()
    });

    ctx.sendRes(null, 0, '订单发货成功');
  } catch (err) {
    ctx.sendRes(null, -1, err.message);
  }
});


module.exports = router