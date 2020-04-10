<template>
	<section class="container">
        <!-- <ul class="details" id="benefitList">
            <li class="flex-jcsb">
                <div class="col-l">
                    <strong>闪付收款分润</strong>
                    <p class="timestamp">2019-09-09 11:28:50</p>
                </div>
                <div class="col-r">
                    <strong>1.87</strong>
                    <p class="status auditing">待结算</p>
                </div>
            </li>
        </ul>
        <div class="empty hide" id="emptyTip">
            <img src="../assets/icon_empty.png" alt="">
        </div> -->
		<van-list 
			v-model="loading"
			:finished="finished"
			finished-text="没有更多了"
			@load='onLoad'
		>
			<van-cell 
				v-for="item in list"
				:key="item"
				:title="item"
			/>
		</van-list>
    </section>
</template>

<script>
	export default {
		name: 'BenefitList',
		data() {
			return {
				list: [],
				loading: false,
				finished: false
			}
		},
		methods: {
			onLoad() {
				setTimeout(() => {
					for (let i = 0; i < 10; i++) {
						this.list.push(this.list.length + 1);
					}
					this.loading = false;

					if (this.list.length >= 40) {
						this.finished = true;
					}
				}, 500);
			}
		}
	}
</script>

<style scoped>
.details {
	margin-top: .2rem;
	background-color: #fff;
}

.details li {
	position: relative;
	padding: .31rem .32rem;
}

.details li::after {
	content: " ";
	position: absolute;
	left: 0;
	top: 0;
	right: 0;
	height: 1px;
	border-top: 1px solid rgba(240,240,240,1);
	color: rgba(240,240,240,1);
	-webkit-transform-origin: 0 0;
	transform-origin: 0 0;
	-webkit-transform: scaleY(0.5);
	transform: scaleY(0.5);
	z-index: 2;
}

.details li strong {
	font-size: .28rem;
	color: rgba(51, 51, 51, 1);
	display: block;
}

.details li .col-r strong {
	text-align: right;
}

.details li .timestamp {
	font-size: .2rem;
	font-weight: 400;
	color: rgba(153, 153, 153, 1);
}

.details li .auditing {
	color: rgba(0,168,255,1);
}

.details li .failed {
	color: rgba(254,56,55,1);
}

.details li .succeed {
	color: rgba(0,179,0,1);
}

.details li .status {
	text-align: right;
	font-size: .2rem;
}
</style>