# 总览

职场小威 v1.0.0

* admin/任意密码
* editor/任意密码

## 相关项目

## 功能

```txt

```

## 前序准备

## 目录结构

本项目已经为你生成了一个完整的开发框架，下面是整个项目的目录结构。

``` bash
├── mock                       # mock 服务器 与 模拟数据
├── public                     # 静态资源 (会被直接复制)
│   │── favicon.ico            # favicon图标
│   │── manifest.json          # PWA 配置文件
│   └── index.html             # html模板
├── src                        # 源代码
│   ├── api                    # 所有请求
│   ├── assets                 # 主题 字体等静态资源 (由 webpack 处理加载)
│   ├── components             # 全局组件
│   ├── directive              # 全局指令
│   ├── filters                # 全局过滤函数
│   ├── icons                  # svg 图标
│   ├── layout                 # 全局布局
│   ├── pwa                    # PWA service worker 相关的文件
│   ├── router                 # 路由
│   ├── store                  # 全局 vuex store
│   ├── styles                 # 全局样式
│   ├── utils                  # 全局方法
│   ├── views                  # 所有页面
│   ├── App.vue                # 入口页面
│   ├── main.js                # 入口文件 加载组件 初始化等
│   ├── settings.ts            # 设置文件
│   └── shims.d.ts             # 模块注入
├── tests                      # 测试
├── .circleci/                 # 自动化 CI 配置
├── .browserslistrc            # browserslistrc 配置文件 (用于支持 Autoprefixer)
├── .editorconfig              # 编辑相关配置
├── .env.xxx                   # 环境变量配置
├── .eslintrc.js               # eslint 配置
├── babel.config.js            # babel-loader 配置
├── cypress.json               # e2e 测试配置
├── jest.config.js             # jest 单元测试配置
├── package.json               # package.json 依赖
├── postcss.config.js          # postcss 配置
├── tsconfig.json              # typescript 配置
└── vue.config.js              # vue-cli 配置
```

## 如何设置以及启动项目

### 安装依赖

```bash
yarn install
```

### 启动本地开发环境（自带热启动）

```bash
yarn serve
```

### 构建生产环境 (自带压缩)

```bash
yarn build:prod
```

### 代码格式检查以及自动修复

```bash
yarn lint
```

### 运行单元测试

```bash
yarn test:unit
```

### 运行端对端测试

```bash
yarn test:e2e
```

### 自动生成 svg 组件

```bash
yarn run svg
```

### 自定义 Vue 配置

请看 [Configuration Reference](https://cli.vuejs.org/config/).

## 浏览器支持

Modern browsers and Internet Explorer 10+.

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari |
| --------- | --------- | --------- | --------- |
| IE10, IE11, Edge| last 2 versions| last 2 versions| last 2 versions
