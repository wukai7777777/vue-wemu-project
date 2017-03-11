<template>
	<div>
		<header class="header-bar bgfff">
			<a href="javascript:history.back(-1);" class="header-left">
				<i class="icon"></i>
			</a>
			<h2 class="header-title">密码修改</h2>
		</header>

		<div class="bandBankCard">
			<dl class="int-wrap mt10 clearfix">
				<dt>原密码</dt>
				<dd><input class="int" type="password" placeholder="请输入原密码" /></dd>
			</dl>
			<dl class="int-wrap mainBc clearfix">
				<dt>新密码</dt>
				<dd>
					<input class="int" type="password" placeholder="请输入新密码" />
				</dd>
			</dl>
		</div>	

		<div class="myBackMonye-wrap">
			<a class="myBackMonye" id="myBackMonye" href="javascript:;">确认修改</a>
		</div>
	</div>
</template>