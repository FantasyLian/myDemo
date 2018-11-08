'use strict';

/**
 * [格式化日期]
 * @param  {[type]} date [description]
 * @return {[type]}      [description]
 */
const formatTime = date => {
	const year = date.getFullYear();
	const month = date.getMonth() + 1;
	const day = date.getDate();
	const hour = date.getHours();
	const minute = date.getMinutes();
	const second = date.getSeconds();

	return [year, month, day].map(formatNumber).join('') + ' ' + [hour, minute, second].map(formatNumber).join(':');
}

/**
 * [格式化数字]
 * @param  {[type]} n [description]
 * @return {[type]}   [description]
 */
const formatNumber = n => {
	n = n.toString();
	return n[1] ? n : '0' + n
}

/**
 * [截取Url的参数并转为对象]
 * @param  {[type]} url [description]
 * @return {[type]}     [description]
 */
const parseQueryUrl = url => {
	let str = url.split('?')[1];
	let params = str.split('&');
	let arr = [],
		json = {};
	for (let i = 0; i < params.length; i++) {
		arr = params[i].split('=');
		json[arr[0]] = arr[1];
	}
	return json;
}

/**
 * [description]
 * @param  {[type]} str [description]
 * @return {[type]}     [description]
 */
const string2Array = str => {
	let arr = str.split(',');
	let newArr = [];
	for (let i = 0; i < arr.length; i++) {
		let arrOne = arr[i];
		newArr.push(arrOne);
	}
	return newArr;
}

module.exports = {
	formatTime,
	formatNumber,
	parseQueryUrl,
	string2Array
}