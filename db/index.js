const Sequelize = require('sequelize');
const {Op} = Sequelize;
const glob = require('glob');
const path = require('path');
const dbConfig = require('../config').db;

const operatorsAliases = {
    $eq: Op.eq,
    $ne: Op.ne,
    $gte: Op.gte,
    $gt: Op.gt,
    $lte: Op.lte,
    $lt: Op.lt,
    $not: Op.not,
    $in: Op.in,
    $notIn: Op.notIn,
    $is: Op.is,
    $like: Op.like,
    $notLike: Op.notLike,
    $iLike: Op.iLike,
    $notILike: Op.notILike,
    $regexp: Op.regexp,
    $notRegexp: Op.notRegexp,
    $iRegexp: Op.iRegexp,
    $notIRegexp: Op.notIRegexp,
    $between: Op.between,
    $notBetween: Op.notBetween,
    $overlap: Op.overlap,
    $contains: Op.contains,
    $contained: Op.contained,
    $adjacent: Op.adjacent,
    $strictLeft: Op.strictLeft,
    $strictRight: Op.strictRight,
    $noExtendRight: Op.noExtendRight,
    $noExtendLeft: Op.noExtendLeft,
    $and: Op.and,
    $or: Op.or,
    $any: Op.any,
    $all: Op.all,
    $values: Op.values,
    $col: Op.col
};

var sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, {
    host: dbConfig.host,
    dialect: dbConfig.dialect,
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    },
    define: {
        timestamps: false,
    },
    timezone: '+08:00', //东八时区
    operatorsAliases
});

//加载model
glob.sync(path.resolve(__dirname,'../models/*.js')).forEach(match=>{
    sequelize.import(match);
});

const {
    models
} = sequelize;

//关联
models.item.hasMany(models.sku, {
    foreignKey: 'itemId'
});

models.item.hasOne(models.item_count, {
    foreignKey: 'itemId'
});

models.footprint.belongsTo(models.item, {
    foreignKey: 'itemId'
});

models.shopcart.belongsTo(models.item, {
    foreignKey: 'itemId'
});
models.shopcart.belongsTo(models.sku, {
    foreignKey: 'skuId'
});

models.favorite.belongsTo(models.item, {
    foreignKey: 'itemId'
});

models.order.hasMany(models.order_item, {
    foreignKey: 'orderId'
});

models.user_coupon.belongsTo(models.coupon, {
    foreignKey: 'couponId'
});

models.rate.belongsTo(models.user, {
    foreignKey: 'userId'
});

models.rate.hasMany(models.rate_like, {
    foreignKey: 'rateId'
});

models.refund.belongsTo(models.order_item, {
    foreignKey: 'orderItemId'
});

models.flashbuy.hasMany(models.flashbuy_item, {
    foreignKey: 'flashbuyId'
});

models.flashbuy_item.hasMany(models.flashbuy_item_sku, {
    foreignKey: 'flashbuyItemId'
});

module.exports = sequelize;