<template>
	<div>
		<h1 style="text-align: center">商品类别</h1>
		<div style="text-align: left;margin:0 0 20px 50px;">
			<el-input style='width:160px' placeholder='类别名称' v-model='search_typename'></el-input>
			<el-button @click='search'>查询</el-button>
			<el-button @click='add'>添加</el-button>
		</div>
		<center>
			<el-table :data="list">
				<el-table-column prop="typeid" label="类别id" width="80"></el-table-column>
				<el-table-column prop="typename" label="类别名称" width="120"></el-table-column>
				<el-table-column label="操作" width="180">
				  <template slot-scope="scope">
					<el-button size="mini" @click="update(scope.row.typeid)">编辑</el-button>
					<el-button size="mini" type='danger' @click="del(scope.row.typeid)">删除</el-button>
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
				search_typename:'',
				list:[]
			};
		},
		methods:{
			update(typeid){
				this.$router.push({name:'ShopTypeEdit',params:{typeid:typeid}});
			},
			del(typeid){
				var url = this.baseUrl+"/shopType/delete"
				var data = {typeid:typeid};
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
				this.$router.push("/ShopTypeAdd");
			},
			search(){
				var url = this.baseUrl+"/shopType/search"
				var data = {typename:this.search_typename};
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
