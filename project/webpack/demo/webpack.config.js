'use strict';

const path = require('path');

const config = {
	entry: {
		main: './index.js'
	},
	output: {
		path: path.join(__dirname, './dist'),
		publicPath: '/dist/',
		filename: 'bundle.js'
	}
};

module.exports = config;