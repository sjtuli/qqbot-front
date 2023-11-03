<template>
  <view class="flex justify-center">
    <view class="divider" />
    <view class="divider" />
  </view>
</template>

<style lang="scss" scoped>
	.divider {
		width: 370rpx;
		height: 2rpx;

		&:first-of-type {
			border-radius: 3rpx;
			background: linear-gradient(90deg, rgba(98, 98, 98, 0) 0%, #333333 100%);
		}

		&:last-of-type {
			border-radius: 3rpx;
			background: linear-gradient(90deg, #333333 0%, rgba(98, 98, 98, 0) 100%);
		}
	}
</style>
