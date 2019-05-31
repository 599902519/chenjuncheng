<template>
	<div>
		<h1 style="text-align: center">一级分类</h1>
		<div style="text-align: left;margin:0 0 20px 50px;">
			<el-input style='width:160px' placeholder='名称' v-model='search_cname'></el-input>
			<el-button @click='search'>查询</el-button>
			<el-button @click='add'>添加</el-button>
		</div>
		<center>
			<el-table :data="list">
				<el-table-column prop="cid" label="分类id" width="80"></el-table-column>
				<el-table-column prop="cname" label="名称" width="120"></el-table-column>
				<el-table-column label="操作" width="180">
				  <template slot-scope="scope">
					<el-button size="mini" @click="update(scope.row.cid)">编辑</el-button>
					<el-button size="mini" type='danger' @click="del(scope.row.cid)">删除</el-button>
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
				search_cname:'',
				list:[]
			};
		},
		methods:{
			update(cid){
				this.$router.push({name:'GoodsCategoryEdit',params:{cid:cid}});
			},
			del(cid){
				var url = this.baseUrl1+"/goodsCategory/delete"
				var data = {cid:cid};
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
				this.$router.push("/GoodsCategoryAdd");
			},
			search(){
				var url = this.baseUrl1+"/goodsCategory/search"
				var data = {cname:this.search_cname};
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
