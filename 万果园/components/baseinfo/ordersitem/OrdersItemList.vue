<template>
	<div>
		<h1 style="text-align: center">订单详情</h1>
		<div style="text-align: left;margin:0 0 20px 50px;">
			<el-input style='width:160px' placeholder='商品数量' v-model='search_amount'></el-input>
			<el-button @click='search'>查询</el-button>
			<el-button @click='add'>添加</el-button>
		</div>
		<center>
			<el-table :data="list">
				<el-table-column prop="itemId" label="订单详情ID" width="80"></el-table-column>
				<el-table-column prop="amount" label="商品数量" width="120"></el-table-column>
				<el-table-column prop="unitprice" label="单价" width="120"></el-table-column>
				<el-table-column prop="subtotal" label="商品金额 商品金额=单价*商品数量" width="120"></el-table-column>
				<el-table-column prop="gname" label="商品" width="120"></el-table-column>
				
				<el-table-column label="操作" width="180">
				  <template slot-scope="scope">
					<el-button size="mini" @click="update(scope.row.itemId)">编辑</el-button>
					<el-button size="mini" type='danger' @click="del(scope.row.itemId)">删除</el-button>
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
				search_amount:'',
				list:[]
			};
		},
		methods:{
			update(itemId){
				this.$router.push({name:'OrdersItemEdit',params:{itemId:itemId}});
			},
			del(itemId){
				var url = this.baseUrl1+"/ordersItem/delete"
				var data = {itemId:itemId};
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
				this.$router.push("/OrdersItemAdd");
			},
			search(){
				var url = this.baseUrl1+"/ordersItem/search"
				var data = {amount:this.search_amount};
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
