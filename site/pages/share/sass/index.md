### 介绍

### web ui 的展示

### 本项目中的ts. 需要 npm 包是 ts-loader. typescript.

### 配置 tsconfig.json 
### 更多详情请看 typescript 官网
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

### 前面说的是 项目的启动
### 项目中的使用 直接看代码 从代码中学

### 为什么要使用 typescript。

### 项目中的规划是什么呢？ 简单说下最常用的。 你们不是很了解的。

```ts
  function <T>fn(args : T): T {
    return args
  }
  fn<string>('123')
  fn<number>(123)
```

### 规范入参的数据类型
