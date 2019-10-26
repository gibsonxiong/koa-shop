const router = require('koa-router')();
const db = require('../db');
const {
  models
} = db;
const adminToken = require('../middlewares/adminToken');

router.prefix('/props')

//
router.get('/', adminToken(), async function (ctx, next) {
  try {
    let { shopId } = ctx.shopUser;
    let { pageIndex, pageSize } = ctx.query;

    let limit = Number(pageSize || 20);
    let offset = ((Number(pageIndex) || 1) - 1) * pageSize;

    let rows = await models.propname.findAndCountAll({
      where: {
        shopId
      },
      include: [
        { model: models.propvalue }
      ],
      order: [
        ['id', 'desc'],
      ],
      offset,
      limit,
      distinct: true
    });

    ctx.sendRes(rows);
  } catch (err) {
    ctx.sendRes(null, -1, err.message);
  }
})

//新增
router.post('/', adminToken(), async function (ctx) {
  try {
    let { shopId } = ctx.shopUser;
    let body = ctx.request.body;
    let { name, propvalues } = body;

    let row = await models.propname.create({
      name: body.name,
      shopId
    });

    propvalues.forEach(item => {
      item.shopId = shopId;
      item.propnameId = row.id
    })
    let rows = await models.propvalue.bulkCreate(propvalues);

    ctx.sendRes(row);
  } catch (err) {
    ctx.sendRes(null, -1, err.message);
  }
});

//修改
router.post('/:id', adminToken(), async function (ctx) {
  try {
    let { shopId } = ctx.shopUser;
    let { id } = ctx.params;
    let { name, propvalues } = ctx.request.body;



    await models.propname.update({
      name
    }, {
      where: {
        id,
        shopId
      }
    });

    //删除propvalue
    let ids = propvalues.map(item => item.id).filter(item => !!item)
    await models.propvalue.destroy({
      where: {
        id: {
          $notIn: ids
        },
        propnameId: id,
        shopId
      },
    })

    //新增修改propvalue
    propvalues.forEach(async item => {
      //有id代表是修改，否则新增
      if (item.id) {
        let propvalueId = item.id;
        delete item.id;
        delete item.shopId,
        delete item.propnameId;
        await models.propvalue.update({
          ...item,
        }, {
          where: {
            id:propvalueId,
            shopId
          }
        });
      } else {
        await models.propvalue.create({
          ...item,
          shopId: shopId,
          propnameId: id
        });
      }
    })


    ctx.sendRes(null, 0, '修改成功');
  } catch (err) {
    ctx.sendRes(null, -1, err.message);
  }
});

//删除
router.delete('/:id', adminToken(), async function (ctx) {
  try {
    let { shopId } = ctx.shopUser;
    let { id } = ctx.params;

    let number = await models.propname.destroy({
      where: {
        id,
        shopId
      },
    });

    await models.propvalue.destroy({
      where: {
        propnameId: id,
        shopId
      },
    })

    if (number === 0) throw new Error('删除失败');

    ctx.sendRes(null, 0, '删除成功');
  } catch (err) {
    ctx.sendRes(null, -1, err.message);
  }
});



module.exports = router