import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/home/Home.vue'
// import home from './views/home/home.router'
// import detail from  './views/detail/detail.router'
// import list from './views/list/list.router'

/**
 * webpack 的 require.context(): 可以检测某一个文件夹内匹配的文件
 * require.context(arg1,arg2,arg3)  arg1: 需要检测的文件夹  arg2: 是否深度检测(包括子文件夹)  arg3: (正则)匹配文件夹的规则
 *
 */
// console.log(require)
let a = require.context('./views',true,/\.router\.js/);
console.log(a)


Vue.use(Router);


export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
      // ...home,...detail,...list
  ]
})
