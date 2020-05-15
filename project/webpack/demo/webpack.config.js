'use strict';

const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
	// 入口
	entry: {
		main: './index.js'
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
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
					use: 'css-loader',
					fallback: 'style-loader'
				})
			}
		]
	},
	// 插件
	plugins: [
		// 重命名提取后的css文件
		new ExtractTextPlugin('main.css')
	]
};

module.exports = config;