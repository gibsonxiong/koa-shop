let propvalues = [{
    id: 1,
    propnameId: 1,
    name: '默认',
},
{
    id: 2,
    propnameId: 2,
    name: '红色'
},
{
    id: 3,
    propnameId: 2,
    name: '白色'
},
{
    id: 4,
    propnameId: 3,
    name: 'S'
},
{
    id: 5,
    propnameId: 3,
    name: 'M'
},
{
    id: 6,
    propnameId: 3,
    name: 'L'
}, {
    id: 7,
    propnameId: 4,
    name: '小'
},
{
    id: 8,
    propnameId: 4,
    name: '大'
}
];

let shops = require('./shop');
propvalues.forEach(item=>{
    item.shopId = shops[0].id;
});

module.exports = propvalues;