'use strict';

const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
	// 入口
	entry: {
		main: './main.js'
	},
	// 出口
	output: {
		path: path.join(__dirname, './dist'),
		publicPath: '/dist/',
		filename: 'bundle.js'
	},
	// 加载器
	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader',
				options: {
					loaders: {
						css: ExtractTextPlugin.extract({
							use: 'css-loader',
							fallback: 'vue-style-loader'
						})
					}
				}
			},
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			},
			{
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
					use: 'css-loader',
					fallback: 'style-loader'
				})
			}, {
				test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
				loader: 'url-loader?limit=1024'
			}
		]
	},
	// 插件
	plugins: [
		// 重命名提取后的css文件
		new ExtractTextPlugin({
			filename: '[name].css',
			allChunks: true
		})
	]
};

module.exports = config;