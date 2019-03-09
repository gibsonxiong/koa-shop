let db = require('../db');
let { models } = db;
let orderCtrl = require('../controllers/order');
let Promise = require('bluebird');


exports.init = async function () {
    let users = await models.user.findAll();
    let items = await models.item.findAll();
    let skus;
    await Promise.each(users, async user => {

        await Promise.each(items, async item => {
            try{
                //所有sku
                skus = await models.sku.findAll({
                    where: {
                        itemId: item.id
                    }
                });
                //下订单
                await orderCtrl.create(user.id, {
                    itemParams: [{
                        itemId: item.id,
                        skuId: skus[0].id,
                        quantity: 1
                    }],
                    addressId:'',
                    couponId:'',
                    remark:'测试'
                });

                console.log(`用户ID${user.id}购买商品ID${item.id}的skuID${skus[0].id}成功`);
            }catch(err){
                console.log(`用户ID${user.id}购买商品ID${item.id}的skuID${skus[0].id}失败`);
                console.log(err);
            }

        });
    });


    console.log('完成');
}

