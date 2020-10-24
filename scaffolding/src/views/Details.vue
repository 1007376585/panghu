<template>
<div>
<!-- 顶部导航开始 -->
<div >
<!-- <van-nav-bar class="header" title="标题" left-text="返回" left-arrow>
  <template #right>
    <van-icon name="search" size="18" />
  </template>
</van-nav-bar> -->
      <mt-header class="header" title="" fixed> 
        <div slot="left">
         <router-link to="/" >
    <mt-button icon="back"></mt-button></router-link>
</div>
       <!-- <div slot="left" class="headercenter">
         <input class="inputpostion" type="text" placeholder="搜索">
         </div> -->

       <div slot="right" class="register">
         <router-link to="/register">
         <img src="../assets/images/icon/register.png" alt="">
         </router-link>
    
       </div>
     </mt-header>


</div>
<!-- 顶部导航结束 -->

<!--详情页照片开始 -->
  <div>
    <van-swipe class="swiper" @change="onChange">
  <van-swipe-item><img src="../assets/images/minsu2.jpg" alt=""></van-swipe-item>
  <van-swipe-item><img src="../assets/images/minsu1.jpg" alt=""></van-swipe-item>
  <van-swipe-item><img src="../assets/images/minsu3.jpg" alt=""></van-swipe-item>
  <van-swipe-item><img src="../assets/images/minsu4.jpg" alt=""></van-swipe-item>
  <van-swipe-item><img src="../assets/images/minsu5.jpg" alt=""></van-swipe-item>
  <template #indicator>
    <div class="custom-indicator">
      {{ current + 1 }}/5
    </div>
  </template>
</van-swipe>
  </div>
  <!-- 详情页照片结束 -->
</div>
</template>
<style scoped>
/* 顶部导航样式  */
.header {
  padding: 10px;
  background: transparent;
}
.header a{
  margin-top: 10px;
  display: inline-block;
  margin-left: 10px;
  text-decoration: none;
  color: #fff;
}
.custom-indicator {
  position: absolute;
  right: 5px;
  bottom: 5px;
  padding: 2px 5px;
  font-size: 12px;
  background: rgba(0, 0, 0, 0.2);
  color: #ffffff;
}
.swiper img {
  height: 220px;
  width: 100%;
  /* margin-top: 50px; */
}
</style>

<script>
export default {
  data() {
    return {
      current: 0
    };
  },
  methods: {
    onChange(index) {
      this.current = index;
    }
  }
};
</script>


