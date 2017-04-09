'use strict';
var path = require('path');
var webpack = require('webpack');
var env = process.env.NODE_ENV;

var config = {
  entry: {
    app: ['./src', './example/src/app.js'],
  },

  output: {
    path: path.join(__dirname, 'example/dist'), // Must be an absolute path
    publicPath: 'http://localhost:3000/dist/',
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        include: [
          path.join(__dirname, 'src'),
          path.join(__dirname, 'example/src'),
        ],
        exclude: [
          /node_modules/,
        ],
      },
      {
        test: /\.scss$/,
        loader: 'style!css?modules&importLoaders=2&sourceMap&localIdentName=[local]___[hash:base64:5]!postcss-loader?browsers=last 2 version!sass?outputStyle=expanded&sourceMap'
      },
    ]
  },

  resolve: {
    modulesDirectories: [
      'example/src',
      'node_modules',
    ]
  },

  plugins: []
};

if(env === 'server') {
  config.output.filename = '[name].js';
  config.devtool = 'source-map';
  config.devServer = {
    contentBase: 'example',
    port: 3000
  };
  config.plugins.push(new webpack.HotModuleReplacementPlugin());
}

if(env === 'development') {
  config.output.filename = '[name].js';
  config.devtool = 'source-map';
}

if(env === 'production') {
  config.output.filename = '[name].js';
  config.devtool = 'source-map';
  config.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        pure_getters: true,
        unsafe: true,
        unsafe_comps: true,
        warnings: false,
        screw_ie8: false
      },
      mangle: {
        screw_ie8: false
      },
      output: {
        screw_ie8: false
      }
    })
  );
}

module.exports = config;
