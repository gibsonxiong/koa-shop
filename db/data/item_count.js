let items  = require('./item');
const utils = require('../../utils');

let itemCounts = items.map(item => {
    // let rateCount = utils.randomNum(0, 1000);
    // let rateGoodCount = utils.randomNum(parseInt(rateCount * 0.7), rateCount);
    // let rateMiddleCount = utils.randomNum(0, rateCount - rateGoodCount);
    // let rateBadCount = rateCount - rateGoodCount - rateMiddleCount;

    let rateCount = 0;
    let rateGoodCount = 0;
    let rateMiddleCount = 0;
    let rateBadCount = 0;

    return {
        itemId: item.id,
        saleCount: utils.randomNum(0, 200),
        viewCount: utils.randomNum(0, 500),
        rateCount,
        rateGoodCount,
        rateMiddleCount,
        rateBadCount,
        monthSaleCount: utils.randomNum(0, 200),
    }
});

let shops = require('./shop');
itemCounts.forEach(item=>{
    item.shopId = shops[0].id;
});

module.exports = itemCounts;