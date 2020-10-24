<template>
  <!-- 方格面板开始 -->
   <div class="main_box">
   <!-- <van-grid :column-num="3"> -->
     <div @click="details()" v-for="(item,index) of checks" :key="index" >
       <img :src="item.url" alt="">
       <p>{{item.name}}</p>
     </div>

  <!-- <van-grid-item icon="../../assets/images/icon/homestay.png" text="民宿·客栈" />
  <van-grid-item icon="../../assets/images/icon/spot.png" text="景点·门票" />
  <van-grid-item icon="../../assets/images/icon/plane.png" text="机票·预订" />
  <van-grid-item icon="../../assets/images/icon/hotel.png" text="酒店·预订" />
  <van-grid-item icon="../../assets/images/icon/strategy.png" text="攻略·游记" />
  <van-grid-item icon="../../assets/images/icon/train.png" text="火车票" />  -->

  <!-- <van-grid-item v-for="(item,index) of checks" :key="index" :icon="item.url" :text="item.name" > -->

    <!-- </van-grid>  -->
   </div>
   <!-- 方格面板结束 -->
</template>
<style scoped>
.main_box {
  height: 166px;
  width:100%;
  text-align: center
  /* display: flex; */
  /* margin-top: 50px;
  border: 1px #ff9036 solid;
  border-radius: 5px;
  justify-content: space-around; */
}
.main_box div{
  width: 33.3%;
  float: left;
  /* padding-bottom: 10px; */

}
.main_box div img{
  margin: 10px;
}
.main_box div p{
  margin:5px;
}
</style>
<script>
export default {
  data(){
    return{
      checks:[
        {
          id:1,
          url:require("../../assets/images/icon/homestay.png"),
          name:"民宿·客栈"
        },
        {
          id:2,
          url:require("../../assets/images/icon/spot.png"),
          name:"景点·门票"
        },
        {
          id:3,
          url:require("../../assets/images/icon/plane.png"),
          name:"机票·预订"
        },
        {
          id:4,
          url:require("../../assets/images/icon/hotel.png"),
          name:"酒店·预订"
        },
        {
          id:5,
          url:require("../../assets/images/icon/strategy.png"),
          name:"攻略·游记"
        },
        {
          id:1,
          url:require("../../assets/images/icon/train.png"),
          name:"火车票"
        },

      
      ]
    }
  },
  methods:{
    //详情跳转按钮
    details() {
      this.$router.push("/details");
    },
  }
}
</script>


