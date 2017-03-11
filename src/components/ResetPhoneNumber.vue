<template>
	<div>
		<header class="header-bar bgfff">
			<a href="javascript:history.back(-1);" class="header-left">
				<i class="icon"></i>
			</a>
			<h2 class="header-title">更换绑定手机号</h2>
		</header>

		<div class="bandBankCard">
			<dl class="int-wrap mt10 clearfix">
				<dt>原手机号</dt>
				<dd><input class="int" disabled="true" type="text" placeholder="请输入目前绑定的手机号" /></dd>
			</dl>
			<dl class="int-wrap clearfix">
				<dt>新手机号</dt>
				<dd>
					<input class="int" type="text" placeholder="请输入新手机号" />
					<span class="VerificationCode">获取验证码</span>
				</dd>
			</dl>
			<dl class="int-wrap clearfix">
				<dt>预留手机号</dt>
				<dd><input class="int" type="text" placeholder="请输入预留手机号" /></dd>
			</dl>
			<dl class="int-wrap clearfix mainBc">
				<dt>短信验证码</dt>
				<dd>
					<input class="int" type="text" placeholder="请输入验证码" />
				</dd>
			</dl>
		</div>	

		<div class="myBackMonye-wrap">
			<a class="myBackMonye" id="myBackMonye" href="javascript:;">确认修改</a>
		</div>
	</div>
</template>