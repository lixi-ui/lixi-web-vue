### 介绍

### publish 发包

### 到 npm 官网注册账号 https://www.npmjs.com/

### 登录注册的账号

```sh
  ## 登录账号， 输入账号，输入密码, 输入邮箱
  npm login
```

### package.json 配置库的名称
```js
  {
    "name": "lixi", // 名称
    "version": "0.0.1", // 版本
    "description": "", // 描述
    "main": "lib/index.js", // 入口文件
    "scripts": {
      "lib": "node-dev script/webpack.lib.js", // 打包整个组件库
      "lib:cjs": "node-dev script/webpack.lib.cjs.js", // 单个组件打包
    },
    "keywords": [], // 关键字
    "author": "", // 作者
    "license": "MIT" // 协议
  }
```

#### 库的打包 webpack.lib.js

```js
// script/webpack.lib.js
var path = require("path");
var webpack = require("webpack");

const { VueLoaderPlugin, default: loader } = require('vue-loader'); // 使用 vue-loader 解析 .vue 文件

let externals = [ 
  {
    vue: { // 不要将 vue 打包到库中
      root: 'Vue',
      commonjs: 'vue',
      commonjs2: 'vue',
    },
  }
]

var config = {
  mode:"production", // 生产模式
  entry: path.resolve(process.cwd() , './src/index.lib.js'),
  output: {
    path: path.resolve(__dirname, '../lib'),// 输出到 lib
    publicPath: '/',
    filename: 'index.js', // 文件名为 index.js
    libraryTarget: 'umd',// 生成 umd 模式
    library: 'LixiUiVue', // 库的名称
    umdNamedDefine: true,
    globalObject: 'typeof self !== \'undefined\' ? self : this',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.vue', '.json'], // 识别后缀
    alias: {
      '@lixi': path.resolve(process.cwd() , './src'), // 别称
    },
  },
  module: {
    rules: [
      {
        test: /\.(jsx?)$/,
        loader: 'babel-loader', // jsx 使用 babel-loader 解析
        options: {
          plugins: [
            "@vue/babel-plugin-jsx" // 解析jsx语法
          ]
        }
      },
      {
        test: /\.(tsx?)$/,
        loader: 'babel-loader',
        options:{
          presets: [
            [
              "@babel/preset-typescript", // 解析 ts 语法
              {
                allExtensions: true,
                isTSX: true
              }
            ]
          ],
          plugins: [
            "@vue/babel-plugin-jsx" // 解析 jsx 语法
          ]
        }
      },
      {
        test: /\.vue$/,
        use: 'vue-loader', // 解析 vue-loader
      },
      {
        test: /\.(scss|css)$/,
        use: [
          "style-loader", // 解析 style
          {
            loader: "css-loader",// 解析 css
            options: {
              url: false
            }
          },
          'sass-loader'// 解析 sass
        ]
      },
      {
        test: /\.(svg|otf|ttf|woff2?|eot|gif|png|jpe?g)(\?\S*)?$/,
        use: [
          {
            loader: 'url-loader', // 解析 url
            options: {
              limit: 30,
              name: path.posix.join("static", 'img/[name].[ext]'),
              esModule: false
            }
          }
        ]
      }
    ]
  },
  plugins:[
    new VueLoaderPlugin() // 解析 vue
  ],
  externals
}

webpack(config, function (err) {
  if(err){
    console.log(err)
  } else {
    console.log("build ok")
  }
})
```

### 打包命令

```sh
  # 打包命令， 生成 lib 文件夹
  npm run lib
```

### 修改 package.json 上的 version

```js
  {
    "name": "lixi", // 名称
    "version": "0.0.1", // 版本 每次发包都要修改 version
    "description": "", // 描述
    "main": "lib/index.js", // 入口文件
    "scripts": {
      "lib": "node-dev script/webpack.lib.js", // 打包整个组件库
      "lib:cjs": "node-dev script/webpack.lib.cjs.js", // 单个组件打包
    },
    "keywords": [], // 关键字
    "author": "", // 作者
    "license": "MIT" // 协议
  }
```

### npm 的发布

```sh
  ## 第一次发版，库名不能被占用，版本每次都要修改
  npm publish
  ## 发版成功后 在其它的项目中使用
  npm install lixi --save
```


### 详情请看 [lxi-ui](https://github.com/lixi-ui/lixi-ui-vue)
