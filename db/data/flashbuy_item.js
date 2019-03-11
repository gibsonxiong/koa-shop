let items = require('./item');
let skus = require('./sku');

let flashbuyItems = [];

function getData(itemId) {
    let item = items.find(item=>item.id == itemId);
    let itemPrice = Math.min( ...skus.filter(sku=>sku.itemId == itemId).map(sku=>sku.price) );
    return {
        itemId: item.id,
        itemImg: item.imgList.split(',')[0],
        itemName: item.name,
        itemPrice,
        flashPrice: itemPrice - 2,
    };
}

function add(flashbuyId,itemIds){
    itemIds.forEach(itemId=>{
        let item = items.find(item=>item.id == itemId);

        item.flashbuyId = flashbuyId;

        flashbuyItems.push({
            flashbuyId,
            quantity: 100,
            soldCount:30,
            ...getData(itemId),
        });
    });
}

add(1,[1,2,3,4,5,7,8,9]);
add(2,[10,11,12,13,14,15,16,17,18]);
add(3,[19,20,21,22,23,24,25,26,27,28]);
add(4,[29,30,31]);
add(5,[32,33,34,35]);

module.exports = flashbuyItems;