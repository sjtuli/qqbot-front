<script lang="ts" setup>
import navBar from '@/components/nav-bar.vue'
import Footer from '@/components/footer.vue'
</script>

<template>
  <!-- #ifndef MP-TOUTIAO -->
  <nav-bar />
  <!-- #endif -->

  <body class="flex flex-col justify-center items-center">
    <view class="flex w-78 justify-center">
      <text class="text-sm text-center text-[#767676] hyphens-auto">
        かわいい かみさと あやか
      </text>
    </view>
    <navigator url="/pages/" open-type="navigate">
      <image src="@/static/image/logo.jpg" class="h-15 w-30" mode="aspectFit" />
    </navigator>
    <view class="flex table justify-center items-center">
      <image class="rounded-1/2 h-5 w-5" src="@/static/image/新品.png" />
      <navigator class="px-3" url="/pages/" open-type="navigate">
        <text
          style="
            font-family: 'Roboto Condensed', Arial, Tahoma, Geneva, sans-serif;
            color: #ffffff;
            font-size: 14px;
            line-height: 17px;
            font-weight: bold;
            text-decoration: none;
            white-space: nowrap;
          "
        >
          BOT
        </text>
      </navigator>
      <image class="rounded-1/2 h-5 w-5" src="@/static/image/新品.png" />
    </view>
    <view class="h-60 text-black pt-60 w-92/100 card-1">
      <view class="px-3">
        <view>
          <text
            style="
              font-family: 'Roboto Condensed', Arial, Tahoma, Geneva, sans-serif;
              font-size: 40px;
              line-height: 46px;
              font-weight: bold;
              text-transform: uppercase;
            "
          >
            かみさと あやか\n神里 绫华
          </text>
        </view>
        <view class="text-xl pt-3">
          第四代群聊机器人神里绫华上线。
        </view>
        <view>铁杵成针，但为惊鸿一现！</view>
        <view class="pt-3">
          <navigator
            url="/pages/experimence/index"
            open-type="navigate"
            href="#"
            target="_blank"
            style="
              display: inline-block;
              border: 2px solid black;
              padding: 9px 21px;
              font-family: 'Roboto Condensed', Verdana, Tahoma, Geneva,
                sans-serif;
              color: black;
              font-size: 16px;
              line-height: 20px;
              text-decoration: none;
              white-space: nowrap;
              text-transform: uppercase;
              font-weight: 600;
            "
          >
            <text
              style="
                font-family: 'Roboto Condensed', Verdana, Tahoma, Geneva,
                  sans-serif;
                font-size: 16px;
                line-height: 20px;
                text-decoration: none;
                white-space: nowrap;
                text-transform: uppercase;
                font-weight: 600;
              "
            >
              进群体验
            </text>
          </navigator>
        </view>
      </view>
    </view>
    <view
      class="bg-black flex h-5 mt-3 py-2 w-92/100 justify-center items-center"
    >
      <image class="rounded-1/2 h-5 w-5" src="@/static/image/新品.png" />
      <view>
        <text
          class="px-3"
          style="
            font-family: 'Roboto Condensed', Arial, Tahoma, Geneva, sans-serif;
            color: #ffffff;
            font-size: 15px;
            line-height: 21px;
            font-weight: bold;
            text-decoration: none;
            white-space: nowrap;
          "
        >
          神里綾華
        </text>
      </view>
      <image class="rounded-1/2 h-5 w-5" src="@/static/image/新品.png" />
    </view>
    <view
      class="bg-black flex h-5 mt-3 py-2 w-92/100 justify-center items-center"
    >
      <image class="rounded-1/2 h-5 w-5" src="@/static/image/新品.png" />
      <view
        class="px-3"
        face="'Roboto Condensed', sans-serif"
        color="#ffffff"
        style="
          font-size: 15px;
          line-height: 21px;
          font-weight: bold;
          text-decoration: none;
          white-space: nowrap;
        "
      >
        <text
          style="
            font-family: 'Roboto Condensed', Arial, Tahoma, Geneva, sans-serif;
            color: #ffffff;
            font-size: 15px;
            line-height: 21px;
            font-weight: bold;
            text-decoration: none;
            white-space: nowrap;
          "
        >
          かみさと あやか
        </text>
      </view>
      <image class="rounded-1/2 h-5 w-5" src="@/static/image/新品.png" />
    </view>
    <Footer />
  </body>
</template>

<style lang="scss" scoped>
page,
body {
  @apply bg-[#FFFFFF] w-full pb-0;
  font-size: 28rpx;
  font-family: Roboto, Arial, Tahoma, Geneva, sans-serif;
}

.table {
  @apply bg-black flex py-2 w-92/100;
}

@import '@/static/style/css?family=Roboto.css';
@import '@/static/style/css?family=Roboto+Condensed.css';

.card-1 {
  /* 兜底，IE和Firefox浏览器 */
  --transparent: url(data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==);
  filter: Alpha(Opacity=50);
  /* Safari最近版本已经不需要私有前缀了 */
  background: cross-fade(
      var(--transparent),
      url('https://s1-1309644651.cos.ap-shanghai.myqcloud.com/wxFile/static/pic1.webp'),
      50%
    )
    no-repeat top center;
  /* 如使用自定义属性，-webkit-语句需要放在没有私有前缀语句的下面 */
  background: -webkit-cross-fade(
      var(--transparent),
      url('https://s1-1309644651.cos.ap-shanghai.myqcloud.com/wxFile/static/pic1.webp'),
      50%
    )
    no-repeat top center;
  background-size: 100% auto;
}
</style>
