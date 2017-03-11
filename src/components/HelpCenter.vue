<template>
	<div>
		<header class="header-bar bgfff">
			<a href="javascript:history.back(-1);" class="header-left">
				<i class="icon"></i>
			</a>
			<h2 class="header-title"> 帮助中心</h2>
		</header>

		<div class="link-list-wrap helpCenter-wrap">
			<!-- <a class="link icon" href="./CommonProblem.html">常见问题</a> -->
			<router-link class="link icon" to="commonProblem"><span>常见问题</span></router-link>
			<!-- <a class="link icon" href="./Feedback.html">反馈意见</a> -->
			<router-link class="link icon" to="feedback"><span>反馈意见</span></router-link>
		</div>
	</div>
</template>