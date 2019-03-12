const db = require('../db');
const {
  models
} = db;

//商品统计
module.exports = {
    async getFlash(flashbuyId, itemId, skuId) {
        let now = new Date();
        let flashbuy = await models.flashbuy.findOne({
            where: {
                id:flashbuyId,
                publicTime:{
                    $lte:now
                },
                endTime: {
                    $gte: now
                }
            }
        });

        if(!flashbuy) return null;

        //活动状态 0-未开始 1-进行中
        let status = 0;

        if(flashbuy.startTime > now ) {
            status = 0;
        }else if(flashbuy.endTime > now){
            status = 1;
        }

        let flashItem = await models.flashbuy_item.findOne({
            where:{
                flashbuyId,
                itemId
            },
            include:[
                {model:models.flashbuy_item_sku}
            ]
        });

        flashItem.setDataValue('progress',Math.ceil(flashItem.soldCount/flashItem.quantity * 100));

        let sku
        if(skuId){
            sku = flashItem.flashbuy_item_skus.find(sku => sku.skuId == skuId);
        }
        
        return {
            status,
            flashbuy,
            item:flashItem,
            sku
        };
    },

    async getCurrentFlashbuy() {
        let now = new Date();
        let flashbuys = await models.flashbuy.findAll({
            where: {
                startTime: {
                    $lte: now
                },
                endTime: {
                    $gte: now
                }
            },
            include:[
                {model:models.flashbuy_item}
            ],
            order:[
                ['startTime','desc']
            ]
        });

        let current =  flashbuys.length > 0 ? flashbuys[0] :null;

            
        return current;
    },
}