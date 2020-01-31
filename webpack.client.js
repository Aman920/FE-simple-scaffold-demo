const path = require('path');
const baseConfig = require('./webpack.base');
const webpackMerge = require('webpack-merge');

const isDev = process.env.NODE_ENV === 'dev';

const clientConfig = {
  // 告诉webpack运行环境是服务器端还是客户端（默认），不同环境策略有所不同，比如mode为web下若引用fs打包就会报错
  target: 'web',
  // 告诉webpack是开发环境还是生产环境，webpack会针对性优化
  mode: 'development',
  entry: './src/client/index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'public')
  }
};

module.exports = webpackMerge(baseConfig, clientConfig);