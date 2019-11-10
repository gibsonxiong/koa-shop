const db = require('./index');
const {
    models
} = db;
const utils = require('../utils');
const glob = require('glob');
const path = require('path');

async function init() {
    await db.sync({
        force: true
    });

    const dataMap = {};
    glob.sync(path.resolve(__dirname, './data/*.js')).forEach(_path => {
        let name = path.basename(_path, '.js');
        dataMap[name] = require(_path);
    });

    //shop
    await models.shop.bulkCreate(dataMap.shop);
    await models.shop_user.bulkCreate(dataMap.shop_user);
    // \shop
    await models.propname.bulkCreate(dataMap.propname);

    await models.propvalue.bulkCreate(dataMap.propvalue);

    await models.category.bulkCreate(dataMap.category);

    await models.item.bulkCreate(dataMap.item);

    await models.item_count.bulkCreate(dataMap.item_count);

    await models.sku.bulkCreate(dataMap.sku);

    await models.coupon.bulkCreate(dataMap.coupon);

    await models.region.bulkCreate(dataMap.region);

    await models.deliver.bulkCreate(dataMap.deliver);

    await models.flashbuy.bulkCreate(dataMap.flashbuy);

    await models.flashbuy_item.bulkCreate(dataMap.flashbuy_item);

    await models.flashbuy_item_sku.bulkCreate(dataMap.flashbuy_item_sku);

    //用户
    await models.user.bulkCreate(dataMap.user);

    await models.user_coupon.bulkCreate(dataMap.user_coupon);

    await models.user_addr.bulkCreate(dataMap.user_addr);

    console.log('数据库初始化成功');
}



init();