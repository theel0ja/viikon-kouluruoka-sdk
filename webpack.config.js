/* tslint:disable */
const path = require('path');

const SRC_FOLDER = path.resolve(__dirname, 'src');
const DIST_FOLDER = path.resolve(__dirname, 'dist');
const PUBLIC_FOLDER = path.resolve(__dirname, 'public');
const NODE_MODULES_FOLDER = path.resolve(__dirname, 'node_modules');

module.exports = {
  entry: {
    filename: SRC_FOLDER + '/index.ts'
  },

  module: {
    rules: [
      // ts-loader: convert typescript (es6) to javascript (es6),
      // babel-loader: converts javascript (es6) to javascript (es5)
      {
        test: /\.tsx?$/,
        loaders: [/* 'babel-loader?presets[]=babel-preset-env', */ 'ts-loader'],
        exclude: [/node_modules/, NODE_MODULES_FOLDER]
      },
      // babel-loader for pure javascript (es6) => javascript (es5)
      {
        test: /\.(jsx?)$/,
        loaders: ['babel'],
        exclude: [/node_modules/, NODE_MODULES_FOLDER]
      }
    ]
  },

  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },

  devServer: {
    contentBase: [PUBLIC_FOLDER, DIST_FOLDER],
    compress: true,
    port: 9000,
    open: true
  },

  output: {
    filename: 'widgets.js',
    path: DIST_FOLDER
  }
};
