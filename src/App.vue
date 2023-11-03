<script lang="ts" setup>
import { onHide, onLaunch } from '@dcloudio/uni-app'
import { useUserStore } from '@/store'
import { qqlogin } from '@/api/user'

// import "@/static/iconfont2/iconfont.js";
const userStore = useUserStore()

onLaunch(() => {
  console.log('App Launch')
  // if (!userStore.isLogin) {
  qqlogin().then((res) => { })
})

onHide(() => {
  console.log('App Hide')
})
</script>

<style lang="scss">
@import '@/static/iconfont2/iconfont.css';

/*每个页面公共css */
page,
body {
  @apply bg-[#FFFFFF] w-full;
  box-sizing: border-box;
  padding-bottom: env(safe-area-inset-bottom);
  overflow-x: hidden;
  overflow-y: auto;
  font-size: 28rpx;
}

/* #ifdef H5 */
uni-page-head {
  display: none;
}

/* #endif */

.icon {
  vertical-align: -0.15em;
  width: 1em;
  height: 1em;
  fill: currentColor;
  overflow: hidden;
}

.clear-btn {
  @apply p-0 w-92;
  border: none;
  background: transparent;

  &::after {
    border: none;
  }
}

.bg-1 {
  @apply text-white;
  background-image: linear-gradient(134deg, #6d6be3 0%, #a565e4 100%);
}

.bg-2 {
  @apply text-gray-400;
  background-image: linear-gradient(134deg, #8785e4 0%, #b983ef 100%);
}
</style>
