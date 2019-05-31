<!-- html部分 -->
<template>
	<div id="app">
				<div id="ding">
					<h1>表单综合</h1>
				</div>
					<div class="asa">
						
						  <el-date-picker  v-model="value1"  type="date"   placeholder="选择日期"></el-date-picker>
						<el-select v-model="value" placeholder="请选择">
							<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
							</el-option>
						</el-select>
						<el-input v-model="input" placeholder="请输入查询条件" style="width: 160px;"></el-input>
						<el-button>查询</el-button>
					</div>	
					<div class="asa" id="zx">
						<el-button>新增</el-button>
						<el-button>修改</el-button>
					</div>
			 <el-table
				:data="tableData"
				border
				style="width: 100%">
				<el-table-column
				  fixed
				  prop="date"
				  label="日期"
				  width="150">
				</el-table-column>
				<el-table-column
				  prop="name"
				  label="姓名"
				  width="120">
				</el-table-column>
				<el-table-column
				  prop="province"
				  label="省份"
				  width="120">
				</el-table-column>
				<el-table-column
				  prop="city"
				  label="市区"
				  width="120">
				</el-table-column>
				<el-table-column
				  prop="address"
				  label="地址"
				  width="300">
				</el-table-column>
				<el-table-column
				  prop="zip"
				  label="邮编"
				  width="120">
				</el-table-column>
				<el-table-column
				  fixed="right"
				  label="操作"
				  width="100">
				  <template slot-scope="scope">
					<el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
					<el-button type="text" size="small">编辑</el-button>
				  </template>
				</el-table-column>
		</el-table>		

	</div>
</template>
<!-- js部分 -->
<script>
	export default {
		name:'',
		data() {
			return {
				value:'',
				value1:'',
				input:'',
				  options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
				tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1517 弄',
          zip: 200333
        }, {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1519 弄',
          zip: 200333
        }, {
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1516 弄',
          zip: 200333
        }]
			};
		},
		methods:{
			
		}
	}
</script>
<!-- css部分 -->
<style>
.asa{
	margin-top: 30px;
}
#zx{
	text-align: right;
}
</style>
