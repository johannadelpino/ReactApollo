const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: [path.resolve(__dirname, './src')],
        use: ['babel-loader', 'eslint-loader'],
      },
      {
        test: /\.css$/,
        include: [path.resolve(__dirname, './src')],
        use: [
          'style-loader',
          { loader: MiniCssExtractPlugin.loader },
          'css-loader',
        ],
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        exclude: /node_modules/,
        loader:
          'file-loader?limit=10000&name=assets/images/[name]-[sha512:hash:base64:7].[ext]',
      },
      {
        test: /\.(eot|ttf|woff|woff2|otf)$/,
        exclude: /node_modules/,
        loader: 'file-loader?name=assets/fonts/[name].[ext]',
      },
      {
        test: /\.html$/,
        exclude: /node_modules/,
        use: {
          loader: 'html-loader',
          options: {
            attrs: false,
            minimize: false,
            removeComments: false,
            collapseWhitespace: false,
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    modules: [path.resolve('./'), path.resolve('./node_modules')],
    alias: {
      'app-common': path.resolve('./src/app/common'),
      'app-config': path.resolve('./src/app/config'),
    },
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ],
};
