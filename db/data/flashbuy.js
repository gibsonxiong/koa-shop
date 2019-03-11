let registerStartTime = new Date(`2019-3-9 00:00:00`);
let registerEndTime = new Date(`2019-3-9 23:59:59`);

function getArr(dd,id) {
    return [
        {
            id: id,
            registerStartTime,
            registerEndTime,
            startTime: new Date(`2019-3-${dd} 08:00:00`),
            endTime: new Date(`2019-3-${dd+3} 08:00:00`)
        },
        {
            id: id +1,
            registerStartTime,
            registerEndTime,
            startTime: new Date(`2019-3-${dd} 12:00:00`),
            endTime: new Date(`2019-3-${dd+3} 12:00:00`)
        },
        {
            id: id +2,
            registerStartTime,
            registerEndTime,
            startTime: new Date(`2019-3-${dd} 18:00:00`),
            endTime: new Date(`2019-3-${dd+3} 18:00:00`)
        },
    ];
}

module.exports = [
    ...getArr(11,1),
    ...getArr(12,4),
    ...getArr(13,7),
]