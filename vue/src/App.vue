<template>
  <div id="app">
<!--     <router-view/>-->
      <!-- <Header/> -->
      <!-- <div class="contain">
          <div class="contain_b"> -->
              <router-view></router-view>
          <!-- </div>
      </div> -->
      <!-- <Leftslider/> -->
  </div>
</template>

<script>

import Header from './components/Header.vue'
import Leftslider from './components/Leftslider.vue'
export default {
  name: 'app',
  components: {
    Header,Leftslider
  }
}
</script>

<style>
    * {
        margin: 0;
        padding: 0;
    }
    #app {
      font-family: 'Avenir', Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
    html,body,#app{
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
    .contain{
        position: absolute;
        left: 200px;
        top: 61px;
        right: 0;
        bottom: 0;
        padding: 10px;
        background: #fff;
        overflow: auto;
    }
    .contain_b{
        width: 100%;
        height: 100%;
        background: #f3f3f3;
    }
</style>
