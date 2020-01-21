// import Vue from "vue";
// import Vue from 'vue';
//
// import VueRouter from 'vue-router';
// import { Route } from 'vue-router';
  import Vue from 'vue';
declare module '*.vue' {

  export default Vue
}
declare module 'vue/types/vue' {
  interface Vue {
    $https: any;
    // $router: VueRouter;
    // $route: Route;
  }
}