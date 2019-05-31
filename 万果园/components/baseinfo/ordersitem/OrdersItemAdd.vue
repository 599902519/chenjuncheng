<template>
	<div style='text-align: center;'>
		<h1>添加订单详情</h1>
		<el-row>
		  <el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='请输入商品数量' v-model='amount'></el-input> </el-col>
		  <el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='请输入单价' v-model='unitprice'></el-input> </el-col>
		</el-row>
		<el-row>
		  <el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='请输入商品金额 商品金额=单价*商品数量' v-model='subtotal'></el-input> </el-col>
					<el-select v-model="gid" placeholder="请选择商品分类" style='width:300px;margin-top: 20px;'>
					<el-option
					  v-for="item in options"
					  :label="item.gname"
					  :value="item.gid" >
					</el-option>
				  </el-select>		
		  </el-row>
		
		<el-row style='margin-top: 20px;text-align: center;'>
		  <el-col :span="24" > <el-button type='primary' @click='saveAdd'>确定</el-button> <el-button @click='cancel'>取消</el-button> </el-col>
		</el-row>
	</div>
</template>
<script>
	export default {
		name:'',
		data() {
			return {
				amount:'',
				unitprice:'',
				subtotal:'',
				gid:'',
				oid:'',
				options:''
			};
		},
		methods:{
			saveAdd(){
				// 后端网址
				var url = this.baseUrl1+"/ordersItem/insert"
				// 传递给后端的数据
				var data = {amount:this.amount,unitprice:this.unitprice,subtotal:this.subtotal,gid:this.gid,oid:this.oid};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					  }
				  }).then(res=>{
					  // res是后端的响应
					  this.$message("添加成功");
					  this.$router.push({path:'/OrdersItemList'});
				  })
			},
			cancel(){
				this.$router.go(-1);
			}
		},
		mounted:function(){
				var url = this.baseUrl1+"/goodsInfo/list"
			// 传递给后端的数据
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

<style>

</style>

