<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <input type="button" value="test1" @click="time">
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import axios from 'axios';
export default {
  name: 'home',
  components: {
    HelloWorld
  },
  mounted(){
    // this.test()
  },
  methods:{
    test(){
      axios.get('http://localhost:3333/stock/v1/driver').then(res=>console.log(res.data))
    },
    time(){
      let t = new Date()
      let nowDate = t.getFullYear() + '-' + this.buling(t.getMonth() + 1) + '-' + this.buling(t.getDate())
      t.setMonth(t.getMonth() - 1)
      let oneMonthAgoDate = t.getFullYear() + '-' + this.buling(t.getMonth() + 1) + '-' + this.buling(t.getDate())
      console.log([oneMonthAgoDate, nowDate])
    },
    buling(val){
      // if(String(val).length == 1){
      //   return '0' + val
      // }else{
      //   return val
      // }
      let newVal;
      return newVal = String(val).length == 1 ? '0' + val :  val;
    }
  }
}
</script>
