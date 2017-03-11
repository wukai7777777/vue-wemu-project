<template>
	<div>
		<header class="header-bar bgfff">
			<a href="javascript:history.back(-1);" class="header-left">
				<i class="icon"></i>
			</a>
			<h2 class="header-title">绑定邮箱</h2>
		</header>

		<div class="bandBankCard mt10">
			<dl class="int-wrap clearfix">
				<dt>绑定邮箱</dt>
				<dd>
					<input class="int" type="text" placeholder="请输入本人储蓄卡号" />
					<span class="VerificationCode">获取验证码</span>
				</dd>
			</dl>
			<dl class="int-wrap clearfix mainBc">
				<dt>验证码</dt>
				<dd><input class="int" type="text" placeholder="请输入验证码" /></dd>
			</dl>
		</div>	

		<div class="myBackMonye-wrap">
			<a class="myBackMonye" href="javascript:;">确认绑定</a>
		</div>
	</div>
</template>