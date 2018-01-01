const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [path.join(process.cwd(), 'app/app.js')],
  devtool: 'source-map',
  output: {
    path: path.resolve(process.cwd(), 'build'),
    publicPath: '/',
    // Using content hash for naming the chunks so they can be easily cached.
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].chunk.js',
  },

  plugins: [
    // Minify and optimize the index.html
    new HtmlWebpackPlugin({
      template: 'app/index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
      // Dinamically injecting a script tag referencing the bundled js chunk.
      inject: true,
    }),
  ],

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },

  module: {
    loaders: [
      {
        // Transpiling es6 into es2015 using babel via babel-loader webpack loader.
        test: /.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react'],
        },
      }, {
        // Transpiling typescript into es2015 using typescript compiler via ts-loader webpack loader.
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      }, {
        test: /\.html$/,
        loader: 'html-loader',
      },
    ],
  },
  target: 'web', // Make web variables accessible to webpack, e.g. window
};
