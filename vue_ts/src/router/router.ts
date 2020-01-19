import Vue from 'vue';
import Router from 'vue-router';
import Index from '../views/index/Index.vue'
import Login from '../views/login/Login.vue';
Vue.use(Router);

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
      component: Index,
      children: _router

    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
  ],
});
