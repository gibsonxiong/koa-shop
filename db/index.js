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
sequelize.import('../models/test');

const {
    user,
    item,
    sku,
    shopcart,
    propname,
    propvalue,
    category,
    favorite,
    order,
    order_item,
    coupon,
    user_coupon,
    region,
    user_addr
} = sequelize.models;

//关联
item.hasMany(sku, {
    foreignKey: 'itemId'
});

shopcart.belongsTo(item, {
    foreignKey: 'itemId'
});
shopcart.belongsTo(sku, {
    foreignKey: 'skuId'
});

favorite.belongsTo(item, {
    foreignKey: 'itemId'
});

order.hasMany(order_item, {
    foreignKey: 'orderId'
});

user_coupon.belongsTo(coupon, {
    foreignKey: 'couponId'
});

async function init() {
    await sequelize.sync({
        force: true
    });

    let data = [];
    for (let i = 1; i < 21; i++) {
        data.push({
            id: i,
            name: `女装${i}`,
        });
    }
    for (let i = 21; i < 31; i++) {
        data.push({
            id: i,
            name: `连衣裙${i}`,
            parentId: 1,
            img: 'https://gw.alicdn.com/tps/O1CN010UEJYr2LZr5vK81e0_!!3393239707.jpg_140x10000Q75.jpg'
        });
    }
    for (let i = 31; i < 41; i++) {
        data.push({
            id: i,
            name: `连衣裙${i}`,
            parentId: 15,
            img: 'https://gw.alicdn.com/tps/O1CN010UEJYr2LZr5vK81e0_!!3393239707.jpg_140x10000Q75.jpg'
        });
    }
    await category.bulkCreate(data);

    await user.bulkCreate([{
        id: 1,
        phone: '13686004518',
        password: '123456',
        avatar: 'https://avatars0.githubusercontent.com/u/15243456?s=460&v=4',
        nickname: 'gibsonxiong'
    }]);

    await propname.bulkCreate([{
        id: 1,
        name: '颜色分类'
    }, {
        id: 2,
        name: '尺码'
    }]);

    await propvalue.bulkCreate([{
            id: 1,
            propnameId: 1,
            name: '默认',
        },
        {
            id: 2,
            propnameId: 1,
            name: '红色'
        },
        {
            id: 3,
            propnameId: 1,
            name: '白色'
        },
        {
            id: 4,
            propnameId: 2,
            name: 'S'
        },
        {
            id: 5,
            propnameId: 2,
            name: 'M'
        },
        {
            id: 6,
            propnameId: 2,
            name: 'L'
        }
    ]);

    await item.bulkCreate([{
            id: 1,
            name: '法式少女茶歇裙春秋装2019新款收腰复古桔梗裙法国小众连衣裙长裙',
            desc: '小仙女',
            categoryId: 21,
            imgList: 'http://img.alicdn.com/imgextra/i4/2296669517/O1CN012KApp8zXvIMUYrx_!!2296669517.jpg,http:////img.alicdn.com/imgextra/i3/2296669517/O1CN012KApp8xJFj4YeHo_!!2296669517.jpg,http://img.alicdn.com/imgextra/i3/2296669517/O1CN012KApp8xJFj4YeHo_!!2296669517.jpg',
            propvalueList: '1:2,3|2:4',
            detail: '<img class="desc-img" src="//img.alicdn.com/imgextra/i3/2296669517/O1CN012KApp8eb1T1IzZo_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i3/2296669517/O1CN012KApp8Qfjr7DNjW_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i2/2296669517/O1CN012KApp6puj81fEJR_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i1/2296669517/O1CN012KApp8QfsAVyrDU_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i1/2296669517/O1CN012KApp9WzbXu4TWF_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i4/2296669517/O1CN012KApp8ec1pSDFBJ_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i3/2296669517/O1CN012KApp7e5sJsDlsQ_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i4/2296669517/O1CN012KApp2U1gBULFr2_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i3/2296669517/O1CN012KApp7E0fd4kEYz_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i2/2296669517/O1CN012KApp8kxRJeECu2_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i2/2296669517/O1CN012KApp8xUX46FPfB_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i2/2296669517/O1CN012KApp2Tzw9AAIll_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i3/2296669517/O1CN012KApp7E2Laj00En_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i1/2296669517/O1CN012KApp88PqhOukHt_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i2/2296669517/O1CN012KApp2U2gbokoJl_!!2296669517.jpg">'
        },
        {
            id: 2,
            name: '法式少女茶歇裙春秋装2019新款收腰复古桔梗裙法国小众连衣裙长裙',
            desc: '小仙女',
            categoryId: 21,
            imgList: 'http://img.alicdn.com/imgextra/i3/2296669517/O1CN012KApocLwwgt1JHz_!!2296669517.jpg,http://img.alicdn.com/imgextra/i1/2296669517/O1CN012KApobrmEhQq6YY_!!2296669517.jpg,//img.alicdn.com/imgextra/i1/2296669517/O1CN012KApobrklGjzigW_!!2296669517.jpg',
            propvalueList: '1:2|2:5',
            detail: '<img class="desc-img" src="//img.alicdn.com/imgextra/i3/2296669517/O1CN012KApp8eb1T1IzZo_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i3/2296669517/O1CN012KApp8Qfjr7DNjW_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i2/2296669517/O1CN012KApp6puj81fEJR_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i1/2296669517/O1CN012KApp8QfsAVyrDU_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i1/2296669517/O1CN012KApp9WzbXu4TWF_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i4/2296669517/O1CN012KApp8ec1pSDFBJ_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i3/2296669517/O1CN012KApp7e5sJsDlsQ_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i4/2296669517/O1CN012KApp2U1gBULFr2_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i3/2296669517/O1CN012KApp7E0fd4kEYz_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i2/2296669517/O1CN012KApp8kxRJeECu2_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i2/2296669517/O1CN012KApp8xUX46FPfB_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i2/2296669517/O1CN012KApp2Tzw9AAIll_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i3/2296669517/O1CN012KApp7E2Laj00En_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i1/2296669517/O1CN012KApp88PqhOukHt_!!2296669517.jpg"><img class="desc-img" src="//img.alicdn.com/imgextra/i2/2296669517/O1CN012KApp2U2gbokoJl_!!2296669517.jpg">'
        }
    ]);

    await sku.bulkCreate([{
            itemId: 1,
            propvalueList: '1:2|2:4',
            quantity: 100,
            price: 20
        },
        {
            itemId: 1,
            propvalueList: '1:3|2:4',
            quantity: 100,
            price: 50
        },
        {
            itemId: 2,
            propvalueList: '1:2|2:5',
            quantity: 100,
            price: 50
        },
    ]);

    await coupon.bulkCreate([{
            name: '满50减20',
            desc: '满50减20,全场可用',
            limitPrice: 50,
            deductPrice: 20,
            quantity: 20,
            startTime: new Date('2019-2-19'),
            endTime: new Date('2019-3-19')
        },
        {
            name: '无门槛减20',
            desc: '无门槛减20,全场可用',
            limitPrice: 0,
            deductPrice: 20,
            quantity: 20,
            startTime: new Date('2019-2-19'),
            endTime: new Date('2019-3-19')
        }
    ]);

    await user_coupon.bulkCreate([{
        "userId": 1,
        "couponId": 1,
        "used": false
    }, {
        "userId": 1,
        "couponId": 2,
        "used": false
    }]);

    await region.bulkCreate([{
            id: 1,
            name: '北京市',
        },
        {
            id: 2,
            name: '广东省',
        },
        {
            id: 3,
            name: '北京市',
            parentId: 1
        },
        {
            id: 4,
            name: '深圳市',
            parentId: 2
        },
        {
            id: 5,
            name: '东莞市',
            parentId: 2
        },
        {
            id: 6,
            name: '宝安区',
            parentId: 4
        },
        {
            id: 7,
            name: '福田区',
            parentId: 4
        },
        {
            id: 8,
            name: '罗湖区',
            parentId: 4
        },
        {
            id: 9,
            name: '莞城区',
            parentId: 5
        },
        {
            id: 10,
            name: '东城区',
            parentId: 5
        },
        {
            id: 11,
            name: '东城区',
            parentId: 3
        },
        {
            id: 12,
            name: '西城区',
            parentId: 3
        }
    ]);

    await user_addr.bulkCreate([{
        "userId": 1,
        "province": "广东省",
        "provinceId": 2,
        "city": "深圳市",
        "cityId": 4,
        "area": "宝安区",
        "areaId": 6,
        "detailAddr": "樟坑一区",
        "phone": "13686004518",
        "name": "熊健城",
        "isDefault": true
    }]);


}


// init();

module.exports = sequelize;