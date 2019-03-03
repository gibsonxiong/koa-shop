const db = require('../db');
const {
  models
} = db;

//商品统计
module.exports = {
    async itemCount(itemId, name, increment) {
        let [row, created] = await models.item_count.findCreateFind({
            defaults: {
                [name]: increment,
            },
            where: {
                itemId
            }
        });

        if (!created) {
            await row.increment(name, {
                by: increment
            });
        }
    }
}