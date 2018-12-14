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

/**
 * [description]
 * @param  {[type]} to   [目标数组]
 * @param  {[type]} from [转换数组]
 * @return {[type]}      [description]
 */
const array2String = (to, from) => {
	let tempObject = {};
	to.map(item => {
		tempObject[item.itemName] = from[item.itemName].join(',')
	})
	return Object.assign({}, from, tempObject);
}

/**
 * [对比两个数组，获取不同的元素]
 * @param  {[type]} arg1 [第一个数组]
 * @param  {[type]} arg2 [第二个数组]
 * @return {[type]}      [description]
 */
const getArrayDifference = (arg1, arg2) => {
	return arr1.concat(arr2).filter((v, i, arr) => {
		return arr.indexOf(v) === arr.lastIndexOf(v)
	});
}

/**
 * [倒计时60秒发送验证码]
 * @return {[type]} [description]
 */
const countDownTime = () => {
	const s = 60;
	let updateValidate;
	time(o) => {
		if('undefined' === typeof countDown) {
			countDown = 1;
		}	
		if (s === 0) {
			o.removeAttribute('disabled');
			o.innerText = '获取验证码';
			s = 60 * parseInt(countDown);
		} else {
			o.setAttribute('disabled', true);
			o.innerText = s + '秒后重新发送';
			s --;
			updateValidate = setTimeout(function() {
				time(o)
			}, 1000);
		}
	};

}

module.exports = {
	formatTime,
	formatNumber,
	parseQueryUrl,
	string2Array,
	array2String,
	getArrayDifference,
	countDownTime
}