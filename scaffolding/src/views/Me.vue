<template>
  <div>
   <!-- 顶部导航开始 -->
   <div>
     <mt-header class="header" title="古镇名宿" fixed>
       <div slot="right" class="shortcut">
         <router-link to="/register">注册</router-link>
         <router-link to="/login">登录</router-link>
       </div>
     </mt-header>
   </div>
<!-- 顶部导航结束 -->
<div class="main">
  123465
</div>

<!-- 底部选项卡开始 -->
    <div>
     <mt-tabbar v-model="tabbar" fixed>
       <mt-tab-item id="index">
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
<style scoped>
.header {
  background-color: #ff9036;
  border-radius: 5px;
}
.shortcut a {
  display: inline-block;
  margin-left: 10px;
  text-decoration: none;
  color: #fff;
}
.main{
  margin-top: 40px;
}
</style>
<script>
export default {
    data(){
    return{
      tabbar:'me',
    }
  },
  watch:{
     //监听底部选项卡,可以带有两个参数,参数1代表新值,参数2代表旧值
    tabbar(value){
      if(value == 'index'){
        this.$router.push('/').catch(e=>{});
      }
      if(value == 'me'){
        this.$router.push('/me').catch(e=>{});
      }
      if(value == 'indent'){
        this.$router.push('/indent').catch(e=>{});
      }
    }
  }
}
</script>
