<template>
	<div style='text-align: center;'>
		<h1>更新前台用户</h1>
		<el-row>
		  <el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='请输入账号' v-model='username'></el-input> </el-col>
		  <el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='请输入密码' v-model='password'></el-input> </el-col>
		</el-row>
		
		<el-row>
		  <el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='请输入姓名' v-model='cname'></el-input> </el-col>
		  <el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='请输入邮箱' v-model='email'></el-input> </el-col>
		</el-row>
		
		<el-row>
		  <el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='请输入电话' v-model='phone'></el-input> </el-col>		
		  <el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='请输入地址' v-model='addr'></el-input> </el-col>
		</el-row>
		
		<el-row>
		  <el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='请输入性别' v-model='sex'></el-input> </el-col>
				
				<el-date-picker
				  v-model="regdate"
				  type="date"
				  value-format="yyyy-MM-dd"
				  placeholder="选择日期时间" style='width:300px;margin-top: 20px;'>
				</el-date-picker>			
		</el-row>
		
		<el-row>
		  <el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='请输入会员等级' v-model='vipgrade'></el-input> </el-col>
		  <el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='请输入积分 会员等级  0：非会员 1：白银会员 9 2：黄金会员 9.2 3 钻石会员 8.5' v-model='integral'></el-input> </el-col>
		</el-row>
		<el-row style='margin-top: 20px;text-align: center;'>
		  <el-col :span="24" > <el-button type='primary' @click='saveEdit'>确定</el-button> <el-button @click='cancel'>取消</el-button> </el-col>
		</el-row>
	</div>
</template>
<script>
	export default {
		name:'',
		data() {
			return {
				userId:'',
				username:'',
				password:'',
				cname:'',
				email:'',
				phone:'',
				addr:'',
				sex:'',
				regdate:'',
				vipgrade:'',
				integral:'',
			};
		},
		methods:{
			saveEdit(){
				// 后端网址
				var url = this.baseUrl+"/baseUser/update"
				// 传递给后端的数据
				var data = {userId:this.userId,username:this.username,password:this.password,cname:this.cname,email:this.email,phone:this.phone,addr:this.addr,sex:this.sex,regdate:this.regdate,vipgrade:this.vipgrade,integral:this.integral};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					  }
				  }).then(res=>{
					  // res是后端的响应
					  this.$message("更新成功");
					  this.$router.push({path:'/BaseUserList'});
				  })
			},
			cancel(){
				this.$router.go(-1);
			}
		},
		mounted:function(){
			// 获取路由传递的对象
			var userId = this.$route.params.userId;
			var url2 = this.baseUrl+"/baseUser/load"
			var data = {userId:userId};
			this.$axios.post(url2,this.$qs.stringify(data),{
				headers: {
					'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
				}
			}).then(res=>{
				var obj = res.data;
				this.userId=obj.userId;
				this.username=obj.username;
				this.password=obj.password;
				this.cname=obj.cname;
				this.email=obj.email;
				this.phone=obj.phone;
				this.addr=obj.addr;
				this.sex=obj.sex;
				this.regdate=obj.regdate;
				this.vipgrade=obj.vipgrade;
				this.integral=obj.integral;
			})
		}
	}
</script>
<style>

</style>
