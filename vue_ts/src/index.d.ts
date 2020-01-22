/**
 * 这里的内容原本是可以写在shims-vue.d.ts 里面的,但是ts提示报错,项目可以正常跑起来
 * 错误原因无法确定: 目前定位在shims-vue.d.ts 引入两次 vue 导致下面的第二次引入发生错误
 * */
import Vue from 'vue';
import {Route, VueRouter} from "vue-router/types/router";
declare module 'vue/types/vue' {

    interface Vue {
        $https: any;

        $router: VueRouter;
        $route: Route;
    }
}