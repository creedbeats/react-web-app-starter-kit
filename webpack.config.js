const webpack = require('webpack');
const isProd = process.argv.indexOf('-p') !== -1;

module.exports = {
  entry: [
    'babel-polyfill',
    './src/js/app.js'
  ],
  output: {
    path: 'dist',
    filename: 'app.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    preLoaders: [
			{ test: /\.jsx?$/, exclude: /(node_modules|bower_components)/, loaders: ['eslint'] }
    ],
    loaders: [
      { test: /\.jsx?$/, exclude: /(node_modules|bower_components)/, loader: 'babel-loader' },
      { test: /\.json$/, loader: 'json' }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      React: 'react',
      ReactDOM: 'react-dom'
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: (isProd) ? JSON.stringify('production') : JSON.stringify('development')
      }
    })
  ]
};
