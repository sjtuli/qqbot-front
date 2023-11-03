<script setup lang="ts">
import { menu } from '@/store/menu/index'

function toPage(data: string) {
  uni.navigateTo({ url: data })
}
</script>

<template>
  <body>
    <view class="flex h-11.5 justify-center items-center">
      <image
        mode="aspectFit"
        class="h-15 w-30"
        src="@/static/image/logo.jpg "
      />
    </view>
    <uni-collapse>
      <uni-collapse-item title="样例群">
        <view class="flex content justify-center">
          <view class="w-92/100">
            <view>
              <uni-section
                title="全部 "
                type="line"
              />
              <view class="flex h-10 px-5 items-center justify-between">
                <view class="text-base">
                  机器人
                </view>
                <view class="flex w-30 items-center justify-start">
                  <fui-switch
                    :scale-ratio="0.8"
                    checked
                    disabled
                  />
                </view>
              </view>
            </view>
            <view v-for="(section, index) in menu.section" :key="index">
              <uni-section
                :title="section"
                type="line"
              />
              <view
                v-for="(item, sectionIndex) in menu.sectionItem[index]"
                :key="sectionIndex"
                class="flex h-10 px-5 items-center justify-between"
              >
                <view class="text-base">
                  {{ item }}
                </view>
                <view class="flex w-30 items-center justify-between">
                  <fui-switch
                    :scale-ratio="0.8"
                    checked
                    disabled
                  />
                  <button
                    size="mini"
                    @tap="toPage('/pages/menu/index')"
                  >
                    管理
                  </button>
                </view>
              </view>
              <view class="divider" />
            </view>
          </view>
        </view>
      </uni-collapse-item>
    </uni-collapse>
  </body>
</template>

<style lang="scss" scoped>
.divider {
  background: linear-gradient(to right, #eee, #ccc, #ccc, #eee);
  width: 630rpx;
  height: 2rpx;
}
</style>
