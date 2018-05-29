const path = require('path');

const SRC_FOLDER = path.resolve(__dirname, 'src');
const DIST_FOLDER = path.resolve(__dirname, 'dist');
const PUBLIC_FOLDER = path.resolve(__dirname, 'public');

module.exports = {
  entry: {
    filename: SRC_FOLDER + '/index.ts'
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },

  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },

  devServer: {
    contentBase: [PUBLIC_FOLDER, DIST_FOLDER],
    compress: true,
    port: 9000
  },

  output: {
    filename: 'bundle.js',
    path: DIST_FOLDER
  }
};
