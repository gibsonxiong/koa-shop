// const utils = require('./utils');

// async function test(){
//     try{
//         await utils.download('http://img.alicdn.com/imgextra/i4/2296669517/O1CN012KApp8zXvIMUYrx_!!2296669517.jpg','upload/1.jpg');
//         console.log('ok');
//     }catch(err){
//         console.log(err);
//     }
// }

// test();


/////////////////test2
// let getEntries = require('./utils/getEntries');


// let a = getEntries('./routes/*.js','.js');



//////////////test3
// var jwt = require('jsonwebtoken');
// var token = jwt.sign({ foo: 'bar1' }, 'shhhhh');

// var decoded = jwt.verify(token, 'shhhhh');
// console.log(decoded.foo);


////////////test4 上传图片到oss
// let oss = require('./utils/oss');
// let path = require('path');

// async function put () {
//   try {
//     let result = await oss.put('object-name', path.resolve(__dirname,'./app.js'));
//     console.log(result);
//   } catch (e) {
//     console.log(e);
//   }
// }

// put();
