<script lang="ts" setup>
import { uniCopy } from '@/utils/uni-copy'

function copyWechat() {
  uniCopy('lyha23')
  // #ifndef MP-TOUTIAO
  uni.showToast({
    icon: 'success',
    title: '已复制客服微信号',
  })
  // #endif
}
</script>

<template>
  <footer>
    <!-- <view class="flex w-full justify-center ">
      <view class="flex font-bold mt-3 text-base text-[#1a1a1a] w-78/100   justify-evenly whitespace-nowrap">
        <view> 先用后付</view>
        <view>&bull;</view>
        <view>不满意就退款</view>
        <view>&bull;</view>
        <view> 7 &times; 24h&nbsp;支持</view>
      </view>
    </view> -->
    <view class="flex w-full justify-center">
      <view class="flex my-3 text-sm text-[#767676] w-78">
        <text class="text-sm text-center text-[#767676] hyphens-auto" style="color: #868686; font-size: 17px; line-height: 20px">
          Copyright &copy; 2022 星云设 Robot. All&nbsp;Rights&nbsp;Reserved. We&nbsp;appreciate&nbsp;you!
        </text>
      </view>
    </view>
    <!-- <view class="flex mt-1 mb-3 justify-center">
      <button @tap="copyWechat"
              class="flex flex-col clear-btn justify-center items-center">
        <image class="h-10 w-10 "
               src="@/static/icon/weixin-copy.png"></image>
        <view class="text-sm leading-normal text-gray-500">客服微信号</view>
      </button>
    </view> -->
  </footer>
</template>

<style lang="scss" scoped>
	@import '@/static/style/css?family=Source+Sans+Pro.css';

	footer {
		@apply bg-[#FFFFFF] w-full;
		color: #ffffff;
		font-size: 28rpx;
		font-family: 'Source Sans Pro', Arial, Tahoma, Geneva, sans-serif;
	}
</style>
