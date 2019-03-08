const Core = require('@alicloud/pop-core');

var client = new Core({
    accessKeyId: '<accessKeyId>',
    accessKeySecret: '<accessSecret>',
    endpoint: 'https://dysmsapi.aliyuncs.com',
    apiVersion: '2017-05-25'
});


exports.sendSms = function (phone, smsCode) {

    var params = {
        "PhoneNumbers": phone,
        "SignName": "1",
        "TemplateCode": "SMS_159770855",
        "TemplateParam": JSON.stringify({
            code: smsCode
        })
    }

    var requestOption = {
        method: 'POST'
    };

    return new Promise((resolve, reject) => {
        client.request('SendSms', params, requestOption).then((result) => {
            resolve(result);
        }, (err) => {
            reject(err);
        })
    });

}

// async function test(){
//     try{
//         let res = await exports.sendSms('13686004518','123456');
//         console.log(res);
//     }catch(err){
//         console.log(err);
//     }
// }

// test();