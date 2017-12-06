// TODO comments from source branch

// We are using node's native package 'path'
// https://nodejs.org/api/path.html
const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');

const ExtractTextPlugin = require('extract-text-webpack-plugin');

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
    new ExtractTextPlugin('css/style.css'),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        screw_ie8: true,
        conditionals: true,
        unused: true,
        comparisons: true,
        sequences: true,
        dead_code: true,
        evaluate: true,
        if_return: true,
        join_vars: true,
      },
      output: {
        comments: false,
      },
    }),
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
            {
              loader: 'css-loader',
              options: {
                minimize: true,
              },
            },
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
