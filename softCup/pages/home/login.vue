<template >
	<view class="content">
		
		<view>
			<input type="text" placeholder="请输入用户名" v-model="username"/>
			<view>
			<input type="password" v-if="flag==true" placeholder="请输入密码" v-model="password"/>
			<input type="text" v-if="flag==false"  placeholder="请输入密码" v-model="password"/>
			<view class="qw"><uni-icon type="eye" size="25"  @click="fn"></uni-icon></view>
			</view>
			<button type="warn" @click="login">登录</button>
		</view>
	</view>
</template>

<script>
	import uniIcon from '@dcloudio/uni-ui/lib/uni-icon/uni-icon.vue'
	export default {
		components: {uniIcon},
		data() {
			return {
				password: '123456',
				username:'lhx',
				flag:true
			}
		},
		// 与页面加载执行同级
		onNavigationBarButtonTap(){  
		uni.navigateTo({
			url: 'register'
		});		  
	},
		onLoad() {

		},
		methods: {
		fn(){
				this.flag=!this.flag;
			},
			login(){
				uni.request({
						url: this.url+'baseUser/login',  //仅为示例，并非真实接口地址。
						data: {
							username: this.username,
							password: this.password
						},
						header: {
							'custom-header': 'hello' //自定义请求头信息
						},
						success: (res) => {
							if(res.data){
								uni.setStorage({
									key: 'baseuser',
									data: res.data,
									
								});
								uni.switchTab({
									url:'index'
								})
								uni.showToast({
									title: '登录成功',
									duration: 2000  
								});
								}else{
								uni.showToast({
									title: '登录失败',
									duration: 2000  
								});
							}
						}
					});
			}

		}
	}
</script>

<style >
	@import url("../../static/css/login.css");
</style>
