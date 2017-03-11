<template>
	<div>
		<header class="header-bar bgfff">
			<a href="javascript:history.back(-1);" class="header-left">
				<i class="icon"></i>
			</a>
			<h2 class="header-title">绑定银行卡</h2>
		</header>

		<div class="bandBankCard">
			<h3 class="tit3">请绑定持卡人本人的银行卡</h3>
			<dl class="int-wrap clearfix">
				<dt>卡号</dt>
				<dd><input class="int" type="text" placeholder="请输入本人储蓄卡号" /></dd>
			</dl>
			<dl class="int-wrap clearfix">
				<dt>银行名称</dt>
				<dd><input class="int" type="text" placeholder="" /></dd>
			</dl>
			<dl class="int-wrap clearfix">
				<dt>预留手机号</dt>
				<dd><input class="int" type="text" placeholder="请输入该卡的预留手机号" /></dd>
			</dl>
			<dl class="int-wrap clearfix mainBc">
				<dt>短信验证码</dt>
				<dd>
					<input class="int" type="text" placeholder="请输入短信验证码" />
					<span class="VerificationCode">获取验证码</span>
				</dd>
			</dl>
		</div>	

		<div class="myBackMonye-wrap">
			<a class="myBackMonye" id="myBackMonye" href="javascript:;">完成认证</a>
		</div>


		<!-- 弹框 -->
		<div class="BombBox-wrap" id="BombBox-wrap">
			<div class="mask"></div>
			<div class="BombBox">
				<h5 class="tit5"></h5>
				<span class="icon close" id="close"></span>
				<div class="borrowed-wrap loadMsg-wrap">
					<h4 class="tit4 tac c3">确认额度</h4>
					<dl class="dl1 clearfix">
						<dt>借款金额</dt>
						<dd>¥500.00</dd>
					</dl>
					<dl class="dl1 clearfix">
						<dt>借款期限</dt>
						<dd>14天</dd>
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
				<div class="myBackMonye-wrap">
					<router-link class="myBackMonye" to="certificationSuccess">提交</router-link>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		mounted(){
			this.showBomb();
		},
		methods:{
			showBomb(){
				bind(id('myBackMonye'),'touchstart',function(){
					id('BombBox-wrap').style.display = 'block';
				})

				bind(id('close'),'touchstart',function(){
					id('BombBox-wrap').style.display = 'none';
				})
			}
		}
	}
</script>