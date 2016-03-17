import path from 'path';

module.exports = {
  entry: {
    index: path.join(__dirname, 'client', 'index.js')
  },
  output: {
    path: path.join(__dirname, 'static/'),
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ["babel-loader"],
      }
    ],
  }
}
