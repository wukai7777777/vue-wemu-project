<template>
  <div id="app">
    <transition name="slide-down">
    	<router-view></router-view>
    </transition>
     <FootView v-show="footShow"></FootView>
  </div>
</template>

<script>
import FootView from './components/Foot.vue'
/*import HomeView from './components/Home.vue'*/
import {mapGetters} from 'vuex'
export default {
	computed:mapGetters([
		'footShow'
	]),
	watch:{
		$route(to){
			if(to.path=='/home' || to.path=='/user-info' || to.path=='/money'){
				this.$store.dispatch('hideFoot');
			}else{
				this.$store.dispatch('showFoot');
			}
		}
	},
	components:{
		FootView
	}
}
</script>
<style>
.slide-down-enter-active,
.slide-down-leave-active
{
transition: .3s all ease;
opacity: 0;
transform: translate3d(0, 6rem, 0);
}

.slide-down-enter,
.slide-down-leave
{
opacity: 1;
transform: translate3d(0, 6rem, 0);
}

</style>

