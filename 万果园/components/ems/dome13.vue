<!-- html部分 -->
<template>
	<!-- tag标签 -->
	<div id="app">
				<div>
					<el-tag	v-for="(tag,index) in $store.state.tags" :key="tag.name" 
					closable :type="tag.type" style="margin-left: 10px;" @click="fn(tag,index)" @close="fn2(tag,index)">
						{{tag.name}}</el-tag>
						<router-view/>
					</div>
					<!-- 路由出口 -->
		
	</div>
</template>
<!-- js部分 -->
<script>
	export default {
		name:'',
		data() {
			return {
				
			};
		},
		methods:{
			fn(tag,index){
				// 动态跳转
				this.$router.push({path:tag.url});
				// 传下标到store.js里的uwptag方法里
				this.$store.commit('uwptag',index);
			},
			fn2(tag,index){
				// 判断是不是就一个tag
				if(this.$store.state.tags.length==1){
					this.$message("当前不可删除")
				}else{
				var obj=this.$store.state.tags[index].type=='warning';
				this.$store.commit('deltags',index);
					if(obj){
						if(index==0){
							// 动态跳转
							this.$router.push({path:this.$store.state.tags[0].url});
							// 传下标到store.js里的uwptag方法里
							this.$store.commit('uwptag',0);
						}else{
							// 动态跳转
							this.$router.push({path:this.$store.state.tags[index-1].url});
							// 传下标到store.js里的uwptag方法里
							this.$store.commit('uwptag',index-1);
						}
					}
				}
			}
		}
	}
</script>
<!-- css部分 -->
<style>

</style>
