## typescript的加载

### 本项目中的 `ts` 相关 npm 包 `ts-jest typescript @babel/preset-typescript`
```sh
  ## 安装 typescript 
  npm install ts-jest typescript --save-dev
```

### webpack 中的配置
```js
  // @babel/preset-typescript 将 ts 的代码转化为 js 代码。但是不会校验参数的类型。
  var config = {
    // ...
    module: {
      rules: [
        // ...
        {
          test: /\.(tsx?)$/,
          loader: 'babel-loader',
          use: [
            {
              loader: 'ts-loader', // 将 ts 的代码转化为 js 代码。并且校验参数的类型。
              options: {
                appendTsSuffixTo: [/\.vue$/], // 在.vue文件添加 .ts 后缀
                transpileOnly: true // 执行独立文件输出
              }
            }
          ]
        }
      ]
    }
  }
```

### 配置 tsconfig.json 更多详情请看 typescript 官网(https://www.tslang.cn/)
```json
{
  "compilerOptions": {
    "target": "esnext",
    "module": "esnext",
    "strict": true,
    "jsx": "preserve",
    "moduleResolution": "node",
    "noImplicitAny": false,
    "noImplicitThis": false,
    "baseUrl": ".",
    "allowSyntheticDefaultImports": true,
    "paths": {
      "@lixi/*": ["src/*"],
      "@site/*": ["site/*"]
    },
    "noLib": false,
    "lib": ["ESNext", "DOM"]
  },
  "exclude": [
    "node_modules",
    "node_modules1",
    "material/*",
    "src/components/*",
    "**/*.md",
    "**/*.spec.ts",
    "src/utils/*",
    "src/hooks/*",
    "src/directives/*",
    "src/locale/*",
    "src/tokens/*"
  ],
  "include": ["**/*.ts", "**/*.tsx"]
}
```

### 为什么使用 TypeScript?

1. 与JavaScript相比，TypeScript代码更可靠、更容易重构。这使开发人员可以更轻松地避免错误并进行重写。类型的定义和编译器的引入，可使你避免掉代码中的大多数愚蠢错误。

2. 显式类型使代码可读性更高，所以注意力将会更集中在系统究竟是如何构建的，以及系统的不同部分如何相互作用。在大型系统中，能够在记住上下文的同时抽象出系统的其余部分是很重要的。类型的定义使我们能够做到这一点。

### 简单的泛型。
```ts
  function <T>fn(args : T): T {
    return args
  }
  fn<string>('123') // 这里的 <string> 就是上面个 <T>
  fn<number>(123) // 这里的 <number> 就是上面个 <T>
```
