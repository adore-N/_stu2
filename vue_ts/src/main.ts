import Vue from 'vue';
import App from './App.vue';
import router from './router/router'
import store from './store';

// 引入初始化公共样式
import '@/assets/css/main.css'

import elementUI from 'element-ui';
Vue.use(elementUI);

Vue.config.productionTip = false;



new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
