import path from 'path';
import autoprefixer from 'autoprefixer';
import atImport from 'postcss-import';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import cssnext from 'postcss-cssnext';

module.exports = {
  entry: {
    index: path.join(__dirname, 'client', 'index.js')
  },

  output: {
    path: path.join(__dirname, 'static/'),
    filename: '[name].js'
  },

  postcss: [atImport, autoprefixer],

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel-loader']
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader')
      },
    ],
  },

  plugins: [
    new ExtractTextPlugin('index.css')
  ]
}
