const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    host: "0.0.0.0"
  },
  watchOptions: {
    aggregateTimeout: 1000
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('development')
      }
    })
  ],
  module: {
    rules: [
      {
        test: /^.*\.s?css$/,
        include: `${process.cwd()}/src`,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  }
});
