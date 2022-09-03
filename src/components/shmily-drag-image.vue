<template>
  <view class="con">
    <movable-area class="area"
                  :style="{ height: areaHeight }"
                  @mouseenter="mouseenter"
                  @mouseleave="mouseleave">
      <block v-for="(item, index) in imageList"
             :key="item.id">
        <movable-view class="view"
                      :x="item.x"
                      :y="item.y"
                      direction="all"
                      :damping="40"
                      :disabled="item.disable"
                      @change="onChange($event, item)"
                      @touchstart="touchstart(item)"
                      @mousedown="touchstart(item)"
                      @touchend="touchend(item)"
                      @mouseup="touchend(item)"
                      :style="{
                        width: viewWidth + 'px',
                        height: viewWidth + 'px',
                        'z-index': item.zIndex,
                        opacity: item.opacity,
                      }">
          <view class="area-con"
                :style="{
                  width: childWidth,
                  height: childWidth,
                  transform: 'scale(' + item.scale + ')',
                }">
            <image class="pre-image"
                   :src="item.src"
                   mode="aspectFill"></image>
            <view class="del-con"
                  @click="delImage(item, index)"
                  @touchstart.stop="delImageMp(item, index)"
                  @touchend.stop="nothing()"
                  @mousedown.stop="nothing()"
                  @mouseup.stop="nothing()">
              <view class="del-wrap">
                <image class="del-image"
                       src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAhCAYAAABX5MJvAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAhdEVYdENyZWF0aW9uIFRpbWUAMjAyMDowNzoyNSAyMTo1NDoyOU4TkJAAAADcSURBVFhH7ZfRCoMwDEXLvkjwwVf/bH/emmAyN6glTW9WBjsgwm28OeCLpj81Sil7zvlJ90UiONS/yY5VogsO6XrBg3IEQ5a/s8vRSWUAKmLqp2w5jz5BiNQEGMo3GbloDLtFXJ1IkaEuhAiiY6gEIqB4yqACSk9piIBiKQ8VUFpLviKg3C2rESKgWERCBZSWiEfgIfffYvrrsAgoISJ3Apy3zuTxcSxLQkV6ykNEPKVQkZEyiAiiZKgDIaC4upACSlcn5fM/+WuDCAHF1E/Z/N9AhkMZnPNDPI+UDjPIXgAQIGjNAAAAAElFTkSuQmCC">
                </image>
              </view>
            </view>
          </view>
        </movable-view>
      </block>
      <view class="add"
            v-if="imageList.length < number"
            :style="{
              top: add.y,
              left: add.x,
              width: viewWidth + 'px',
              height: viewWidth + 'px',
            }"
            @click="addImages">
        <view class="add-wrap"
              :style="{ width: childWidth, height: childWidth }">
          <image style="width: 54rpx; height: 54rpx"
                 src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAA2CAYAAACMRWrdAAABIUlEQVRoQ+2a2w2DMAxFeQzWrsMUbadAsEw3S1CqVgppKwLX8BEOP4iHTXx8uUgWdVXoVhdaV0VhSmf7vr/H8V3XzY6V3P9iD+nYOI5P7/01LMI596AwoZV0TIBXIUWFXhKLFBWYSFGhhxQN6SFFQ5i4ogITKSr0cEVDekjRECauqMBEigq9U7piOk2yAti27SUe5ljlTfPEQ6KZecTvwl4P3ytvOv06R2HDMNzes7+6aRrvnHvtf50L13Lp50rx88zcvNlS3JpwKQ67XyK04nq2nFbk/LqVjin0TvmBNgQ2S4UUDcliHgpMpKjQwxUN6SFFQ5i4ogITKSr0cEVDekjRECauqMAsVoph+hVPtYr5+03p9tbYQ96xrYtT4ootbAJGVxxVTapVswAAAABJRU5ErkJggg==">
          </image>
        </view>
      </view>
    </movable-area>
  </view>
</template>

<script setup lang="ts">
import { ref, onMounted, getCurrentInstance, computed, nextTick, watch } from "vue";

let imageList = ref([]);
let width = ref(0);
let add = ref({
  x: 0,
  y: 0,
});
let colsValue = ref(0);
let viewWidth = ref(0);
let tempItem = ref(null);
let timer = ref(null);
let changeStatus = ref(true);
let preStatus = ref(true);

