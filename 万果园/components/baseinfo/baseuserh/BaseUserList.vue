<template>
	<div>
		<h1 style="text-align: center">前台用户管理</h1>
		<div style="text-align: left;margin:0 0 20px 50px;">
			<el-input style='width:160px' placeholder='账号' v-model='search_username'></el-input>
			<el-button @click='search'>查询</el-button>
			<el-button @click='add'>添加</el-button>
		</div>
		<center>
			<el-table :data="list">
				<el-table-column prop="userId" label="用户id" width="60"></el-table-column>
				<el-table-column prop="username" label="账号" width="60"></el-table-column>
				<el-table-column prop="password" label="密码" width="120"></el-table-column>
				<el-table-column prop="cname" label="姓名" width="80"></el-table-column>
				<el-table-column prop="email" label="邮箱" width="100"></el-table-column>
				<el-table-column prop="phone" label="电话" width="80"></el-table-column>
				<el-table-column prop="addr" label="地址" width="120"></el-table-column>
				<el-table-column prop="sex" label="性别" width="60"></el-table-column>
				<el-table-column prop="regdate" label="注册时间" width="120"></el-table-column>
				<el-table-column prop="vip"  label="会员等级 " width="120"></el-table-column>
				<el-table-column prop="integral" label="积分" width="60"></el-table-column>
				<el-table-column label="操作" width="180">
				  <template slot-scope="scope">
					<el-button size="mini" @click="update(scope.row.userId)">编辑</el-button>
					<el-button size="mini" type='danger' @click="del(scope.row.userId)">删除</el-button>
				  </template>
				</el-table-column>
			</el-table>
		</center>
	</div>
</template>
<script>
	export default {
		name:'',
		data() {
			return {
				search_username:'',
				list:[],
				
			
			};
		},
		methods:{
			update(userId){
				this.$router.push({name:'BaseUserEdit',params:{userId:userId}});
			},
			del(userId){
				var url = this.baseUrl+"/baseUser/delete"
				var data = {userId:userId};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					this.$message("删除成功");
					this.search();
			    })
			},
			add(){
				this.$router.push("/BaseUserAdd");
			},
			search(){
				var url = this.baseUrl+"/baseUser/search"
				var data = {username:this.search_username};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
				
					this.list = res.data;
				})
			}
		},
		mounted:function(){
			this.search();
			
			
		}
		
	}
</script>

<style>

</style>
