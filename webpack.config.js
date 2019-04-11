const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const config = {
  mode: 'development',
  entry: './examples/index.js',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'examples')
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
    new HtmlWebpackPlugin({
      template: './source/templates/dashboard.pug'
    }),
  ],
  module: {
    rules: [
      {
       test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ]
      },
      {
        test: /\.pug$/,
        use: ["pug-loader"]
      },
      {
      test: /\.(png|svg|jpg|gif)$/,
      use: [
        'file-loader'
      ]
    }
    ]
  },
  devServer: {
    contentBase: './examples'
  },
};

module.exports = config
