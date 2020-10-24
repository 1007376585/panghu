import Vue from 'vue'
import VueRouter from 'vue-router'

import Index from '../views/Index.vue'
import Details from '../views/Details.vue'
import Login from '../views/Login.vue'
import Me from '../views/Me.vue'
import Indent from '../views/Indent.vue'

//引入子组件
import Map from '../components/index/Map.vue'
import Swiper from '../components/index/Swiper.vue'
import Check from '../components/index/Check.vue'
import DetailsLable from '../components/index/DetailsLable.vue'



import { Swipe } from 'vant';

Vue.use(VueRouter)

const routes = [
  /*页面*/
  {
    path: '/',
    component: Index
  },
  {
    path: '/indent',
    component: Indent
  },
  {
    path: '/details',
    component: Details
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/me',
    component: Me
  },

/***********************************************************************/ 
  //子组件
  {
    path: '/map',
    component: Map
  },
  //轮播组件
  {
    path: '/swiper',
    component: Swiper
  },
  //方格模块组件
  {
    path: '/check',
    component: Check
  },
  //详情标签组件
  {
    path: '/detailslable',
    component: DetailsLable
  },

  // {
  //   path: '',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
