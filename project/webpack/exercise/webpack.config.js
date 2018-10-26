// webpack.config.js

const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
	entry: {
		'index': ['./src/page/index/index.js'],
		'login': ['./src/page/login/index.js']
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'js/[name].js'
	},
	module: {
		rules: [
		// 	// JS,JSX
		// 	{
		// 		test: /\.jsx?/,
		// 		include: [
		// 			path.resolve(__dirname, 'src'),
		// 		],
		// 		loader: 'babel-loader'
		// 	},
		// 	// CSS,LESS
			// {
			// 	test: /\.css$/,
			// 	include: [
			// 		path.resolve(__dirname, 'src'),
			// 	],
			// 	use: ExtractTextPlugin.extract({
			// 		fallback: 'style-loader',
			// 		use: 'css-loader'
			// 	})
			// },
		// 	// IMG
		// 	{
		// 		test: /\.(png|jgp|gif)$/,
		// 		use: [
		// 			{
		// 				loader: 'file-loader',
		// 				options: {}
		// 			}
		// 		]
		// 	}
		]
	},
	plugins: [
		// webpack 4 之后移除了 CommonsChunkPlugin
		// new webpack.optimize.CommonsChunkPlugin({
		// 	name: 'common'
		// }),
		new webpack.optimize.SplitChunksPlugin({
			cacheGroups: {	// 这里开始设置缓存的 chunks
				priority: 0,	// 缓存优先级
				vendor: {	// key 为entry中定义的入口名称
					chunks: 'all',	// 必须三选一： 'initial' | 'all' | 'async' (默认就是异步)
					name: 'common',		// 要缓存的 分隔出来的 chunk 名称
					minSize: 0,
					minChunks: 1,
					enforce: true,
					reuseExistingChunk: true
				}
			}
		}),
		// 关联HTML
		new HtmlWebpackPlugin({
			// 配置输出文件名和路径
			filename: 'view/index.html',
			// 配置文件模板
			template: 'src/view/index.html',
			inject: true,
			hash: true,
			// 表示当前html引入公共js和当前对应的js
			// 需要引入哪些js
			chunks: ['common', 'index']
		}),
		// 引入插件，配置文件名，这里同样可以使用[hash]
		// new ExtractTextPlugin('index.css')
	]
};

module.exports = config;