<template>
    <div class="contain_box">
        <!-- <el-row :gutter="30">
            <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
        </el-row>
        <Echarts/> -->
          <div
          class="color-item"
          v-for="color in colors" v-dragging="{ item: color, list: colors, group: 'color' }"
          :key="color.text"
      >{{color.text}}</div>
      <A></A>
    </div>
</template>

<script>
    import Echarts from "../../components/Echarts";
    import Header from "../../components/Header";
    import Leftslider from "../../components/Leftslider";
    import A from '../animate/animate';
    export default {
        name: "Home",
        components:{
            Echarts,Header,Leftslider,A
        },
        data(){
            return {
                 colors: [{
            text: "Aquamarine"
        }, {
            text: "Hotpink"
        }, {
            text: "Gold"
        }, {
            text: "Crimson"
        }, {
            text: "Blueviolet"
        }, {
            text: "Lightblue"
        }, {
            text: "Cornflowerblue"
        }, {
            text: "Skyblue"
        }, {
            text: "Burlywood"
        }]
            }
        }
    }
</script>

<style scoped>
    .contain_box{
        padding: 0 10px;
    }
    .el-row {
        margin-bottom: 10px;
        padding-top: 10px;

    /*&:last-child {*/
    /*     margin-bottom: 0;*/
    /* }*/
    }
    .el-col {
        border-radius: 4px;
    }
    .bg-purple-dark {
        background: #99a9bf;
    }
    .bg-purple {
        background: #d3dce6;
    }
    .bg-purple-light {
        background: #e5e9f2;
    }
    .grid-content {
        border-radius: 4px;
        min-height: 36px;
        height: 120px;
        /*margin-top: 10px;*/
    }
    .row-bg {
        padding: 10px 0;
        background-color: #f9fafc;
    }
    .bg-purple1{
        height: 300px;
    }
    .bottom1{
        height: 330px;
    }
</style>