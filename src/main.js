// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App';
import router from './router';

import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css';
Vue.use(VueAwesomeSwiper, /* { default global options } */)

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

// vant
// import {Rate} from 'vant';
// import 'vant/lib/index.css';
// Vue.use(Rate);
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);


import axios from "axios";
Vue.prototype.$axios=axios;

//百度地图
import BaiduMap from "vue-baidu-map"
Vue.use(BaiduMap,{
  ak:'twn2V16VWzgtNurwTPfoGhvd6mnQ1k3E'
})

import Vuex from "Vuex";
Vue.use(Vuex);

Vue.config.productionTip = false;


/* eslint-disable no-new */
let store=new Vuex.Store({
  state:{
    fcity:'郑州',
    tcity:'郑州',
    deract:'fcity',
    fday:new Date(),
    tday:new Date(),
    money:0,
    addmoney:0,
    ifloging:false,//默认未登录
    rencar:{name:'雷克萨斯ES 2.8T',pri:'480'},
    back:'支付',
    backposi:'/wod',
  },
  mutations: {
    login(state,a){
      state.iflogin=a;
    },
    pay(state,a){
      state.money-=a;
    },
    cback(state,a){
      // console.log(a);
      state.back=a.cback;
      state.backposi=a.cpos;
    },
    rentcar(state,a){
      state.rencar=a;
    },
    changd(state,a){
      state.deract=a;
    },
    ff(state,a){
      state.fday=a;
    },
    tt(state,a){
      state.tday=a;
    },
    change(state,a){
      if(state.deract=="fcity"){
        state.fcity=a;
      }else if(state.deract=="tcity"){
        state.tcity=a;
      }
    },
    addmoney(state,b){
      state.money+=Number(b);
      state.addmoney=Number(b);
    },
  },
  getters:{
    numa(state){
      let a=parseInt(state.num)+1
      return a;
    }
  }
})

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store,
})
