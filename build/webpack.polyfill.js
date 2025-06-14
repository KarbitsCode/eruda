const path = require('path')

module.exports = {
  mode: 'production',
  entry: './src/polyfill',
  devtool: 'inline-source-map',
  optimization: {
    minimize: !!(process.env.ERUDA_MINIFY),
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'eruda-polyfill.js',
  },
}
