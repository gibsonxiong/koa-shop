let user_addrs = [{
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
}]

let shops = require('./shop');
user_addrs.forEach(item=>{
    item.shopId = shops[0].id;
});

module.exports = user_addrs;