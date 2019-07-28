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

html webpack 插件工具 ``` npm install --save-dev html-webpack-plugin ```



