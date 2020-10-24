import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import axios from 'axios';
import qs from 'qs';
import moment from 'moment';
import vueJsonp from 'vue-jsonp'
import jsonp from 'jsonp'

//引入echarts
import echarts from 'echarts';
import 'echarts/map/js/china';

//导入vant
import Vant from 'vant';
//导入Element UI 
import ElementUI from 'element-ui';
//导入Mint UI
import MintUI from 'mint-ui';
//导入样式文件
import 'mint-ui/lib/style.min.css';
import 'vant/lib/index.css';


Vue.prototype.moment = moment;
Vue.prototype.qs = qs;
Vue.prototype.echarts = echarts;
Vue.prototype.jsonp = jsonp;


//注册为Vue的插件
Vue.use(MintUI);
Vue.use(ElementUI);
Vue.use(Vant);




axios.defaults.baseURL = 'http://127.0.0.1:3000'
Vue.prototype.axios = axios;
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
