<template>
	<div>
			<header class="header-bar bgfff">
				<a href="javascript:history.back(-1);" class="header-left">
					<i class="icon"></i>
				</a>
				<h2 class="header-title">常见问题</h2>
			</header>
			
			<div class="CommonProblem">
		            <ul class="tab_title clearfix" id="tab_title">
		                <li class="li1">借款</li>
		                <li class="li2">放款</li>
		                <li class="li3">还款</li>
		                <i class="move" id="move" style=""></i>
		            </ul>
		            <div class="tab_list_wrap" id="tab_list_wrap">
		                <ul class="tab_list" style=""> 
		                    <li>
		                        <h4 class="tit4">哪些人可以申请平台借款？</h4>
		                        <div class="txt-list">
		                            <p style="padding-bottom:0.9375rem;" class="txt">微木金融针对单位连续缴费社保三个月已上的用户</p>
		                        </div>
		                    </li>
		                     <li>
		                        <h4 class="tit4">哪些人可以申请平台借款？</h4>
		                        <div class="txt-list">
		                            <p class="txt">1）登录微木金融金融官网（www.wemubank.com）进行注册</p>
		                            <p class="txt">2）填写借款人详细信息，并上传相关文件</p>
		                            <p class="txt">3）提交申请，等待审核结果</p>
		                            <p style="padding-bottom:0.9375rem;" class="txt">4）审核通过，借款金到账</p>
		                        </div>
		                    </li>
		                     <li>
		                        <h4 class="tit4">没有按时还款会对我有什么影响？</h4>
		                        <div class="txt-list">
		                             <p style="padding-bottom:0.9375rem;" class="txt">没有按时还款将会产生违约金，严重的将可以影响个人信用记录，不良还款信息将提交至第三方征信机构（包括芝麻信用管理有限公司、腾讯征信有限公司等机构），记录在机构的个人信用信息库中。提醒务必按时还款，不要有逾期行为，以免造成不必要损失</p>
		                        </div>
		                    </li>
		                </ul>

		                 <ul class="tab_list" style=""> 
		                    <li>
		                        <h4 class="tit4">如何填写资料，审核更容易通过？</h4>
		                        <div class="txt-list">
		                            <p class="txt">1）请真实填写借款人本人及手机号，作假、冒充、顶替的号码都不予通过审                           核，仅需准确填写，无信用不良者及黑名单记录，给予通过</p>
		                            <p class="txt">2）银行卡信息务必正确填写</p>
		                            <p class="txt">3）联系地址不得有误、做假，需与相关信息资料库匹配</p>
		                            <p class="txt">4）审核人员必要时会电话核实，超过两次没有接听电话即视为主动放弃</p>
		                            <p class="txt">3）联系地址不得有误、做假，需与相关信息资料库匹配</p>
		                            <p style="padding-bottom:0.9375rem;" class="txt">5）在其他网站、银行有高额借款，或其他网站有不良还款记录者，不予审核如审核不通过，将不支持您再次申请，请务必填写准确</p>
		                        </div>
		                    </li>
		                     <li>
		                        <h4 class="tit4">根据您下单日期计算，默认下月今天是还款日；（逾期费用=滞纳金100元+借款金额*1%*逾期天数）</h4>
		                        <div class="txt-list">
		                            <p class="txt">1）登录微木金融金融官网（www.wemubank.com）进行注册</p>
		                            <p class="txt">2）填写借款人详细信息，并上传相关文件</p>
		                            <p class="txt">3）提交申请，等待审核结果</p>
		                             <p style="padding-bottom:0.9375rem;" class="txt">根据您下单日期计算，默认下月今天是还款日；（逾期费用=滞纳金100元+借款金额*1%*逾期天数）</p>
		                        </div>
		                    </li>
		                     <li>
		                        <h4 class="tit4">没有按时还款会对我有什么影响？</h4>
		                        <div class="txt-list">
		                             <p style="padding-bottom:0.9375rem;" class="txt">没有按时还款将会产生违约金，严重的将可以影响个人信用记录，不良还款信息将提交至第三方征信机构（包括芝麻信用管理有限公司、腾讯征信有限公司等机构），记录在机构的个人信用信息库中。提醒务必按时还款，不要有逾期行为，以免造成不必要损失</p>
		                        </div>
		                    </li>
		                </ul>

		                <ul class="tab_list" style=""> 
		                    <li>
		                        <h4 class="tit4 active">怎么还款？</h4>
		                        <div class="txt-list">
		                            <p style="padding-bottom:15px;" class="txt">在您还款日前，将足额还款金存入账户，系统会自动扣款</p>
		                        </div>
		                    </li>
		                     <li>
		                        <h4 class="tit4">还款时间怎么计算？</h4>
		                        <div class="txt-list">
		                            <p style="padding-bottom:0.9375rem;" class="txt">根据您下单日期计算，默认下月今天是还款日；（逾期费用=滞纳金100元+借款金额*1%*逾期天数）</p>
		                        </div>
		                    </li>
		                     <li>
		                        <h4 class="tit4">没有按时还款会对我有什么影响？</h4>
		                        <div class="txt-list">
		                             <p style="padding-bottom:0.9375rem;" class="txt">没有按时还款将会产生违约金，严重的将可以影响个人信用记录，不良还款信息将提交至第三方征信机构（包括芝麻信用管理有限公司、腾讯征信有限公司等机构），记录在机构的个人信用信息库中。提醒务必按时还款，不要有逾期行为，以免造成不必要损失</p>
		                        </div>
		                    </li>
		                </ul>
		            </div>
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
				var tabTit = id('tab_title');
				var aTabTit = tabTit.getElementsByTagName('li');
				var moveW = id('move').offsetWidth;
				var oList = id('tab_list_wrap');
				var aList = oList.getElementsByTagName('ul');
				//var oDivHeight = {};//存储每一个aList里面的每一个aLi[i].children[0]的offsetHeight;
				for(var i=0;i<aTabTit.length;i++){
					aTabTit[i].index = i;
					bind(aTabTit[i],'touchstart',function(){
						startMove(id('move'),{left:moveW*this.index})//横条滑动
						for(var i=0;i<aTabTit.length;i++){
							aList[i].style.display = 'none';
						}
						aList[this.index].style.display = 'block';
					})
				};

				for(var i=0;i<aList.length;i++){//遍历每一个ul
					//oDivHeight[i] = [];
					slideToggle(aList[i]);
				} 

				function slideToggle(obj){//点击每一个li
					var aLi = obj.getElementsByTagName('li');
					var arr = [];//存储每一个开关
					
					for(var i=0;i<aLi.length;i++){
						arr.push(true);
						//oDivHeights.push(aLi[i].children[1].scrollHeight)
						aLi[i].index = i;
						bind(aLi[i].children[0],'touchend',function(){
							if(arr[this.parentNode.index]){
								aLi[this.parentNode.index].children[1].style.display = 'block';
								arr[this.parentNode.index] = false;
							}else{
								aLi[this.parentNode.index].children[1].style.display = 'none';
								arr[this.parentNode.index] = true;
							}
						});
					}
				}

				for(var i=0;i<aList.length;i++){
					if(i!=0){
						aList[i].style.display = 'none';
					}
				}
			}
		}
	}
</script>