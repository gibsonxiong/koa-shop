const axios = require('axios');
var querystring = require('querystring');
var urlencode = require('urlencode');
const config = require('../config');

// //聚合
// exports.sendSms = async function (phone, smsCode) {

//     var queryData = querystring.stringify({
//         "mobile": phone,  // 接受短信的用户手机号码
//         "tpl_id": 141129,  // 您申请的短信模板ID，根据实际情况修改
//         "tpl_value": `#code#=${smsCode}`,  // 您设置的模板变量，根据实际情况修改
//         "key": "793885419476d29a18f98281612ab2f9",  // 应用APPKEY(应用详细页查询)
//     });

//     var queryUrl = 'http://v.juhe.cn/sms/send?' + queryData;

//     let res = (await axios.get(queryUrl)).data;

//     return res.error_code == 0;


// }

//全球
exports.sendSms = async function (phone, smsCode,type) {
    let template = `您的验证码是${smsCode}，有效时间为5分钟，请勿告知他人！`;
    let url = `https://api.globalsent.com/send?access_key=${config.sms.access_key}&mobile=86${phone}&content=${urlencode(template)}`;

    let res = (await axios.get(url)).data;

    return res.code === "0000";
}

// async function test(){
//     try{
//         let res = await exports.sendSms('13686004518','111111');
//         console.log(res);
//     }catch(err){
//         console.log(err);
//     }
// }

// test();