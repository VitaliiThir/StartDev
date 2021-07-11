const path = require('path');
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');
const UglifyJs = require('uglifyjs-webpack-plugin');
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');

module.exports = {
  entry: {
    common: './src/js/index.js',
    example: './src/js/pages/example.js'
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
        ],
        exclude: '/node_modules/'
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
