<!-- html部分 -->
<template>
	<div id="app" style="height: 100%;">
		<el-container>
			<el-header>
				<top></top>
			</el-header>
			<el-container>
				<el-aside width="200px">
					<dome10></dome10>
				</el-aside>
				<el-main>
					<dome13></dome13>
				</el-main>
			</el-container>
		</el-container>
	</div>
</template>
<!-- js部分 -->
<script>
	import dome10 from './dome10'
	import dome12 from './dome12'
	import dome13 from './dome13'
		import top from './top'
	export default {
		 components:{dome10,dome12,dome13,top},
		name:'',
		data() {
			return {
				
			};
		},
		methods:{
			
		}
	}
</script>
<!-- css部分 -->
<style>
 .el-header, .el-footer {
    background-color: #82848A;
    color: #333;
    
    line-height: 60px;
	
  }
  
  .el-aside {
    background-color: #f4f4f4;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: white;
    color: #333;
   

  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
  .el-container.is-vertical{
	  height: 100%;
  }
</style>
