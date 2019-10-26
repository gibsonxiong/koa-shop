let user_coupons = [{
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
];

let shops = require('./shop');
user_coupons.forEach(item=>{
    item.shopId = shops[0].id;
});

module.exports = user_coupons;