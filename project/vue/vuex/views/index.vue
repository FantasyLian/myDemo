<template>
	<div>
		<h1>首页</h1>
		{{ count }} 
		<br>
		<br>
		<button @click="handleIncrement">+2</button>
		<button @click="handleDecrease">-10</button>
		<button @click="handleIncrementMore">+5</button>
		<br>
		<br>
		<router-link to="/about">跳转到about</router-link>
	</div>
</template>
<script>
	export default {
		computed: {
			count() {
				return this.$store.state.count
			}
		},
		methods: {
			handleIncrement() {
				this.$store.commit('increment');
			},
			handleDecrease() {
				this.$store.commit({
					type: 'decrease',
					count: 10
				});
			},
			handleIncrementMore() {
				this.$store.commit('increment', 5);
			}
		}
	}
</script>
