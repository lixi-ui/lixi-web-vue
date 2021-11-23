### 介绍

### 使用 ssh 登录服务器

```sh
  #  输入外网 ip 以及 密码 登录服务器
  ssh ubuntu@*.*.*.*
```

### ubuntu 下 nginx 的安装及下载。

```sh
  ### apt update 更新包
  apt update
  ### 更新完成之后 下载 nginx
  apt install nginx
  ### 启动 nginx 服务
  service nginx start
```
```sh
  ## 切换到 nginx 配置项
  cd /etc/nginx/sites-enabled/
  ## 修改 nginx 配置 . 使用最高权限 sudo 修改 default
  sudo vim default
```

### 修改 /etc/nginx/sites-enabled/default， 添加加代理
```sh
  server {
    listen 80 default_server;   ## 默认80端口
    listen [::]:80 default_server; ## ip6 默认80端口
    root /var/www/html; ## 默认根路径
    index index.html index.htm index.nginx-debian.html; ## 默认入口文件
    server_name _;
    location / {
      try_files $uri $uri/ =404; 
    }
    location /qms/ { ## 匹配地址url /qms/
      proxy_pass http://0.0.0.0:8013; ## 代理到端口为 8013 的本地服务器 
    }

    location /vue/ { ## 匹配地址url /vue/
      proxy_pass http://0.0.0.0:8018/;  ## 代理到端口为 8018 的本地服务器 
    }

    location /web/ { ## 匹配地址url /vue/
      proxy_pass http://0.0.0.0:8020/; ## 代理到端口为 8020 的本地服务器 
    }

    location /material/ {  ## 匹配地址url /material/
      proxy_pass http://0.0.0.0:8022/; ## 代理到端口为 8022 的本地服务器 
    }

    location /ruoyi/ {  ## 匹配地址url /ruoyi/
      proxy_pass http://0.0.0.0:8024/; ## 代理到端口为 8024 的本地服务器 
    }
  }
```
### 重启配置 

```sh
  ## 重新加载配置
  nginx -s reload
```

### lixi-ui.cn/web/ 就能代理到 http://0.0.0.0:8020/

### 项目打包时 publicPath 要改为 /web/

```js
  //script\webpack.build.js
  var config = {
    // ...
    output: {
      path: path.resolve(process.cwd() , './dist'),
      filename: 'index.js',
      publicPath: '/web/', // 公共路径, 要与部署的环境相关
      environment: {
        arrowFunction: false
      }
    },
  }
```
