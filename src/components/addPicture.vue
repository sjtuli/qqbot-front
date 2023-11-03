<script setup lang="ts">
import { ref, watch } from 'vue'

// import { savePicture, chooseImg } from "@/api/picture";
import shmilyDragImage from '@/components/shmily-drag-image.vue'

const props = defineProps({
  list: {
    type: Array,
    default: [],
  },
  number: {
    type: Number,
    default: 6,
  },
})

const emit = defineEmits(['update:list'])

const list = ref([
  {
    pictureLink: 'https://s1-1309644651.cos.ap-shanghai.myqcloud.com/wxFile/static/pic1.webp',
  },
  {
    pictureLink: 'https://s1-1309644651.cos.ap-shanghai.myqcloud.com/wxFile/static/pic1.webp',
  },
  {
    pictureLink: 'https://s1-1309644651.cos.ap-shanghai.myqcloud.com/wxFile/static/pic1.webp',
  },
])

watch(
  list,
  (newVal, oldVal) => {
    console.log(newVal, '更新list')
    emit('update:list', newVal)
  },
  { immediate: true, deep: true },
)

const dragImage = ref(null)
const worksContent = ref([])

function orderImg() {
  return new Promise((resolve, reject) => {
    const data = []
    worksContent.value = []
    list.value.map((item, index) => {
      data.push({
        pictureLink: item.pictureLink,
      })
    })
    // console.log(data, "看看data怎么样")
    if (data.length > 0) {
      saveImg(data)
        .then((res) => {
          resolve(res)
        })
        .catch((error) => {
          reject(error)
        })
    }
    else {
      resolve([])
    }
  })
}

defineExpose({
  list,
  worksContent,
})
</script>

<template>
  <shmily-drag-image ref="dragImage" v-model:list="list" :custom="true" :image-width="200" :number="props.number" @addImage="" />
</template>

<style lang="scss" scoped>
	.add {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 400 rpx;

		.add-wrap {
			display: flex;
			justify-content: center;
			align-items: center;
			background-color: #eeeeee;
			width: 200 rpx;
			height: 200 rpx;
		}
	}
</style>
