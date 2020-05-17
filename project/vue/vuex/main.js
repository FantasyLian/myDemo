'use strict';

import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import App from './app.vue';
import Routers from './router.js'

Vue.use(VueRouter);
Vue.use(Vuex);

const RouterConfig = {
	mode: 'history',
	routes: Routers
}

const router = new VueRouter(RouterConfig);

router.beforeEach((to, from, next) => {
	window.document.title = to.meta.title;
	next();
});

router.afterEach((to, from, next) => {
	window.scrollTo(0, 0);
});

const store = new Vuex.Store({
	state: {
		count: 0
	},
	mutations: {
		increment(state, n = 2) {
			state.count += n;
		}, 
		decrease(state, params) {
			state.count -= params.count;
		}
	}
});

new Vue({
	el: '#app',
	router,
	store,
	render: h => h(App)
});