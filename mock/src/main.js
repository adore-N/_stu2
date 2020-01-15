import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
import { Button,Link, } from 'element-ui';
Vue.use(Button)
Vue.use(Link)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
