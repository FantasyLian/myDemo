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
 * url参数序列化
 * 将对象序列化成url参数传递
 * console.log(stringifyUrl({ age: 27, name: "YZW" })); // "?age=27&name=YZW"
 */
const stringifyUrl = (search = {}) => {
  return Object.entries(search).reduce(
    (t, v) => `${t}${v[0]}=${encodeURIComponent(v[1])}&`,
    Object.keys(search).length ? "?" : ""
  ).replace(/&$/, "");
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
	time = o => {
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
			updateValidate = setTimeout(() => {
				time(o)
			}, 1000);
		}
	};
}

/**
 * [时间戳转换为标准时间]
 * @param  {[type]} timestamp [description]
 * @return {[type]}           [description]
 */
const timeTransfer = timestamp => {
	let date = new Date(parseInt(timestamp));
	let year = 1900 + date.getYear();
	let month = '0' + (date.getMonth() + 1);
	let day = '0' + date.getDate()
	return year + '-' + month.substring(month.length - 2, month.length) + '-' + day.substring(day.length - 2, day.length)
}

/**
 * [dataURL2File base64文件转位File对象]
 * @param  {[type]} dataUrl [base64]
 * @return {[type]}         [File]
 */
function dataURL2File (dataUrl) {
  //TODO: 将base64转换为文件，dataUrl为base64字符串，filename为文件名（必须带后缀名，如.jpg,.png）
  let arr = dataUrl.split(','),
    mime = arr[0].match(/:(.*?);/)[1],
    bstr = atob(arr[1]),
    n = bstr.length,
    u8arr = new Uint8Array(n)
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n)
  }
  return new File([u8arr], { type: mime })
}

module.exports = {
	formatTime,
	formatNumber,
	parseQueryUrl,
	stringifyUrl,
	string2Array,
	array2String,
	getArrayDifference,
	countDownTime,
	timeTransfer
}