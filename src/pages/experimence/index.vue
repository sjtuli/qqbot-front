<script setup lang="ts">
import { reactive } from 'vue'
import { uniCopy } from '@/utils/uni-copy'

const state = reactive({
  groupNum: 244566462,
  groupQR: 'https://s1-1309644651.cos.ap-shanghai.myqcloud.com/wxFile/static/IMG_3107.JPG',
})

function copyGroupNum() {
  uniCopy(state.groupNum)
  uni.showToast({
    icon: 'success',
    title: '已复制群号',
  })
}
</script>

<template>
  <body>
    <view class="flex  justify-center">
      <view class=" mt-3 w-92/100 ">
        <view class="text-base">
          体验群群号:
        </view>
        <button
          class="mt-3 text-xl text-blue-500 w-50"
          @tap="copyGroupNum"
        >
          <text>QQ:{{ state.groupNum }}</text>
        </button>
      </view>
    </view>
    <view class="flex  mt-3  justify-center">
      <view class="flex order w-92/100 justify-between">
        <image
          mode="aspectFit"
          :src="state.groupQR"
        />
      </view>
    </view>
  </body>
</template>

<style lang="scss"></style>
