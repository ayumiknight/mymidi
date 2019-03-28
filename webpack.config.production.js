var path = require('path');
var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
	entry: [
		'./src/index.js'
	],

	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist/static'),
		publicPath: '/static/'
	},

	devtool: 'source-map',

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
		},{
			test: /\.(png|jpg)$/,
			loader: 'file-loader'
		}]
	},

	plugins: [
		//from为存放监控代码位置，to为 构建后存放位置，与引用时目录一致
		new CopyWebpackPlugin([{from: './src/lib/tingyun-zhida-point.js', to: path.resolve(__dirname, 'dist/static')}]),
		new webpack.optimize.UglifyJsPlugin({
			sourceMap: true,
			comments: false
		})
	]
};
