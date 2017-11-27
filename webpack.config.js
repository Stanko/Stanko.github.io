// TODO comments from source branch

// We are using node's native package 'path'
// https://nodejs.org/api/path.html
const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

// Constant with our paths
const paths = {
  DIST: path.resolve(__dirname, 'public'),
  JS: path.resolve(__dirname, 'js'),
  SASS: path.resolve(__dirname, 'sass'),
  FONTS: path.resolve(__dirname, 'fonts'),
};

// Webpack configuration
module.exports = {
  entry: path.join(paths.JS, 'app.js'),
  output: {
    path: paths.DIST,
    filename: 'js/app.js',
  },
  plugins: [
    // new BrowserSyncPlugin({
    //   // browse to http://localhost:8080/ during development,
    //   // ./_site directory is being served
    //   host: 'localhost',
    //   port: 8080,
    //   server: {
    //     baseDir: ['_site'],
    //   },
    //   open: false,
    //   // reloadDelay: 1000,
    //   // reloadDebounce: 2000,
    //   ghostMode: false,
    //   logLevel: 'debug',
    //   notify: false,
    //   files: [
    //     '_site/public/style.css',
    //     '_site/**/*.js',
    //     // '_site/**/*.html',
    //     // '_site/**/*.jpg',
    //     // '_site/**/*.png',
    //   ]
    // }),
    new ExtractTextPlugin('css/style.css'),
  ],
  // Loaders configuration
  // We are telling webpack to use "babel-loader" for .js and .jsx files
  module: {
    rules: [
      // JS
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
        ],
      },
      // SASS
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract({
          use: [
            // 'css-loader?sourceMap',
            // 'postcss-loader?sourceMap',
            // 'sass-loader?sourceMap',
            'css-loader',
            {
              loader: 'postcss-loader',
              options: {
                plugins: () => [
                  autoprefixer({
                    browsers: [
                      'last 3 version',
                      'ie >= 10',
                    ],
                  }),
                ],
              },
            },
            'sass-loader',
          ],
        }),
      },
      // Fonts
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        use: 'ignore-file-loader?name=../fonts/[name].[ext]',
      },
    ],
  },
  // Enable importing JS files without specifying their's extenstion
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  watch: true,
};
