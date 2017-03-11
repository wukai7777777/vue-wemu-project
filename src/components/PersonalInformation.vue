<template>
	<div>
		<header class="header-bar bgfff">
			<a href="javascript:history.back(-1);" class="header-left">
				<i class="icon"></i>
			</a>
			<h2 class="header-title">个人信息</h2>
		</header>

		<div class="bandBankCard">
			<h3 class="tit3">基本信息</h3>
			<dl class="int-wrap clearfix">
				<dt>真实姓名</dt>
				<dd><input class="int" type="text" placeholder="请输入姓名" /></dd>
			</dl>
			<dl class="int-wrap clearfix">
				<dt>身份证号</dt>
				<dd><input class="int" type="text" placeholder="请输入身份证号" /></dd>
			</dl>
			<dl class="int-wrap clearfix">
				<dt>手机号</dt>
				<dd><input class="int" type="text" disabled="true" placeholder="187****1362" /></dd>
			</dl>
			<h3 class="tit3">联系信息</h3>
			<dl class="int-wrap clearfix">
				<label class="sel" for="">
					<select class="" name="" id="">
						<option value="与您的关系">与您的关系</option>
						<option value="配偶">配偶</option>
						<option value="父母">父母</option>
					</select>
				</label>
			</dl>
			<dl class="int-wrap clearfix">
				<dt>姓名</dt>
				<dd><input class="int" type="text" placeholder="请输入姓名" /></dd>
			</dl>
			<dl class="int-wrap clearfix">
				<dt>手机号</dt>
				<dd><input class="int" type="text" disabled="true" placeholder="请输入手机号" /></dd>
			</dl>
			<dl class="int-wrap mt10 clearfix">
				<label class="sel" for="">
					<select class="" name="" id="">
						<option value="与您的关系">与您的关系</option>
						<option value="配偶">配偶</option>
						<option value="父母">父母</option>
						<option value="兄弟姐妹">兄弟姐妹</option>
						<option value="子女">子女</option>
						<option value="其他亲戚">其他亲戚</option>
						<option value="同事">同事</option>
					</select>
				</label>
			</dl>
			<dl class="int-wrap clearfix">
				<dt>姓名</dt>
				<dd><input class="int" type="text" placeholder="请输入姓名" /></dd>
			</dl>
			<dl class="int-wrap clearfix">
				<dt>手机号</dt>
				<dd><input class="int" type="text" disabled="true" placeholder="请输入手机号" /></dd>
			</dl>
		</div>	

		<div class="myBackMonye-wrap">
			<!-- <a class="myBackMonye" id="myBackMonye" href="./workInformation.html">下一步</a> -->

			<router-link class="myBackMonye" to="workInformation">下一步</router-link>
		</div>
	</div>
</template>