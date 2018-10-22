// 1. 定义（路由）组件。  
// 可以从其他文件 import 进来  

import Foo from './views/foo.vue'
import Bar from './views/bar.vue'

const User = {
  template: `<div>User {{ $route.params.id }}</div>`
}

export default [{
	path: '/user/:id',
	component: User
}, {
	path: '/bar',
	component: Bar
}]