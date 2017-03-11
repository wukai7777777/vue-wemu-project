<template>
	<div>
		<header class="header-bar shaow bgfff">
			<a href="javascript:history.back(-1);" class="header-left">
				<i class="icon"></i>
			</a>
			<h2 class="header-title">银行卡</h2>
			<!-- <a href="./addBankCard.html" class="header-right">
				<i class="icon"></i>
			</a> -->

			<router-link class="header-right" to="addBankCard"><i style="color:#666" class="icon"></i></router-link>
		</header>

		<div class="bankcard-wrap">
			<div class="bankcard">
				<dl class="dl1 clearfix">
					<dt><img src="../assets/images/ccb.png" alt="" /></dt>
					<dd>建设银行 <span class="fs13">储蓄卡</span></dd>
					<dd class="delete">删除</dd>
				</dl>
				<h3 class="tit3">**** **** **** 5033</h3>
			</div>
		</div>

		<div class="bankcard-wrap">
			<div class="bankcard">
				<dl class="dl1 clearfix">
					<dt><img src="../assets/images/ICBC.png" alt="" /></dt>
					<dd>工商银行 <span class="fs13">储蓄卡</span></dd>
					<dd class="delete">删除</dd>
				</dl>
				<h3 class="tit3">**** **** **** 5033</h3>
			</div>
		</div>
	</div>
</template>