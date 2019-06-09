var path = require('path');
var webpack = require('webpack');
var fs = require('fs')

module.exports = {
    entry: [
        'babel-polyfill',
        /*'react-hot-loader/patch',*/
        // activate HMR for React
        //'webpack-hot-middleware/client',
        //'webpack-dev-server/client?http://localhost:3000',
        // bundle the client for webpack-dev-server
        // and connect to the provided endpoint
        //'webpack/hot/only-dev-server',
        // bundle the client for hot reloading
        // only- means to only hot reload for successful updates
        // "babel-polyfill",
        './src/index.js',
        // './src/js/tingyun-react.js',
        // the entry point of our app
    ],
    resolve: {
        extensions: ['.js', '.jsx']
    },
    node: {
        fs: "empty"
    },
    output: {
        filename: 'bundle.js',
        // the output bundle
        path: path.resolve(__dirname, 'dist/static'),
        publicPath: '/static/'
        // necessary for HMR to know where to load the hot update chunks
    },
    devtool: 'inline-source-map',
    module: {
        rules: [{
            test: /\.es6?$/,
            use: [
                'babel-loader'
            ]
        }, {
            test: /\.jsx?$/,
            use: [
                'babel-loader'
            ],
            include: [
                /src/
            ]
        },
            {
                test: /\.css/,
                loaders: [
                    'style-loader?sourceMap',
                    'css-loader',
                    'resolve-url-loader'
                ]
            }, {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader', 
                    'less-loader'
                ],
                include: [
                    /src/,
                    /node_modules/
                ],
            }, {
                test: /\.(png|jpg|svg|ttf|eot|woff|woff2)$/,
                loader: 'file-loader'
            }/* , {
                test: /\.(svg|ttf|eot|woff|woff2)/,
                loader: 'url-loader'
            } */]
    },
    plugins: [


    ], devServer: {
        publicPath: '/static/',
        contentBase: path.join(__dirname, "dist/static"),
        // compress: true,
        port: 3000,
        disableHostCheck: true
    },


};
