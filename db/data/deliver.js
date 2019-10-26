 let delivers= [
    {
        name:'中通快递',
        code:'zhongtong',
        phone:'95311'
    },
    {
        name:'韵达快递',
        code:'yunda',
        phone:'95546'
    },
];

let shops = require('./shop');
delivers.forEach(item=>{
    item.shopId = shops[0].id;
});

module.exports = delivers;

//yunda 3990436023996
//zhongtong 75129884477106