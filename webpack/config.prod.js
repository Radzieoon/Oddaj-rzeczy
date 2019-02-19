const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const baseConfig = require('./config.base.js');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');


module.exports = merge(baseConfig, {
    mode: 'production',
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production'),
        }),
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),
        new UglifyJsPlugin()
    ],
});