const path = require('path');
const webpack = require('webpack');

module.exports = {

	entry: './src/main.js', // 项目的入口文件，webpack会从main.js开始，把所有依赖的js都加载打包

	output: {
		path: path.resolve(__dirname, './dist'),
		publicPath: './dist/',	// 通过devServer访问路径
		filename: 'build.js'	// 打包后的文件名
	},
	devServer: {
		historyApiFallback: true,
		overlay: true
	}

};