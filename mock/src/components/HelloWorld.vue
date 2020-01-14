<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <input type="button" value="测试" @click="test1">
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
    return{
      
    }
  },
  methods:{
    test1(){
      // let obj2 = {name,age}

      let obj = {name:1,age:2,sex:1,note:2}

      let foo = {}
      let {foo:{name,age}} = obj
      console.log(foo)



     
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
