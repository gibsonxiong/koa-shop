const axios = require('axios');
const fs = require('fs');

exports.getDayStartTime = function (date = new Date()) {
    return new Date(+new Date(date.toLocaleDateString()));
}

exports.getDayEndTime = function (date = new Date()) {
    return new Date(new Date(date.toLocaleDateString()).getTime() + 24 * 60 * 60 * 1000 - 1);
}

exports.adjustDate = function (date, type, num) {
    let adjust = 0;

    if (type == 'd') {
        adjust = 24 * 60 * 60 * 1000 * num;
    } else if (type == 'h') {
        adjust = 60 * 60 * 1000 * num;
    } else if (type == 'm') {
        adjust = 60 * 1000 * num;
    } else if (type == 's') {
        adjust = 1000 * num;
    }

    return new Date(
        date.getTime() + adjust
    );
}

exports.randomNum = function (min, max) {
    return parseInt(Math.random() * (max - min + 1) + min, 10);

}

exports.genOrderNo = function () {
    var outTradeNo = ""; //订单号
    for (var i = 0; i < 6; i++) //6位随机数，用以加在时间戳后面。
    {
        outTradeNo += Math.floor(Math.random() * 10);
    }
    return new Date().getTime() + outTradeNo;
}

exports.genSmsCode = function(){
    var smsCode = ""; //订单号
    for (var i = 0; i < 6; i++) //6位随机数，用以加在时间戳后面。
    {
        smsCode += Math.floor(Math.random() * 10);
    }
    return smsCode;
}

exports.uniqueArray = function (array) {
    var temp = {},
        r = [],
        len = array.length,
        val, type;
    for (var i = 0; i < len; i++) {
        val = array[i];
        type = typeof val;
        if (!temp[val]) {
            temp[val] = [type];
            r.push(val);
        } else if (temp[val].indexOf(type) < 0) {
            temp[val].push(type);
            r.push(val);
        }
    }
    return r;
}

exports.download = function (input, output) {
    return new Promise(async (resolve, reject) => {
        try {
            let res = await axios.get(input, {
                responseType: "arraybuffer",
            });

            fs.writeFile(output, res.data, function (err) {
                if (err) {
                    reject(err);
                }
                resolve();
            });
        } catch (err) {
            reject(err);
        }
    });
}