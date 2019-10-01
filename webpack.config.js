const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const postcssPresetEnv = require('postcss-preset-env')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = (_, argv) => {
  const devMode = argv.mode !== 'production'

  return {
    // Tells Webpack which built-in optimizations to use
    // If you leave this out, Webpack will default to 'production'
    mode: argv.mode,

    // Webpack needs to know where to start the bundling process,
    // so we define the Sass file under './scss' directory
    entry: ['./scss'],

    // This is where we define the path where Webpack will place
    // a bundled JS file. Webpack needs to produce this file,
    // but for our purposes you can ignore it
    output: {
      path: path.resolve(__dirname, 'dist'),

      // Specify the base path for all the styles within your
      // application. This is relative to the output path, so in
      // our case it will be './dist/css'
      publicPath: '/css',

      // The name of the output bundle. Path is also relative
      // to the output path, so './dist/js'
      filename: 'js/chameleon.js'
    },
    devServer: {
      contentBase: path.join(__dirname, 'dist'),
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
              loader: MiniCssExtractPlugin.loader
            },
            {
              // Interprets CSS
              loader: 'css-loader',
              options: {
                importLoaders: 2
              }
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
                plugins: devMode
                  ? () => []
                  : () => [
                    postcssPresetEnv({
                      // Compile our CSS code to support browsers
                      // that are used in more than 1% of the
                      // global market browser share. You can modify
                      // the target browsers according to your needs
                      // by using supported queries.
                      // https://github.com/browserslist/browserslist#queries
                      browsers: ['>1%']
                    }),
                    require('cssnano')()
                  ]
              }
            },
            {
              // Adds support for Sass files
              loader: 'sass-loader'
            }
          ]
        },
        {
          // Adds support to load images in your CSS rules.
          test: /\.(svg|png|jpe?g|gif)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                // The image will be named with the original name and
                // extension
                name: '[name].[ext]',
                
                // Indicates where the images are stored and will use
                // this path when generating the CSS files.
                // Example, in site.scss I have
                // url('../dist/images/pattern.png') and when generating
                // the CSS file, file-loader will output as
                // url(../images/pattern.png), which is relative
                // to '/css/chameleon.css'
                publicPath: '../images',

                // When this option is 'true', the loader will emit the
                // image to output.path
                emitFile: false
              }
            }
          ]
        }
      ]
    },
    plugins: [
      // Configuration options for MiniCssExtractPlugin. Here I'm only
      // indicating what the CSS output file name should be and
      // the location
      new MiniCssExtractPlugin({
        filename: devMode ? 'css/chameleon.css' : 'css/chameleon.min.css'
      }),
      ...(
        !devMode
          ? [
            new OptimizeCssAssetsPlugin({
              assetNameRegExp: /\.min\.css$/g,
              cssProcessor: require('cssnano'),
              cssProcessorPluginOptions: {
                preset: ['default', { discardComments: { removeAll: true } }],
              },
              canPrint: true
            })
          ]
          : []
      )
    ],
    devServer: {
      contentBase: __dirname,
      compress: false,
      liveReload: true,
      port: 9000
    }
  }
}
