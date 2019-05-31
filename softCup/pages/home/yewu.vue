<template>
	<view class="content">
		<view>
			<wuc-tab :tab-list="tabList" :tabCur.sync="TabCur" textFlex='true' @change="tabChange"></wuc-tab>
			<view class="a">
				<view v-show="TabCur === 0">
					<caiji></caiji>
				</view>
				<view v-show="TabCur === 1">
					<phones></phones>
				</view>
				<view v-show="TabCur === 2">
					订阅
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	import WucTab from '@/components/wuc-tab/wuc-tab.vue';
	import caiji from "../yewu/caiji.vue"
	import phones from "../home/phones.vue"
	
	
	export default {
		components: {
			WucTab,caiji,phones
		},
		data() {
			return {
				TabCur: 0,
				tabList: [{ name: '数据采集' }, { name: '订阅' }, { name: '订阅' }],
			}
		},
		mounted() {
			
		},
		methods:{
			 tabChange(index) {
				this.TabCur = index;
			}
		}
	}
</script>

<style>