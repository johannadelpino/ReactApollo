const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: {
    polyfill: ['core-js'],
    app: './src/app/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'build/'),
    publicPath: '/',
    filename: '[name].js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'My react seed with hooks',
      template: path.resolve(__dirname, 'src/public/index.html'),
      inject: false,
    }),
    new CopyWebpackPlugin([{ from: './src/assets', to: '../build/assets' }]),
    new CaseSensitivePathsPlugin(),
  ],
});
