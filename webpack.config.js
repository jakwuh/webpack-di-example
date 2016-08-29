var webpack = require('webpack');
var path = require('path');
var ExtractDIPlugin = require('extract-di-webpack-plugin');

module.exports = {
    context: __dirname,
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js'
    },
    module: {
        loaders: [{
            test: /\.json$/,
            loader: 'json'
        }, {
            test: /\.js$/,
            loader: 'babel'
        }]
    },
    plugins: [new ExtractDIPlugin()],
};
