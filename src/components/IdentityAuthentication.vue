<template>
	<div class="box">
		<header class="header-bar shaow bgfff">
			<a href="javascript:history.back(-1);" class="header-left">
				<i class="icon"></i>
			</a>
			<h2 class="header-title">身份认证</h2>
		</header>
		<div class="idAuthentication mt10">
			<h3 class="tit3">需要提供本人身份证照片信息</h3>
			<label class="mas-wrap">
				<input type="file" class="file" />
				<p class="txt">点击开始上传正面（照片面）</p>
				<div class="pic"><img src="../assets/images/icon4.png"alt="" /></div>
			</label>
			<label class="mas-wrap mas-wrap2">
				<input type="file" class="file" />
				<p class="txt">点击开始上传反面（国徽面）</p>
				<div class="pic pic1"><img src="../assets/images/icon5.png"alt="" /></div>
			</label>
			<h3 class="tit3  mt20">已为您严格加密隐私信息，保障信息安全</h3>
		</div>
		<div class="myBackMonye-wrap bordertop"> 
			<!-- <a class="myBackMonye" id="myBackMonye" href="./bindBankCard.html">确认上传</a> -->
			<router-link class="myBackMonye" to="bindBankCard">确认上传</router-link>
		</div>
	</div>
</template>
<style scoped>
	body{background: red!important;}
</style>