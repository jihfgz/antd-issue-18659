/**
 * webpack 3.x
 */
const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    devtool: 'eval',
    target: "node",
    externals: /^[a-z\-0-9]+$/,
    entry: {
        app: ["babel-polyfill", path.join(__dirname + '/app/index')]
    },

    output: {
        path: __dirname + '/dist',
        filename: 'index.js',
        publicPath: "/public/",
        libraryTarget: "commonjs2"
    },
    resolve: {
        extensions: ['.json', '.js', '.jsx'],
    },

    module: {
        rules: [{
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: 'babel-loader',

            }, {
                test: /\.json$/,
                use: 'json-loader'
            }, {
                test: /\.(svg)$/i,
                use: 'svg-sprite-loader',
            },{
                test: /\.css/,
                use: ExtractTextPlugin.extract({
                    fallback:'style-loader',
                    use:'css-loader'
                })
            },{
                test: /\.less$/,
                use: ExtractTextPlugin.extract({
                    fallback:'style-loader',
                    use:[
                        {loader: "css-loader"},
                        {loader: 'less-loader', options: {sourceMap:true,javascriptEnabled:true}}
                    ]
                })
            }

        ],
    },


    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"',
            },
        }),
    ],
};
