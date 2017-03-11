<template>
	<footer class="footer-nav clearfix">
		<!-- <a class="nav current" href="javascript:;">
			<i class="icon"></i>
			<span class="txt">借钱</span>
		</a>
		<a class="nav" href="javascript:;">
			<i class="icon"></i>
			<span class="txt">还钱</span>
		</a>
		<a class="nav" href="javascript:;">
			<i class="icon"></i>
			<span class="txt">我的</span>
		</a> -->

		<router-link to="home" class="nav" active-class="current">
			<i class="icon"></i>
			<span class="txt">借钱</span>
		</router-link>

		<router-link to="money" class="nav" active-class="current">
			<i class="icon"></i>
			<span class="txt">还钱</span>
		</router-link>

		<router-link to="user-info" class="nav" active-class="current">
			<i class="icon"></i>
			<span class="txt">我的</span>
		</router-link>
	</footer>
</template>