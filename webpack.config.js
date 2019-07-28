const path = require('path');

// 定义不同的路劲基础变量
const ROOT_PATH = path.resolve(__dirname);
const SRC_PATH = path.resolve(ROOT_PATH, 'src');
const DIST_PATH = path.resolve(ROOT_PATH, 'dist');

module.exports = {
    entry: {
        main: '@/index.js'
    },
    output:{
        path: DIST_PATH,
        filename: 'bundle.js',
    },
    module:{
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
        ]
    },
    resolve:{
        alias:{
            '@': SRC_PATH
        }
    }
}
