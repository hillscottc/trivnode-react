var path = require('path');

module.exports = {
  entry: path.resolve(__dirname, './client/src/app.js'),
  output: {
    path: path.resolve(__dirname, './client/public/js'),
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {
        test: /src\/.+.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      }
    ]
  }
};