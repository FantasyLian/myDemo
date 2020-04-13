'use strict';

import axios from 'axios';

//基本配置
const Util = {
    imgPath: 'http://127.0.0.1:8011/img/',
    apiPath: 'http://127.0.0.1:8010/'
};

// Ajax 通用配置
Util.ajax = axios.create({
    baseURL: Util.apiPath
});

//添加响应拦截器
Util.ajax.interceptors.response.use(res => {
    return res.data;
});

// 获取今天的时间戳
Util.getTodayTime = () => {
    const date = new Date();
    date.setHours(0);
    date.setMinutes(0);
    date.setSeconds(0);
    date.setMilliseconds(0);
    return date.getTime();
}

export default Util;