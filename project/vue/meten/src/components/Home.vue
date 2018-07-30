<template>
	<div class="layout">
		<Layout>
			<header>
				<h1><Icon type="chevron-left"></Icon>{{ title }}</h1>
				<div class="search-bar">
					<Icon type="ios-search"></Icon>
					<Input v-model="value" placeholder="输入学员名搜索"></Input>
				</div>
			</header>
			<section>
				<ul class="student-list">
					<li>
						<div class="student">
							<Avatar src="" />
							<span class="name">连军Anfield</span>
						</div>
						<Icon type="ios-arrow-right"></Icon>
					</li>
				</ul>
			</section>
		</Layout>
	</div>
</template>

<script>
export default {
	name: 'Home',
	data () {
		return {
			title: '学员预习情况',
			value: '',
			data: []
		}
	},
	methods: {
		getStudentList() {
			
		}
	}
}
</script>

<style>
html {
	font-size: 20px;
}
h1 {
	height: 2.5rem;
	line-height: 2.5rem;
	background-color: rgb(94,94,94);
	color: #fff; 
	font-size: 1rem;
	font-weight: normal;
	padding: 0 .5rem;
}
h1 .ivu-icon {
	margin-right: .5rem;
}
.search-bar input {
	border: 1px solid #dedede;
	height: 1.5rem;
	line-height: 1.5rem;
	width: 100%;
	border-radius: 1.5rem;
	padding: 0 2.5em;
}
.search-bar {
	padding: .25rem .75rem;
	background-color: rgb(242,242,242);
	position: relative;
}
.search-bar .ivu-icon {
	font-size: 1rem;
	position: absolute;
	left: 1.2em;
	top: .5rem;
	z-index: 1;
}
.search-bar input:focus {
	outline: none;
}
.student-list li {
	height: 2.5rem; 
	line-height: 2.5rem;
	border-bottom: 1px solid #ddd;
	padding: 0 .6rem 0 .8rem;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
}
.student-list li:last-child {
	border: none;
}
.student-list li .ivu-avatar {
	width: 1.3rem;
	height: 1.3rem;
}
.student-list li .name { 
	font-size: .7rem; 
	vertical-align: middle;
	margin-left: .5rem;
}
.student-list li .ivu-icon-ios-arrow-right {
	font-size: 1rem;
}
</style>
