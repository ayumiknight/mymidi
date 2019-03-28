var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: [
        'react-hot-loader/patch',
        // activate HMR for React

        'webpack-hot-middleware/client',
        //'webpack-dev-server/client?http://localhost:3000',
        // bundle the client for webpack-dev-server
        // and connect to the provided endpoint

        'webpack/hot/only-dev-server',
        // bundle the client for hot reloading
        // only- means to only hot reload for successful updates
        // "babel-polyfill",
        './src/index.js',
        // the entry point of our app
    ],

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
            exclude: /node_modules/
        }, {
            test: /\.less$/,
            loaders: [
                'style-loader?sourceMap',
                'css-loader',
                'resolve-url-loader',
                'less-loader?sourceMap'
            ]
        }, {
            test: /\.(png|jpg)$/,
            loader: 'file-loader'
        }]
    },

    plugins: [
        //from为存放监控代码位置，to为 构建后存放位置，与引用时目录一致
     
        new webpack.HotModuleReplacementPlugin(),
        // enable HMR globally

        new webpack.NamedModulesPlugin(),
        // prints more readable module names in the browser console on HMR updates

        new webpack.NoEmitOnErrorsPlugin()
        // do not emit compiled assets that include errors
    ],

    devServer: {
        host: 'localhost',
        port: 3000,

        historyApiFallback: true,
        // respond to 404s with index.html

        hot: true,
        // enable HMR on the server
        //
        //

    }
};
