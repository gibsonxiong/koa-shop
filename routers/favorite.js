const router = require('koa-router')();
const {models} =require('../db');
const tokenMiddleware = require('../middlewares/token');

router.prefix('/favorites');

//通过商品id获取用户关注信息
router.get('/items/:itemId', tokenMiddleware(), async function (ctx, next) {
  try {
    let user = ctx.user;
    let { itemId } = ctx.params;
    let row = await models.favorite.findOne({
      where:{
        userId:user.id,
        itemId
      }
    });

    ctx.sendRes(row||{});
  } catch (err) {
    ctx.sendRes(null, -1, err.message);
  }
})

//关注列表
router.get('/', tokenMiddleware(), async function (ctx, next) {
  try {
    let user = ctx.user;
    let rows = await models.favorite.findAll({
      where:{
        userId:user.id
      },
      include:[
        {
          model:models.item,
          include:[
            {
              model:models.sku
            }
          ]
        }
      ]
    });

    rows.forEach(row=>{
      let prices = row.item.skus.map(item=>item.price );
      row.item.setDataValue('itemPrice', prices.length === 0? 0 : Math.min( ...prices) );
      row.item.setDataValue('imgList',row.item.imgList.split(',') );
    })

    ctx.sendRes(rows);
  } catch (err) {
    ctx.sendRes(null, -1, err.message);
  }
});

//加入关注
router.put('/', tokenMiddleware(), async function (ctx, next) {
  try {
    let user = ctx.user;
    let {itemId} = ctx.request.body;
    let result = await models.favorite.create({
      userId:user.id,
      itemId
    });

    if(!result) throw new Error('加入关注失败');

    ctx.sendRes(result,0,'加入关注成功');
  } catch (err) {
    ctx.sendRes(null, -1, err.message);
  }
});

//取消关注
router.delete('/:id', tokenMiddleware(), async function (ctx, next) {
  try {
    let user = ctx.user;
    let {id} = ctx.params;
    let number = await models.favorite.destroy({
      where:{
        userId:user.id,
        id
      }
    });

    if(number === 0) throw new Error('取消关注失败');

    ctx.sendRes(null,0,'取消关注成功');
  } catch (err) {
    ctx.sendRes(null, -1, err.message);
  }
});

module.exports = router