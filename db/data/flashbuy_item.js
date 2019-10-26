let items = require('./item');
let skus = require('./sku');
const utils = require('../../utils');

let flashbuyItems = [];

function getData(itemId) {
    let item = items.find(item=>item.id == itemId);
    let itemPrice = Math.min( ...skus.filter(sku=>sku.itemId == itemId).map(sku=>sku.price) );
    let itemMaxPrice = Math.max( ...skus.filter(sku=>sku.itemId == itemId).map(sku=>sku.price) );
    return {
        id:item.id,
        itemId: item.id,
        itemImg: item.imgList[0],
        itemName: item.name,
        itemPrice,
        itemMaxPrice,
        flashPrice: itemPrice - 2,
        flashMaxPrice: itemMaxPrice - 2,
    };
}

function add(flashbuyId,itemIds){
    itemIds.forEach(itemId=>{
        let item = items.find(item=>item.id == itemId);

        item.flashbuyId = flashbuyId;

        flashbuyItems.push({
            flashbuyId,
            quantity: utils.randomNum(20, 100),
            soldCount:0,
            ...getData(itemId),
        });
    });
}

add(1,[1,2,3,4,5,7,8]);
add(2,[10,11,12,13,14]);
add(3,[19,20,21,22,23]);
add(4,[29,30,31]);
add(5,[32,33]);
add(6,[9,15,16]);
add(7,[17,18]);
add(8,[24,25,26]);
add(9,[27,28]);

let shops = require('./shop');
flashbuyItems.forEach(item=>{
    item.shopId = shops[0].id;
});

module.exports = flashbuyItems;