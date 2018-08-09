const path = require('path');

module.exports = {
  entry: './app/public/js/index.js',
  output: {
    filename: 'bundle.min.js',
    path: path.resolve(__dirname, 'app/public/js')
  }
};