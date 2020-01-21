import Vue from 'vue';
// @ts-ignore
import App from './App.vue';
import router from './router/router'
import store from './store';

// 引入初始化公共样式
import '@/assets/css/main.css'

import elementUI from 'element-ui';
import service from "@/utils/axios";
// 注册 elementUI
Vue.use(elementUI);
// 引入 axios
Vue.prototype.$https = service;

Vue.config.productionTip = false;



new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
