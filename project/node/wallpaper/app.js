'use strict';
//依赖模块
const fs = require('fs');
const request = require("request");
const cheerio = require("cheerio");
const mkdirp = require('mkdirp');
const async = require('async');

// 目标网址
const url = 'http://desk.zol.com.cn/meinv/1920x1080/1.html';

// 本地存储目录
const dir = './wallpaper';

// 图片链接地址
const links = [];

// 创建目录
mkdirp(dir, err => {
	if (err) {
		console.log(err);
	}
});

class Wallpaper {
	constructor() {

	}

	// 下载壁纸
	download(url, dir, filename) {
		request.head(url, (err, res, body) => {
			request(url).pipe(fs.createWriteStream(dir + '/' + filename));
		});
	};

	// 发送请求
	sendRequest() {
		request(url, (error, response, body) => {
			if (!error && response.statusCode === 200) {
				let $ = cheerio.load(body);
				$('.photo-list-padding a img').each(function() {
					let src = $(this).attr('src');
					src = src.replace(/t_s208x130c5/, 't_s1600x900c5');
					links.push(src);
				});
				// 每次只执行一个异步操作
				async.mapSeries(links, (item, callback) => {
					this.download(item, dir, Math.floor(Math.random() * 100000) + item.substr(-4, 4));
					callback(null, item);
				}, (err, result) => {
					console.log('下载完成！');
				});
			}
		});
	}
}

const wallpaper = new Wallpaper();
wallpaper.sendRequest();