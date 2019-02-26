const multer = require('koa-multer');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/upload/temp')
    },
    filename: function (req, file, cb) {
      cb(null,  Date.now()  + '-' + file.originalname )
    }
  })
  
exports.upload =  multer({ storage: storage });

exports.getUploadPath = function(path){
  return 'http://192.168.3.168:3001/upload/temp/' + path;
}