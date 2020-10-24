<template>
  <div>
    <!-- 顶部导航开始 -->
   <div>
     <mt-header class="header" title="" fixed>
       <div slot="left" class="logo">
         <router-link to="/login">
         <img src="../assets/images/icon/user1.png" >
         </router-link>
         </div>

       <div slot="left" class="headercenter">
         <input class="inputpostion" type="text" placeholder="搜索">
         </div>

       <div slot="right" class="register">
         <router-link to="/register">
         <img src="../assets/images/icon/register.png" alt="">
         </router-link>
    
       </div>
     </mt-header>
   </div>
   <!-- 顶部导航结束 -->
   <!-- 轮播图开始 -->
  <div @click="details()" >
   <my-swiper></my-swiper>
  </div>
   <!-- 轮播图轮播图结束 -->
   <!-- 方格面板开始 -->
   <div @click="details()" >
   <my-check></my-check>
   </div>
   <!-- 详情面板结束 -->
   <!-- 选项卡开始-->
  <div class="tab">
  <my-details></my-details>
  </div>
   <!-- 选项卡结束-->
 
   <!-- 底部选项卡开始 -->
    <div class="base">
     <mt-tabbar   v-model="tabbar" fixed>
       <mt-tab-item  id="index">
         首页
         <img src="../assets/images/icon/index_enabled.png" slot="icon" v-if="tabbar == 'index'">
         <img src="../assets/images/icon/index_disabled.png" slot="icon" v-else>
        </mt-tab-item>
        <mt-tab-item id="indent">
         订单
         <img src="../assets/images/icon/indent_enabled.png" slot="icon" v-if="tabbar == 'indent'">
         <img src="../assets/images/icon/indent_disabled.png" slot="icon" v-else>
        </mt-tab-item>
       <mt-tab-item id="me">
         我的
         <img src="../assets/images/icon/me_enabled.png" slot="icon" v-if="tabbar == 'me'">
         <img src="../assets/images/icon/me_disabled.png" slot="icon" v-else>
        </mt-tab-item>
     </mt-tabbar>
   </div>
   <!-- 底部选项卡结束 -->
  </div>
</template>
<style  scoped>
.header {
  background: transparent;
  border-radius: 5px;
}
.logo {
  margin-top: 15px;
  margin-left: 5px;
  position: relative;
}
.inputpostion {
  position: absolute;
  height: 25px;
  border-radius: 10px;
  top: 15px;
  left: 27%;
  border: 2px solid;
  background: transparent;
  z-index: 100;
  color: #ffffff;
}

.register {
  margin-top: 15px;
  margin-right: 5px;
}
/* .shortcut a {
  display: inline-block;
  margin-left: 10px;
  text-decoration: none;
  color: #fff;
} */

/* 标签内民宿样式 */
.tab {
  margin-bottom: 50px;
}

.button_small {
  color: #fff;
  background: red;
  border-radius: 10px;
}

/* .main {
  border: 1px #ff9036 solid;
  width: 100px;
  height: 100px;
} */
.base {
  border-radius: 5px;
}
/* .mint-tab-item-label{
  color: 
} */

</style>

<script>
// import myMap from "../components/index/Map";
import mySwiper from "../components/index/Swiper";
import myCheck from "../components/index/Check";
import myDetails from "../components/index/DetailsLable";


export default {
  data() {
    return {
      //默认被选定的顶部选项卡的ID
      tabbar: "index",
      
    };
  },
  mounted() {
    
  },
  methods: {
    //详情跳转按钮
    details() {
      this.$router.push("/details");
    },
    
  },

  watch: {
    //监听底部选项卡,可以带有两个参数,参数1代表新值,参数2代表旧值
    tabbar(value) {
      if (value == "index") {
        this.$router.push("/").catch(e => {});
      }
      if (value == "me") {
        this.$router.push("/me").catch(e => {});
      }
      if (value == "indent") {
        this.$router.push("/indent").catch(e => {});
      }
    }
  },

  computed: {
   
  },
  components: { mySwiper,myCheck,myDetails}
};
</script>

