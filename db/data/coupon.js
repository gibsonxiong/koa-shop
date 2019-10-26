let coupons = [{
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
];

let shops = require('./shop');
coupons.forEach(item=>{
    item.shopId = shops[0].id;
});

module.exports = coupons;