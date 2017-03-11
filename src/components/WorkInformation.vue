<template>
	<div>
		<header class="header-bar shaow bgfff">
			<a href="javascript:history.back(-1);" class="header-left">
				<i class="icon"></i>
			</a>
			<h2 class="header-title">工作信息</h2>
		</header>

		<div class="bandBankCard" id="list-wrap">
			<dl class="int-wrap bordernone tac clearfix" id="tabTit">
				<label  class="label-wrap mr30 int">
					<font>在职 </font>
					<input checked="true" class="radio" name="danxuan" type="radio" />
					<span class="radio_style"></span>
				</label>
				<label class="label-wrap int">
					<font>学生 </font>
					<input class="radio" name="danxuan" type="radio" />
					<span class="radio_style"></span>
				</label>
			</dl>
			<div class="list-wrap">
				<dl class="int-wrap mt20 clearfix">
					<dt>省份</dt>
					<dd>
						<label class="sel" for="">
							<select class="" name="" id="">
								<option value="请选择省份">请选择省份</option>
								<option value="广州">广州</option>
								<option value="浙江">浙江</option>
							</select>
						</label>
					</dd>
				</dl>
				<dl class="int-wrap clearfix">
					<dt>城市</dt>
					<dd>
						<label class="sel" for="">
							<select class="" name="" id="">
								<option value="请选择城市">请选择城市</option>
								<option value="北京">北京</option>
								<option value="上海">上海</option>
							</select>
						</label>
					</dd>
				</dl>
				<dl class="int-wrap mt10 clearfix">
					<dt>公司行业</dt>
					<dd>
						<label class="sel" for="">
							<select class="" name="" id="">
								<option value="请选公司行业">请选公司行业</option>
								<option value="IT行业">IT行业</option>
								<option value="金融行业">金融行业</option>
							</select>
						</label>
					</dd>
				</dl>
				<dl class="int-wrap clearfix">
					<dt>公司名称</dt>
					<dd><input class="int" type="text" placeholder="请输入公司名称" /></dd>
				</dl>
				<dl class="int-wrap clearfix">
					<dt>公司地址</dt>
					<dd><input class="int" type="text" placeholder="请输入公司地址" /></dd>
				</dl>
				<dl class="int-wrap mt10 clearfix">
					<dt>职位</dt>
					<dd><input class="int" type="text" placeholder="请输入您的职位" /></dd>
				</dl>
				<dl class="int-wrap mainBc clearfix">
					<dt>月薪</dt>
					<dd>
						<label class="sel" for="">
							<select class="" name="" id="">
								<option value="请选择月收入水平">请选择月收入水平</option>
								<option value="15000-3000">15000-3000</option>
								<option value="3000-6000">3000-6000</option>
							</select>
						</label>
					</dd>
				</dl>
			</div>

			<div style="display:none;" class="list-wrap">
				<dl class="int-wrap mt20 clearfix">
					<dt>省份</dt>
					<dd>
						<label class="sel" for="">
							<select class="" name="" id="">
								<option value="请选择省份">请选择省份</option>
								<option value="广州">广州</option>
								<option value="浙江">浙江</option>
							</select>
						</label>
					</dd>
				</dl>
				<dl class="int-wrap clearfix">
					<dt>城市</dt>
					<dd>
						<label class="sel" for="">
							<select class="" name="" id="">
								<option value="请选择城市">请选择城市</option>
								<option value="北京">北京</option>
								<option value="上海">上海</option>
							</select>
						</label>
					</dd>
				</dl>
				<dl class="int-wrap mt10 clearfix">
					<dt>学校名称</dt>
					<dd><input class="int" type="text" placeholder="请输入学校名称" /></dd>
				</dl>
				<dl class="int-wrap clearfix">
					<dt>学校地址</dt>
					<dd><input class="int" type="text" placeholder="请输入学校地址" /></dd>
				</dl>
				<dl class="int-wrap mainBc clearfix">
					<dt>专业</dt>
					<dd><input class="int" type="text" placeholder="请输入您的专业" /></dd>
				</dl>
			</div>
		</div>	
		<div class="myBackMonye-wrap">
			<!-- <a class="myBackMonye" id="myBackMonye" href="./identityAuthentication.html">下一步</a> -->

			<router-link class="myBackMonye" to="identityAuthentication">下一步</router-link>
		</div>
	</div>
</template>
<script>
	export default{
		mounted(){
			this.tabList();
		},
		methods:{
			tabList(){
				var tabTit = id('tabTit');
				var aLabel = tabTit.getElementsByTagName('label');
				var listWrap = id('list-wrap');
				var aListWrap = listWrap.getElementsByClassName('list-wrap');
				for(var i=0;i<aLabel.length;i++){
					aLabel[i].index = i
					/*bind(aLabel[i],'touchend',function(){
						for(var i=0;i<aListWrap.length;i++){
							aListWrap[i].style.display = 'none';
						}
						aListWrap[this.index].style.display = 'block';
					})*/

					aLabel[i].onchange = function(){
						for(var i=0;i<aListWrap.length;i++){
							aListWrap[i].style.display = 'none';
						}
						aListWrap[this.index].style.display = 'block';
					}
				}
			}
		}
	}
</script>