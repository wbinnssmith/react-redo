import path from 'path';
import cssnext from 'postcss-cssnext';
import atImport from 'postcss-import';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

module.exports = {
  devtool: 'source-map',
  
  entry: {
    index: path.join(__dirname, 'client', 'index.js')
  },

  output: {
    path: path.join(__dirname, 'static/'),
    filename: '[name].js'
  },

  postcss: [atImport, cssnext],

  module: {
    loaders: [
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
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
