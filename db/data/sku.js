let items = require('./item');
let utils = require('../../utils');


let id = 1;

let skus = [{
    id:id++,
    itemId: 1,
    propvalueList: '2:2|3:4|4:7',
    propvalueTextList: '红色;S;小',
    quantity: 100,
    price: 20
},
{
    id:id++,
    itemId: 1,
    propvalueList: '2:2|3:4|4:8',
    propvalueTextList: '红色;S;大',
    quantity: 100,
    price: 20
},
{
    id:id++,
    itemId: 1,
    propvalueList: '2:2|3:5|4:7',
    propvalueTextList: '红色;M;小',
    quantity: 100,
    price: 20
},
{
    id:id++,
    itemId: 1,
    propvalueList: '2:2|3:5|4:8',
    propvalueTextList: '红色;M;大',
    quantity: 100,
    price: 20
},
{
    id:id++,
    itemId: 1,
    propvalueList: '2:3|3:4|4:7',
    propvalueTextList: '白色;S;小',
    quantity: 100,
    price: 50
},
{
    id:id++,
    itemId: 1,
    propvalueList: '2:3|3:4|4:8',
    propvalueTextList: '白色;S;大',
    quantity: 100,
    price: 50
},


];

items.forEach(item => {
if (item.id == 1) return;

skus.push({
    id:id++,
    itemId: item.id,
    propvalueList: '2:2|3:4',
    propvalueTextList: '红色;S',
    quantity: utils.randomNum(0, 5) == 0 ? 0 : utils.randomNum(10, 5000),
    price: utils.randomNum(5, 200)
}, {
    id:id++,
    itemId: item.id,
    propvalueList: '2:2|3:5',
    propvalueTextList: '红色;M',
    quantity: utils.randomNum(0, 5) == 0 ? 0 : utils.randomNum(10, 5000),
    price: utils.randomNum(5, 200)
}, {
    id:id++,
    itemId: item.id,
    propvalueList: '2:2|3:6',
    propvalueTextList: '红色;L',
    quantity: utils.randomNum(0, 5) == 0 ? 0 : utils.randomNum(10, 5000),
    price: utils.randomNum(5, 200)
})
})

let shops = require('./shop');
skus.forEach(item=>{
    item.shopId = shops[0].id;
});

module.exports = skus;