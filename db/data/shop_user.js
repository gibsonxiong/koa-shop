let shops = require('./shop');

let shop_users = [
    {
        id:1,
        shopId:shops[0].id,
        phone:'13686004518',
        password: '$2b$10$cnI4OoSIPKLI6Wsj.7hajelHwGnMPPUKMFU1aO.DpxGETi8iJn5Ra',
        nickname: shops[0].name + '的管理员'
    }
]


module.exports = shop_users;