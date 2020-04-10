<template>

	<section class="container">
        <div class="users-table">
            <div class="table-hd flex-jcsb">
                <div class="td">用户</div>
                <div class="td">注册时间</div>
                <div class="td">是否实名</div>
            </div>
        
            <ul class="recommended-users" id="recommendedList">
                <li class="flex-jcsb">
                    <div class="td">
                        <strong>138****1234(吴*祖)</strong>
                    </div>
                    <div class="td">
                        <p class="timestamp">2019-09-09 11:28:50</p>
                    </div>
                    <div class="td">
                        <div class="status yes"></div>
                    </div>
                </li>
            </ul>
        </div>
        <div class="empty hide" id="emptyTip">
            <img src="../assets/icon_empty.png" alt="">
        </div>
    </section>

</template>

<script>
	export default {
		name: 'RecommendList',
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style scoped>
.users-table .table-hd {
	background-color: #fff;
	margin-top: .2rem;
	font-size: .24rem;
	font-weight: 500;
	padding: .29rem .32rem;
}

.users-table .table-hd .td {
	color: rgba(102,102,102,1);
}

.users-table .td:first-child {
	width: 2.2rem;
}

.recommended-users li {
	padding: .52rem .32rem;
	background-color: #fff;
	position: relative;
}

.recommended-users li::after {
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

.recommended-users li .timestamp {
	color: rgba(51,51,51,1);
}

.recommended-users .yes {
	background: url(../assets/icon_yes.png) no-repeat center;
	background-size: contain;
	width: .47rem;
	height: .32rem;
}

.recommended-users .wrong {
	background: url(../assets/icon_wrong.png) no-repeat center;
	background-size: contain;
	width: .37rem;
	height: .37rem;
}

</style>