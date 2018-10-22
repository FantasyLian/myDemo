// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);

import App from './App'

import routes from './router.js'

Vue.config.debug = true;

/* eslint-disable no-new */
const router = new VueRouter({
	routes
});

const app = new Vue({
	router,
	render: h => h(App)
}).$mount('#app');