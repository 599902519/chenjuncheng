<template>
	<div style='text-align: center;'>
		<h1>更新商家登录记录</h1>
		<el-row>
		  <el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='请输入店家名称' v-model='shopname'></el-input> </el-col>
					<el-col :span="12">
				 <el-select v-model="userId" placeholder="请选择前台用户" style='width:300px;margin-top: 20px;'>
					<el-option
					  v-for="item in options"
					  :label="item.cname"
					  :value="item.userId" >
					</el-option>
				  </el-select>
				 </el-col>		
		</el-row>
		<el-row>
		  <el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='请输入联系人' v-model='linkman'></el-input> </el-col>
		  <el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='请输入电话' v-model='phone'></el-input> </el-col>
		</el-row>
		<el-row>
		  <el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='请输入店家地址' v-model='addr'></el-input> </el-col>
		  <el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='请输入坐标' v-model='coordinate'></el-input> </el-col>
		</el-row>
		<el-row>
		  <el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='请输入公告' v-model='notice'></el-input> </el-col>
					<el-col :span="12">
						 <el-select v-model="typeid" placeholder="请选择商品类别" style='width:300px;margin-top: 20px;'>
							<el-option
							  v-for="item in options1"
							  :label="item.typename"
							  :value="item.typeid" >
							</el-option>
						  </el-select>
				 </el-col>		
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
				shopid:'',
				shopname:'',
				userId:'',
				linkman:'',
				phone:'',
				addr:'',
				coordinate:'',
				notice:'',
				
				userId:'',
				typeid:'',
				options1:'',
				options:''
			};
		},
		methods:{
			saveEdit(){
				// 后端网址
				var url = this.baseUrl+"/shopInfo/update"
				// 传递给后端的数据
				var data = {shopid:this.shopid,shopname:this.shopname,userId:this.userId,linkman:this.linkman,phone:this.phone,addr:this.addr,coordinate:this.coordinate,notice:this.notice,shoptype:this.typeid};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					  }
				  }).then(res=>{
					  // res是后端的响应
					  this.$message("更新成功");
					  this.$router.push({path:'/ShopInfoList'});
				  })
			},
			cancel(){
				this.$router.go(-1);
			}
		},
		mounted:function(){
			// 获取路由传递的对象
			var shopid = this.$route.params.shopid;
			var url2 = this.baseUrl+"/shopInfo/load"
			var data = {shopid:shopid};
			this.$axios.post(url2,this.$qs.stringify(data),{
				headers: {
					'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
				}
			}).then(res=>{
				var obj = res.data;
				this.shopid=obj.shopid;
				this.shopname=obj.shopname;
				this.userId=obj.userId;
				this.linkman=obj.linkman;
				this.phone=obj.phone;
				this.addr=obj.addr;
				this.coordinate=obj.coordinate;
				this.notice=obj.notice;
				this.typeid=obj.shoptype;
			})
			
			var url = this.baseUrl+"/baseUser/list"
			// 传递给后端的数据
			this.$axios.post(url,{
				headers: {
					'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
				  }
			  }).then(res=>{
				 this.options=res.data;
			  })
				 var url = this.baseUrl1+"/shopType/list"
				// 传递给后端的数据
				this.$axios.post(url,{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					  }
				  }).then(res=>{
					 this.options1=res.data;
				  })
		}
	}
</script>
<style>

</style>
