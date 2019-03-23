let OSS = require('ali-oss');

let client = new OSS({
  region: 'oss-cn-beijing',
  accessKeyId: 'LTAILQ5BxNQMT5Rp',
  accessKeySecret: '1uVhrFDK2LqYDmKaiY0gL8DOLGq8PQ',
  bucket: 'vue-shop'
});

module.exports = client;