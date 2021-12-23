### 安装

#### AdonisJS是一个Node.js框架，因此它要求在您的计算机上安装Node.js。准确地说，我们至少需要Node.js v14的最新版本。

#### 您可以通过运行以下命令来检查Node.js和npm版本。

```sh
  # check node.js version
  node -v
```

#### 如果没有安装Node.js，可以从官方网站下载操作系统的二进制文件。

#### 如果您对命令行感到满意，那么我们建议使用Volta或Node Version Manager在您的计算机上安装和运行Node.js的多个版本。

### 创建一个新的项目

#### 您可以使用`npm init`、`yarn create` 或 `pnpm create` 来创建新项目。这些工具将下载AdonisJS入门包并开始安装过程。

```sh
# npm init
npm init adonis-ts-app@latest hello-world
# yarn create
yarn create adonis-ts-app hello-world
# pnpm create
pnpm create adonis-ts-app hello-world
```

#### 安装过程会提示您进行以下选择。

### 项目结构
#### 您可以在以下项目结构中进行选择。

#### `web`项目结构非常适合创建经典的服务器呈现的应用程序。我们配置了对会话的支持，并安装了AdonisJS模板引擎。

#### `api`项目结构是创建API服务器的理想选择。

#### `slim`项目结构创建了尽可能小的AdonisJS应用程序，除了框架核心之外，不安装任何额外的包。

### 项目名

#### 项目的名称。我们在package.json文件中定义这个提示的值。

### 配置 eslint/prettier

#### 或者，您可以配置eslint/prettier。这两个包都配置了AdonisJS核心团队使用的固执己见的设置。

### 再次配置Webpack

#### 或者，您也可以配置Webpack Encore来捆绑和服务前端依赖项。

#### 请注意，AdonisJS是一个后端框架，不关心前端构建工具。因此，网络包设置是可选的。

### 启动开发服务器

#### 创建应用程序后，可以通过运行以下命令来启动开发服务器。

```sh
  node ace serve --watch
```

#### serve命令启动HTTP服务器，并将TypeScript在内存中编译为JavaScript。

#### -watch 标志旨在监视文件系统的更改，并自动重新启动服务器。

#### 默认情况下，服务器从端口3333(在.env文件)。您可以访问:http://localhost:3333查看欢迎页面。

### 为生产而编译

#### 您必须始终在生产服务器上部署编译后的JavaScript。您可以通过运行以下命令来创建生产版本:

```sh
  node ace build --production
```

#### 编译后的输出被写入生成文件夹。您可以直接运行server.js文件，将光盘刻录到该文件夹中并启动服务器。了解有关TypeScript构建过程的更多信息

```sh
  cd build
  node server.js
```
