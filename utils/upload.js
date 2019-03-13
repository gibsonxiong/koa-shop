const multer = require('koa-multer');
const path = require('path');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.resolve(__dirname,'../public/upload/temp'));
    },
    filename: function (req, file, cb) {
      cb(null,  Date.now()  + '-' + file.originalname )
    }
  })
  
exports.upload =  multer({ storage: storage });

exports.getUploadPath = function(path){
  return '/upload/temp/' + path;
}