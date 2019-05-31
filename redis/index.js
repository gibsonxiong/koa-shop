const redis = require('redis');
const Promise = require('bluebird');
const config = require('../config');
Promise.promisifyAll(redis.RedisClient.prototype);
Promise.promisifyAll(redis.Multi.prototype);

const redisClient = redis.createClient(config.redis);

// 记录redis错误信息
redisClient.on("error", function (err) {
    console.error("Error " + err.toString());
});

// async function test() {
//     await redisClient.setAsync("key", "cao", );
//     let a = await redisClient.getAsync("key");

//     console.log(a);
// }


// test();


module.exports = redisClient;