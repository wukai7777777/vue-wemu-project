<template>
	<div>
		<header class="header-bar bgfff">
			<a href="javascript:history.back(-1);" class="header-left">
				<i class="icon"></i>
			</a>
			<h2 class="header-title">添加银行卡</h2>
		</header>

		<div class="bandBankCard">
			<h3 class="tit3">请绑定持卡人本人的银行卡</h3>
			<dl class="int-wrap clearfix">
				<dt>持卡人</dt>
				<dd><input class="int" disabled="true" type="text" placeholder="金大川" /></dd>
			</dl>
			<dl class="int-wrap clearfix">
				<dt>卡号</dt>
				<dd><input class="int" type="text" placeholder="请输入银行卡号" /></dd>
			</dl>
			<dl class="int-wrap clearfix">
				<dt>预留手机号</dt>
				<dd><input class="int" type="text" placeholder="请输入预留手机号" /></dd>
			</dl>
			<dl class="int-wrap clearfix mainBc">
				<dt>验证码</dt>
				<dd>
					<input class="int" type="text" placeholder="请输入短信验证码" />
					<span class="VerificationCode">获取验证码</span>
				</dd>
			</dl>
		</div>	

		<div class="myBackMonye-wrap">
			<!-- <a class="myBackMonye" id="myBackMonye" href="./bankCard.html">确认添加</a> -->
			<router-link class="myBackMonye" to="bankCard">确认添加</router-link>
		</div>
	</div>
</template>