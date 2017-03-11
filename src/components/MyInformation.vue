<template>
	<div>
		<header class="header-bar shaow bgfff">
			<a href="javascript:history.back(-1);" class="header-left">
				<i class="icon"></i>
			</a>
			<h2 class="header-title">我的资料</h2>
		</header>
		<div class="myInformation-wrap">
			<table>
				<tbody class="tbody" id="tbody">
					<tr>
						
						<td>
							<router-link to="personalInformation">
								<div class="pic"><img src="../assets/images/icon6.png" alt="" /></div>
								<span class="txt">个人信息</span><br />
								<a href="javascript:;" class="mainC">已认证</a>
							</router-link>
						</td>
						
						<td>
							<router-link to="workInformation">
								<div class="pic"><img src="../assets/images/icon7.png" alt="" /></div>
								<span class="txt">工作信息</span><br />
								<a href="javascript:;">去认证</a>
							</router-link>
						</td>
					
					</tr>
					<tr>
						
						<td>
							<router-link to="identityAuthentication">
								<div class="pic"><img src="../assets/images/icon8.png" alt="" /></div>
								<span class="txt">身份信息</span><br />
								<a href="javascript:;">去认证</a>
							</router-link>
						</td>
						
						
						<td>
							<router-link to="bindBankCard">
								<div class="pic"><img src="../assets/images/icon9.png" alt="" /></div>
								<span class="txt">银行卡</span><br />
								<a href="javascript:;">去认证</a>
							</router-link>
						</td>
						
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>
<script>
	export default{
		mounted(){
			this.touchstart();
		},
		methods:{
			touchstart(){
				var oTbody = id('tbody');
				var aTd = oTbody.getElementsByTagName('td');
				for(var i=0;i<aTd.length;i++){
					bind(aTd[i],'touchstart',function(){
						for(var i=0;i<aTd.length;i++){
							aTd[i].className = '';
						}
						this.className = 'active'
					});
					bind(aTd[i],'touchend',function(){
						setTimeout(function(){
							for(var i=0;i<aTd.length;i++){
								aTd[i].className = '';
							}
						}, 150);
					})
				}
			}
		}
	}
</script>