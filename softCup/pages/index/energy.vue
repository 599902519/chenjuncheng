<template >
	<view class="content">
		<view class="ri">
			{{cdata}}
		</view>
		<view class="z">
			<view class="left">
			<view>426.10</view>
			</view>
			
			<view class="reght">
			<view>总</view>
			<view>KWh</view>
			</view>
		</view>
		
		<view class="tu">
			<view class="water">
				<view><image src="../../static/imgs/water.png"></image></view>
				<view>418.76</view>
				<view>生产/KWh</view>
			</view>
			<view class="oil">
				<view><image src="../../static/imgs/oil.png"></image></view>
				<view>7.34</view>
				<view>生产/KWh</view>
			</view>
			<view class="ele">
				<view><image src="../../static/imgs/ele.png"></image></view>
				<view>411.43</view>
				<view>生产/L</view>
			</view>
		</view>
		
		<view class="b">
			<button class="day" :style={background:b1}  @click="fn('day')">日</button>
			<button class="m" :style={background:b2}  @click="fn('m')">月</button>
		</view>
		<view>
			<chart01></chart01>
		</view>
	</view>
</template>

<script>
	import chart01 from "../charts/chart01.vue"
	export default {
		components: {chart01},
	
		data() {
			return {
				cdata:'',
				b1:'#0000FF',
				b2:'#888888'
			}
		},
		// 与页面加载执行同级
			  
	
		mounted() {
			this.ri()
			
		},
		methods: {
				fn(type){
					if(type=='day'){
						this.b2='#888888';
						this.b1='#0000FF';
						this.ri();
					}else if(type=='m'){
						
						this.b2='#0000FF'
						this.b1='#888888'
						this.riqi()
					}
				},
				riqi(){
					var d = new Date
					var yue=d.getMonth()+1
					var ri=d.getUTCDate()
					this.cdata=yue+"月"+ri+"日"
					
				},
				ri(){
					var d = new Date
				
					var ri=d.getUTCDate()
					this.cdata=ri+"日"
					
				}
		},
		
	}
</script>

<style >

</style>
