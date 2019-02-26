const Sequelize = require('sequelize');
const {Op} = Sequelize;

var config = {
    dialect: 'mysql',
    database: 'shop',
    username: 'root',
    password: 'qwer1234',
    host: '192.168.3.168',
    port: 3306,
};

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

var sequelize = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    dialect: config.dialect,
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

sequelize.import('../models/user');
sequelize.import('../models/category');
sequelize.import('../models/item');
sequelize.import('../models/sku');
sequelize.import('../models/propname');
sequelize.import('../models/propvalue');
sequelize.import('../models/shopcart');
sequelize.import('../models/favorite');
sequelize.import('../models/order');
sequelize.import('../models/order_item');
sequelize.import('../models/coupon');
sequelize.import('../models/user_coupon');
sequelize.import('../models/item_count');
sequelize.import('../models/region');
sequelize.import('../models/user_addr');
sequelize.import('../models/footprint');
sequelize.import('../models/test');
sequelize.import('../models/rate');

const {
    models
} = sequelize;

//关联
models.item.hasMany(models.sku, {
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

module.exports = sequelize;