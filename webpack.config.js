const webpack = require('webpack');

// webpack.config.js
module.exports = {
  context: __dirname, // for rails
  entry: "./frontend/noteary.jsx",
  output: {
    path: "app/assets/javascripts", // for rails
    filename: "bundle.js",
  },
  module: {
    noParse: /node_modules\/quill\/dist/,
    loaders: [
      {
        test: [/\.jsx?$/, /\.js?$/],
        exclude: /(node_modules)/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  devtool: 'source-maps',
  resolve: {
    extensions: ["", ".js", ".jsx" ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ],
};
