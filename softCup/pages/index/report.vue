<template >
	<view class="content">
			<table01></table01>
	

	</view>
</template>

<script>
		import table01 from "../tables/table01.vue"
	export default {
		components: {table01},
		data() {
			return {
			
			}
		},
		// 与页面加载执行同级
			  
	
		mounted() {
			
			
		},
		methods: {
			fn(name){
				uni.navigateTo({
					url:'index'
				})
			}
		},
		
	}
</script>

<style >
	@import url("../../static/css/energy.css");
</style>
