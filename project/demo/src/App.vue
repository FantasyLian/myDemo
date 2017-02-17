<template>
	<div id="app">
		<h1>Hello App!</h1>
		<p>
			<router-link to="/user/foo">/user/foo</router-link>
			<router-link to="/user/bar">/user/bar</router-link>
		</p>
		<router-view></router-view>
	</div>
</template>

<script>
import Hello from './components/Hello'

export default {
	name: 'app',
	components: {
		Hello
	}
}
</script>

<style>
.container {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>