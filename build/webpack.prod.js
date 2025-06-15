const webpack = require('webpack')
const TerserPlugin = require('terser-webpack-plugin')

exports = require('./webpack.base')

exports.mode = 'production'
exports.output.filename = 'eruda.js'
exports.devtool = 'inline-source-map'
exports.plugins = exports.plugins.concat([
  new webpack.DefinePlugin({
    ENV: '"production"',
  }),
])
exports.optimization = {
  minimize: !!(process.env.ERUDA_MINIFY),
  minimizer: [
    new TerserPlugin({
      extractComments: false,
    }),
  ],
}

module.exports = exports
