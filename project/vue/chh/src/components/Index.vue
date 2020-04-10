<template>

	<section class="container">
		<div class="user-info">
			<div class="user-wrap flex-jcsb" id="userInfo">
				<div class="col-l">
					<img src="../assets/default_avatar.png" class="avatar" alt="头像">
					<div class="name">
						<h4>{{ user.name }}</h4>
						<p>就这么躺着赚钱</p>
					</div>
				</div>
				<div class="col-r t-c">
					<p class="code">剩余邀请码</p>
					<em>{{ user.count }}</em>
				</div>
			</div>
		</div>

		<div class="card account" id="userProfit">
			<div class="account-hd flex-jcsb">
				<div class="col-l">
					<div class="profit" id="yesProfit">
						<strong>{{ user.yesProfit }}</strong>
						<span>昨日收益(元)</span>
					</div>
				</div>
				<div class="col-r">
					<router-link to="/privilege" class="privilege"></router-link>
				</div>
			</div>
			<div class="account-bd flex-jcsb">
				<div class="col-l">
					<div class="wait" id="waitProfit">
						<strong>68.12</strong>
						<span>待结算收益(元)</span>
					</div>
				</div>
				<div class="col-r">
					<div class="total" id="totalProfit">
						<strong>885.65</strong>
						<span>累计收益(元)</span>
					</div>
				</div>
			</div>
			<div class="account-ft flex-jcsb">
				<div class="col-l">
					<p>可用余额<strong class="balance" id="balance"></strong>元</p>
				</div>
				<div class="col-r">
						<!-- <a href="./withdrawal.html" class="withdrawal">提现</a> -->
					<router-link class="withdrawal" to="/register"></router-link>
				</div>
			</div>
		</div>

		<router-link class="invite" to="/downloadImg"></router-link>

		<div class="card service">
			<h3>合伙人服务</h3>
			<ul class="flex-jcsb">
				<li>
					<router-link to="/benefitList">
						<img src="../assets/btn_service_1.png" alt="">
						<p>分润明细</p>
					</router-link>
				</li>
				<li>
					<router-link to="/privilege">
						<img src="../assets/btn_service_2.png" alt="">
						<p>费率查询</p>
					</router-link>
				</li>
				<li>
					<router-link to="recommendList">
						<img src="../assets/btn_service_3.png" alt="">
						<p>推荐用户</p>
					</router-link>
				</li>
				<li>
					<img src="../assets/btn_service_0.png" alt="">
					<p>敬请期待</p>
				</li>
			</ul>
		</div>
	</section>

</template>

<script>
import { getUrlSearch } from '../utils'
export default {
	name: 'Index',
	data () {
		return {
			user: {
				name: '李大鸟',
				count: 100,
				yesProfit: 23.87
			}
		}
	},
	mounted() {

	},
	methods: {
		
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.user-info {
	width: 7.5rem;
	height: 3.27rem;
	box-sizing: border-box;
	padding: .75rem .36rem;
	background: linear-gradient(135deg,rgba(29,6,190,1) 0,rgba(60,39,205,1) 100%);
	border-radius: 0 0 .3rem .3rem
}

.user-info .avatar {
	width: .62rem;
	height: .62rem;
	border-radius: 50%;
	margin-right: .16rem;
	float: left
}

.user-info .user-wrap .col-l {
	width: 50%
}

.user-info .name h4 {
	height: .29rem;
	line-height: 1;
	font-size: .3rem;
	font-weight: 500;
	color: rgba(255,255,255,1);
	margin-top: .04rem
}

.user-info .name p {
	height: .19rem;
	line-height: 1;
	font-size: .2rem;
	font-weight: 400;
	color: rgba(148,132,255,1);
	margin-top: .08rem
}

.user-info .user-wrap .col-r .code {
	height: .23rem;
	font-size: .24rem;
	font-weight: 400;
	color: rgba(255,255,255,1);
	margin: .11rem 0 .08rem 0;
	line-height: 1
}

.user-info .user-wrap .col-r em {
	height: .19rem;
	font-size: .24rem;
	font-weight: 500;
	color: rgba(255,254,254,1);
	font-style: normal;
	line-height: 1
}

.account {
	width: 6.78rem;
	height: 3.68rem;
	box-sizing: border-box;
	padding: .4rem .4rem .3rem;
	margin: -1.47rem auto .3rem;
}

.account .account-hd,
.account .account-bd {
	margin-bottom: .23rem;
}

.account .profit strong {
	display: block;
	font-size: .48rem;
	color: rgba(51, 51, 51, 1);
	line-height: 1;
}

.account .profit span,.account .wait span, .account .total span {
	font-size: .2rem;
	font-weight: 400;
	color: rgba(152, 153, 153, 1);
	margin-top: .14rem;
}

.account .privilege {
	display: block;
	width: 1.6rem;
	height: .6rem;
	background: url(../assets/btn_privilege.png) no-repeat center;
	background-size: contain;
}
/* .account .privilege:focus {outline: -webkit-focus-ring-color auto 0;} */
.account .wait strong, .account .total strong {
	display: block;
	font-size: .3rem;
	color: rgba(51, 51, 51, 1);
}

.account .total strong {
	text-align: right;
}

.account .account-ft {
	position: relative;
}

.account .account-ft::before {
	content: " ";
	position: absolute;
	left: 0;
	top: 0;
	right: 0;
	height: 1px;
	border-top: 1px solid rgba(240,240,240,1);
	color: rgba(240,240,240,1);

	transform-origin: 0 0;

	transform: scaleY(0.5);
	z-index: 2;
}

.account .account-ft .withdrawal {
	width: 1.3rem;
	height: .6rem;
	display: block;
	background: url(../assets/btn_withdrawal.png) no-repeat center;
	background-size: contain;
	text-indent: -999999em;
	margin-top: .27rem;
}

.account .account-ft .col-l p {
	margin-top: .4rem;
	line-height: 1;
}

.account .account-ft .balance {
	font-size: .3rem;
	margin: 0 .1rem;
}

.invite {
	display: block;
	width: 6.78rem;
	height: 1.53rem;
	background: url(../assets/btn_invitation.png) no-repeat center;
	background-size: contain;
	margin: .3rem auto;
}

.service {
	width: 6.78rem;
	height: 3.68rem;
	box-sizing: border-box;
	padding: .65rem .38rem .85rem;
	margin: .3rem auto;
}

.service h3 {
	font-size: .36rem;
	color: rgba(51, 51, 51, 1);
	line-height: .35rem;
	margin-bottom: .49rem;
}

.service ul li a {
	display: block;
}

.service ul img {
	width: 1rem;
	height: 1rem;
}

.service ul img + p {
	margin-top: .11rem;
	font-size: .2rem;
	text-align: center;
}

</style>