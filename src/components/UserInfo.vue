<template>
	<div id="userInfo">
		<div class="logout-wrap">
			<dl style="display:block;" class="dl1 clearfix">
				<dt>未登录</dt>
				<dd>
					<!-- <a class="btn-solid" href="./login.html">立即登录</a> -->
					<router-link class="btn-solid" to="login">立即登录</router-link>
				</dd>
			</dl>
			<dl style="display:none" class="dl2 clearfix">
				<dt><img src="../assets/images/headpic.png" alt="" /></dt>
				<dd>hi 18702599217</dd>
			</dl>
		</div>

		<div class="link-list-wrap">
			<!-- <a class="link icon" href="./myInformation.html">我的资料</a> -->
			<router-link class="link icon" to="myInformation">我的资料</router-link>
			<!-- <a class="link icon" href="./transactionRecord.html">交易记录</a> -->
			<router-link class="link icon" to="transactionRecord/backMonye">交易记录</router-link>
			<!-- <a class="link icon" href="./helpCenter.html">帮助中心</a> -->
			<router-link class="link icon" to="helpcenter">帮助中心</router-link>
			<!-- <a class="link icon" href="./setUp.html">设置</a> -->
			<router-link class="link icon" to="setUp">设置</router-link>
		</div>
	</div>
</template>