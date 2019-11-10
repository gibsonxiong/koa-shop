const moment = require('moment');

function getStartDay(){
    return moment().startOf('day');
}

let publicTime = getStartDay().subtract(1,'days');
let registerStartTime = getStartDay();
let registerEndTime = moment().endOf('day');
let id = 1;

function getArr(index) {
    return [
        {
            id: id++,
            registerStartTime,
            registerEndTime,
            publicTime,
            startTime: getStartDay().add(index,'days').add(8,'hours'),
            endTime: getStartDay().add(index + 3,'days').add(8,'hours')
        },
        {
            id: id++,
            registerStartTime,
            registerEndTime,
            publicTime,
            startTime: getStartDay().add(index,'days').add(12,'hours'),
            endTime: getStartDay().add(index + 3,'days').add(12,'hours')
        },
        {
            id: id++,
            registerStartTime,
            registerEndTime,
            publicTime,
            startTime: getStartDay().add(index,'days').add(18,'hours'),
            endTime: getStartDay().add(index + 3,'days').add(18,'hours')
        },
    ];
}



let  flashbuys = []

for(let i =0;i<3;i++){
    flashbuys = flashbuys.concat(getArr(i));
}

let shops = require('./shop');
flashbuys.forEach(item=>{
    item.shopId = shops[0].id;
});

console.log(flashbuys)

module.exports = flashbuys;