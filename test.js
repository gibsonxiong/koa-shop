const utils = require('./utils');

async function test(){
    try{
        await utils.download('http://img.alicdn.com/imgextra/i4/2296669517/O1CN012KApp8zXvIMUYrx_!!2296669517.jpg','upload/1.jpg');
        console.log('ok');
    }catch(err){
        console.log(err);
    }
}

test();
