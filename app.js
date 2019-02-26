const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const cors = require('koa2-cors');
const sendRes = require('./middlewares/sendRes');

const db = require('./db');

// error handler
onerror(app)

// middlewares
app.use(cors());
app.use(sendRes());
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))
app.use(require('koa-static')(__dirname + '/upload'))

app.use(views(__dirname + '/views', {
  extension: 'pug'
}))

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes
let routes = [
  require('./routes/index'),
  require('./routes/user'),
  require('./routes/category'),
  require('./routes/item'),
  require('./routes/shopcart'),
  require('./routes/favorite'),
  require('./routes/order'),
  require('./routes/coupon'),
  require('./routes/rate')
];
routes.forEach(route=>{
  app.use(route.routes(), route.allowedMethods());
})

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app


// exports.getEntries = function (globPath) {
//   var entries = {};
//   /**
//    * 读取src目录,并进行路径裁剪
//    */
//   glob.sync(globPath).forEach(function (entry) {
//     /**
//      * path.basename 提取出用 ‘/' 隔开的path的最后一部分，除第一个参数外其余是需要过滤的字符串
//      * path.extname 获取文件后缀
//      */
//     var basename = path.basename(entry, path.extname(entry), 'router.js') // 过滤router.js
//     // ***************begin***************
//     // 当然， 你也可以加上模块名称, 即输出如下： { module/main: './src/module/index/main.js', module/test: './src/module/test/test.js' }
//     // 最终编译输出的文件也在module目录下， 访问路径需要时 localhost:8080/module/index.html
//     // slice 从已有的数组中返回选定的元素, -3 倒序选择，即选择最后三个
//     // var tmp = entry.split('/').splice(-3)
//     // var pathname = tmp.splice(0, 1) + '/' + basename; // splice(0, 1)取tmp数组中第一个元素
//     // console.log(pathname)
//     // entries[pathname] = entry
//     // ***************end***************
//     entries[basename] = entry
//   });
//   // console.log(entries);
//   // 获取的主入口如下： { main: './src/module/index/main.js', test: './src/module/test/test.js' }
//   return entries;
// }