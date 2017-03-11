<template>
	<div>
		<header class="header-bar bgfff">
			<a href="javascript:history.back(-1);" class="header-left cyan">
				<i class="icon"></i>
			</a>
			<h2 class="header-title"></h2>
		</header>
		<h1 title="logo/微木" class="tit1">
			<!-- <a href="./index.html" class="logo"><img src="../assets/images/logo.png" alt="logo" /></a> -->
			<router-link to="home" class="logo">
				<img src="../assets/images/logo.png" alt="logo" />
			</router-link>
		</h1>
		<div class="reg-wrap" id="reg-wrap">
			<form action="">
				<label class="reg-int-wrap" for="">
					<input class="int" placeholder="请输入手机号" type="tel" />
					<i style="display:none;" class="icon icon-del"></i>
				</label>
				<label v-show="!showData" class="reg-int-wrap" for="">
					<input class="int" placeholder="请输验证码" type="text" />
					<span class="VerificationCode">获取验证码</span>
				</label>
				<label v-show="showData" class="reg-int-wrap" for="">
					<input class="int" placeholder="请输入密码" type="password" />
				</label>

				<div class="btn-bg-wrap">
					<input class="btn-bg" type="button" value="登    录" />
					<!-- <a href="javascript:;" class="btn-bg">注册</a> -->
				</div>
				<p class="login-reg-txt clearfix" id="login-reg-txt">
					<a class="left" href="javascript:;">{{textData}}</a>
					<!-- <a class="right" href="./reg.html">免费注册</a> -->
					<router-link class="right" to="reg">免费注册</router-link>
				</p>
			</form>
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return {
				showData:true,
				textData:'验证码登录'
			}
		},
		mounted(){
			this.textDel();
			this.switchLoginReg();
		},
		methods:{
			textDel(){
				var aRegWrap = id('reg-wrap');
				var aTel = aRegWrap.getElementsByTagName('label')[0].children;
				aTel[0].oninput = function(){
					aTel[1].style.display = 'inline-block';
					if(this.value == ''){
						aTel[1].style.display = 'none';
					}
				}
				bind(aTel[1],'touchstart',function(){
					aTel[0].value = '';
					this.style.display = 'none';
				})
			},
			switchLoginReg(){
				//alert(this.showData)
				var aSwitch = id('login-reg-txt').getElementsByTagName('a');
				bind(aSwitch[0],'touchstart',function(){
					if(this.showData==true){
						this.textData = '密码登录'
					}else{
						this.textData = '验证码登录'
					}
					this.showData = !this.showData;
				}.bind(this)) 



			}
		}
	}
</script>