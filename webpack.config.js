const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const pages = [
  'billimatic',
  'cobrato',
  'dashboard',
  'emites',
  'error',
  'estoka',
  'index',
  'myfinance',
  'nexaas-id',
  'staff'
];

const generateHWPP = function(sources) {
  return sources.map(src => {
    const page = {
      template: `./source/templates/${src}.pug`,
      filename: `${src}.html`
    }
    return new HtmlWebpackPlugin(page)
  })
}

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
    ...generateHWPP(pages)
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
