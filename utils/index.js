exports.getDayStartTime = function (date = new Date()) {
    return new Date(+new Date(date.toLocaleDateString()));
}

exports.getDayEndTime = function (date = new Date()) {
    return new Date(new Date(date.toLocaleDateString()).getTime() + 24 * 60 * 60 * 1000 - 1);
}

exports.genOrderNo = function () {
    var outTradeNo = ""; //订单号
    for (var i = 0; i < 6; i++) //6位随机数，用以加在时间戳后面。
    {
        outTradeNo += Math.floor(Math.random() * 10);
    }
    return new Date().getTime() + outTradeNo;
}

exports.uniqueArray = function (array){
    var temp = {}, r = [], len = array.length, val, type;
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