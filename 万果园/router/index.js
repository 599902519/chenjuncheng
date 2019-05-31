import Vue from 'vue'
import Router from 'vue-router'
import dome11 from '@/components/ems/dome11'
import add1text1 from '@/components/baseinfo/baseuser/add1text1'
import update from '@/components/baseinfo/baseuser/update'
import welcome from '@/components/ems/welcome'
import addlist from '@/components/baseinfo/baseuser/addlist'
import BaseUserAdd from '@/components/baseinfo/baseuserh/BaseUserAdd'
import BaseUserEdit from '@/components/baseinfo/baseuserh/BaseUserEdit'
import BaseUserList from '@/components/baseinfo/baseuserh/BaseUserList'
import GoodsCategoryAdd from '@/components/baseinfo/components/GoodsCategoryAdd'
import GoodsCategoryList from '@/components/baseinfo/components/GoodsCategoryList'
import GoodsCategoryEdit from '@/components/baseinfo/components/GoodsCategoryEdit'
import GoodsInfoAdd from '@/components/baseinfo/goodsinfo/GoodsInfoAdd'
import GoodsInfoList from '@/components/baseinfo/goodsinfo/GoodsInfoList'
import GoodsInfoEdit from '@/components/baseinfo/goodsinfo/GoodsInfoEdit'
import ShopInfoAdd from '@/components/baseinfo/shopinfo/ShopInfoAdd'
import ShopInfoList from '@/components/baseinfo/shopinfo/ShopInfoList'
import ShopInfoEdit from '@/components/baseinfo/shopinfo/ShopInfoEdit'
import ShopTypeAdd from '@/components/baseinfo/shoptype/ShopTypeAdd'
import ShopTypeList from '@/components/baseinfo/shoptype/ShopTypeList'
import ShopTypeEdit from '@/components/baseinfo/shoptype/ShopTypeEdit'

import OrdersInfoAdd from '@/components/baseinfo/ordersinfo/OrdersInfoAdd'
import OrdersInfoList from '@/components/baseinfo/ordersinfo/OrdersInfoList'
import OrdersInfoEdit from '@/components/baseinfo/ordersinfo/OrdersInfoEdit'

import OrdersItemAdd from '@/components/baseinfo/ordersitem/OrdersItemAdd'
import OrdersItemList from '@/components/baseinfo/ordersitem/OrdersItemList'
import OrdersItemEdit from '@/components/baseinfo/ordersitem/OrdersItemEdit'




import login from '@/components/ems/login'
Vue.use(Router)
export default new Router({
	mode:'history',
  routes: [
	  { path: '/login',  name: 'login', component: login},
    {
      path: '/',
      name: 'dome11',
      component: dome11,
				children:[{path:'add1text1',component:add1text1},
								{path:'addlist',component:addlist},
								{path:'update',name:'update',	component:update},
								{path:'BaseUserAdd',component:BaseUserAdd},
								{path:'BaseUserEdit',component:BaseUserEdit,name:'BaseUserEdit'},
								{path:'BaseUserList',name:'BaseUserList',	component:BaseUserList},
								{path:'GoodsCategoryAdd',component:GoodsCategoryAdd},
								{path:'GoodsCategoryList',component:GoodsCategoryList,name:'GoodsCategoryList'},
								{path:'GoodsCategoryEdit',name:'GoodsCategoryEdit',	component:GoodsCategoryEdit},
								{path:'GoodsInfoAdd',component:GoodsInfoAdd},
								{path:'GoodsInfoList',component:GoodsInfoList,name:'GoodsInfoList'},
								{path:'GoodsInfoEdit',name:'GoodsInfoEdit',	component:GoodsInfoEdit},
								{path:'ShopInfoAdd',component:ShopInfoAdd},
								{path:'ShopInfoList',component:ShopInfoList,name:'ShopInfoList'},
								{path:'ShopInfoEdit',name:'ShopInfoEdit',	component:ShopInfoEdit},
								{path:'ShopTypeAdd',component:ShopTypeAdd},
								{path:'ShopTypeList',component:ShopTypeList,name:'ShopTypeList'},
								{path:'ShopTypeEdit',name:'ShopTypeEdit',	component:ShopTypeEdit},
									{path:'OrdersInfoAdd',component:OrdersInfoAdd},
								{path:'OrdersInfoList',component:OrdersInfoList,name:'OrdersInfoList'},
								{path:'OrdersInfoEdit',name:'OrdersInfoEdit',	component:OrdersInfoEdit},
								
								{path:'OrdersItemAdd',component:OrdersItemAdd},
								{path:'OrdersItemList',component:OrdersItemList,name:'OrdersItemList'},
								{path:'OrdersItemEdit',name:'OrdersItemEdit',	component:OrdersItemEdit},
								
								{path:'/',component:welcome}
			]
    }
		
  ]
})
