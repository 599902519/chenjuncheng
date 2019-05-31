<!-- html部分 -->
<template>
	<div style="text-align: center;">
		<h1>修改</h1>
			
					
			
			<el-row>
				<el-col :span="12"> <el-input style='width:45%' v-model='phone' placeholder='请输入手机号'></el-input> </el-col>
				<el-col :span="12"> <el-input style='width:45%' v-model='username' placeholder='请输入用户名'></el-input> </el-col>
			</el-row>
			<el-row>
				<el-col :span="12"> <el-input style='width:45%' v-model='password' placeholder='请输入密码'></el-input> </el-col>
				<el-col :span="12"> <el-input style='width:45%' v-model='cname' placeholder='请输入姓名'></el-input> </el-col>
			</el-row>
			
			<el-row>
				<el-col :span="24"> <el-button @click='save()'>修改</el-button> <el-button @click='fan()'>返回</el-button> </el-col>
			</el-row>
		</div>

</template>
<!-- js部分 -->
<script>
	export default {
		name:'',
		data() {
			return {
			username:'',
			password:'',
			cname:'',
			phone:'',
			adminuserId:''
				
			};
		},
		methods:{
			fan(){
				this.$router.push({path:'/add1text1'});
			},
			save(){	
					var url = this.baseUrl+"/baseAdminuser/update"
				// 传递给后端的数据
				
				var data = {adminuserId:this.adminuserId,username:this.username,password:this.password,cname:this.cname,phone:this.phone};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					// res是后端的响应
					this.$message("修改成功");
					this.$router.push({path:'/add1text1'});
				})
				
				
			}
		},
		mounted:function(){
			var obj=this.$route.params.row;
			this.adminuserId=obj.adminuserId;
			this.phone=obj.phone;
			this.cname=obj.cname;
			this.password=obj.password;
			this.username=obj.username;
			
		}
	}
</script>
<!-- css部分 -->
<style>
.qw{
	width: 120px;
	
}
</style>
