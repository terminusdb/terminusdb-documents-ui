const path = require('path');
const webpack = require('webpack');


module.exports = {
  mode: 'development',
  context: __dirname,

  devtool: 'source-map',
  entry: [
    './index.js',
  ],

  /*devtool: '#inline-source-map',
  entry: [
    './index.js',
  ],*/
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  devServer: {
    static: path.resolve(__dirname, 'build'),
    compress: true,
    historyApiFallback: false,
    port: 3032
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      debug: true
    })
  ],
  resolve: {
    alias: {
      "@terminusdb/terminusdb-documents-ui": path.join(__dirname, '..', 'src/index.js'),
      react: path.resolve('./node_modules/react')
    },
    extensions: ['.js', '.jsx', '.json', '.css'],
  },
  module: {
     rules : [{
         test: /\.js$/,
         exclude: /node_modules/,
         loader: 'babel-loader',
         include: [__dirname, path.join(__dirname, '..', 'src')],
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader'],
      }]
  }
};
