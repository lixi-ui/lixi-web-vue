### 介绍

### css 加载说明
### 需要安装的npm包 sass,sass-loader,style-loader,css-loader

```sh
  # 安装
  npm install sass sass-loader style-loader css-loader --save-dev
```

### webpack 配置

```js
  var config = {
    // ...
    module: {
      rules: [
        // ...
        {
          test: /\.(scss|css)$/,
          use: [
            "style-loader",
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
    }
  }
```

### 为什么要使用sass?

1. 更好编写和管理样式表, 页面的风格一致

```scss
  @use "sass:map";
  /* Color 定义全局颜色样式
  -------------------------- */
  $--colors: () !default;
  $--colors: map.deep-merge(
    (
      'white': #ffffff,
      'black': #000000,
      'primary': (
        'base': #fb6638,
      ),
      'success': (
        'base': #67c23a,
      ),
      'warning': (
        'base': #e6a23c,
      ),
      'danger': (
        'base': #f56c6c,
      ),
      'error': (
        'base': #f56c6c,
      ),
      'info': (
        'base': #909399,
      ),
    ),
    $--colors
  );

  $--color-white: map.get($--colors, 'white') !default;
  $--color-black: map.get($--colors, 'black') !default;
  $--color-primary: map.get($--colors, 'primary', 'base') !default;
  $--color-success: map.get($--colors, 'success', 'base') !default;
  $--color-warning: map.get($--colors, 'warning', 'base') !default;
  $--color-danger: map.get($--colors, 'danger', 'base') !default;
  $--color-error: map.get($--colors, 'error', 'base') !default;
  $--color-info: map.get($--colors, 'info', 'base') !default;

```

2. 共用的东西，规划成一个可重用块，只需要定义一次,然后引用到需要的地方即可

```scss
  @mixin default-type { // 定义一个可重用块样式
    margin-bottom: 20px;
    font-size: 14px;
    line-height: 1.5;
  }
  p {
      @include default-type; // 引用块样式
  }
  footer {
      @include default-type; // 引用块样式
  }
```


### 代码中使用的是 bem 命名

1. b - block 块

2. e - element 元素

3. m - modifier 修饰符

```scss
  @include b(input) { // lx-input 块
    @include e(icon) { // input中的icon lx-input__icon
      color: #ddd;
    }
    @include m(small) { // 小型的 input lx-input--small
      font-size: 14px;
    }
  }
  // 最终解析为下面样式
  .lx-input .lx-input__icon {
    color: #ddd;
  }
  .lx-input .lx-input--small {
    font-size: 14px;
  }
```