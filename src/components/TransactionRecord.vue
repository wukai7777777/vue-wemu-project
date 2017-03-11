<template>
	<div>
			<header class="header-bar bgfff">
				<a href="javascript:history.back(-1);" class="header-left">
					<i class="icon"></i>
				</a>
				<h2 class="header-title">交易记录</h2>
			</header>
			<div class="CommonProblem transactionRecord">
		        <ul class="tab_title clearfix" id="tab_title">
		           <!--  <li class="li1">借款</li> -->
		           <router-link class="li1" tag="li" to="/transactionRecord/load" >借款</router-link>
		            <!-- <li class="li3">还款</li> -->
		            <router-link class="li3" tag="li" to="/transactionRecord/Backmonye">还款</router-link>
		            <i class="move" id="move" style=""></i>
		        </ul>

		        <ul class="record-list" id="record-list">
		        	<router-view></router-view>
		        </ul>
		    </div>
	</div>
</template>
<script>
	export default{
		data(){
			return {
				dataRoter:0
			}
		},
		watch:{
			
			$route(to,from){

				if(to.path=='/transactionRecord/Backmonye'){
					startMove(id('move'),{left:id('move').offsetWidth})
				}else if(to.path=='/transactionRecord/load'){
					startMove(id('move'),{left:0})
				}
			}
		}/*,
		updated(){
			if(this.dataRoter==1){
				this.left();
			}else if(this.dataRoter==2){
				alert(2)
			}
		},
		methods:{
			left(){
				alert(id('move'))
			}
		}*/
	}
</script>