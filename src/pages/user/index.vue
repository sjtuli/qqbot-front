
<script setup lang="ts">
import { reactive } from "vue";
import tabBar from '@/components/tab-bar.vue'
import Footer from '@/components/footer.vue'
let { statusBarHeight } = uni.getSystemInfoSync()




</script>
<template>
  <!-- #ifndef MP-TOUTIAO-->
  <view :style="{ height: statusBarHeight + 'px' }"></view>
  <!-- #endif -->
  <view class="h-200 w-full z-[-1] fixed card-1">
    <view class="flex mt-30 items-center">
      <view class="flex w-25 justify-end">
        <image class="rounded-1/2 h-12 w-12"
               src="@/static/image/logo-vertical.jpeg"></image>
      </view>
      <view class="flex font-medium text-black pl-3 text-2xl w-25">nickname</view>
    </view>
    <view class="bg-light-50 mt-10">
      <view class="flex  justify-center">
        <view class="mt-2 w-88/100"> 个人中心 <view class="flex mt-2">
            <view class="flex flex-col w-1/2 items-center justify-center">
              <navigator url="/pages/order/index"
                         open-type="navigate">
                <view class="flex mt-3 justify-center">
                  <image class="h-10 w-10 "
                         src="@/static/img/订单.png"></image>
                </view>
                <view class="pt-2">我的授权</view>
              </navigator>
            </view>
            <view class="flex flex-col w-1/2 items-center justify-center">
              <navigator url="/pages/groupManage/index"
                         open-type="navigate">
                <view class="flex mt-3 justify-center">
                  <image class="h-10 w-10 "
                         src="@/static/img/表格-设置.png"></image>
                </view>
                <view class="pt-2">我的群聊</view>
              </navigator>
            </view>
          </view>
        </view>
      </view>
      <view class="bg-light-50 mt-10">
        <Footer class="mt-30" />
      </view>
    </view>
  </view>
</template>
<style lang= "scss">
@import '@/static/style/css?family=Source+Sans+Pro.css';

page,
body {
  @apply bg-[#FFFFFF] w-full;
  font-size: 28rpx;
  font-family: 'Source Sans Pro',
    Arial,
    Tahoma,
    Geneva,
    sans-serif;
  background: white;
}

.card-1 {
  /* 兜底，IE和Firefox浏览器 */
  --transparent: url(data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==);
  /* Safari最近版本已经不需要私有前缀了 */
  background: cross-fade(var(--transparent), url('https://s1-1309644651.cos.ap-shanghai.myqcloud.com/wxFile/static/pic1.webp'), 50%) no-repeat top center;
  /* 如使用自定义属性，-webkit-语句需要放在没有私有前缀语句的下面 */
  background: -webkit-cross-fade(var(--transparent), url('https://s1-1309644651.cos.ap-shanghai.myqcloud.com/wxFile/static/wanye.webp'), 50%) no-repeat top center;
  background-size: 100% auto;
  filter: Alpha(Opacity=50);
}
</style>
