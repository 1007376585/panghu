<template>
  <div>
    <!-- 顶部导航开始 -->
    <div>
    <mt-header class="header"  title="古镇名宿" fixed>
    <router-link to="/" slot="left">
    <mt-button icon="back"></mt-button></router-link>
      <router-link to="/register" slot="right">
      <mt-button class="shortcut">注册</mt-button>
      </router-link>
    </mt-header>
    </div>
  <!-- 顶部导航结束-->
  <!-- 登录开始 -->
  <div class="main">
     <mt-field
      type="text" 
      label="用户名" 
      placeholder="请输入用户名"
      disabledclear
      :attr="{maxlength:10}"
      v-model="uname"
      :state="unameState"
      @blur.native.capture="checkuname">
      </mt-field>
      <mt-field
      type="password" 
      label="密码" 
      placeholder="请输入密码"
      disabledclear
      :attr="{maxlength:20,autocomplete:'off'}"
      v-model="upwd"
      :state="upwdState"
      @blur.native.capture="checkPassword">
      </mt-field>
      <mt-button  class="but" size="large" @click="handle">登录</mt-button>
    </div>
  <!-- 登录结束 -->
  </div>
</template>
<style scoped>
.header {
  background-color: #FF9036;
  border-radius: 5px;
}
.but{
  background-color: #FF9036;
}
</style>
<script>
export default {
  data(){
    return{
       //用户名
      uname: "",
      //密码
      upwd: "",
      
      unameState: "",

      upwdState: ""
    }
  },
  metheds:{
     checkuname() {
      //校验用户名
      let unameRegExp = /^[0-9a-zA-Z_]{6,20}$/;
      if (unameRegExp.test(this.uname)) {
        this.unameState = "success";
        console.log(`用户名对了`);
        return true;
      } else {
        this.unameState = "error";
        //console.log(`用户名非法`);
        //简捷方式短消息提示框
        //this.$toast(`用户名必填`)
        //标准
        this.$toast({
          message: "用户名为必填项",
          position: "top",
          duration: "2000"
        });
        return false;
      }
    },
    //校验密码
    checkPassword() {
      //密码的正则表达式
      let passwordRegExp = /^[0-9A-Za-z]{8,20}$/;
      if (passwordRegExp.test(this.password)) {
        return true;
      } else {
        this.$toast({
          message: "密码必须为字母、数字的组合体",
          position: "top",
          duration: "2000"
        });
        return false;
      }
    },
    hendle(){
      
    }


  }
}
</script>



