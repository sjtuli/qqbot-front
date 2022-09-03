<template>
  <shmily-drag-image ref="dragImage"
                     v-model:list="list"
                     :custom="true"
                     @addImage=""
                     :imageWidth=200
                     :number="props.number" />
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
// import { savePicture, chooseImg } from "@/api/picture";
import shmilyDragImage from "@/components/shmily-drag-image.vue";
import { watch } from 'vue';

const props = defineProps({
  list: {
    type: Array,
    default: []
  },
  number: {
    type: Number,
    default: 6
  }
})

let list = ref([
  {
    "pictureLink": "https://s1-1309644651.cos.ap-shanghai.myqcloud.com/wxFile/static/pic1.webp",
  }, {
    "pictureLink": "https://s1-1309644651.cos.ap-shanghai.myqcloud.com/wxFile/static/pic1.webp",
  }, {
    "pictureLink": "https://s1-1309644651.cos.ap-shanghai.myqcloud.com/wxFile/static/pic1.webp",
  }
])

const emit = defineEmits(["update:list"]);
watch(list, (newVal, oldVal) => {
  console.log(newVal, "更新list")
  emit('update:list', newVal)
}, { immediate: true, deep: true })

let dragImage = ref(null)
let worksContent = ref([])


const orderImg = () => {
  return new Promise((resolve, reject) => {
    let data = []
    worksContent.value = []
    list.value.map((item, index) => {
      data.push({
        pictureLink: item.pictureLink,
      });
    })
    // console.log(data, "看看data怎么样")
    if (data.length > 0) {
      saveImg(data).then(res => {
        resolve(res)
      }).catch(e => {
        reject(e)
      })
    } else {
      resolve([])
    }
  })
}


defineExpose({
  list,
  worksContent
});
</script>

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
    height: 200 rpx
  }
}
</style>