const props = defineProps({
  // 返回排序后图片
  list: {
    type: Array,
    default: function () {
      return [];
    },
  },
  // 选择图片数量限制
  number: {
    type: Number,
    default: 6,
  },
  // 图片父容器宽度（实际显示的图片宽度为 imageWidth / 1.1 ），单位 rpx
  imageWidth: {
    type: Number,
    default: 230,
  },
  // 图片列数（cols > 0 则 imageWidth 无效）
  cols: {
    type: Number,
    default: 0,
  },
  // 图片周围空白填充，单位 rpx
  padding: {
    type: Number,
    default: 10,
  },
  // 拖动图片时放大倍数 [0, ∞)
  scale: {
    type: Number,
    default: 1.1,
  },
  // 拖动图片时不透明度
  opacity: {
    type: Number,
    default: 0.7,
  },
  // 自定义添加（需配合 @addImage 事件使用）
  custom: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["addImage", "update:list", "getImageList"]);

// watch(props.list, (newValue, oldValue) => {
//   console.log(newValue, "sadfasdfasd")
//   imageList.value = []
//   for (let item of newValue) {
//     addProperties(item);
//   }
// }, { immediate: true, deep: true })

onMounted(() => {
  const instance = getCurrentInstance();
  width.value = uni.getSystemInfoSync().windowWidth;
  viewWidth.value = rpx2px(props.imageWidth);
  const query = uni.createSelectorQuery().in(instance);
  query.select(".area").boundingClientRect((data) => {
    colsValue.value = Math.floor(data.width / viewWidth.value);
    if (props.cols > 0) {
      colsValue.value = props.cols;
      viewWidth.value = data.width / props.cols;
    }
    for (let item of props.list) {
      addProperties(item);
    }
  });
  query.exec();
});

const getImageList = () => {
  return imageList.value;
};

const areaHeight = computed(() => {
  if (imageList.value.length < props.number) {
    return (
      Math.ceil((imageList.value.length + 1) / colsValue.value) *
      viewWidth.value +
      "px"
    );
  } else {
    return (
      Math.ceil(imageList.value.length / colsValue.value) * viewWidth.value +
      "px"
    );
  }
});

const childWidth = computed(() => {
  return viewWidth.value - rpx2px(props.padding) * 2 + "px";
});

// methods
const onChange = (e: { detail: { x: number; y: number; source: string; }; }, item: { oldX: number; oldY: number; moveEnd: any; offset: number; absX: number; absY: number; index: number; id: any; }) => {
  if (!item) return;
  item.oldX = e.detail.x;
  item.oldY = e.detail.y;
  if (e.detail.source === "touch") {
    if (item.moveEnd) {
      item.offset = Math.sqrt(
        Math.pow(item.oldX - item.absX * viewWidth.value, 2) +
        Math.pow(item.oldY - item.absY * viewWidth.value, 2)
      );
    }
    let x = Math.floor((e.detail.x + viewWidth.value / 2) / viewWidth.value);
    if (x >= colsValue.value) return;
    let y = Math.floor((e.detail.y + viewWidth.value / 2) / viewWidth.value);
    let index = colsValue.value * y + x;
    if (item.index != index && index < imageList.value.length) {
      changeStatus.value = false;
      for (let obj of imageList.value) {
        if (
          item.index > index &&
          obj.index >= index &&
          obj.index < item.index
        ) {
          change(obj, 1);
        } else if (
          item.index < index &&
          obj.index <= index &&
          obj.index > item.index
        ) {
          change(obj, -1);
        } else if (obj.id != item.id) {
          obj.offset = 0;
          obj.x = obj.oldX;
          obj.y = obj.oldY;
          setTimeout(() => {
            nextTick(() => {
              obj.x = obj.absX * viewWidth.value;
              obj.y = obj.absY * viewWidth.value;
            });
          }, 0);
        }
      }
      item.index = index;
      item.absX = x;
      item.absY = y;
      sortList();
    }
  }
};

const change = (obj: any, i: number) => {
  obj.index += i;
  obj.offset = 0;
  obj.x = obj.oldX;
  obj.y = obj.oldY;
  obj.absX = obj.index % colsValue.value;
  obj.absY = Math.floor(obj.index / colsValue.value);
  setTimeout(() => {
    nextTick(() => {
      obj.x = obj.absX * viewWidth.value;
      obj.y = obj.absY * viewWidth.value;
    });
  }, 0);
};

const touchstart = (item: { zIndex: number; moveEnd: boolean; scale: number; opacity: number; } | null) => {
  imageList.value.forEach((v) => {
    v.zIndex = v.index + 9;
  });
  item.zIndex = 99;
  item.moveEnd = true;
  tempItem.value = item;
  timer.value = setTimeout(() => {
    item.scale = props.scale;
    item.opacity = props.opacity;
    clearTimeout(timer.value);
    timer.value = null;
  }, 200);
};
const touchend = (item: { scale: number; opacity: number; x: number; oldX: any; y: number; oldY: any; offset: number; moveEnd: boolean; absX: number; absY: number; }) => {
  previewImage(item);
  item.scale = 1;
  item.opacity = 1;
  item.x = item.oldX;
  item.y = item.oldY;
  item.offset = 0;
  item.moveEnd = false;
  setTimeout(() => {
    nextTick(() => {
      item.x = item.absX * viewWidth.value;
      item.y = item.absY * viewWidth.value;
      tempItem.value = null;
      changeStatus.value = true;
    });
  }, 0);
};


const previewImage = (item: { offset: number; src: any; }) => {
  console.log(item)
  if (
    timer.value &&
    preStatus.value &&
    changeStatus.value &&
    item.offset < 28.28
  ) {
    clearTimeout(timer.value);
    timer.value = null;
    // let src = props.list.findIndex((v) => v === item.src);
    let src = item.src

    let urls = []
    for (let picItem of props.list) {
      urls.push(picItem.pictureLink)
    }

    uni.previewImage({
      urls: urls,
      current: src,
      success: () => {
        preStatus.value = false;
        setTimeout(() => {
          preStatus.value = true;
        }, 600);
      },
    });
  } else if (timer.value) {
    clearTimeout(timer.value);
    timer.value = null;
  }
};

const mouseenter = () => {
  //#ifdef H5
  imageList.value.forEach((v) => {
    v.disable = false;
  });
  //#endif
};

const mouseleave = () => {
  //#ifdef H5
  if (tempItem.value) {
    imageList.value.forEach((v) => {
      v.disable = true;
      v.zIndex = v.index + 9;
      v.offset = 0;
      v.moveEnd = false;
      if (v.id == tempItem.value.id) {
        if (timer.value) {
          clearTimeout(timer.value);
          timer.value = null;
        }
        v.scale = 1;
        v.opacity = 1;
        v.x = v.oldX;
        v.y = v.oldY;
        nextTick(() => {
          v.x = v.absX * viewWidth.value;
          v.y = v.absY * viewWidth.value;
          tempItem.value = null;
        });
      }
    });
    changeStatus.value = true;
  }
  //#endif
};

const addImages = () => {
  if (props.custom) {
    emit("addImage");
  } else {
    let checkNumber = props.number - imageList.value.length;
    uni.chooseImage({
      count: checkNumber,
      sourceType: ["album", "camera"],
      success: (res) => {
        let count =
          checkNumber <= res.tempFilePaths.length
            ? checkNumber
            : res.tempFilePaths.length;
        for (let i = 0; i < count; i++) {
          addProperties(res.tempFilePaths[i]);
        }
      },
    });
  }
};

const addImage = (image: any) => {
  addProperties(image);
};

const delImage = (item: { index: number; }, index: number) => {
  imageList.value.splice(index, 1);
  for (let obj of imageList.value) {
    if (obj.index > item.index) {
      obj.index -= 1;
      obj.x = obj.oldX;
      obj.y = obj.oldY;
      obj.absX = obj.index % colsValue.value;
      obj.absY = Math.floor(obj.index / colsValue.value);
      nextTick(() => {
        obj.x = obj.absX * viewWidth.value;
        obj.y = obj.absY * viewWidth.value;
      });
    }
  }
  add.value.x =
    (imageList.value.length % colsValue.value) * viewWidth.value + "px";
  add.value.y =
    Math.floor(imageList.value.length / colsValue.value) * viewWidth.value +
    "px";
  sortList();
};

const delImageMp = (item: any, index: any) => {
  //#ifdef MP
  delImage(item, index);
  //#endif
};

const sortList = () => {
  let list = imageList.value.slice();
  list.sort((a, b) => {
    return a.index - b.index;
  });
  for (let i = 0; i < list.length; i++) {
    list[i].pictureLink = list[i].src;
    list[i].id = list[i].picId
  }
  emit("update:list", list);
};

const addProperties = (item: unknown) => {
  let absX = imageList.value.length % colsValue.value;
  let absY = Math.floor(imageList.value.length / colsValue.value);
  let x = absX * viewWidth.value;
  let y = absY * viewWidth.value;
  imageList.value.push({
    src: item.pictureLink,
    picId: item.id,
    x,
    y,
    oldX: x,
    oldY: y,
    absX,
    absY,
    scale: 1,
    zIndex: 9,
    opacity: 1,
    index: imageList.value.length,
    id: guid(),
    disable: false,
    offset: 0,
    moveEnd: false,
  });
  // console.log(imageList.value.length, colsValue.value, viewWidth.value);
  add.value.x =
    (imageList.value.length % colsValue.value) * viewWidth.value + "px";
  add.value.y =
    Math.floor(imageList.value.length / colsValue.value) * viewWidth.value +
    "px";
  sortList();
};

const nothing = () => { };

const rpx2px = (v: number) => {
  return (width.value * v) / 750;
};
const guid = () => {
  function S4() {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  }
  return (
    S4() +
    S4() +
    "-" +
    S4() +
    "-" +
    S4() +
    "-" +
    S4() +
    "-" +
    S4() +
    S4() +
    S4()
  );
};

defineExpose({
  addImage,
});
</script>

<style lang="scss" scoped>
.con {
  padding: 0rpx;
  height: auto;

  .area {
    width: 100%;

    .view {
      display: flex;
      justify-content: center;
      align-items: center;

      .area-con {
        position: relative;

        .pre-image {
          width: 100%;
          height: 100%;
        }

        .del-con {
          position: absolute;
          top: 0rpx;
          right: 0rpx;
          padding: 0 0 20rpx 20rpx;

          .del-wrap {
            width: 36rpx;
            height: 36rpx;
            background-color: rgba(0, 0, 0, 0.4);
            border-radius: 0 0 0 10rpx;
            display: flex;
            justify-content: center;
            align-items: center;

            .del-image {
              width: 20rpx;
              height: 20rpx;
            }
          }
        }
      }
    }

    .add {
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;

      .add-wrap {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #eeeeee;
      }
    }
  }
}
</style>
