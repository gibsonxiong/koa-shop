const router = require('koa-router')();
const db = require('../db');
const {
  models
} = db;
const tokenMiddleware = require('../middlewares/token');
const Promise = require('bluebird');
const itemCountCtrl = require('../controllers/item_count');

router.prefix('/rates');


//评价列表
router.get('/', tokenMiddleware(), async function (ctx, next) {
  try {
    let user = ctx.user;
    let rows = await models.rate.findAll({
      where: {
        userId: user.id
      },
      include: [
        {
          model: models.user
        }, {
          model: models.rate_like
        }
      ],
      order:[
        ['createTime','desc']
      ]
    });

    ctx.sendRes(rows);
  } catch (err) {
    ctx.sendRes(null, -1, err.message);
  }
});

//商品评价列表
router.get('/items/:itemId', tokenMiddleware(false), async function (ctx, next) {
  try {
    let user = ctx.user;
    let {
      itemId
    } = ctx.params;

    let {
      flag,
      pageSize
    } = ctx.query;

    let where = {
      itemId
    };

    if (flag === 'good') {
      where.score = {
        $in: [4, 5],
      };
    } else if (flag === 'middle') {
      where.score = 3;
    } else if (flag === 'bad') {
      where.score = {
        $in: [1, 2],
      };
    }

    pageSize = pageSize ? Number(pageSize) : undefined;
    let rows = await models.rate.findAll({
      where,
      // attributes:{
      //   include:[[db.fn('COUNT',db.col('rate_likes.id')),'likeCount']]
      // },
      include: [
        {
          model: models.user,
          attributes: ['nickname', 'avatar']
        },
        {
          model: models.rate_like
        }
      ],
      order:[
        ['createTime','desc']
      ],
      limit: pageSize
    });

    rows.forEach(row => {
      row.setDataValue('rateImgList', row.rateImgList ? row.rateImgList.split(',') : []);

      row.setDataValue('likeCount', row.rate_likes.length);

      let myRateLike = user && user.id ? row.rate_likes.find(item => item.userId == user.id) : null;
      row.setDataValue('rateLikeId', myRateLike ? myRateLike.id : null);

      delete row.dataValues.rate_likes;
    });

    ctx.sendRes(rows);
  } catch (err) {
    ctx.sendRes(null, -1, err.message);
  }
});

//评价详情
router.get('/:rateId', tokenMiddleware(false), async function (ctx, next) {
  try {
    let user = ctx.user;
    let {
      rateId
    } = ctx.params;
    let row = await models.rate.findOne({
      where: {
        id: rateId
      },
      include: [{
        model: models.user,
        attributes: ['nickname', 'avatar']
      }, {
        model: models.rate_like
      }]
    });

    if (!row) throw new Error('该评价不存在');

    row.setDataValue('rateImgList', row.rateImgList ? row.rateImgList.split(',') : []);

    row.setDataValue('likeCount', row.rate_likes.length);

    let myRateLike = user && user.id ? row.rate_likes.find(item => item.userId == user.id) : null;
    row.setDataValue('rateLikeId', myRateLike ? myRateLike.id : null);

    ctx.sendRes(row);
  } catch (err) {
    ctx.sendRes(null, -1, err.message);
  }
});

//评价
router.put('/', tokenMiddleware(), async function (ctx, next) {
  try {
    let user = ctx.user;

    /*
      {
        orderId,
        data:[{
          orderItemId,
          itemId,
          score:4,
          content:'不错',
          rateImgList
        }]
      }
    */
    let params = ctx.request.body;
    let createData = [];

    //todo:事务
    let order = await models.order.findOne({
      where: {
        id: params.orderId,
        userId: user.id
      }
    });

    if (!order) throw new Error('该订单不存在');
    if (order.status != '4') throw new Error('该订单状态异常');

    await order.update({
      status: '5'
    });

    await Promise.each(params.data, async p => {
      let orderItem = await models.order_item.findById(p.orderItemId);

      createData.push({
        orderId: params.orderId,
        orderItemId: p.orderItemId,
        userId: user.id,
        itemId: p.itemId,
        itemImg: orderItem.itemImg,
        itemName: orderItem.itemName,
        itemPropvalues: orderItem.itemPropvalues,
        itemPrice: orderItem.itemPrice,
        score: p.score,
        content: p.content,
        rateImgList: p.rateImgList ? p.rateImgList.join(',') : undefined
      });

      await itemCountCtrl.itemCount(p.itemId, 'rateCount', 1);
      if (p.score <= 5) {
        await itemCountCtrl.itemCount(p.itemId, 'rateGoodCount', 1);
      } else if (p.score <= 3) {
        await itemCountCtrl.itemCount(p.itemId, 'rateMiddleCount', 1);
      } else {
        await itemCountCtrl.itemCount(p.itemId, 'rateBadCount', 1);
      }
    });

    let rows = await models.rate.bulkCreate(createData);

    ctx.sendRes(rows, 0, '评价成功');
  } catch (err) {
    ctx.sendRes(null, -1, err.message);
  }
});

//点赞评价
router.post('/:rateId/like', tokenMiddleware(), async function (ctx, next) {
  try {
    let user = ctx.user;
    let { rateId } = ctx.params;

    let {
      isLike = true
    } = ctx.request.body;

    if (isLike) {

      let row = await models.rate_like.findOne({
        where: {
          rateId,
          userId: user.id
        }
      });

      if (row) throw new Error('你已经点赞了，不能重复点赞');

      let rateLike = await models.rate_like.create({
        rateId,
        userId: user.id
      });

      ctx.sendRes({
        rateLikeId: rateLike.id
      }, 0, '点赞成功');
    } else {
      let num = await models.rate_like.destroy({
        where: {
          rateId,
          userId: user.id
        }
      });

      if (num === 0) throw new Error('你还没给该评价点赞');

      ctx.sendRes({
        rateLikeId: null
      }, 0, '取消点赞成功');
    }
  } catch (err) {
    ctx.sendRes(null, -1, err.message);
  }
});

module.exports = router