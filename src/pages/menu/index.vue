<script setup lang="ts">
import { reactive, ref } from "vue";
import tabBar from '@/components/tab-bar.vue'
import { menu } from '@/store/menu/index'
import AddPicture from "@/components/addPicture.vue";
import Divider from "@/components/divider.vue";

const state = reactive({
  welcome: ''

})

</script>


<template>

  <body>
    <view class="bg-white flex  w-full justify-center">
      <view class="w-92/100">
        <uni-section :title="'帮助'"
                     type="line"></uni-section>
        <text class="text-base text-gray-400">
          {{ menu.itemHelp[0][0] }}
        </text>
        <uni-section :title="'管理'"
                     type="line"></uni-section>
        <view class="text-base text-black mb-3">进群欢迎：</view>
        <view class="border border-solid rounded border-gray-300 p-2">
          <view class="text-gray-500">欢迎语：</view>
          <input class=""
                 placeholder='请输入欢迎语'
                 v-model="state.welcome" />
          <view class="mb-3 divider"></view>
          <view class="text-gray-500">欢迎图片：</view>
          <AddPicture></AddPicture>
        </view>
        <view class="my-3 text-base text-black">退群提醒：</view>
        <view class="border border-solid rounded border-gray-300 p-2">
          <view class="text-gray-500">退群文字：</view>
          <input class=""
                 placeholder='请输入退群提醒'
                 v-model="state.welcome" />
          <view class="mb-3 divider"></view>
          <view class="text-gray-500">退群图片：</view>
          <AddPicture></AddPicture>
        </view>
        <button class="my-3">提交</button>
      </view>
    </view>
  </body>
</template>

<style lang="scss" scoped>

.divider {
  height: 2rpx;
  width: 630rpx;
  background: linear-gradient(to right, #eee, #ccc, #ccc, #eee);
}
</style>