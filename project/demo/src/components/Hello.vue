<template>
	<div class="hello">
		<h1 @click="greet">{{ msg }}</h1>
		<h2 @click="say('Hi')">{{ text }}</h2>
	</div>
</template>

<script>
export default {
	name: 'hello',
	data () {
		return {
			msg: 'LianJun',
			text: '520'
		}
	},
	methods: {
		greet: function() {
			// // 方法内 `this` 指向 vm
			alert(this.text)
		},
		say: function(msg) {
			alert(msg)
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
	font-weight: normal;
}

ul {
	list-style-type: none;
	padding: 0;
}

li {
	display: inline-block;
	margin: 0 10px;
}

a {
	color: #42b983;
}
</style>