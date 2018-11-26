let checkAccount = (rule, value, callback) => {
    if(!value) {
        return callback(new Error('请输入账号!'));
    } else if(value.length < 4 || value.length > 12) {
        return callback(new Error('账号名必须在4·12位'));
    } else {
        callback();
    }
};
let checkPass = (rule, vlaue, callback) => {
    debugger;
    if(value === '') {
        return callback(new Error('请输入密码！'));
    } else if(value.length < 4) {
        return callback(new Error('密码不能少于四位数'));
    } else {
        callback();
    }
};

module.exports = {
    checkAccount,
    checkPass
}