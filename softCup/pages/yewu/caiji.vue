<template >
	<view class="content">
		<button class="b" @click="fn">数据采集</button>
		<view class="q1">
			今天一共同步了{{arr.length}}条信息
		</view>
		<view class="q2">同步记录</view>
		<view class="q3">
			<uni-badge v-for="obj in arr" :text="obj" type="success" ></uni-badge>
		</view>
		
	</view>
</template>

<script>
	import uniBadge from "@/components/uni-badge/uni-badge.vue"
	export default {
		 components: {uniBadge},
		data() {
			return {
			arr:[]
			}
		},
		// 与页面加载执行同级
			  
	
		onLoad() {
			uni.getStorage({
				key: 'caiji',
				success:  (res)=> {
					console.log(res.data);
					this.arr=res.data;
					
				}
			});	
		},
		methods: {
			fn(){
				var date=new Date();
				var ctime=date.getHours()+":"+date.getMinutes();
				this.arr.push("同步时间"+ctime);
				uni.setStorage({
					key: 'caiji',
					data:this.arr,
					
				});
				uni.getStorage({
						key: 'baseuser',
						success: (res)=> {
							var compid=res.data.compid;
							uni.request({
									url: this.url+"produceReport/initCurrentDay?compid="+compid,  //仅为示例，并非真实接口地址。
									data: {
									
									},
									header: {
										 'custom-header': 'hello' //自定义请求头信息
									},
									success: (res) => {
										uni.showToast({
											title:"采集成功"
										})	
									}
								});
						}
					});
			}
		},
		
	}
</script>

<style >
.b{
	width: 80%;
	margin-top: 20upx;
}

.q1,.q2,.q3{
	text-align: center;
	margin-top: 60upx;
}
</style>
