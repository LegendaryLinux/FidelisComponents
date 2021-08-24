const path = require('path');

module.exports = {
  entry: {
    index: './src/js/TextMask.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|es6)$/,
        loader: 'babel-loader',
      },
    ]
  },
  output: {
    path: path.resolve(__dirname),
    filename: "[name].js",
    libraryTarget: 'commonjs2',
  }
};
