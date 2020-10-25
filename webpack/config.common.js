const path = require('path');
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');
const UglifyJs = require('uglifyjs-webpack-plugin');
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');

module.exports = {
  entry: {
    common: './markup/static/js/index.js',
    //main: './markup/static/main-page.js'
  },
  output: {
    filename: '[name].min.js',
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        use: [
          {
            loader: 'cache-loader',
            options: {
              cacheDirectory: path.resolve(__dirname, '../node_modules/.cache/cache-loader'),
            },
          },
          'babel-loader'
        ]
      },
    ]
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        cache: true,
        parallel: true
      }),
      new UglifyJs({
        uglifyOptions: {
          output: {
            comments: false
          }
        }
      })
    ]
  },
  plugins: [
    new HardSourceWebpackPlugin(),
  ]
};
