// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import ElementUI from 'element-ui'
import CKEditor from '@ckeditor/ckeditor5-vue'
import 'element-ui/lib/theme-chalk/index.css';
import './assets/base.css';

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(CKEditor)

new Vue({
	router,
	render: h => h(App)
}).$mount('#app')
