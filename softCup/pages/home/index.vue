<template>
	<view class="content">
		<view>
			<!-- 顶部分段器 -->
			<uni-segmented-control :current="current" :values="items" @clickItem="onClickItem" style-type="text" active-color="#0066FF"></uni-segmented-control>
        <view class="content">
            <view v-show="current === 0">
               <energy></energy>
            </view>
            <view v-show="current === 1">
                <energy1></energy1>
            </view>
            <view v-show="current === 2">
                <report></report>
            </view>
        </view>
		</view>
		
	</view>
</template>

<script>
	import uniSegmentedControl from "@dcloudio/uni-ui/lib/uni-segmented-control/uni-segmented-control.vue"
	import energy from "../index/energy.vue"
	import energy1 from "../index/energy1.vue"
	import report from "../index/report.vue"
	export default {
		  components: {uniSegmentedControl,energy,energy1,report},
		data() {
			return {
				items: ['主页','运营','局站'],
				current: 0
			}
		},
		mounted() {
			
		},
		methods:{
			onClickItem(index) {
            if (this.current !== index) {
                this.current = index;
            }
        }
		}
	}
</script>

<style>
@import url("../../static/css/index.css");
</style>
