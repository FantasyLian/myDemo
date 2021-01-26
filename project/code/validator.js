const EMAIL_REG = /^[0-9a-zA-Z]+([.\-_]*[0-9a-zA-Z]+)*@([0-9a-zA-Z]+[-_]*[0-9a-zA-Z]+\.)+[0-9a-zA-Z]{2,6}$/
const MOBILE_REG = /^1[3|4|5|7|8][0-9]{9}$/
const VERIFY_REG = /^\d{6}$/
const PASSWORD_REG = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/


/**
 * 校验邮箱地址
 * @param {*} email 
 */
function validateEmail (email) {
  if (!email) {
    Toast("请输入邮箱")
  } else if (!EMAIL_REG.test(email)) {
    Toast("邮箱格式不正确")
  } else {
    return true
  }
}

/**
 * 校验手机号码
 * @param {*} mobile 
 */
function validateMobile (mobile) {
  if (!mobile) {
    Toast('请输入手机号码')
  } else if (!MOBILE_REG.test(mobile)) {
    Toast('手机号码格式不正确')
  } else {
    return true
  }
}

/**
 * 校验验证码
 * @param {*} code 
 */
function validateVerifyCode (code) {
  if (!code) {
    Toast('请输入验证码')
  } else if (!VERIFY_REG.test(code)) {
    Toast('请输入正确的验证码')
  } else {
    return true
  }
}

/**
 * 校验密码
 * @param {*} password 
 */
function validatePassword (password, tip = '请输入密码') {
  if (!password) {
    Toast(tip)
  } else if (!PASSWORD_REG.test(password)) {
    Toast('密码为6-16位数字和字母组成')
  } else {
    return true
  }
}

/**
 * 校验手机或邮箱
 * @param {*} value
 */
function validateMobileOrEmail (value) {
  if (!value) {
    Toast('请输入邮箱或手机号')
  } else {
    if (value.indexOf('@') > 0) { // 含有 @ 
      if (!EMAIL_REG.test(value)) {
        Toast('邮箱格式不正确')
      } else {
        return true
      }
    } else {
      if (!MOBILE_REG.test(value)) {
        Toast('手机号码格式不正确')
      } else {
        return true
      }
    }
  }
}

export {
  validateEmail,
  validateMobile,
  validateVerifyCode,
  validatePassword,
  validateMobileOrEmail
}