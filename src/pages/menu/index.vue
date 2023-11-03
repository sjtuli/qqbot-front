<script setup lang="ts">
import { reactive } from 'vue'
import { menu } from '@/store/menu/index'
import AddPicture from '@/components/addPicture.vue'

const state = reactive({
  welcome: '',
})
</script>

<template>
  <body>
    <view class="bg-white flex w-full justify-center">
      <view class="w-92/100">
        <uni-section title="帮助" type="line" />
        <text class="text-base text-gray-400">
          {{ menu.itemHelp[0][0] }}
        </text>
        <uni-section title="管理" type="line" />
        <view class="text-base text-black mb-3">
          进群欢迎：
        </view>
        <view class="border border-solid rounded border-gray-300 p-2">
          <view class="text-gray-500">
            欢迎语：
          </view>
          <input v-model="state.welcome" class="" placeholder="请输入欢迎语">
          <view class="mb-3 divider" />
          <view class="text-gray-500">
            欢迎图片：
          </view>
          <AddPicture />
        </view>
        <view class="my-3 text-base text-black">
          退群提醒：
        </view>
        <view class="border border-solid rounded border-gray-300 p-2">
          <view class="text-gray-500">
            退群文字：
          </view>
          <input
            v-model="state.welcome"
            class=""
            placeholder="请输入退群提醒"
          >
          <view class="mb-3 divider" />
          <view class="text-gray-500">
            退群图片：
          </view>
          <AddPicture />
        </view>
        <button class="my-3">
          提交
        </button>
      </view>
    </view>
  </body>
</template>

<style lang="scss" scoped>
.divider {
  background: linear-gradient(to right, #eee, #ccc, #ccc, #eee);
  width: 630rpx;
  height: 2rpx;
}
</style>
