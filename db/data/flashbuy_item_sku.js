let items = require('./item');
let skus = require('./sku');
let flashbuyItems = require('./flashbuy_item');

let flashbuyItemSkus = [];

flashbuyItems.forEach(flashbuyItem=>{
    let _skus = skus.filter(sku=>sku.itemId == flashbuyItem.itemId);

    _skus.forEach(_sku=>{
        flashbuyItemSkus.push({
            flashbuyItemId:flashbuyItem.itemId,
            price: _sku.price,
            flashPrice: _sku.price - 2
        });
    });
    
});


module.exports = flashbuyItemSkus;