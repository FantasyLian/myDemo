'use strict';

import Vue from 'vue';
import VueRouter from 'vue-router';
import VueBus from './vue-bus.js';
import App from './app.vue';
import Routers from './router.js';
import './style.css';

Vue.use(VueRouter);
Vue.use(VueBus);

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

new Vue({
	el: '#app',
	router,
	render: h => h(App)
})