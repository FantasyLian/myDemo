import Vue from 'vue'
import Router from 'vue-router'
import CircleProgress from '@/components/CircleProgress'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			name: 'circle-progress',
			component: CircleProgress
		}
	]
})
