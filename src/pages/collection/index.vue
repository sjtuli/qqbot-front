<script setup lang="ts">
import Footer from '@/components/footer.vue'

const { statusBarHeight } = uni.getSystemInfoSync()

function toPage(data: string) {
  uni.navigateTo({
    url: data,
  })
}
</script>

<template>
  <!-- #ifndef MP-TOUTIAO -->
  <view :style="{ height: `${statusBarHeight}px` }" />
  <!-- #endif -->

  <body>
    <view class="flex h-11.5 justify-center items-center">
      <image
        mode="aspectFit"
        class="h-15 w-30"
        src="@/static/image/logo.jpg "
      />
    </view>
    <view
      class="flex pt-2 text-[#1a1a1a] text-2xl justify-center "
      style="  font-weight: 300; letter-spacing: -1.5px;"
    >
      群聊管理
    </view>
    <view
      class="flex text-xl text-[#5e5e5e] justify-center"
      style="  font-weight: 300; letter-spacing: -1px;"
    >
      您现在共授权0个群
    </view>
    <view class="flex pt-2 justify-center">
      <view class="pt-3 w-92/100 card-1">
        <view class="flex p-2 items-center">
          <image
            class="rounded-1/2 h-12 w-12"
            src="@/static/img/icon_1.png"
          />
          <view
            class="pl-3"
            style="display: inline-block; vertical-align: top; width: 72%; min-width: 255px;"
          >
            <view class="text-white text-xl">
              样例
            </view>
            <view class="text-white text-base">
              1,080 群成员
            </view>
          </view>
        </view>
        <button
          class="flex rounded-2xl h-8 text-black text-base w-30 items-center justify-center"
          @tap="toPage('/pages/groupManage/index')"
        >
          管理
        </button>
        <view class="flex pt-2 pr-5 justify-end">
          样例仅展示用
        </view>
      </view>
    </view>
    <view class="flex  mt-3 justify-center">
      <view class="rounded-xl bg-[#27cbcc] w-92/100">
        <view class="p-2">
          <navigator
            url="/pages/"
            open-type="navigate"
          >
            <text class="flex text-2xl justify-center">
              获取授权
            </text>
          </navigator>
        </view>
      </view>
    </view>
    <view class="flex  mt-3 justify-center">
      <view class="w-92/100">
        <text style=" color: #767676; font-size: 17px; line-height: 23px;" />
      </view>
    </view>
    <Footer />
  </body>
</template>

<style lang="scss" scoped>
@import '@/static/style/css?family=Source+Sans+Pro.css';

page,
body {
  @apply bg-[#FFFFFF] w-full;
  font-size: 28rpx;
  color: #ffffff;
  font-family: 'Source Sans Pro',
    Arial,
    Tahoma,
    Geneva,
    sans-serif;
}
.card-1 {
  /* 兜底，IE和Firefox浏览器 */
  --transparent: url(data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==);
  /* Safari最近版本已经不需要私有前缀了 */
  background: cross-fade(var(--transparent), url('@/static/img/bg_1.jpg'), 70%) no-repeat top center;
  /* 如使用自定义属性，-webkit-语句需要放在没有私有前缀语句的下面 */
  background: -webkit-cross-fade(var(--transparent), url('@/static/img/bg_1.jpg'), 70%) no-repeat top center;
  background-size: 100% auto;
  filter: Alpha(Opacity=50);
}
</style>
