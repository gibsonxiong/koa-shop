const db = require('./index');
const {
    models
} = db;
const utils = require('../utils');

async function init() {


    await db.sync({
        force: true
    });

    let categorys = require('./data/category');

    let items = require('./data/item');

    let users = require('./data/user');

    let propnames = require('./data/propname');

    let propvalues = require('./data/propvalue');

    let skus = require('./data/sku');

    let coupons = require('./data/coupon');

    let user_coupons = require('./data/user_coupon');

    let itemCounts = require('./data/item_count');

    const regions = require('./data/region');

    let user_addrs = require('./data/user_addr');

    const delivers = require('./data/deliver');

    const flashbuys = require('./data/flashbuy');

    const flashbuyItems = require('./data/flashbuy_item');

    const flashbuyItemSkus = require('./data/flashbuy_item_sku');



    await models.category.bulkCreate(categorys);

    await models.propname.bulkCreate(propnames);

    await models.propvalue.bulkCreate(propvalues);

    await models.item.bulkCreate(items);

    await models.item_count.bulkCreate(itemCounts);

    await models.sku.bulkCreate(skus);

    await models.coupon.bulkCreate(coupons);

    await models.region.bulkCreate(regions);

    await models.deliver.bulkCreate(delivers);

    await models.flashbuy.bulkCreate(flashbuys);

    await models.flashbuy_item.bulkCreate(flashbuyItems);

    await models.flashbuy_item_sku.bulkCreate(flashbuyItemSkus);

    // await models.user.bulkCreate(users);

    // await models.user_coupon.bulkCreate(user_coupons);

    // await models.user_addr.bulkCreate(user_addrs);


    console.log('数据库初始化成功');
}

init();