const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

// 定义不同的路劲基础变量
const ROOT_PATH = path.resolve(__dirname);
const SRC_PATH = path.resolve(ROOT_PATH, 'src');
const DIST_PATH = path.resolve(ROOT_PATH, 'dist');
const TEM_PATH = path.resolve(ROOT_PATH, 'template');

module.exports = {
    entry: {
        app: '@/index.js',
    },
    output:{
        path: DIST_PATH,
        filename: '[name].bundle.js',
    },
    module:{
        rules: [
            {
                test: /\.(csv|tsv)$/,
                use: ['csv-loader']
            },
            {
                test: /\.xml$/,
                use: ['xml-loader']
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: ['file-loader']
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ['file-loader']
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    resolve:{
        alias:{
            '@': SRC_PATH
        }
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
          title:'FrontDemoExample',
          filename: 'index.html',
          template: path.resolve(TEM_PATH, 'index.html')
        })
      ]
}
