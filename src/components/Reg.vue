<template>
<div>
	<header class="header-bar bgfff">
		<a href="javascript:history.back(-1);" class="header-left cyan">
			<i class="icon"></i>
		</a>
		<h2 class="header-title"></h2>
	</header>
	<h1 title="logo/微木" class="tit1">
		<!-- <a href="home" class="logo"><img src="../assets/images/logo.png" alt="logo" /></a> -->
		<router-link class="logo" to="home"><img src="../assets/images/logo.png" alt="logo" /></router-link>
	</h1>
	<div class="reg-wrap" id="reg-wrap">
		<form action="">
			<label class="reg-int-wrap" for="">
				<input class="int" v-model="textData" placeholder="请输入手机号" type="tel" />
				<i v-show="dataClose"  class="icon icon-del">x</i>
			</label>
			<label class="reg-int-wrap" for="">
				<input class="int" placeholder="请输验证码" type="text" />
				<span class="VerificationCode">获取验证码</span>
			</label>
			<label class="reg-int-wrap" for="">
				<input class="int" placeholder="请输入密码" type="password" />
			</label>

			<div class="btn-bg-wrap">
				<input class="btn-bg" type="button" value="注   册" />
				<!-- <a href="javascript:;" class="btn-bg">注册</a> -->
			</div>
			<p class="login-reg-txt clearfix">
				<!-- <a class="left" href="./login.html">登录</a><a class="right" href="javascript:;"></a> -->
				<router-link to="login" class="left">登录</router-link>

			</p>
		</form>
	</div>
</div>
</template>
<script>
	export default{
		data(){
			return{
				dataClose:true,
				textData:''
			}
		},
		mounted(){
			this.textDel();
		},
		methods:{
			textDel(){
				var aRegWrap = id('reg-wrap');
				var aTel = aRegWrap.getElementsByTagName('label')[0].children;
				var _this = this;
				aTel[0].oninput = function(){
					if(_this.textData == ""){
						_this.dataClose = false;
					}else{
						_this.dataClose = true;
					}
				}
				bind(aTel[1],'touchend',function(){
					_this.dataClose = false;
					_this.textData = '';
				})
			}
		}
	}
</script>
