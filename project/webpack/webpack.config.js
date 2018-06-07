
// webpack.config.js

const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
		// 
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
		new HtmlWebpackPlugin({
			// 打包后的目标文件
			filename: 'view/index.html',
			// 要打包的目标文件
			template: 'src/view/index.html',
			inject: true,
			hash: true,
			// 表示当前html引入公共js和当前对应的js
			// 需要引入哪些js
			chunks: ['common', 'index']
		})
	]
};

module.exports = config;