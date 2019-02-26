exports.getDayStartTime = function(date = new Date()){
    return new Date(+new Date(date.toLocaleDateString()));
}

exports.getDayEndTime = function(date = new Date()){
    return new Date(new Date(date.toLocaleDateString()).getTime() + 24 * 60 * 60 * 1000 - 1);
}