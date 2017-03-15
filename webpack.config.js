let HtmlWebpackPlugin = require('html-webpack-plugin');
let webpack = require('webpack');
module.exports = {
  entry: './src/main.js',
  output: {
    path: '/dist',
    filename: 'js/bundle.js',
  },
  module: {
    rules: [
      {test: /\.css$/, use: ['style-loader', 'css-loader']},
      {test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"},
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
      minify: {
          removeComments:true,
          collapseWhitespace: true,
      }
    }),
    new webpack.ProvidePlugin({
      "React": "react",

    }),
  ],
};