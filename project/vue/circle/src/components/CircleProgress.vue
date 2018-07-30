<template>
	<div class="circle-wrap">
    	<svg width="440" height="440" viewbox="0 0 440 440">
			<circle cx="220" cy="220" r="170" stroke-width="30" stroke="#D1D3D7" fill="none"></circle>
			<circle cx="220" cy="220" r="170" stroke-width="50" stroke="#00A5E0" fill="none" transform="matrix(0,-1,1,0,0,440)" stroke-dasharray="0 1069"></circle>
    	</svg>
		<div class="progress">{{ value }}%</div>
		<p class="bar-wrap"><input id="range" type="range" min="0" max="100" @change="handleRange" v-model="value"></p>
    </div>
</template>

<script>
export default {
	name: 'circle-progress',
	data () {
		return {
			value: 0
		}
	},
	methods: {
		handleRange(event) {
			let circle = document.querySelectorAll('circle')[1];
			if (circle) {
				let percent = event.target.value / 100,
					perimeter = Math.PI * 2 * 170;
				circle.setAttribute('stroke-dasharray', perimeter * percent + ' ' + perimeter * (1 - percent));
			}
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
circle {
	-webkit-transition: stroke-dasharray .25s;
	transition: stroke-dasharray .25s;

	transform: matrix(0, -1, -1, 0, 0, 0);
	transform-origin: 220px 220px 0;
}

.circle-wrap {
	width: 440px;
	height: 440px;
	position: relative;
}
.progress {
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	font-size: 32px;
}
.bar-wrap {
	text-align: center;
}
input[type="range"] {
	width: 320px;
}
</style>
