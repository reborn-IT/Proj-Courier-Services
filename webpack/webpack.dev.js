/* eslint-disable import/no-extraneous-dependencies */
const webpack = require('webpack');
// eslint-disable-next-line max-len
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  devServer: {
    hot: true,
    open: true,
    port: 3001,
    historyApiFallback: true,
  },
  plugins: [
    new ReactRefreshWebpackPlugin(),
    new webpack.DefinePlugin({
      'process.env.name': JSON.stringify('Development'),
      'process.env.baseUrl': JSON.stringify('http://localhost:8080/'),
      // eslint-disable-next-line max-len
      'process.env.mapbox': JSON.stringify(
        'pk.eyJ1Ijoic2l0aHVtZGV2MDciLCJhIjoiY2wxMmRlczBsMGFjYTNrcDRwd3F2cmdjZSJ9.mnJKqLrFikKsZlRqdCThQw'
      ),
      // eslint-disable-next-line max-len
      'process.env.googleauthid': JSON.stringify(
        '915154064810-hkdb5g5st5dhumnin6tih27hf56vv9rj.apps.googleusercontent.com'
      ),
      'process.env.backendAPIPath': JSON.stringify(
        'https://pure-atoll-00605.herokuapp.com/api/v1'
      ),
    }),
  ],
};
