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

    await models.category.bulkCreate(categorys);

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
    ]

    await models.user.bulkCreate(users);

    await models.propname.bulkCreate([{
        id: 1,
        name: '颜色分类'
    }, {
        id: 2,
        name: '尺码'
    }, {
        id: 3,
        name: '规格'
    }]);

    await models.propvalue.bulkCreate([{
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
    ]);

    let items = require('./data/item');

    await models.item.bulkCreate(items);

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

    await models.item_count.bulkCreate(itemCounts);

    let skus = [{
            itemId: 1,
            propvalueList: '1:2|2:4|3:7',
            propvalueTextList: '红色;S;小',
            quantity: 100,
            price: 20
        },
        {
            itemId: 1,
            propvalueList: '1:2|2:4|3:8',
            propvalueTextList: '红色;S;大',
            quantity: 100,
            price: 20
        },
        {
            itemId: 1,
            propvalueList: '1:2|2:5|3:7',
            propvalueTextList: '红色;M;小',
            quantity: 100,
            price: 20
        },
        {
            itemId: 1,
            propvalueList: '1:2|2:5|3:8',
            propvalueTextList: '红色;M;大',
            quantity: 100,
            price: 20
        },
        {
            itemId: 1,
            propvalueList: '1:3|2:4|3:7',
            propvalueTextList: '白色;S;小',
            quantity: 100,
            price: 50
        },
        {
            itemId: 1,
            propvalueList: '1:3|2:4|3:8',
            propvalueTextList: '白色;S;大',
            quantity: 100,
            price: 50
        },


    ];

    items.forEach(item => {
        if (item.id == 1) return;

        skus.push({
            itemId: item.id,
            propvalueList: '1:2|2:4',
            propvalueTextList: '红色;S',
            quantity: utils.randomNum(0, 1) == 0 ? utils.randomNum(0, 5) : utils.randomNum(0, 1000),
            price: utils.randomNum(5, 200)
        }, {
            itemId: item.id,
            propvalueList: '1:2|2:5',
            propvalueTextList: '红色;M',
            quantity: utils.randomNum(0, 1) == 0 ? utils.randomNum(0, 5) : utils.randomNum(0, 1000),
            price: utils.randomNum(5, 200)
        }, {
            itemId: item.id,
            propvalueList: '1:2|2:6',
            propvalueTextList: '红色;L',
            quantity: utils.randomNum(0, 1) == 0 ? utils.randomNum(0, 5) : utils.randomNum(0, 1000),
            price: utils.randomNum(5, 200)
        })
    })

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
            name: '无门槛减5',
            desc: '无门槛减5,全场可用',
            limitPrice: 0,
            deductPrice: 5,
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

    const regions = require('./data/region');
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

    console.log('数据库初始化成功');
}

init();