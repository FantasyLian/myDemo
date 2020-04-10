<template>

	<section class="container">
        <div class="privilege_banner">
            <img src="../assets/banner_privilege.png" alt="">
        </div>
        <div class="card revenue">
            <h3>收益来源</h3>
            <ul class="flex-jcsb">
                <li>
                    <a href="javascript:;">
                        <img src="../assets/btn_privilege_1.png" alt="">
                        <p>规划分润</p>
                    </a>
                </li>
                <li>
                    <a href="javascript:;">
                        <img src="../assets/btn_privilege_2.png" alt="">
                        <p>收费分润</p>
                    </a>
                </li>
                <li>
                    <a href="javascript:;">
                        <img src="../assets/btn_privilege_0.png" alt="">
                        <p>敬请期待</p>
                    </a>
                </li>
            </ul>
        </div>
        <div class="card rate">
            <h3>合伙人费率</h3>
            <ul class="rate-list" id="rateList">
                <li class="flex-jcsb">
                    <div>业务类型</div>
                    <div>费率</div>
                </li>
            </ul>
        </div>
    </section>

</template>

<script>
    import urlPath from '../utils'
	export default {
		name: 'Privilege',
		data() {
			return {

			}
		},
        mounted() {
            let vk = localStorage.getItem('vk');
            this.getUserInfo(vk);
        },
		methods: {

            getUserInfo(vk) {
                this.$http.post('/branch/fee.do', {
                    'vk': vk
                }).then(res => {
                    console.log(res);
                }).catch(error => {
                    console.log(error);
                })
            }
		}
	}
</script>

<style scoped>

.privilege_banner, .revenue, .rate {
    margin: .3rem .36rem;
}

.revenue {
    padding: .4rem .36rem .35rem;
    box-sizing: border-box;
}

.revenue h3, .rate h3 {
    font-size: .3rem;
    color: rgba(51, 51, 51, 1);
}

.rate h3 {
    padding: 0 .36rem;
    height: 1.26rem;
    line-height: 1.26rem;
}

.revenue ul {
    justify-content: start;
    margin-top: .3rem;
}

.revenue ul li {
    width: 1rem;
    margin-right: .67rem;
}

.revenue li a {
    display: block;
    text-align: center;
}

.revenue li a p {
    font-size: .2rem;
    color: rgba(51, 51, 51, 1);
    margin-top: .11rem;
}

.rate-list li {
    border-top: 1px solid rgba(238, 238, 238, 1);
    height: 1rem;
    line-height: 1rem;
}

.rate-list li:last-child {
    height: 1.4rem;
}

.rate-list li > div {
    width: 50%;
    border-right: 1px solid rgba(238, 238, 238, 1);
    font-size: .24rem;
    color: rgba(153, 153, 153, 1);
}

.rate-list li > div:first-child {
    padding-left: .35rem;
}

.rate-list li > div:last-child {
    padding-right: .35rem;
    text-align: right;
    border: 0;
}
</style>