<template>
	<div id="home">
		<div class="Loanmount-wrap">
			<div class="Loanmount p30">
				<ul class="ul1" id="ul1">
					<li class="active"><img src="../assets/images/txt1.png"alt="" /></li>
					<li class=""><img src="../assets/images/txt2.png" alt="" /></li>
				</ul>
			</div>
		</div>

		<!-- 借款 -->
		<div class="indexOperation">
			<ul class="ul2 clearfix">
				<li>金额</li>
				<li>期限</li>
			</ul>
			<div class="frame-wrap clearfix">
				<ul class="ul3 clearfix" id="titTab">
					<li>500</li>
					<li>1000</li>
					<i class="move" id="move"></i>
				</ul>
				<ul class="ul4">
					<li>14</li>
				</ul>
			</div>
			<div class="btn-solid-wrap">
				<!-- <a href="./LoanApplication.html" class="btn-solid">借款</a> -->
				<router-link to="loanApplication" class="btn-solid">借款</router-link>
			</div>
		</div>
		<!-- 当前借款 -->
		<div style="display:none;" class="borrowed-wrap">
			<h3 class="tit3">当前借款</h3>
			<dl class="dl1 clearfix">
				<dt>借款编号</dt>
				<dd>110101</dd>
			</dl>
			<dl class="dl1 clearfix">
				<dt>借款日期</dt>
				<dd>2016-12-12</dd>
			</dl>
			<dl class="dl1 clearfix">
				<dt>借款方案</dt>
				<dd>¥500.00/14天</dd>
			</dl>
			<dl class="dl1 clearfix">
				<dt>借款状态</dt>
				<dd>放款成功</dd>
			</dl>
		</div>
	</div>
</template>

<script>
export default{
	mounted(){
		this.tabs();
	},
	methods:{
		tabs(){
			var oTab = id('titTab');
			var oUl = id('ul1');
			var aLi = oTab.getElementsByTagName('li');
			var aList = oUl.getElementsByTagName('li');
			var objLeft = aList[0].offsetWidth;
			aList[1].style.left = objLeft+'px';
			var falg = true;
			//var obj = {};
			for(var i=0;i<aLi.length;i++){
				//obj[i] = true;
				(function(i){
					bind(aLi[i],'touchend',function(){
						startMove(id('move'),{left:this.offsetLeft*i});
						/*for(var j=0;j<aLi.length;j++){
							aList[j].className = '';
						}
						aList[i].className = 'active';*/
						if(falg && i==1){
							aList[1].style.display = 'block';
							aList[1].style.opacity = 0;
							startMove(aList[1],{left:0,opacity:100});
							startMove(aList[0],{left:-objLeft,opacity:0},function(){
								this.style.display = 'none';
							});
							falg = false;
						}else if(falg==false && i==0){
							aList[0].style.display = 'block';
							aList[0].style.opacity = 0;
							startMove(aList[0],{left:0,opacity:100});
							startMove(aList[1],{left:objLeft,opacity:0},function(){
								this.style.display = 'none';
							});
							falg = true;
						}

					});
				})(i);
			}
		}
	}
}
</script>