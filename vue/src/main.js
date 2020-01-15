import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import {Button} from 'element-ui'

Vue.use(Button)


let a = require.context('./components',false,/\.vue/);
console.log(a.keys())
// console.log(a)
new Vue({
  render: h => h(App),
}).$mount('#app')
