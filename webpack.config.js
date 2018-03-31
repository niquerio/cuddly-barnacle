const path = require('path');
var webpack = require("webpack");

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'source-map',
  devServer: {
    contentBase: './dist',
    port: '9000'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
         test: /\.mid$/,
         use: [
           'file-loader'
         ]
       }
    ]
  },
  plugins: [
       new webpack.ProvidePlugin({
           $: "jquery",
           jquery: "jQuery",
           "windows.jQuery": "jquery"
       }),
  ],
};
