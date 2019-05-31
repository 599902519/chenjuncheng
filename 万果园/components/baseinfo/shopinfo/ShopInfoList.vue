<template>
	<div>
		<h1 style="text-align: center">商家登录记录</h1>
		<div style="text-align: left;margin:0 0 20px 50px;">
			<el-input style='width:160px' placeholder='店家名称' v-model='search_shopname'></el-input>
			<el-button @click='search'>查询</el-button>
			<el-button @click='add'>添加</el-button>
		</div>
		<center>
			<el-table :data="list">
				<el-table-column prop="shopid" label="店家id" width="80"></el-table-column>
				<el-table-column prop="shopname" label="店家名称" width="100"></el-table-column>
				<el-table-column prop="cname" label="前台用户" width="100"></el-table-column>
				<el-table-column prop="linkman" label="联系人" width="100"></el-table-column>
				<el-table-column prop="phone" label="电话" width="100"></el-table-column>
				<el-table-column prop="addr" label="店家地址" width="100"></el-table-column>
				<el-table-column prop="coordinate" label="坐标" width="100"></el-table-column>
				<el-table-column prop="notice" label="公告" width="100"></el-table-column>
				<el-table-column prop="typename" label="商店类型" width="100"></el-table-column>
				<el-table-column label="操作" width="180">
				  <template slot-scope="scope">
					<el-button size="mini" @click="update(scope.row.shopid)">编辑</el-button>
					<el-button size="mini" type='danger' @click="del(scope.row.shopid)">删除</el-button>
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
				search_shopname:'',
				list:[]
			};
		},
		methods:{
			update(shopid){
				this.$router.push({name:'ShopInfoEdit',params:{shopid:shopid}});
			},
			del(shopid){
				var url = this.baseUrl+"/shopInfo/delete"
				var data = {shopid:shopid};
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
				this.$router.push("/ShopInfoAdd");
			},
			search(){
				var url = this.baseUrl+"/shopInfo/search"
				var data = {shopname:this.search_shopname};
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
