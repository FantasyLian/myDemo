<template>
	<div>
		{{ number }}
		<button @click="handleAddRandom">随机新增</button>
	</div>
</template>
<script>
	export default {
		props: {
			number: {
				type: Number
			}
		},
		watch: {
			number: (newVal, oldVal) => {
				console.log(newVal, oldVal);
			}
		},
		methods: {
			handleAddRandom() {
				const num = Math.floor(Math.random() * 100 + 1);
				this.$bus.emit('add', num);
			}
		}
	}
</script>