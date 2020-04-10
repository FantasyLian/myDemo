// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vant from 'vant'
import axios from 'axios'
import { initPage } from './utils'
import 'vant/lib/index.css'
import './copartner.css'

Vue.use(Vant)
Vue.config.productionTip = false
// 全局注册axios
Vue.prototype.$http = axios
// 设置全局访问接口
axios.defaults.baseURL = 'http://25912xa672.zicp.vip/appservice'

/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   router,
//   components: { App },
//   template: '<App/>'
// })

const app = new Vue({
	router,
	components: { App },
	template: '<App/>'
}).$mount('#app');
