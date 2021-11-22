### build

### 打包优化
### 使用去分析代码 webpack-bundle-analyzer

```js

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin; // 可以分析出打包后的文件大小，
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); // 抽出样式, 会大量减小打包后js的大小

let externals = [ // 使用 cdn 进行外链，可以减小打包后的文件的大小
  {
    vue: {
      root: 'Vue',
      commonjs: 'vue',
      commonjs2: 'vue',
    },
  }
]

var config = {
  // ...
  mode:"production", // 使用生成模式
  module: {
    rules: [
      // ...
      {
        test: /\.(scss|css)$/,
        use: [
          MiniCssExtractPlugin.loader, // MiniCssExtractPlugin 的 loader
          {
            loader: "css-loader",
            options: {
              url: false
            }
          },
          'sass-loader' // 处理 sass 语法
        ]
      }
    ]
  },
  plugins:[
    new MiniCssExtractPlugin({ // 抽离样式插件
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
    new BundleAnalyzerPlugin()
  ],
  externals
}

```

### index.html 
```html
  <!-- 判断是否为 production 生产模式。使用远程 vue -->
  <% if (process.env.NODE_ENV === 'production') { %>
      <script src="https://unpkg.com/vue@next"></script>
  <% } %>
```

### 路由配置中 router.config.js，组件使用 import 引入。
```js
  // 使用 import 可以将代码分割,异步加载
  component: () => import(/* webpackChunkName: "doc" */ `../../../src/components/${item.name}/doc/index.vue`)
```

