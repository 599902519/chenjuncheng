<!-- html部分 -->
<template>
	<div >
		
		
		<span id="biao">万果园超市</span>
		<div style="display: inline-block; float: right; margin-right: 40px;">
		<el-dropdown :hide-on-click="false" >
				  <span class="el-dropdown-link" style="color: white;">
					{{cname}}<i class="el-icon-arrow-down el-icon--right"></i>
				  </span>
				  <el-dropdown-menu slot="dropdown">
					 <el-dropdown-item icon="el-icon-circle-plus" @click.native="fn">退出登录</el-dropdown-item>
					  
        
					
				  </el-dropdown-menu>
		</el-dropdown>
			
		</div>
	</div>
</template>
<!-- js部分 -->
<script>
	export default {
		name:'',
		data() {
			return {
				cname:'',
				
				arr:[]
				
			};
		},
		methods:{
			fn(){
					var url = this.baseUrl+"/baseUser/outlogin"
				// 传递给后端的数据
				
				 // var data = {compid:this.compid,compname:this.compname,contacts:this.contacts,comptel:this.comptel,industry:this.industry,address:this.address};
				this.$axios.post(url,{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					// res是后端的响应
				this.$router.push({path:'/login'});
				})
				
			}
		},
		mounted:function(){
			
					var url = this.baseUrl+"/baseUser/list"
				// 传递给后端的数据
				
				 // var data = {compid:this.compid,compname:this.compname,contacts:this.contacts,comptel:this.comptel,industry:this.industry,address:this.address};
				this.$axios.post(url,{
					headers: {
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
					}
				}).then(res=>{
					// res是后端的响应
					this.arr=res.data;
				})
				// 获取从login传过来的数据传过来的数据
				var obj=this.$route.params.obj;
				
				
				this.cname=obj.cname;
				
				
			
				
		}
	}
</script>
<!-- css部分 -->
<style>
#biao{
	text-align: left;
	margin-top: 5px;
	font-size: 20px;
	color: white;
}
  .el-dropdown-link {
    cursor: pointer;
    color: #000000;
  }
  .el-icon-arrow-down {
    font-size: 20px;
  }	
 
 
</style>
