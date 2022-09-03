<script lang="ts" setup>
import { onLaunch, onShow, onHide } from '@dcloudio/uni-app'
import { useUserStore } from '@/store'
import { qqlogin } from '@/api/user'
// import "@/static/iconfont2/iconfont.js";
const userStore = useUserStore()

onLaunch(() => {
  console.log('App Launch')
  // if (!userStore.isLogin) {
  qqlogin().then(res => {

  })
  // }
  // console.log(userStore.UnionId)
})

onShow(() => {
  console.log('App Show')
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
  font-size: 28rpx;
  box-sizing: border-box;
  overflow-x: hidden;
  overflow-y: auto;
  padding-bottom: constant(safe-area-inset-bottom);
  padding-bottom: env(safe-area-inset-bottom);
}

/* #ifdef H5 */
// uni-page-head {
//   display: none;
// }
/* #endif */
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}

.clear-btn {
  @apply p-0 w-92;
  background: transparent;
  border: none;

  &::after {
    border: none;
  }
}

.bg-1 {
  @apply text-white;
  background-image: linear-gradient(134deg, #6D6BE3 0%, #A565E4 100%);
}

.bg-2 {
  @apply text-gray-400;
  background-image: linear-gradient(134deg, #8785e4 0%, #b983ef 100%);
}
</style>
 