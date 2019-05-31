<template>
	<div style='text-align: center;'>
		<h1>更新一级分类</h1>
		<el-row>
		  <el-col :span="12"> <el-input style='width:300px;margin-top: 20px;' placeholder='请输入名称' v-model='cname'></el-input> </el-col>
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
				cid:'',
				cname:'',
			};
		},
		methods:{
			saveEdit(){
				// 后端网址
				var url = this.baseUrl1+"/goodsCategory/update"
				// 传递给后端的数据
				var data = {cid:this.cid,cname:this.cname};
				this.$axios.post(url,this.$qs.stringify(data),{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					  }
				  }).then(res=>{
					  // res是后端的响应
					  this.$message("更新成功");
					  this.$router.push({path:'/GoodsCategoryList'});
				  })
			},
			cancel(){
				this.$router.go(-1);
			}
		},
		mounted:function(){
			// 获取路由传递的对象
			var cid = this.$route.params.cid;
			var url2 = this.baseUrl1+"/goodsCategory/load"
			var data = {cid:cid};
			this.$axios.post(url2,this.$qs.stringify(data),{
				headers: {
					'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
				}
			}).then(res=>{
				var obj = res.data;
				this.cid=obj.cid;
				this.cname=obj.cname;
			})
		}
	}
</script>
<style>

</style>
