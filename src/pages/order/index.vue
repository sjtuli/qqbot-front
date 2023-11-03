<script setup lang="ts">
import divider from '@/components/divider.vue'

const { statusBarHeight } = uni.getSystemInfoSync()
</script>

<template>
  <body>
    <view class="flex h-11.5 justify-center items-center">
      <image mode="aspectFit" class="h-15 w-30" src="@/static/image/logo.jpg " />
    </view>
    <view class="flex justify-center items-center">
      <image mode="aspectFit" class="h-15 w-30" src="@/static/img/title.png " />
    </view>
    <view class="flex justify-center">
      <view class="order text-base w-92/100">
        Here’s what you ordered:
      </view>
    </view>
    <view class="pt-3">
      <divider />
    </view>
    <view class="flex justify-center">
      <view class="flex order w-92/100 justify-between">
        <view class="flex mt-3 w-1/2 items-center justify-center">
          商品
        </view>
        <view class="flex mt-3 w-1/2 items-center justify-center">
          期限
        </view>
      </view>
    </view>
    <view class="pt-3">
      <divider />
    </view>
    <view class="flex justify-center">
      <view class="flex order w-92/100 justify-between">
        <view class="flex mt-3 w-1/2 items-center">
          <image mode="aspectFill" class="h-20 w-20" src="https://s1-1309644651.cos.ap-shanghai.myqcloud.com/wxFile/static/pic1.webp" />
          <view class="pl-2">
            神里绫华第四代机器人
          </view>
        </view>
        <view class="flex w-1/2 justify-center items-center">
          2022年9月10日
        </view>
      </view>
    </view>
    <view class="pt-3">
      <divider />
    </view>
  </body>
</template>

<style lang="scss">
  @import '@/static/style/css?family=Source+Sans+Pro.css';

  page,
  body {
    @apply bg-[#FFFFFF] w-full;
    background: white;
    font-size: 28rpx;
    font-family: 'Source Sans Pro', Arial, Tahoma, Geneva, sans-serif;
  }

  .order {
    color: #000000;
    font-family: 'Source Sans Pro', Arial, Tahoma, Geneva, sans-serif;
  }

  .card-1 {
    /* 兜底，IE和Firefox浏览器 */
    --transparent: url(data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==);
    filter: Alpha(Opacity=50);
    /* Safari最近版本已经不需要私有前缀了 */
    background: cross-fade(var(--transparent), url('https://s1-1309644651.cos.ap-shanghai.myqcloud.com/wxFile/static/pic1.webp'), 50%) no-repeat top center;
    /* 如使用自定义属性，-webkit-语句需要放在没有私有前缀语句的下面 */
    background: -webkit-cross-fade(var(--transparent), url('https://s1-1309644651.cos.ap-shanghai.myqcloud.com/wxFile/static/wanye.webp'), 50%) no-repeat top center;
    background-size: 100% auto;
  }
</style>
