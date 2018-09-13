## win7 端口占用然后杀掉进程
netstat -aon | findstr 8080 

taskkill -PID <进程号> -F //强制关闭<进程号>进程  