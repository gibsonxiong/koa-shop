const multer = require('koa-multer');
const path = require('path');
const uploadPath = path.resolve(__dirname,'../public/upload/temp');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, uploadPath);
    },
    filename: function (req, file, cb) {
      cb(null,  Date.now() + '')
    }
  })
  
exports.upload =  multer({ storage: storage });

exports.getUploadPath = function(path){
  return '/upload/temp/' + path;
}

const fs = require('fs');

// 递归创建目录 同步方法
function mkdirsSync(dirname) {
  if (fs.existsSync(dirname)) {
    return true;
  } else {
    if (mkdirsSync(path.dirname(dirname))) {
      fs.mkdirSync(dirname);
      return true;
    }
  }
}

function init(){
  
  
  if(!fs.existsSync(uploadPath)){
    mkdirsSync(uploadPath);
  }
}

init();