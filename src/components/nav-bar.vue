<script lang="ts" setup>
const { statusBarHeight } = uni.getSystemInfoSync()
</script>

<template>
  <view :style="{ height: `${statusBarHeight}px` }" />
  <view class="flex pl-3 justify-start">
    <view class="flex p-1 items-center">
      <image class="rounded-1/2 h-10 w-10" mode="scaleToFill" src="@/static/image/logo-vertical.jpeg" />
      <view class="text-xl text-black pl-3">
        星云设 Robot
      </view>
    </view>
  </view>
</template>
