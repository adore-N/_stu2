<template>
  <div class="home">
    <img alt="Vue logo" src="../../assets/logo.png">
    <input type="button" value="test1" @click="">
<!--    <el-row>-->
      <el-button>默认按钮</el-button>
      <el-button type="primary">主要按钮</el-button>
      <el-button type="success">成功按钮</el-button>
      <el-button type="info">信息按钮</el-button>
      <el-button type="warning">警告按钮</el-button>
      <el-button type="danger">危险按钮</el-button>
<!--    </el-row>-->
    <div>
      <el-link href="https://element.eleme.io" target="_blank">默认链接</el-link>
      <el-link type="primary">主要链接</el-link>
      <el-link type="success">成功链接</el-link>
      <el-link type="warning">警告链接</el-link>
      <el-link type="danger">危险链接</el-link>
      <el-link type="info">信息链接</el-link>
    </div>

  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'home',
  components: {

  },
  mounted(){
  },
  methods:{
  }
}
</script>
