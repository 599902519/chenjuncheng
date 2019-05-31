<template>
	<div>
		<h1 style="text-align: center">订单信息</h1>
		<div style="text-align: left;margin:0 0 20px 50px;">
			<el-input style='width:160px' placeholder='订单总金额' v-model='search_total'></el-input>
			<el-button @click='search'>查询</el-button>
			<el-button @click='add'>添加</el-button>
		</div>
		<center>
			<el-table :data="list">
				<el-table-column prop="oid" label="主键" width="80"></el-table-column>
				<el-table-column prop="total" label="订单总金额" width="120"></el-table-column>
				<el-table-column prop="ordertime" label="下单时间" width="120"></el-table-column>
				<el-table-column prop="state" label="状态 " width="120"></el-table-column>
				<el-table-column prop="cname" label="用户姓名" width="120"></el-table-column>
				<el-table-column prop="phone" label="用户电话" width="120"></el-table-column>
				<el-table-column prop="addr" label="用户地址" width="120"></el-table-column>
				<el-table-column prop="username" label="用户" width="120"></el-table-column>
				<el-table-column prop="shopname" label="店家名称" width="120"></el-table-column>
				<el-table-column label="操作" width="180">
				  <template slot-scope="scope">
					<el-button size="mini" @click="update(scope.row.oid)">编辑</el-button>
					<el-button size="mini" type='danger' @click="del(scope.row.oid)">删除</el-button>
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
				search_total:'',
				list:[]
			};
		},
		methods:{
			update(oid){
				this.$router.push({name:'OrdersInfoEdit',params:{oid:oid}});
			},
			del(oid){
				var url = this.baseUrl1+"/ordersInfo/delete"
				var data = {oid:oid};
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
				this.$router.push("/OrdersInfoAdd");
			},
			search(){
				var url = this.baseUrl1+"/ordersInfo/search"
				var data = {total:this.search_total};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					
					this.list = res.data;
					console.log(this.list)
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
