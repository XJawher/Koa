const Koa = require('koa');
const app = new Koa();
const router = require('./router/router');
// const socket = require('./module/socket');
const middleware = require('./middleware/middleware');
const bodyParser = require('koa-bodyparser');
// socket.io.attach(app);
app.use(bodyParser());
app.use(middleware.setParam());
app.use(middleware.logger());
// //app.use(middleware.checkKey());
// app.use(middleware.syncStatus());
// app.use(middleware.filterRequest());
// app.use(middleware.compressResponse());
app.use(router.routes());
app.use(router.allowedMethods());
app.listen(3456);
console.log(`server is running on localhost:3456`);