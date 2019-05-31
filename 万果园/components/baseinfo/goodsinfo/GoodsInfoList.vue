<template>
	<div>
		<h1 style="text-align: center">商品信息</h1>
		<div style="text-align: left;margin:0 0 20px 50px;">
			<el-input style='width:160px' placeholder='名称' v-model='search_gname'></el-input>
			<el-button @click='search'>查询</el-button>
			<el-button @click='add'>添加</el-button>
		</div>
		<center>
			<el-table :data="list">
				<el-table-column prop="gid" label="商品id" width="50"></el-table-column>
				<el-table-column prop="gname" label="名称" width="60"></el-table-column>
				<el-table-column prop="marketprice" label="市场价格" width="60"></el-table-column>
				<el-table-column prop="shopprice" label="商品价格" width="110"></el-table-column>
				<el-table-column prop="image" label="图片路径" width="110"></el-table-column>
				<el-table-column prop="gdesc" label="说明" width="80"></el-table-column>
				<el-table-column prop="gdate" label="日期" width="80"></el-table-column>
				<el-table-column prop="cname" label="分类" width="80"></el-table-column>
				<el-table-column prop="stocknumber" label="库存数量" width="80"></el-table-column>
				<el-table-column prop="salenumber" label="销量" width="80"></el-table-column>
				<el-table-column prop="shopname" label="店家" width="110"></el-table-column>
				<el-table-column label="操作" width="180">
				  <template slot-scope="scope">
					<el-button size="mini" @click="update(scope.row.gid)">编辑</el-button>
					<el-button size="mini" type='danger' @click="del(scope.row.gid)">删除</el-button>
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
				search_gname:'',
				list:[]
			};
		},
		methods:{
			update(gid){
				this.$router.push({name:'GoodsInfoEdit',params:{gid:gid}});
			},
			del(gid){
				var url = this.baseUrl1+"/goodsInfo/delete"
				var data = {gid:gid};
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
				this.$router.push("/GoodsInfoAdd");
			},
			search(){
				var url = this.baseUrl1+"/goodsInfo/search"
				var data = {gname:this.search_gname};
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
