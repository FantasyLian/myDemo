/*!
 * 隐藏手机号中间四位，变为星号
 * @param { mobile } 手机号
 */
const phoneStar = mobile => {
	if (mobile !== '' && mobile !== undefined && mobile !== null) {
		const reg = /^(\d{3})\d{4}(\d{4})$/
		return mobile.replace(reg, '$1****$2')
	}
}

/*!
 * 为价格添加千位分隔符
 * @param { num } 数字
 */
const thousandth = price => {
	// return String(price).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
	const options = {
		style: 'currency',
		currency: 'CNY'
	}
	return num.toLocaleString('zh-CN', options)  // ¥123,456.00
}

/**
 * 过滤HTML标签
 * @param {*} str 
 * @returns 
 */
const filterHtml = str => {
	return str.replace(/<[^<]+>/g, '')
}

export {
	phoneStar,
	thousandth,
	filterHtml
}