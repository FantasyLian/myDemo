'use strict';

const Routers = [
	{
		path: '/index',
		meta: { title: '首页' },
		component: (resolve) => require(['./views/index.vue'], resolve)
	},
	{
		path: '/about',
		meta: { title: '关于' },
		component: (resolve) => require(['./views/about.vue'], resolve)
	},
	{
		path: '/user/:id',
		meta: { title: '个人主页' },
		component: (resolve) => require(['./views/user.vue'], resolve)
	},
	{
		path: '*',
		redirect: '/index'
	}
]

export default Routers;
