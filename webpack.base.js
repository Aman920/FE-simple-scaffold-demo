module.exports = {
  // 告诉webpack是开发环境还是生产环境，webpack会针对性优化
  mode: 'development',
  module: {
    rules: [{
      test: /\.js?$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      options: {
        presets: ['@babel/preset-react', ['@babel/preset-env', {
          // preset中有些option可以配置，根据不同preset而异
          targets: {
            // 兼容各浏览器最后两个版本
            browsers: ['last 2 versions']
          }
        }]]
      }
    }]
  }
};