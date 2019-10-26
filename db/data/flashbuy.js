let registerStartTime = new Date(`2019-3-9 00:00:00`);
let registerEndTime = new Date(`2019-3-9 23:59:59`);

function getArr(dd, id) {
    let publicTime = new Date(`2019-3-${dd - 1} 00:00:00`);
    return [
        {
            id: id,
            registerStartTime,
            registerEndTime,
            publicTime,
            startTime: new Date(`2019-3-${dd} 08:00:00`),
            endTime: new Date(`2019-3-${dd + 3} 08:00:00`)
        },
        {
            id: id + 1,
            registerStartTime,
            registerEndTime,
            publicTime,
            startTime: new Date(`2019-3-${dd} 12:00:00`),
            endTime: new Date(`2019-3-${dd + 3} 12:00:00`)
        },
        {
            id: id + 2,
            registerStartTime,
            registerEndTime,
            publicTime,
            startTime: new Date(`2019-3-${dd} 18:00:00`),
            endTime: new Date(`2019-3-${dd + 3} 18:00:00`)
        },
    ];
}

let  flashbuys = [
    ...getArr(12, 1),
    ...getArr(13, 4),
    ...getArr(14, 7),
]

let shops = require('./shop');
flashbuys.forEach(item=>{
    item.shopId = shops[0].id;
});

module.exports = flashbuys;