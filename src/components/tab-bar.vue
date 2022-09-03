

<script lang="ts" setup>
import { ref, reactive, watch, onBeforeMount, onMounted, nextTick } from 'vue';

const props = defineProps(['pagePath'])
const state = reactive({
  active: 0,
})
const menuList = [
  { icon: 'icon-tab_icon_home_nor', label: '首页', url: '/pages/index/index' },
  { icon: 'icon-tab_icon_library_nor', label: '商店', url: '/pages/collection/index' },
  { icon: 'icon-tab_icon_mine_nor', label: '我的', url: '/pages/user/index' },
]

const route = (item, i) => {
  uni.switchTab({
    url: item.url
  })
  // changeRoute()
  // if (type === 'collection') {
  //     nowRoute.value = 'collection'
  //     emits('changeRoute', 'collection')
  // } else if (type === 'index') {
  //     nowRoute.value = 'index'
  //     emits('changeRoute', 'index')
  // } else {
  //     nowRoute.value = 'user'
  //     emits('changeRoute', 'user')
  // }
}
const changeRoute = () => {
  nextTick(() => {
    let routes = getCurrentPages(); // 获取当前打开过的页面路由数组
    let curRoute = routes[routes.length - 1].route // 获取当前页面路由，也就是最后一个打开的页面路由
    console.log(curRoute)
    for (let i = 0; i < menuList.length; i++) {
      if (curRoute === menuList[i].url) {
        state.active = i
        break
      }
    }
  })
}
// onBeforeMount(() => {
//   uni.hideTabBar({
//     animation: false
//   })
// })
onMounted(() => {
})
</script>

<template>
  <view class="h-30">
    <view class="bg-white flex rounded-t-2xl w-full bottom-0 content fixed">
      <button class="flex flex-col text-gray-300 w-1/3 clear-btn justify-evenly items-center"
              v-for="(item, i) of menuList"
              :key="i">
        <view class="flex  items-center justify-center ">
          <text class="text-2xl iconfont"
                :class="[item.icon, { 'selected': props.pagePath === item.url }]"></text>
        </view>
        <view class="text-base leading-normal"
              :class="{ 'text-purple-600': props.pagePath === item.url }">{{ item.label }}</view>
      </button>
    </view>
  </view>
</template>

<style lang="scss" scoped>
.content {
  padding-bottom: constant(safe-area-inset-bottom);
  padding-bottom: env(safe-area-inset-bottom);
}

.selected {
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-image: linear-gradient(0deg, #A6E4FF 0%, #F096FF 100%);
}
</style>
