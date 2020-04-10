<template>

	<section class="container">
        <div class="download-img" id="view" style="height: 100vh;">
            <div class="code-wrap">
                <div class="code">
                    <div class="hide" id="qrcode"></div>
                    <div class="img-bg" id="imgCode"></div>
                </div>
            </div>
            <!-- <img src="../img/poster_invitation.jpg" class="" alt=""> -->
            <a href="javascript:;" class="download download2" id="getScreenImg"></a>
        </div>
    </section>

</template>

<script>
	export default {
		name: 'DownloadImg',
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style scopte>
.download-img > img {
	display: none;
	position: absolute;
	top: 0;
	left: 50%;
	right: 0;
	bottom: 0;
	width: 7.5rem;
	height: 100%;
	transform: translateX(-50%);
}

.download-img .download {
	position: absolute;
	width: 5.4rem;
	height: 1.1rem;
	background: url(../assets/btn_download.png) no-repeat center;
	background-size: contain;
	bottom: .72rem;
	left: 50%;
	transform: translateX(-50%);
}

.download-img .download2 {
	background: url(../assets/btn_scanqrcode.png) no-repeat center;
	background-size: contain;
}

.code-wrap {
	position: absolute;
	z-index: 10;
	left: 50%;
	bottom: 16%;
	transform: translateX(-50%);
}

.code-wrap .img-bg {
	width: 2.1rem;
	height: 2.1rem;
	background: url(../assets/bg_qrcode.png) no-repeat center;
	background-size: contain;
	display: flex;
	display: -webkit-flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
}

.code-wrap .img-bg img {
	width: 1.5rem;
}

.download-img {
	height: calc(100vh - 1.28rem);
	background: url(../assets/poster_invitation.jpg) no-repeat center bottom;
	background-size: cover;
}

</style>