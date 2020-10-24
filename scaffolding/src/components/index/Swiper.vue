<template>
<!-- 轮播图开始 -->
  <div class="swipe" @click="details()" >
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white" >
    <van-swipe-item v-for="(item,index) of swipers" :key="index">
    <img :src="item.url" >
    </van-swipe-item>
    </van-swipe>
  </div>
   <!-- 轮播图结束 -->
</template>

<style scoped>
.swipe img {
  height: 220px;
  width: 100%;
  /* margin-top: 50px; */
}
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  /* line-height: 150px; */
  text-align: center;
}
</style>
<script>
export default {
  data() {
    return {
      swipers: [
        {
          id: 1,
          url: require("../../assets/images/minsu1.jpg")
        },
        {
          id: 2,
          url: require("../../assets/images/minsu2.jpg")
        },
        {
          id: 3,
          url: require("../../assets/images/minsu3.jpg")
        },
        {
          id: 4,
          url: require("../../assets/images/minsu4.jpg")
        },
        {
          id: 5,
          url: require("../../assets/images/minsu5.jpg")
        }
      ]
    };
  }
};
</script>


