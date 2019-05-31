<!-- html部分 -->
<template>
	<div>
		<el-menu>
			<span v-for="obj in arr">
				<el-menu-item v-show='!obj.children' :index='obj.index' @click="fn(obj)">
							<span slot="title">{{obj.text}}</span>
				</el-menu-item>
			
		
				<el-submenu v-show="obj.children" :index="obj.index">
					<template slot="title">
						<span>{{obj.text}}</span>
					</template>
					<el-menu-item-group>
						<el-menu-item v-for='item in obj.children' :index='item.index' @click="fn(item)">{{item.text}}</el-menu-item>
					</el-menu-item-group>
				</el-submenu>
			</span>
		</el-menu>
	</div>
</template>
<!-- js部分 -->
<script>
	export default {
		name:'',
		data() {
			return {
			arr:[{text:'首页',index:'101',url:'/'},
					  {text:'后台用户信息',index:'1021',url:'/add1text1'},
						
						 {text:'前台用户信息',index:'1022',url:'/BaseUserList'},
						 {text:'一级分类',index:'1023',url:'/GoodsCategoryList'},
						 {text:'商品信息',index:'1024',url:'/GoodsInfoList'},
						 
						   {text:'商家信息',index:'1025',url:'/shopInfoList'},
						   {text:'商品类别',index:'1026',url:'/shopTypeList'},
						   {text:'订单信息',index:'1027',url:'/OrdersInfoList'},
							{text:'订单详情',index:'1028',url:'/OrdersItemList'},
					 
				]

			};
		},
		methods:{
			fn(obj){
				this.$router.push({path:obj.url});
				// 添加tag标签
				var obj={name:obj.text,type:'warning',url:obj.url};
				
				this.$store.commit('addtog',obj);
			}
		}
	}
</script>
<!-- css部分 -->
<style>
	.el-menu{
		background-color: #F4F4F4
	}

</style>
