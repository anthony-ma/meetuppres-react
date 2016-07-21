var path = require('path');
var webpack = require('webpack');
var CommonsPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");

module.exports = {
    context: path.join(__dirname, ''),
    devtool: 'source-map',
    entry: {
        corelibs: ['react', 'react-dom', 'react-addons-css-transition-group'],
        mklayout: './samples/mklayout.jsx',
        controls: './samples/controls.jsx'
    },
    output: {
        path: path.join(__dirname, './samples'),
        filename: '[name].bundle.js',
    },
    resolve: {
        extensions: ['', '.jsx', '.scss', '.js', '.json', '.webpack.js', '.web.js'],
        modulesDirectories: [
          'node_modules',
          path.resolve(__dirname, './node_modules')
        ]
    },
    externals: {
    },
    module: {
        preLoaders: [
            {
                test: /\.jsx?$/,
                loaders: ['eslint'],
                include: path.join(__dirname, './samples')
            }
        ],
        loaders: [
            {
                test: /(\.js|\.jsx)$/,
                loaders: ['babel'],
                include: path.join(__dirname, './samples')
            },
            {
                test: /(\.scss|\.css)$/,
                loaders: [
                  require.resolve('style-loader'),
                  require.resolve('css-loader') + '?sourceMap&modules&importLoaders=1&camelCase=dashes&localIdentName=[name]__[local]___[hash:base64:5]',
                  require.resolve('sass-loader') + '?sourceMap',
                  require.resolve('toolbox-loader')
                ]
            }
        ]
    },
    toolbox: { theme: path.join(__dirname, './lib/react-toolbox-custom.scss') },
    plugins: [
        //new webpack.optimize.UglifyJsPlugin(),
        new CommonsPlugin({
          minChunks: Infinity,
          name: 'corelibs'
        })
    ]
};
