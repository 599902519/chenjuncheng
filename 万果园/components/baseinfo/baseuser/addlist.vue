<!-- html部分 -->
<template>
	<div style="text-align: center;">
		<h1>添加</h1>
			<el-row>
				<el-col :span="12"> <el-input style='width:45%' v-model='phone' placeholder='请输入手机号'></el-input> </el-col>
				<el-col :span="12"> <el-input style='width:45%' v-model='username' placeholder='请输入用户名'></el-input> </el-col>
			</el-row>
			<el-row>
				<el-col :span="12"> <el-input style='width:45%' v-model='password' placeholder='请输入密码'></el-input> </el-col>
				<el-col :span="12"> <el-input style='width:45%' v-model='cname' placeholder='请输入姓名'></el-input> </el-col>
			</el-row>
			
			<el-row>
				<el-col :span="24"> <el-button @click='save()'>添加</el-button> <el-button @click='fan()'>返回</el-button> </el-col>
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
				phone:''
			
				
			};
		},
		methods:{
			fan(){
				this.$router.push({path:'/add1text1'});
			},
			save(){
			
					var url = this.baseUrl+"/baseAdminuser/insert"
				// 传递给后端的数据
				
				var data = {username:this.username,password:this.password,cname:this.cname,phone:this.phone};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					// res是后端的响应
					this.$message("添加成功");
					this.$router.push({path:'/add1text1'});
				})
				
				
			},
			
		}
	}
</script>
<!-- css部分 -->
<style>
.qw{
	width: 120px;
	
}
</style>
