/**
* @Description: 使用require.context(arg1,arg2,arg3)自动化构建路由,可以检测某一个文件夹内匹配的文件
 * arg1: 需要检测的文件夹 arg2: 是否深度检测(包括子文件夹) arg3: (正则)匹配文件夹的规则
* @author Chuyi Ye
* @date 2020/1/16
*/

import Vue from 'vue';
import Router from 'vue-router';
import InterfaceTest from "../views/interfaceTest/InterfaceTest";

let ROUTER = require.context('../views', true, /\.router\.js/);
let _router =[];
ROUTER.keys().forEach(key=>{
    _router = _router.concat(ROUTER(key).default)
});

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BABEL_ENV,
    routes: [
        {
            path: '/',
            name: 'home',
            component: reslove => require(['@/views/animate/animate3.vue'],reslove)
        },
        {
            path: '/music',
            name: 'music',
            component: reslove => require(['@/views/music.vue'],reslove)
        },
        {
            path: '/login',
            name: 'Login',
            component: reslove => require(['@/views/login/Login.vue'],reslove),
            children: [
                {
                    path: '/ccc',
                    component: InterfaceTest
                }
            ]
        },
        ..._router
    ]
})

