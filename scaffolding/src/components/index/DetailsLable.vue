<template>
  <!-- 选项卡开始-->
  <div class="tab">
  <van-tabs v-model="active" sticky swipeable>
  <van-tab title="民宿·酒店" ><img src="" slot="icon">
    <!-- 名宿详情开始 -->
<div>
  <van-card v-for="(item,index) of 5" :key="index"
  thumb-link="/details"
  num="1"
  price="688.00"
  desc="民宿或许是寻觅归属感的最佳地方，在这里可以让你摆脱都市压力的束缚，让疲惫的心灵得到宝贵的歇息机会，更重要的是可以找寻到久违的归属感，遇见最美的自己。"
  title="畅想生活之美"
  thumb="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603359625612&di=7a3dbb4f245d23be18c0a0be64353e90&imgtype=0&src=http%3A%2F%2Fimg2.imgtn.bdimg.com%2Fit%2Fu%3D3587821372%2C3295769814%26fm%3D214%26gp%3D0.jpg"
>
  <template #tags>
    <van-tag plain type="danger">标签</van-tag>
    <van-tag plain type="danger">标签</van-tag>
  </template>
  <template #footer >
    <van-button class="button_small" size="small" @click="details()" >详情</van-button>
    <!-- <van-button class="button_small" size="small" >预订</van-button> -->
  </template>
</van-card>
  
</div>
  <!-- 名宿详情结束 -->
   </van-tab>
  <van-tab title="景点·攻略" ><img src="" slot="icon"> 
   <!-- 详情下拉开始 -->
 <div  >
 <van-skeleton  title avatar :row="3" :loading="loading" v-for="(item,index) of 5" :key="index">
  <div class="strategyBox">
    <!-- 评论左边头像 -->
    <div class="strategyImg"><img src="../../assets/images/panghu.jpg" alt=""></div>
    <!--  评论右边标题内容-->
    <div class="strategyText" @click="details()">
      <!-- 标题 -->
      <span class="strategyTop">
        武汉市内十大必去景点游玩攻略
      </span>
      <!-- 内容 -->
      <span class="strategyDetails">
        “魅力江城”武汉，是国家历史文化名城、楚文化的重要发祥地，位于江汉平原东部，长江、汉江交汇处。那么武汉有哪些旅游景点呢，哪些是必去的呢，快来看看吧
      </span>
    </div>
  </div>
</van-skeleton>

 </div>
 <!-- 详情下拉结束 -->
  </van-tab>
  <van-tab title="热门·推荐" ><img src="" slot="icon"> 
  <div>

  <van-row type="flex" justify="space-around"  v-for="(item,index) of citys" :key="index">
  <van-col span="8">
    <van-circle
  v-model="item.currentRate"
  :rate="item.currentRate"
  :color="gradientColor"
  :clockwise="false"
  :stroke-width="60"
  :text="item.currentRate+'%'"
/>
  <div>{{item.city}}</div>
<div @click="likes(index)" class="likesImg">
  <img src="../../assets/images/icon/like_disable.png"  v-if="like == 'false'">
  <img src="../../assets/images/icon/like_enable.png"  v-else>
</div>
  </van-col>

  </van-row>    
  </div>
  </van-tab>
  <van-tab title="疫情·数据" >
    <my-map></my-map>
   </van-tab>
  </van-tabs>
  </div>
   <!-- 选项卡结束-->
</template>
<style scoped>
.tab {
  margin-bottom: 50px;
}
.button_small {
  color: #fff;
  background: red;
  border-radius: 10px;
}
.strategyBox {
  box-sizing: border-box;
  margin-top: 5px;
  padding: 5px;
  position: relative;
  height: 135px;
  border: 3px solid #ff0000;
  border-radius: 5px;
}
.strategyImg {
  border: 1px solid #ff0000;
  border-radius: 5px;
  position: absolute;
  margin-top: 5px;
  margin-left: 5px;
}
.strategyText {
  position: absolute;
  margin-top: 10px;
  margin-left: 50px;
}
.strategyTop {
  display: block;
  font-weight: bold;
  padding: 3px;
}
.strategyDetails {
  padding: 5px;
  overflow: hidden;
  text-overflow: ellipsis;
}
/* 第三个标签 */
.likesImg{
  display: inline-block;
}
</style>

<script>
import myMap from "./Map.vue";

export default {
  data() {
    return {
      //默认被选定的顶部选项卡的ID
      tabbar: "index",
      //标签
      active: 0,

      loading: true,
      //推荐城市数组
      citys:[
      { 
        id:1,
        city:"武汉",
        currentRate:77,
        like:false
      },
      { 
        id:2,
        city:"北京",
        currentRate:70,
        like:false
      },
      { 
        id:3,
        city:"上海",
        currentRate:65,
        like:false
      },
      { 
        id:4,
        city:"南京",
        currentRate:62,
        like:false
      },
      { 
        id:5,
        city:"厦门",
        currentRate:68,
        like:false
      },
      ],

      //热门推荐3 转盘百分比，转盘颜色
      // currentRate: 0,
      //点赞初始值
      like: "false",
      //调色盘
      gradientColor: {
        "0%": "#ffffff",
        "100%": "#FF0000"
      }
    };
  },
  mounted() {
    this.loading = false;
  },

  methods: {
    //详情跳转按钮
    details() {
      this.$router.push("/details");
    },
    //点击增加转盘百分比数值
    likes() {
      if (this.like == "false") {
        this.like = "true";
      } else if (this.like == "true") {
        this.like = "false";
      }

      //this.like = "true"
    }
  },
  watch: {
    like(value) {
      if (value == "false") {
        this.citys.currentRate -= 1;
        console.log(this.citys.currentRate)
      }
      if (value == "true") {
        this.citys.currentRate += 1;
        console.log(this.citys.currentRate)
      }
    }
  },

  computed: {
    //计算转盘中百分比
    text() {
      return this.currentRate.toFixed(0) + "%";
    }
  },
  components: { myMap }
};
</script>

