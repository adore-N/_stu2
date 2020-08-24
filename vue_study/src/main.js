// import Vue from 'vue'
import Vue from 'vue/dist/vue.esm.js';
import App from './App.vue'

Vue.config.productionTip = false


import Button from './components/button.vue'
Vue.component('my-button',Button)

import vueztree from './components/treee.vue'

// Vue.use(vueztree)

Vue.component('vue-ztree',vueztree)

import vuetree from './components/tree';
Vue.component('my-tree',vuetree)


import Page from './components/Page';
Vue.component('my-page',Page)

new Vue({
  render: h => h(App),
}).$mount('#app')
