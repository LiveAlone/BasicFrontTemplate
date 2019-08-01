# 项目启动配置技术栈

## webpack 打包项目启动

npm 安装 webpack, dev 开发环境启动 
```
mkdir webpack-demo
cd webpack-demo
npm init -y
npm install webpack --save-dev
npm install webpack-cli --save-dev
```

通过 ``` npx webpack ``` 命令， 执行对应的打包工具。 src 编译生成文件到dist

## asset 资源文件依赖加载

通过 style-loader, css-loader 方式加在 ``` npm install --save-dev style-loader css-loader ``` dev 开发环境加在

通过 file-loader 加载load 图片配置文件 ``` npm install --save-dev file-loader ``` 配置png gif, 字体等加载方式

通过 xml-loader, cvs-load 加载不同数据文件 ``` npm install --save-dev csv-loader xml-loader ```

通过 webpack.config.js ouput 方式 ， entry 指定name, output '[name]' 指定生成文件 

html webpack 插件工具 ``` npm install --save-dev html-webpack-plugin ```, 指定html 文件配置路径，title 标题路径。 自动 import js 文件方式。

clean package plugin, ``` npm install --save-dev clean-webpack-plugin ``` 插件方式， 清除 dist 目录配置

generate manifest 配置文件 ``` npm install --save-dev webpack-manifest-plugin ``` 生成对应的 信息文件

## development 配置管理

webpack.config 配置 ``` mode: 'development', ``` 生成的dist 可读文件方式。

``` devtool: 'inline-source-map', ``` 多个配置 打包成一个 bundle.js 打印对应 哪个文件错误信息。

dev 开发环境支持， 不同模式
1. Wathc Mode ``` "watch": "webpack --watch", ``` 监控修改模式, 自动编译方式
2. ``` npm install --save-dev webpack-dev-server ``` dev webpack 开发环境服务模式, 自动展示方式.  start 配置启动命令 ```  ```
```
  devServer: {
    contentBase: DIST_PATH
  },
```
3. ``` npm install --save-dev express webpack-dev-middleware ``` 通过使用中间件 express ， 支持服务端启动方式。 配置 ``` publicPath: '/' ```, 配置 server.js, 配置启动端口，node 方式 运行端口 3000

## code split, js script 业务代码拆分
防止一次load一个过大的文件, code split 方式
1. entry 不同文件, 编译生成不同文件。（！ 但是对于 相同的引用文件, 重复引入, 不够灵活）
2. split code chunk 方式, plugin 插件方式, 支持js 文件拆分
```
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
```
不同的三方插件支持
```
mini-css-extract-plugin: Useful for splitting CSS out from the main application.
bundle-loader: Used to split code and lazy load the resulting bundles.
promise-loader: Similar to the bundle-loader but uses promises.
```

## Cache 缓存文件
客户端通常缓存对应客户端文件， 通过 hash 方式， 重新部署时候
1. output file 生成对应的 [contenthash] hash 文件方式

## production 生产环境， 不同的搭配文件
1. config common dev 不同环境配置
```
webpack.config.js
webpack.common.js
webpack.dev.js
webpack.prod.js
```

## Vue 模块功能化前端配置
vue 配置方式
```
npm install webpack webpack-dev-server vue-loader vue-html-loader css-loader vue-style-loader vue-hot-reload-api vue-template-compiler --save-dev
npm install html-webpack-plugin --save-dev
npm install vue --save
npm install html-webpack-plugin --save-dev
```

## Axios 组件进行 http 请求
``` npm install axios --save ``` 支持http host 的方式，进行域名拦截

## element-ui 通过 UI 组件方式, 数据展示
``` npm install element-ui --save ``` use ElementUi 方式, 对 Component 组件进行数据解析

## vue-router 路由方式, 控制页面的跳转, router 控件方式
导航栏方式， 动态路由导航方式

## vuex 状态数据管理仓库， 不同状态修改， 驱动 View 展示内容
``` npm install vuex --save ```
vue 对于Component 树结构比较深入, 数据之间的交互笔记复杂， vuex 统一维护 state 运行状态.
Vuex 类似全局变量， 但是 只能通过 mutations 方式 修改属性配置。
Vuex store 是一个全局变量, 透传给 继承的所有组件。

1. state 缓存全局使用变量
2. Getter 提供 storeMap 参数, 关系映射方式
3. Mutation MapMutation 方式, 提供函数映射方式, 
4. action 提交异步 Mutation 任务, 

## eslint 代码格式化组件
通过 ``` npm install eslint eslint-config-standard eslint-friendly-formatter eslint-loader eslint-plugin-html eslint-plugin-import eslint-plugin-node eslint-plugin-promise eslint-plugin-standard eslint-plugin-vue --save-dev  ``` 导入插件方式
``` npm install babel-eslint --savedev```

## pug html 模板操作方式
``` npm install pug pug-plain-loader --save-dev ``` pug html 格式化转换, loader vue template 转换支持
