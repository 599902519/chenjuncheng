<!-- html部分 -->
<template>
	<div id="app">
				<div id="ding">
					<h1>后台用户信息</h1>
				</div>
					<div class="asa">
						
							<el-input v-model="search_cname" placeholder="请输入姓名" style="width: 160px;"></el-input>
						
						<el-button  @click="search">查询</el-button>
					</div>	
					<div class="asa" id="zx">
						<el-button @click="addlist()">新增</el-button>
						
					</div>
			 <el-table :data="list">
				<el-table-column prop="adminuserId" label="ID" width="80"></el-table-column>
				<el-table-column prop="username" label="用户名" width="120"></el-table-column>
				<el-table-column prop="password" label="密码" width="120"></el-table-column>
				<el-table-column prop="cname" label="姓名" width="120"></el-table-column>
				<el-table-column prop="phone" label="手机号" width="180"></el-table-column>
				
				<el-table-column label="操作" width="230">
				  <template slot-scope="scope">
					<el-button size="mini" @click="update(scope.row)">编辑</el-button>
					<el-button size="mini" type='danger' @click="del(scope.row.adminuserId)">删除</el-button>
				  </template>
				</el-table-column>
			</el-table>


	</div>
</template>
<!-- js部分 -->
<script>
	export default {
		name:'',
		data() {
			return {
				value:'',
				value1:'',
				search_cname:'',
				list:[]
				  
			
			};
		},
		methods:{
			addlist(){
				this.$router.push({path:'/addlist'});
			},
				update(row){
				this.$router.push({name:'update',params:{row:row}});
			},
			del(adminuserId){
					// 后端网址
						var url = this.baseUrl+"/baseAdminuser/delete"
						// 传递给后端的数据
						var data = {adminuserId:adminuserId};
						this.$axios.post(url,this.$qs.stringify(data),{
							headers: {
								'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
							}
						}).then(res=>{
							// res是后端的响应
							this.$message("删除成功");
							this.search()
						})
			},
			search(){
				var url = this.baseUrl+"/baseAdminuser/search"
				// 传递给后端的数据
				var data = {cname:this.search_cname};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					},
					
				}).then(res=>{
					// res是后端的响应
					this.list=res.data;
				})
			}
			
		},
		mounted:function(){
							
					this.search()
					}
		
	}
</script>
<!-- css部分 -->
<style>
.asa{
	margin-top: 30px;
}
#zx{
	text-align: right;
}
</style>
