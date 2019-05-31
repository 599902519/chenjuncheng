<template>
	<div style='text-align: center;'>
		<h1>更新订单信息</h1>
		<el-row>
		  <el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='请输入订单总金额' v-model='total'></el-input> </el-col>
		  <el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='请输入下单时间' v-model='ordertime'></el-input> </el-col>
		</el-row>
		<el-row>
		  <el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='请输入状态 状态 1已下单 2已发货 3已收货 4已评价 5已退订' v-model='state'></el-input> </el-col>
		  <el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='请输入用户姓名' v-model='cname'></el-input> </el-col>
		</el-row>
		<el-row>
		  <el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='请输入用户电话' v-model='phone'></el-input> </el-col>
		  <el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='请输入用户地址' v-model='addr'></el-input> </el-col>
		</el-row>
		<el-row>
		  <el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='请输入用户id' v-model='userId'></el-input> </el-col>
		  <el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='请输入店家id' v-model='shopid'></el-input> </el-col>
		</el-row>
		<el-row style='margin-top: 20px;text-align: center;'>
		  <el-col :span="24" > <el-button type='primary' @click='saveEdit'>确定</el-button> <el-button @click='cancel'>取消</el-button> </el-col>
		</el-row>
	</div>
</template>
<script>
	export default {
		name:'',
		data() {
			return {
				oid:'',
				total:'',
				ordertime:'',
				state:'',
				cname:'',
				phone:'',
				addr:'',
				userId:'',
				shopid:'',
			};
		},
		methods:{
			saveEdit(){
				// 后端网址
				var url = this.baseUrl1+"/ordersInfo/update"
				// 传递给后端的数据
				var data = {oid:this.oid,total:this.total,ordertime:this.ordertime,state:this.state,cname:this.cname,phone:this.phone,addr:this.addr,userId:this.userId,shopid:this.shopid};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					  }
				  }).then(res=>{
					  // res是后端的响应
					  this.$message("更新成功");
					  this.$router.push({path:'/OrdersInfoList'});
				  })
			},
			cancel(){
				this.$router.go(-1);
			}
		},
		mounted:function(){
			// 获取路由传递的对象
			var oid = this.$route.params.oid;
			var url2 = this.baseUrl1+"/ordersInfo/load"
			var data = {oid:oid};
			this.$axios.post(url2,this.$qs.stringify(data),{
				headers: {
					'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
				}
			}).then(res=>{
				var obj = res.data;
				this.oid=obj.oid;
				this.total=obj.total;
				this.ordertime=obj.ordertime;
				this.state=obj.state;
				this.cname=obj.cname;
				this.phone=obj.phone;
				this.addr=obj.addr;
				this.userId=obj.userId;
				this.shopid=obj.shopid;
			})
		}
	}
</script>
<style>

</style>
