const path = require('path');
const webpack = require('webpack');
const UnminifiedWebpackPlugin = require('unminified-webpack-plugin');

module.exports = {
  entry: './src/betterArray.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'betterArray.min.js',
    library: 'BetterArray',
    libraryTarget: 'var',
    libraryExport: 'default',
    umdNamedDefine: true
  },
  plugins: [
    new UnminifiedWebpackPlugin()
  ],
  module: {
    rules: [
      {
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.js']
  }
}
