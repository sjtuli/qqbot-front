
<script setup lang="ts">
import { reactive, ref } from "vue";
import tabBar from '@/components/tab-bar.vue'
import { menu } from '@/store/menu/index'
import AddPicture from "@/components/addPicture.vue";
import Divider from "@/components/divider.vue";

function toPage(data: string) {
  uni.navigateTo({ url: data })
}

</script>
<template>

  <body>
    <view class="flex h-11.5 justify-center items-center">
      <image mode="aspectFit"
             class="h-15 w-30"
             src="@/static/image/logo.jpg " />
    </view>
    <uni-collapse>
      <uni-collapse-item title="样例群">
        <view class="flex content justify-center">
          <view class="w-92/100">
            <view>
              <uni-section title="全部 "
                           type="line"></uni-section>
              <view class="flex h-10 px-5 items-center justify-between">
                <view class="text-base">机器人</view>
                <view class="flex w-30 items-center justify-start">
                  <fui-switch :scaleRatio="0.8"
                              checked
                              disabled></fui-switch>
                </view>
              </view>
            </view>
            <view v-for="(section, index) in menu.section">
              <uni-section :title="section"
                           type="line"></uni-section>
              <view v-for="(item, sectionIndex) in menu.sectionItem[index]"
                    class="flex h-10 px-5 items-center justify-between">
                <view class="text-base">{{ item }}</view>
                <view class="flex w-30 items-center justify-between">
                  <fui-switch :scaleRatio="0.8"
                              checked
                              disabled></fui-switch>
                  <button @tap="toPage('/pages/menu/index')"
                          size="mini">管理</button>
                </view>
              </view>
              <view class="divider"></view>
            </view>
          </view>
        </view>
      </uni-collapse-item>
    </uni-collapse>
  </body>
</template>


<style lang="scss" scoped>
.divider {
  height: 2rpx;
  width: 630rpx;
  background: linear-gradient(to right, #eee, #ccc, #ccc, #eee);
}
</style>
