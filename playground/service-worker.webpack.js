const path = require('path')

module.exports = {
  mode: 'production',
  module: {
    rules: [
      {
		test: /\.mjs$/,
		exclude: /node_modules/,
		use: { loader: "babel-loader" }
      },
    ]
  },
  entry: {'service-worker': './public/worker.mjs'},
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'worker.js',
  },
  target: 'webworker',
};
