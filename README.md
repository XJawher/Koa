## a test server of koa
## 前端调用后端的接口
现在遇到一个问题:我前端做好的api,怎么和后端已经做好的api进行通信
问题的解决:是因为 Nginx 的原因,首先需要 Nginx 进行反向代理才行,在反向代理的时候需要在 /usr/local/etc/nginx/nginx.conf 中做配置,解决在 localhost:3000 下访问 localhost:3456 下的后端代码的问题,需要在 conf 文件中指定 html 的路径,以及需要监听的 8333 端口,以及需要代理的 api 的 localhost:3456/api 的代理端口
## 接收参数
问题:前端使用 post 或着 get 方法请求后端的接口,接口可以调用通过,但是使用 get 或者 post 的时候传递参数后端没有办法正常接收,不知道是 fetch 的原因还是什么原因,需要解决
解决:不是因为 fetch 的原因,是因为自己在做的时候没有做好参数的取值,之前的项目是因为在传参数之前做了一层封装,将接收的参数做了封装,这样在获取的时候就不再需要做多余的取值了.而在原生的koa中参数的获取是和项目的不一样的,原生的 get 和 post 的参数获取的值分别是  `ctx.method.toLowerCase() === 'get' ? ctx.query : ctx.request.body` 在这两个参数中,而在项目中这个是做了封装的,把所有的参数都做了封装,做成了 `ctx.param`
## add logger
添加一个操作的中间件,每一次请求数据的时候打印日志
