const path = require('path');
const baseConfig = require('./webpack.base');
const webpackMerge = require('webpack-merge');
// node端在引用node_modules中的模块时，避免也打包到文件中，而是可以用require的方式，大大减小打包体积
// 可以理解为是对引用的exclude
const webpackExternals = require('webpack-node-externals');

const serverConfig = {
  // 告诉webpack运行环境是服务器端还是客户端（默认），不同环境策略有所不同，比如mode为web下若引用node的fs打包就会报错
  target: 'node',
  // 告诉webpack是开发环境还是生产环境，webpack会针对性优化
  mode: 'development',
  entry: './src/server/index.js',
  output: {
    filename: 'server.bundle.js',
    path: path.resolve(__dirname, 'build')
  },
  externals: [webpackExternals()]
};

module.exports = webpackMerge(baseConfig, serverConfig)
