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