let items = require('./item');
let utils = require('../../utils');


let id = 1;

let skus = [{
    id:id++,
    itemId: 1,
    propvalueList: '1:2|2:4|3:7',
    propvalueTextList: '红色;S;小',
    quantity: 100,
    price: 20
},
{
    id:id++,
    itemId: 1,
    propvalueList: '1:2|2:4|3:8',
    propvalueTextList: '红色;S;大',
    quantity: 100,
    price: 20
},
{
    id:id++,
    itemId: 1,
    propvalueList: '1:2|2:5|3:7',
    propvalueTextList: '红色;M;小',
    quantity: 100,
    price: 20
},
{
    id:id++,
    itemId: 1,
    propvalueList: '1:2|2:5|3:8',
    propvalueTextList: '红色;M;大',
    quantity: 100,
    price: 20
},
{
    id:id++,
    itemId: 1,
    propvalueList: '1:3|2:4|3:7',
    propvalueTextList: '白色;S;小',
    quantity: 100,
    price: 50
},
{
    id:id++,
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
    id:id++,
    itemId: item.id,
    propvalueList: '1:2|2:4',
    propvalueTextList: '红色;S',
    quantity: utils.randomNum(0, 5) == 0 ? 0 : utils.randomNum(10, 5000),
    price: utils.randomNum(5, 200)
}, {
    id:id++,
    itemId: item.id,
    propvalueList: '1:2|2:5',
    propvalueTextList: '红色;M',
    quantity: utils.randomNum(0, 5) == 0 ? 0 : utils.randomNum(10, 5000),
    price: utils.randomNum(5, 200)
}, {
    id:id++,
    itemId: item.id,
    propvalueList: '1:2|2:6',
    propvalueTextList: '红色;L',
    quantity: utils.randomNum(0, 5) == 0 ? 0 : utils.randomNum(10, 5000),
    price: utils.randomNum(5, 200)
})
})

module.exports = skus;