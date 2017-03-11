<template>
	<div style="padding-bottom:4rem;">
		<header class="header-bar bgfff shaow">
			<a href="javascript:history.back(-1);" class="header-left">
				<i class="icon"></i>
			</a>
			<h2 class="header-title">借款申请</h2>
		</header>
		<!-- 当前借款 -->
		<div class="borrowed-wrap loadMsg-wrap">
			<dl class="dl1 clearfix">
				<dt>借款金额</dt>
				<dd></dd>
			</dl>
			<dl class="dl1 clearfix">
				<dt class="fs30">500</dt>
				<dd></dd>
			</dl>
			<dl class="dl1 clearfix">
				<dt>借款发放之日起，开始计息</dt>
				<dd></dd>
			</dl>
		</div>
		<div class="borrowed-wrap loadMsg-wrap">
			<dl class="dl1 clearfix">
				<dt>借款天数</dt>
				<dd>14天(提前还款无手续费)</dd>
			</dl>
			<dl class="dl1 clearfix">
				<dt>还款金额</dt>
				<dd>¥550.00</dd>
			</dl>
			<dl class="dl1 clearfix">
				<dt>本金</dt>
				<dd>¥500.00</dd>
			</dl>
			<dl class="dl1 clearfix">
				<dt>利息</dt>
				<dd>¥2.50</dd>
			</dl>
			<dl class="dl1 clearfix">
				<dt>数据使用费</dt>
				<dd>¥17.50</dd>
			</dl>
			<dl class="dl1 clearfix">
				<dt>账号管理及服务费</dt>
				<dd>¥30.00</dd>
			</dl>
		</div>
		<div class="borrowed-wrap loadMsg-wrap mainBc">
			<dl class="dl1 clearfix">
				<dt>还款方式</dt>
				<dd>支付宝</dd>
			</dl>
			<dl class="dl1 clearfix">
				<dt>还款日期(已放款时间为准)</dt>
				<dd>2016-12-10</dd>
			</dl>
			<dl class="dl1 clearfix">
				<dt>同意 <a class="mainC" href="javascript:;">微木金融服务合同</a></dt>
				<dd>¥500.00</dd>
			</dl>
		</div>

		<div class="myBackMonye-wrap">
			<!-- <a class="myBackMonye" id="myBackMonye" href="javascript:;">确认申请</a> -->

			<router-link class="myBackMonye" to="myInformation">确认申请</router-link>
		</div>
	</div>
</template>


