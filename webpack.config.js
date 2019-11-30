const path = require('path');

const isDev = process.env.NODE_ENV === 'dev';
const HTMLPlugin = require('html-webpack-plugin');

const config = {
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
            // 兼容各浏览器最后两个版本
            browsers: ['last 2 versions']
          }
        }]]
      }
    }, {
      test: /\.s[a|c]ss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      exclude: /node_modules/
    }]
  },
  plugins: [
    new HTMLPlugin({
      title: 'quick app',
      template: path.resolve(__dirname + '/public/index.html')
    })
  ]
};

if (isDev) {
  config.devServer = {
    host: '0.0.0.0',
    port: '8086',
    contentBase: path.resolve(__dirname, 'public'),
    hot: true,
    overlay: {
      errors: true
    }
  }
}

module.exports = config;