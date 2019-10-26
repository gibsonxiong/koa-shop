let propnames = [
    {
        id: 1,
    name: '常规'
    },
{
    id: 2,
    name: '颜色分类'
}, {
    id: 3,
    name: '尺码'
}, {
    id: 4,
    name: '规格'
}];


let shops = require('./shop');
propnames.forEach(item=>{
    item.shopId = shops[0].id;
});


module.exports = propnames;