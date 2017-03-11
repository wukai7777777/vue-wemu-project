<template>
	<div>
		<header class="header-bar bgfff">
			<a href="javascript:history.back(-1);" class="header-left">
				<i class="icon"></i>
			</a>
			<h2 class="header-title">设置</h2>
		</header>

		<div class="link-list-wrap setUp-list-wrap">
			<!-- <a class="link icon" href="./resetPassword.html">修改密码</a>
			<a class="link icon" href="./BindMailbox.html">绑定邮箱</a>
			<a class="link icon" href="./bankCard.html">银行卡</a>
			<a class="link icon" href="./resetPhoneNumber.html">手机号修改</a> -->
			<router-link class="link icon" to="resetPassword"><span>修改密码</span></router-link>
			<router-link class="link icon" to="bindMailbox"><span>绑定邮箱</span></router-link>
			<router-link class="link icon" to="bankCard"><span>银行卡</span></router-link>
			<router-link class="link icon" to="resetPhoneNumber"><span>手机号修改</span></router-link>
		</div>
		<div class="btn-solid-wrap plr">
			<a href="javascript:;" class="btn-solid">退出</a>
		</div>
	</div>
</template>