const Koa = require('koa');
const app = new Koa();
const router = require('./router');
// const socket = require('./module/socket');
// const middleware = require('./middleware');
const bodyParser = require('koa-bodyparser');
const cors = require('koa2-cors');
// socket.io.attach(app);
app.use(bodyParser());
app.use(cors({
    origin: function (ctx) {
            // return "*"; // 允许来自所有域名请求
        return 'http://localhost:3000'; 
    },
    exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
    maxAge: 5,
    credentials: true,
    allowMethods: ['GET', 'POST', 'DELETE'],
    allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
}));
// app.use(middleware.initRequest());
// //app.use(middleware.checkKey());
// app.use(middleware.syncStatus());
// app.use(middleware.filterRequest());
// app.use(middleware.compressResponse());
app.use(router.routes());
app.use(router.allowedMethods());
app.listen(3456);
console.log(`server is running on localhost:3456`);