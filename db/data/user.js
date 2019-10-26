let users = [{
    id: 1,
    phone: '13686004518',
    password: '$2b$10$cnI4OoSIPKLI6Wsj.7hajelHwGnMPPUKMFU1aO.DpxGETi8iJn5Ra',
    nickname: 'gibsonxiong'
},
{
    id: 2,
    phone: '13686004510',
    password: '$2b$10$cnI4OoSIPKLI6Wsj.7hajelHwGnMPPUKMFU1aO.DpxGETi8iJn5Ra',
    nickname: 'xiaolx'
},
{
    id: 3,
    phone: '13686004511',
    password: '$2b$10$cnI4OoSIPKLI6Wsj.7hajelHwGnMPPUKMFU1aO.DpxGETi8iJn5Ra',
    nickname: 'xiaolx1'
},
{
    id: 4,
    phone: '13686004512',
    password: '$2b$10$cnI4OoSIPKLI6Wsj.7hajelHwGnMPPUKMFU1aO.DpxGETi8iJn5Ra',
    nickname: 'xiaolx2'
},
{
    id: 5,
    phone: '13686004513',
    password: '$2b$10$cnI4OoSIPKLI6Wsj.7hajelHwGnMPPUKMFU1aO.DpxGETi8iJn5Ra',
    nickname: 'xiaolx3'
},
{
    id: 6,
    phone: '13686004514',
    password: '$2b$10$cnI4OoSIPKLI6Wsj.7hajelHwGnMPPUKMFU1aO.DpxGETi8iJn5Ra',
    nickname: 'xiaolx4'
},{
    id: 7,
    phone: '13686004515',
    password: '$2b$10$cnI4OoSIPKLI6Wsj.7hajelHwGnMPPUKMFU1aO.DpxGETi8iJn5Ra',
    nickname: 'xiaolx5'
},{
    id: 8,
    phone: '13686004516',
    password: '$2b$10$cnI4OoSIPKLI6Wsj.7hajelHwGnMPPUKMFU1aO.DpxGETi8iJn5Ra',
    nickname: 'xiaolx6'
},{
    id: 9,
    phone: '13686004517',
    password: '$2b$10$cnI4OoSIPKLI6Wsj.7hajelHwGnMPPUKMFU1aO.DpxGETi8iJn5Ra',
    nickname: 'xiaolx7'
},{
    id: 10,
    phone: '13686004518',
    password: '$2b$10$cnI4OoSIPKLI6Wsj.7hajelHwGnMPPUKMFU1aO.DpxGETi8iJn5Ra',
    nickname: 'xiaolx8'
},{
    id: 11,
    phone: '13686004519',
    password: '$2b$10$cnI4OoSIPKLI6Wsj.7hajelHwGnMPPUKMFU1aO.DpxGETi8iJn5Ra',
    nickname: 'xiaolx9'
}
];

let shops = require('./shop');
users.forEach(item=>{
    item.shopId = shops[0].id;
});

module.exports = users;