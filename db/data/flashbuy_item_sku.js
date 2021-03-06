let skus = require('./sku');
let flashbuyItems = require('./flashbuy_item');

let flashbuyItemSkus = [];

flashbuyItems.forEach(flashbuyItem=>{
    let _skus = skus.filter(sku=>sku.itemId == flashbuyItem.itemId);

    _skus.forEach(_sku=>{
        flashbuyItemSkus.push({
            flashbuyItemId:flashbuyItem.itemId,
            skuId:_sku.id,
            price: _sku.price,
            flashPrice: _sku.price - 2
        });
    });
    
});

let shops = require('./shop');
flashbuyItemSkus.forEach(item=>{
    item.shopId = shops[0].id;
});


module.exports = flashbuyItemSkus;