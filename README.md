## a test server of koa
## 前端传递参数给后端
现在遇到一个问题:我前端做好的api,怎么和后端已经做好的api进行通信
问题的解决:是因为 Nginx 的原因,首先需要 Nginx 进行反向代理才行,在反向代理的时候需要在 /usr/local/etc/nginx/nginx.conf 中做配置,解决在 localhost:3000 下访问 localhost:3456 下的后端代码的问题,需要在 conf 文件中指定 html 的路径,以及需要监听的 8333 端口,以及需要代理的 api 的 localhost:3456/api 的代理端口