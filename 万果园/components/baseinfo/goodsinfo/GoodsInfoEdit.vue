<template>
	<div style='text-align: center;'>
		<h1>更新商品信息</h1>
	<el-row>
		  <el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='请输入名称' v-model='gname'></el-input> </el-col>
		  <el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='请输入市场价格' v-model='marketprice'></el-input> </el-col>
	</el-row>
	<el-row>
		  <el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='请输入商品价格' v-model='shopprice'></el-input> </el-col>
		  <el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='请输入图片路径' v-model='image'></el-input> </el-col>
		  <el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='请输入说明' v-model='gdesc'></el-input> </el-col>
	</el-row>
	<el-row>
			 <el-col :span="12">
				<el-date-picker
				  v-model="gdate"
				  type="date"
				  value-format="yyyy-MM-dd"
				  placeholder="选择日期时间" style='width:300px;margin-top: 20px;'>
				</el-date-picker>	
			</el-col>
		
			 <el-col :span="12">
		 <el-select v-model="cid" placeholder="请选择分类" style='width:300px;margin-top: 20px;'>
			<el-option
			  v-for="item in options1"
			  :label="item.cname"
			  :value="item.cid" >
			</el-option>
		  </el-select>
		  </el-col>
	</el-row>
	<el-row>
			  <el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='请输入库存数量' v-model='stocknumber'></el-input> </el-col>
			
			  <el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='请输入销量' v-model='salenumber'></el-input> </el-col>
			
				 <el-col :span="12">
			 <el-select v-model="shopid" placeholder="请选择商家店铺" style='width:300px;margin-top: 20px;'>
				<el-option
				  v-for="item in options"
				  :label="item.shopname"
				  :value="item.shopid" >
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
				gid:'',
				gname:'',
				marketprice:'',
				shopprice:'',
				image:'',
				gdesc:'',
				gdate:'',
				cid:'',
				stocknumber:'',
				salenumber:'',
				shopid:'',
				options:'',
				options1:'',
				cid:''
			};
		},
		methods:{
			saveEdit(){
				// 后端网址
				var url = this.baseUrl1+"/goodsInfo/update"
				// 传递给后端的数据
				var data = {gid:this.gid,gname:this.gname,marketprice:this.marketprice,shopprice:this.shopprice,image:this.image,gdesc:this.gdesc,gdate:this.gdate,cid:this.cid,stocknumber:this.stocknumber,salenumber:this.salenumber,shopid:this.shopid};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					  }
				  }).then(res=>{
					  // res是后端的响应
					  this.$message("更新成功");
					  this.$router.push({path:'/GoodsInfoList'});
				  })
			},
			cancel(){
				this.$router.go(-1);
			}
		},
		mounted:function(){
			// 获取路由传递的对象
			var gid = this.$route.params.gid;
			var url2 = this.baseUrl1+"/goodsInfo/load"
			var data = {gid:gid};
			this.$axios.post(url2,this.$qs.stringify(data),{
				headers: {
					'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
				}
			}).then(res=>{
				var obj = res.data;
				this.gid=obj.gid;
				this.gname=obj.gname;
				this.marketprice=obj.marketprice;
				this.shopprice=obj.shopprice;
				this.image=obj.image;
				this.gdesc=obj.gdesc;
				this.gdate=obj.gdate;
				this.cid=obj.cid;
				this.stocknumber=obj.stocknumber;
				this.salenumber=obj.salenumber;
				this.shopid=obj.shopid;
			})
				var url = this.baseUrl+"/shopInfo/list"
			// 传递给后端的数据
			this.$axios.post(url,{
				headers: {
					'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
				  }
			  }).then(res=>{
				 this.options=res.data;
			  })
			  
			  var url = this.baseUrl1+"/goodsCategory/list"
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
