let glob = require('glob');
let path = require('path');

exports.getPaths = function (globPath, ext) {
    return glob.sync(path.resolve(__dirname, globPath));
}

exports.getPathMap = function (globPath, ext) {
    var map = {};

    getPathMap(globPath).forEach(function (entry) {

        var basename = path.posix.basename(entry, ext);

        map[basename] = entry;
    });

    return map;
}