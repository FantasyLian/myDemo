import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Privilege from '@/components/Privilege'
import BenefitList from '@/components/BenefitList'
import RecommendList from '@/components/RecommendList'
import DownloadImg from '@/components/DownloadImg'
import Register from '@/components/Register'
import Login from '@/components/Login'
import NotFound from '@/components/NotFound'

Vue.use(Router)

const router =  new Router({
	routes: [
		{
			path: '/',
			name: 'Index',
			meta: {
				title: '首页'
			}, 
			component: Index
		}, {
			path: '/privilege',
			name: 'Privilege',
			meta: {
				title: '代理特权'
			}, 
			component: Privilege
		}, {
			path: '/benefitList',
			name: 'BenefitList',
			meta: {
				title: '分润明细'
			}, 
			component: BenefitList
		}, {
			path: '/recommendList',
			name: 'RecommendList',
			meta: {
				title: '推荐用户'
			}, 
			component: RecommendList
		}, {
			path: '/downloadImg',
			name: 'DownloadImg',
			meta: {
				title: '邀请好友'
			}, 
			component: DownloadImg
		}, {
			path: '/register',
			name: 'Register',
			meta: {
				title: '注册'
			}, 
			component: Register
		},{
			path: '/login',
			name: 'Login',
			meta: {
				title: '登录'
			}, 
			component: Login
		}, {
			path: '*',
			name: '404',
			meta: {
				title: '找不到页面'
			},
			component: NotFound
		}
	]
});

router.beforeEach((to, from, next) => {
	// 路由发生变化修改页面的title
	if (to.meta.title) {
		document.title = to.meta.title;
	}
	next();
});

export default router;
