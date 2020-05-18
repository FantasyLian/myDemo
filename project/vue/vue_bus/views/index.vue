<template>
	<div>
		<h1>随机增加：</h1>
		<Counter :number="number"></Counter>

		<router-link to="/about">跳转到 about</router-link>
	</div>
</template>
<script>
	import Counter from '../components/Counter.vue';
	export default {
		components: { Counter },
		methods: {
			handleAddRandom(num) {
				this.number += num;
			}
		},
		data() {
			return {
				number: 0
			}
		},
		created() {
			this.$bus.on('add', this.handleAddRandom);
		},
		beforeDestory() {
			this.$bus.off('add', this.handleAddRandom);
		}
	}
</script>