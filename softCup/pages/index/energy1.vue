<template >
	<view class="content">
				<view class="yuan">
					<view class="q1">29</view><view class="q2">天</view>
					<view class="q3">安全警告</view><view class="q4">/</view>
					<view class="q5">10</view><view class="q6">条</view>
					<view class="q7">异常警告</view>
				</view>
				
			<!-- 列表 -->
		<view class="unilist">
			<uni-list>
				<uni-list-item title="标题文字" 
					show-extra-icon="true" 
					:extra-icon="{color: '#4cd964',size: '22',type: 'spinner'}">
				</uni-list-item>
				<uni-list-item title="标题文字" 
					show-extra-icon="true" 
					:extra-icon="{color: '#4cd964',size: '22',type: 'spinner'}">
				</uni-list-item>
				<uni-list-item title="标题文字" 
					show-extra-icon="true" 
					:extra-icon="{color: '#4cd964',size: '22',type: 'spinner'}">
				</uni-list-item>
				<uni-list-item title="标题文字" 
					show-extra-icon="true" 
					:extra-icon="{color: '#4cd964',size: '22',type: 'spinner'}">
				</uni-list-item>
			</uni-list>
		</view>

	</view>
</template>

<script>
		import uniList from '@dcloudio/uni-ui/lib/uni-list/uni-list.vue'
		import uniListItem from '@dcloudio/uni-ui/lib/uni-list-item/uni-list-item.vue'
	export default {
		components: {uniList,uniListItem},
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
