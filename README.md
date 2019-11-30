# FE-simple-scaffold-demo
##### 背景
现在前端不管做什么基本都已经离不开工程化的那一套了，9102了总不能还是用一个html文件跑天下吧。况且。。。
* 想用es6语法怎么办，import模块多舒服，箭头函数多方便等等
* 拒绝用html文件的打开方式，想自动编译，想要热更新
* 不想徒手干dom了怎么办，数据驱动视图这么香
* 想用sass或less，但总不能自己去单独编译转换吧

到这里，是不是发现我们越来越回不去了，那是因为我们前端在进步呀，效率不断提升，边界在不断拓展，扯远了。。。

相信每位FEer都会有个简单的项目用来方便写些测试或demo，我也是，但都是用Create-react-app或是一些在线ide，然后突然就想自己过一下这个流程。

##### 快速搭建一个能满足现代前端要求的项目
关键词：node npm webpack babel react sass

1. node和npm环境请自行准备好
2. npm init
3. 全局安装
    * webpack
    * webpack-cli（非全局安装也可以，只是在命令行中会找不到webpack命令，比较繁琐）
4. --save 安装
    * react
    * react-dom
5. --save-dev 安装
    * babel-loader
    * @babel/core
    * @babel/preset-env
    * @babel/preset-react
    * webpack-dev-server
    * html-webpack-plugin
    * node-sass（windows用户安装不顺利的可以换国内的npm源）
    * sass-loader
    * css-loader
    * style-loader
6. 配置webpack.config.js
```js
const path = require('path');
const isDev = process.env.NODE_ENV === 'dev';
const HTMLPlugin = require('html-webpack-plugin');

const config = {
    // 告诉webpack是开发环境还是生产环境，webpack会针对性优化，不设置会有warning
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },
    module: {
        rules: [{
            test: /\.js?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            options: {
                presets: ['@babel/preset-react', ['@babel/preset-env', {
                    targets: {
                        browsers: ['last 2 versions']
                    }
                }]]
            }
        }, {
            test: /\.s[a|c]ss$/,
            use: ['style-loader', 'css-loader', 'sass-loader'],
                exclude: /node_modules/
            }]
        ]
    },
    plugins: [
        new HTMLPlugin({
            title: 'quick test',
            template: path.resolve(__dirname + '/public/index.html')
        })
    ]
}
if (isDev) {
    config.devServer = {
        host: '0.0.0.0',
        port: '8086',
        contentBase: path.resolve(__dirname, 'build'),
        hot: true,
        overlay: {
            errors: true
        }
    }
}
module.exports = config;
```
7. package.json中添加webapck-dev-server以及自动监听打包命令；手动打包命令。
```js
"scripts": {
    // cross-env是为了兼容不同平台，NODE_ENV=dev对应webpack.config.js中的配置，仅在开发环境中启动webpack-dev-server
    "start": "cross-env NODE_ENV=dev webpack-dev-server --config webpack.config.js --watch",
    "pack": "cross-env NODE_ENV=dev webpack --config webpack.config.js"
}
```