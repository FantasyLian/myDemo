
import Vue from "vue";
import Router from 'vue-router'

import Login from '@/components/Login'
import Home from '@/components/Home'

Vue.use(Router)

let routes = [{
	path: '/',
	name: '',
	component: Login
}, {
	path: '/Home',
	name: 'home',
	component: Home
}]

export default new Router({
	routes
})
