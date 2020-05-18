'use strict';

const webpack = require('webpack');
const HtmlwebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const merge = require('webpack-merge');
const webpackBaseConfig = require('./webpack.config.js');

// 清空基本配置的插件列表
webpackBaseConfig.plugins = [];

module.exports = merge(webpackBaseConfig, {
	output: {
		publicPath: 'dist/',
		filename: '[name].[hash].js'
	},
	plugins: [
		new ExtractTextPlugin({
			filename: '[name].[hash].css',
			allChunks: true
		}),
		// 定义当前 node 环境为生产环境
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: '"production"'
			}
		}),
		// 压缩js
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false
			}
		}),
		// 提取模版，并保存入口 html 文件
		new HtmlwebpackPlugin({
			filename: '../index_prod.html',
			template: './index.ejs',
			inject: false
		})
	]
})