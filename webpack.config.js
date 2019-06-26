const path = require('path')

module.exports = {
  entry: './src/index.js',

  output: {
    path: path.resolve('dist'),
    filename: 'chameleon.1.0.0-alpha.0.1.0.js'  
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {  
          loader: 'babel-loader',  
          options: {  
            cacheDirectory: true  
          }  
        }
      }  
    ]
  }
}
