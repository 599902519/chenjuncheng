<template>
	<view class="content">
		<view>
			<view>
				<input type="text" placeholder="请输入用户名" v-model="username"/>
				
				<input type="text" placeholder="请输入密码" v-model="password"/>
			
				<input type="text" placeholder="请输入姓名" v-model="cname"/>
				<input type="text" placeholder="请输入电话" v-model="telno"/>
				<input type="text" placeholder="请输入邮箱" v-model="email"/>
				  <radio-group @change="fn" style="margin-left: 30upx;">
                <label class="sex"><radio value="男" checked="true" />男</label>
                <label class="sex"><radio value="女" />女</label>
				 </radio-group>
				  <view class="uni-list-cell-db">
                    <picker @change="fn2" :value="index" :range="arr" range-key="compname">
                        <view class="uni-input">{{arr[index].compname}}</view>
                    </picker>
                </view>
				<button type="warn" @click="login">注册</button>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				username:'',
				password:'',
				cname:'',
				telno:'',
				email:'',
				sex:'男',
				arr:[{compname:''}],
				index:0		
				
				
				
			}
		},
		
		onLoad() {
			uni.request({
					url: this.url+'baseCompany/search',  //仅为示例，并非真实接口地址。
					data: {
					
					},
					header: {
						'custom-header': 'hello' //自定义请求头信息
					},
					success: (res) => {
						this.arr=res.data;	
					}
				});
		},
		
		
		methods:{
			fn(obj){
				this.sex=obj.detail.value;
			},
			fn2(e){
				this.index= e.target.value;
				
			},
					login(){
				uni.request({
						url: this.url+'baseUser/insert',  //仅为示例，并非真实接口地址。
						data: {
							username: this.username,
							password: this.password,
							cname: this.cname,
							telno: this.telno,
							email: this.email,
							sex: this.sex,
							compid:this.arr[this.index].compid
						},
						header: {
							'custom-header': 'hello' //自定义请求头信息
						},
						success: (res) => {
							
								uni.showToast({
									title: '注册成功',
									duration: 2000  
								});
								uni.switchTab({
									url:'index'
								})
							
						}
					});
			}
		}
	}
</script>

<style>
	@import url("../../static/css/login.css");
</style>
