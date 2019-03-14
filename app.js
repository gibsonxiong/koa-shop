const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const cors = require('koa2-cors');
const session = require('koa-session');
const sendRes = require('./middlewares/sendRes');
const fsUtils = require('./utils/fs-utils');
const glob = require('glob');
const path = require('path');
const Router = require('koa-router');

const db = require('./db');
const robot = require('./robot');

// robot.init();

// error handler
onerror(app)

// middlewares
app.use(cors());
app.use(sendRes());
app.use(bodyparser({
  enableTypes: ['json', 'form', 'text']
}))
app.use(json())

app.keys = ['newest secret key', 'older secret key'];
app.use(session({
  key: 'koa:sess', /** (string) cookie key (default is koa:sess) */
  /** (number || 'session') maxAge in ms (default is 1 days) */
  /** 'session' will result in a cookie that expires when session/browser is closed */
  /** Warning: If a session cookie is stolen, this cookie will never expire */
  maxAge: 86400000,
  autoCommit: true, /** (boolean) automatically commit headers (default true) */
  overwrite: true, /** (boolean) can overwrite or not (default true) */
  httpOnly: true, /** (boolean) httpOnly or not (default true) */
  signed: true, /** (boolean) signed or not (default true) */
  rolling: false, /** (boolean) Force a session identifier cookie to be set on every response. The expiration is reset to the original maxAge, resetting the expiration countdown. (default is false) */
  renew: false, /** (boolean) renew session when session is nearly expired, so we can always keep user logged in. (default is false)*/
}, app));
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

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



// 加载路由
glob.sync(path.resolve(__dirname,'./routers/*.js')).forEach(match=>{
  let route = require(match);
  app.use(route.routes(), route.allowedMethods());
});

// 加载后台路由
glob.sync(path.resolve(__dirname,'./adminRouters/*.js')).forEach(match=>{
  let router = require(match);
  let temp = new Router();
  temp.use('/admin', router.routes(), router.allowedMethods());
  app.use(temp.routes());
});


// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app;


