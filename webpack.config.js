var path = require('path');
var webpack = require('webpack');
var CommonsPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");

module.exports = {
    context: path.join(__dirname, ''),
    devtool: 'source-map',
    entry: {
        october: './october-meetup/app/app.js',
        octoberLive: './october-meetup/live/app.js'
    },
    output: {
        path: path.join(__dirname, './bundles'),
        filename: '[name].bundle.js',
    },
    resolve: {
        extensions: ['', '.jsx', '.scss', '.js', '.json', '.webpack.js', '.web.js'],
        modulesDirectories: [
          'node_modules',
          path.resolve(__dirname, './node_modules')
        ]
    },
    module: {
        preLoaders: [
            {
                test: /\.jsx?$/,
                loaders: ['eslint'],
                include: path.join(__dirname, '')
            }
        ],
        loaders: [
            {
                test: /(\.js|\.jsx)$/,
                loaders: ['babel'],
                include: path.join(__dirname, '')
            },
            {
                test: /(\.scss|\.css)$/,
                loaders: [
                  require.resolve('style-loader'),
                  require.resolve('css-loader') + '?sourceMap&modules&importLoaders=1&camelCase=dashes&localIdentName=[name]__[local]___[hash:base64:5]',
                  require.resolve('sass-loader') + '?sourceMap'
                ]
            }
        ]
    }
};
