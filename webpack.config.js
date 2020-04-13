const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const RemovePlugin = require('remove-files-webpack-plugin')

module.exports = (_, argv) => {
  const devMode = argv.mode !== 'production'

  return {
    // Tells Webpack which built-in optimizations to use
    // If you leave this out, Webpack will default to 'production'
    mode: argv.mode,

    // Webpack needs to know where to start the bundling process,
    // so we define the Sass file under './scss' directory
    entry: {
      'chameleon': './scss',
      'chamleon.min': './scss',
    },

    // This is where we define the path where Webpack will place
    // a bundled JS file. Webpack needs to produce this file,
    // but for our purposes you can ignore it
    output: {
      path: path.resolve(__dirname, 'dist'),

      // Specify the base path for all the styles within your
      // application. This is relative to the output path, so in
      // our case it will be './dist'
      publicPath: '/',

      // The name of the output bundle. Path is also relative
      // to the output path, so './dist/js'
      filename: 'js/[name].js'
    },
    devServer: {
      contentBase: [
        path.join(__dirname, 'examples'),
        path.join(__dirname, 'dist'),
        path.join(__dirname, 'scss')
      ],
      compress: true,
      port: 9000
    },
    module: {
      // Array of rules that tells Webpack how the modules (output)
      // will be created
      rules: [
        {
          // Look for Sass files and process them according to the
          // rules specified in the different loaders
          test: /\.(sa|sc)ss$/,

          // Use the following loaders from right-to-left, so it will
          // use sass-loader first and ending with MiniCssExtractPlugin
          use: [
            {
              // Extracts the CSS into a separate file and uses the
              // defined configurations in the 'plugins' section
              loader: MiniCssExtractPlugin.loader,
            },
            {
              // Interprets CSS
              loader: 'css-loader',
            },
            {
              // Use PostCSS to minify and autoprefix with vendor rules
              // for older browser compatibility
              loader: 'postcss-loader',
              options: {
                ident: 'postcss',
                // We instruct PostCSS to autoprefix and minimize our
                // CSS when in production mode, otherwise don't do
                // anything.
                plugins: [
                  require('postcss-preset-env')(),
                  require('cssnano')({
                    preset: ['default', {
                        normalizeWhitespace: false,
                        discardComments: { removeAll: true }
                    }]
                  })
                ]
              }
            },
            {
              // Adds support for Sass files
              loader: 'sass-loader'
            }
          ]
        },
      ]
    },
    optimization: {
      minimizer: [
        new OptimizeCssAssetsPlugin({
          assetNameRegExp: /\.min\.css$/g,
          cssProcessor: require('cssnano'),
          cssProcessorPluginOptions: {
            preset: ['default', { discardComments: { removeAll: true } }],
          },
          canPrint: true
        })
      ]
    },
    plugins: [
      // Configuration options for MiniCssExtractPlugin. Here I'm only
      // indicating what the CSS output file name should be and
      // the location
      new MiniCssExtractPlugin({
        filename: devMode ? 'chameleon.css' : '[name].css'
      }),
      new RemovePlugin({
        after: {
          include: ['./dist/js']
        }
      })
    ]
  }
}
