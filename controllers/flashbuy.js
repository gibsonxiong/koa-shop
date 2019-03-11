const db = require('../db');
const {
  models
} = db;

//商品统计
module.exports = {
    async getFlashbuyInfo(flashbuyId, itemId) {
        let now = new Date();
        let flashbuy = await models.flashbuy.findById(flashbuyId, {
            where: {
                startTime: {
                    $lte: now
                },
                endTime: {
                    $gte: now
                }
            }
        });

        if(!flashbuy) return null;

        let flashbuyItem = await models.flashbuy_item.findOne({
            where:{
                flashbuyId,
                itemId
            },
            include:[
                {model:models.flashbuy_item_sku}
            ]
        });

        return {
            flashbuy,
            flashbuyItem
        };
    }
}