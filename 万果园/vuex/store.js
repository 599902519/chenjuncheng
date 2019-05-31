import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
// state对象用来存储数据
var state={
// 	v1:'',
// 	v2:'',
// 	color:'green'
// 定义一个登陆标记
loginFlag:false,

		tags: [
          { name: '首页', type: 'warning',url:'/' }
          
        ]
	
		
}
// mutations对象用来存储方法
var mutations = {
	// colorName传过来的参数
// 	xiu(state,colorName){
// 		state.color=colorName;
// 	}
		addtog(state,obj){
			for(var i of state.tags){
				i.type='info'
			}
			// 去重复
			for(var i of state.tags){
				if(i.name==obj.name){
					i.type='warning';
					return;
				}
			}
			// 添加到数组里
			state.tags.push(obj);
		},
		
		
		uwptag(state,index){
			for(var i of state.tags){
				i.type='info'
			}
			state.tags[index].type='warning';
		},
		
		
		deltags(state,index){
			// 删除
			state.tags.splice(index,1);
		},
		addlist(state,obj){
			state.tableData.push(obj);
			
		},
		dellist(state,date){
			for (var i = 0; i <state.tableData.length; i++) {
				if(state.tableData[i].date==date){
					state.tableData.splice(i,1);
				}
			}
		}
		
			
		
		
}
// 创建一个store对象,并暴露出去 store对象有两个属性,state和mutations
export default new Vuex.Store({
	state,
	mutations
})