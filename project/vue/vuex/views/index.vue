<template>
	<div>
		<h1>首页</h1>
		{{ count }} 
		<br>
		<button @click="handleAsyncIncrement">async +1</button>
		<br>
		<br>
		<button @click="handleIncrement">+2</button>
		<button @click="handleDecrease">-10</button>
		<button @click="handleIncrementMore">+5</button>
		<hr>
		<br>
		<br>
		<div>{{ list }}</div>
		<br>
		<div>{{ listCount }}</div>
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
			},
			list() {
				return this.$store.getters.filteredList
			},
			listCount() {
				return this.$store.getters.listCount
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
			},
			handleAsyncIncrement() {
				this.$store.dispatch('asyncIncrement').then(() => {
					console.log(this.$store.state.count); // 1
				});
			}
		}
	}
</script>
