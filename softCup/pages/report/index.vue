<template >
	<view class="content">	
			<!-- 列表 -->
		<view class="unilist">
			<uni-list>
				
				<uni-list-item title="流程作业量对比"  @click="fn(1)"
					show-extra-icon="true" 
					:extra-icon="{color: '#4cd964',size: '22',type: 'spinner'}">
				</uni-list-item>
				<uni-list-item title="港口能耗对比"  @click="fn(2)"
					show-extra-icon="true" 
					:extra-icon="{color: '#4cd964',size: '22',type: 'spinner'}">
				</uni-list-item>
				<uni-list-item title="成本核算信息"  @click="fn(3)"
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
			fn(o){
				if(o=='3'){
				uni.navigateTo({
					url:'../tables/table02'
				})
				}else if(o=='2'){
					uni.navigateTo({
						url:'../charts/chart02'
					})
				}
				// else if(o=='1'){
				// 	uni.navigateTo({
				// 		url:'../charts/chart03'
				// 	})
				// }
			}
		},
		
	}
</script>

<style >
	/* @import url("../../static/css/energy.css"); */
</style>
