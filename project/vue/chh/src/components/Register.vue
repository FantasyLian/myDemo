<template>

	<section class="container">
        <div class="register-banner">
            <img src="../assets/banner_register.png" alt="">
        </div>
        <div class="register" id="registerForm">
            <ul>
                <li>
                    <input type="text" maxlength="11" placeholder="请输入手机号" id="phoneNumber" oninput="value=value.replace(/[^\d]/g,'')">
                </li>
                <li>
                    <input type="text" maxlength="6" placeholder="请输入验证码" id="smsCode" oninput="value=value.replace(/[^\d]/g,'')">
                    <van-button type="default" v-if="!show" round size="small" disabled class="btn-code">{{ count }} S</van-button>
                    <van-button type="default" v-if="show" round size="small" class="btn-code" @click="getCode">立即注册</van-button>
                </li>
                <li>
                    <input type="password" v-if="isClosed" maxlength="8" placeholder="请输入密码">
                    <input type="text" v-if="isOpened" maxlength="8" placeholder="请输入密码">
                    <a href="javascript:;" class="view-pswd" :class="{'eye-closed': isClosed, 'eye-opened': isOpened}" @click="viewPassword"></a>
                </li>
                <li>
                    <van-button type="default" round size="large">立即注册</van-button>
                </li>
            </ul>
            <div class="footer">
                <span class="line">
                    已注册 请登录APP使用 
                    <a href="https://www.pgyer.com/Y2zH/" class="download">立即下载</a>
                </span>
            </div>
        </div>
    </section>

</template>

<script>
	export default {
		name: 'register',
		data() {
			return {
				show: true,
				count: '',
				timer: null,
				isOpened: false,
				isClosed: true
			}
		},
		methods: {
			getCode() {
				const TIME_COUNT = 60;
				if (!this.timer) {
					this.count = TIME_COUNT;
					this.show = false;
					this.timer = setInterval(() => {
						if (this.count > 0 && this.count <= TIME_COUNT) {
							this.count --;
						} else {
							this.show = true;
							clearInterval(this.timer);
							this.timer = null;
						}
					}, 1000);
				}
			},
			viewPassword() {
				this.isClosed = !this.isClosed;
				this.isOpened = !this.isOpened;
			}
		}
	}
</script>

<style scoped>
.register-banner {
	height: 3.8rem;
}

.register {
	padding: .2rem .32rem;
	height: calc(100vh - 3.8rem);
	background-color: #fff;
	box-sizing: border-box;
}

.register ul li {
	height: 1rem;
	position: relative;
	margin-top: .3rem;
}

.register ul li:last-child {
	border: 0;
	margin-top: 1.06rem;
}

.register .btn-code {
	width: 2rem;
	height: .76rem;
	line-height: .76rem;
	background-color: rgba(255,178,36,1);
	border-radius: .4rem;
	color: rgba(255,255,255,1);
	font-size: .28rem;
	border: 1px solid rgba(255,178,36,1);
	text-align: center;
	position: absolute;
	right: 0;
	top: 0;
}

.register .btn-gray {
	background-color: rgba(255,255,255,1);
	border: 1px solid rgba(211,216,220,1);
	color: rgba(198,204,209,1);
	border: 1px solid rgba(211,216,220,1);
}

.register li input {
	border: 0;
	border-bottom: 1px solid rgba(211,216,220,1);
	display: block;
	width: 100%;
	height: 100%;
	font-size: .32rem;
}

.register li input:focus {
	border-color: rgba(255,178,36,1);
}

.register .view-pswd {
	position: absolute;
	right: 0;
	bottom: .34rem;
	width: .3rem;
	height: .22rem;
}

.register .eye-opened {
	background: url(../assets/eye_opened.png) no-repeat center;
	background-size: contain;
}

.register .eye-closed {
	background: url(../assets/eye_closed.png) no-repeat center;
	background-size: contain;
}

.register .btn-regist {
	display: block;
	width: 100%;
	background: linear-gradient(0deg,rgba(28,212,255,1) 0%,rgba(26,143,248,1) 100%);
	border-radius: .46rem;
	height: .92rem;
	font-size: .28rem;
	font-weight: 500;
	color: rgba(255, 255, 255, 1);
	line-height: .92rem;
	text-align: center;
}

.register .btn-ashy {
	background: rgba(221,221,221,1);
}

.register .footer {
	margin: 1.02rem auto 0;
	font-size: .2rem;
	color: rgba(153,153,153,1);
	text-align: center;
	position: relative;
}

.register .footer a {
	color: rgba(28,212,255,1);
}

.register .footer::after {
	content: '';
	height: 1px;
	border-top: 1px solid rgba(218,218,218,1);
	width: 5rem;
	position: absolute;
	left: 50%;
	top: 8px;
	transform: translateX(-50%);
}

.register .footer .line {
	background-color: #fff;
	position: absolute;
	z-index: 33;
	left: 50%;
	transform: translateX(-50%);
	width: 3.8rem;
}

</style>