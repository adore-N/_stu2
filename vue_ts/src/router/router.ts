import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);
/**
 * webpack 具有 require.context() 可以检测匹配某个文件夹,
 * */
let _ROUTER: any = require.context('../views',true,/\.router\.ts/);
let _router: any[] = [];
_ROUTER.keys().forEach((key: any): any => {
  _router = _router.concat( _ROUTER(key).default )
});



export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      name: 'index',
      component: () => import('@/views/index/Index.vue'),
      children: _router

    },
    {
      path: '/login',
      name: 'Login',
      component: () => import(/* webpackChunkName: "articles" */'../views/login/Login.vue'),
    },
  ],
});
