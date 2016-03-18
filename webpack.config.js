const path = require('path');
const args = process.argv.slice(2);

const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (function () {
    // object that holds the webpack configuration
    var config = {};

    // include webpack debug messages during development
    config.debug = true;

    // configure source mapping
    config.devtool = 'eval-source-map';
    
    config.entry = {
        'app': './src/app.js'
    };

    config.output = {
        path: root('dist'),
        filename: 'js/[name].js',
        sourceMapFilename: '[name].map'
    };

    config.resolve = {
        cache: true,
        root: root(),
        extensions: ['', '.js']
    };

    // loaders
    config.module = {
        loaders: [
            {test: /\.css$/, loaders: ['style', 'css?sourceMap']},
            {test: /\.scss$/, loaders: ['style', 'css?sourceMap', 'sass?sourceMap']},
            {test: /\.html$/, loader: 'raw-loader', exclude: [root('src/index.html')]}
        ]
    };

    config.plugins = [
        new CopyWebpackPlugin([{from: 'src/assets', to: 'assets'}]),
        new HtmlWebpackPlugin({template: 'src/index.html', chunksSortMode: 'none', inject: 'body', hash: true}),
        new webpack.HotModuleReplacementPlugin()
    ];

    config.devServer = {
        historyApiFallback: true,
        contentBase: './dist'
    };

    return config;
})();

// Helper functions
function root(args) {
    args = Array.prototype.slice.call(arguments, 0);
    return path.join.apply(path, [__dirname].concat(args));
}