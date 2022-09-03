<!--本文件由FirstUI授权予上海交在科技有限公司（手机号： 15    9 0073   36 04，身份证尾号：E8J88D）专用，请尊重知识产权，勿私下传播，违者追究法律责任。-->
<template>
	<!-- #ifdef APP-NVUE -->
	<view v-if="isShow" ref="fui_bd_ani" class="fui-backdrop__wrap"
		:style="{background:background,position:absolute?'absolute':'fixed',zIndex:zIndex}" @tap="handleClick">
		<slot></slot>
	</view>
	<!-- #endif -->
	<!-- #ifndef APP-NVUE -->
	<view class="fui-backdrop__wrap" :class="{'fui-backdrop__bg':!background,'fui-backdrop__show':show}"
		:style="{background:background,position:absolute?'absolute':'fixed',zIndex:zIndex}" @tap="handleClick">
		<slot></slot>
	</view>
	<!-- #endif -->
</template>

<script>
	// #ifdef APP-NVUE
	const animation = uni.requireNativePlugin('animation');
	// #endif
	export default {
		name: "fui-backdrop",
		emits: ['click'],
		props: {
			show: {
				type: Boolean,
				default: false
			},
			background: {
				type: String,
				// #ifdef APP-NVUE
				default: 'rgba(0, 0, 0, 0.6)',
				// #endif

				// #ifndef APP-NVUE
				default: ''
				// #endif
			},
			//是否绝对定位，默认固定定位fixed
			absolute: {
				type: Boolean,
				default: false
			},
			zIndex: {
				type: Number,
				default: 999
			},
			closable: {
				type: Boolean,
				default: false
			}
		},
		// #ifdef APP-NVUE
		watch: {
			show(val) {
				if (val) {
					this.openAni()
				} else {
					this.closeAni()
				}
			}
		},
		// #endif
		data() {
			return {
				// #ifdef APP-NVUE
				isShow: false
				// #endif
			}
		},
		methods: {
			// #ifdef APP-NVUE
			openAni() {
				this.isShow = true;
				this.$nextTick(() => {
					setTimeout(() => {
						this._ani(true);
					}, 50);
				});
			},
			closeAni(type) {
				this._ani(false);
			},
			_ani(type) {
				let styles = {
					opacity: type ? 1 : 0
				};
				if (!this.$refs['fui_bd_ani']) return;
				animation.transition(
					this.$refs['fui_bd_ani'].ref, {
						styles,
						duration: 200, //ms
						timingFunction: 'ease-in',
						needLayout: false,
						delay: 0 //ms
					},
					() => {
						if (!type) {
							this.isShow = false;
						}
					}
				);
			},
			// #endif
			handleClick() {
				if (this.closable && this.show) {
					this.$emit('click')
				}
			}
		}
	}
</script>

<style scoped>
	.fui-backdrop__wrap {
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		/* #ifndef APP-NVUE */
		display: flex;
		visibility: hidden;
		transition: all 0.3s;
		/* #endif */
		align-items: center;
		justify-content: center;
		opacity: 0;
	}

	/* #ifndef APP-NVUE */
	.fui-backdrop__bg {
		background: var(--fui-bg-color-mask, rgba(0, 0, 0, 0.6)) !important;
	}

	.fui-backdrop__show {
		visibility: visible !important;
		opacity: 1 !important;
	}

	/* #endif */
</style>