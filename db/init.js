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
    let users = [{
        id: 1,
        phone: '13686004518',
        password: '123456',
        nickname: 'gibsonxiong'
    },
    {
        id: 2,
        phone: '13686004510',
        password: '123456',
        nickname: 'xiaolx'
    }
    ];

    let propnames = [{
        id: 1,
        name: '颜色分类'
    }, {
        id: 2,
        name: '尺码'
    }, {
        id: 3,
        name: '规格'
    }];

    let propvalues = [{
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
    }, {
        id: 7,
        propnameId: 3,
        name: '小'
    },
    {
        id: 8,
        propnameId: 3,
        name: '大'
    }
    ];

    let skus = require('./data/sku');

    let itemCounts = items.map(item => {
        let rateCount = utils.randomNum(0, 1000);
        let rateGoodCount = utils.randomNum(parseInt(rateCount * 0.7), rateCount);
        let rateMiddleCount = utils.randomNum(0, rateCount - rateGoodCount);
        let rateBadCount = rateCount - rateGoodCount - rateMiddleCount;
        return {
            itemId: item.id,
            saleCount: utils.randomNum(0, 1000),
            viewCount: utils.randomNum(0, 1000),
            rateCount,
            rateGoodCount,
            rateMiddleCount,
            rateBadCount,
            monthSaleCount: utils.randomNum(0, 1000),
        }
    });

    const regions = require('./data/region');

    const delivers = require('./data/deliver');

    const flashbuys = require('./data/flashbuy');

    const flashbuyItems = require('./data/flashbuy_item');

    const flashbuyItemSkus = require('./data/flashbuy_item_sku');

    await models.category.bulkCreate(categorys);

    await models.user.bulkCreate(users);

    await models.propname.bulkCreate(propnames);

    await models.propvalue.bulkCreate(propvalues);

    await models.item.bulkCreate(items);

    await models.item_count.bulkCreate(itemCounts);

    await models.sku.bulkCreate(skus);
    


    await models.coupon.bulkCreate([{
        name: '满50减10',
        desc: '满50减10,全场可用',
        limitPrice: 50,
        deductPrice: 10,
        quantity: 10,
        startTime: new Date('2019-2-19'),
        endTime: new Date('2019-3-19')
    },
    {
        name: '满100减30',
        desc: '满100减30,全场可用',
        limitPrice: 100,
        deductPrice: 30,
        quantity: 5,
        startTime: new Date('2019-2-19'),
        endTime: new Date('2019-3-19')
    },
    {
        name: '无门槛减1',
        desc: '无门槛减1,全场可用',
        limitPrice: 0,
        deductPrice: 1,
        quantity: 20,
        startTime: new Date('2019-2-19'),
        endTime: new Date('2019-3-19')
    }
    ]);

    await models.user_coupon.bulkCreate([{
        "userId": 1,
        "couponId": 1,
        "used": false
    }, {
        "userId": 1,
        "couponId": 2,
        "used": false
    },
    {
        "userId": 1,
        "couponId": 3,
        "used": false
    }
    ]);


    await models.region.bulkCreate(regions);

    await models.user_addr.bulkCreate([{
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


    await models.deliver.bulkCreate(delivers);


    await models.flashbuy.bulkCreate(flashbuys);


    await models.flashbuy_item.bulkCreate(flashbuyItems);

    await models.flashbuy_item_sku.bulkCreate(flashbuyItemSkus);

    

    console.log('数据库初始化成功');
}

init();