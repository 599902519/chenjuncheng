<!-- html部分 -->
<template>
	<div id="app">
		<div id="app" style="margin-top: 50px;">
			<el-input style='width: 180px;' v-model='cname'placeholder="请输入姓名"></el-input>
			<el-input style='width: 180px;' v-model='username'placeholder="请输入用户名"></el-input><br />
			<el-input style='width: 180px;' v-model='password'placeholder="请输入密码"></el-input>
			<el-input style='width: 180px;' v-model='telno'placeholder="请输入手机号"></el-input><br />
			<el-input style='width: 180px;' v-model='email'placeholder="请输入邮箱"></el-input>
			<el-input style='width: 180px;' v-model='sex'placeholder="请输入性别"></el-input><br />
			<el-select v-model="compid" placeholder="请选择">
				<el-option
				  v-for="item in options"
				  :label="item.compname"
				  :value="item.compid">
				</el-option>
			 </el-select>
			<el-button @click='over' >添加</el-button> 
			<el-button @click='back' >返回</el-button>   
		</div>
	</div>
</template>
<!-- js部分 -->
<script>
	export default {
		name:'',
		data() {
			return {
				options:[],
				compid:'',
				
				userid:'',
				cname:'',
				username:'',
				password:'',
				telno:'',
				email:'',
				sex:''
			};
		},
		methods:{
			over(){
				// 后端网址
				var url = this.baseUrl+"/baseUser/insert"
				// 传递给后端的数据
				var data ={compid:this.compid,userid:this.userid,cname:this.cname,username:this.username,password:this.password,telno:this.telno,sex:this.sex};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					// res是后端的响应
					this.$message("添加成功");
					this.$router.push({path:'/baseUser'});
				})
			},
			back(){
				this.$router.go(-1)
			}
		},
		mounted:function(){
			// 后端网址
			var url = this.baseUrl+"/baseCompany/list"
			this.$axios.post(url,{
				headers: {
					'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
				}
			}).then(res=>{
				this.options=res.data;
			})
		}
	}
</script>
<!-- css部分 -->
<style>

</style>
