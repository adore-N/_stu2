<!-- 收入记录 -->
<template>
    <div>
        <el-row type="flex" class="row-bg" justify="space-around">
            <el-col :span="5"><div class="grid-content bg-purple"></div></el-col>
            <el-col :span="5"><div class="grid-content bg-purple-light"></div></el-col>
            <el-col :span="5"><div class="grid-content bg-purple-light"></div></el-col>
            <el-col :span="5"><div class="grid-content bg-purple"></div></el-col>
        </el-row>
        <el-row>
            <el-col :span="24"><div class="grid-content bg-purple-dark grid-content_date"></div></el-col>
        </el-row>
        <el-row>
            <el-col :span="6"><div class="grid-content bg-purple grid-content_card"></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple-light grid-content_card"></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple grid-content_card"></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple-light grid-content_card last"></div></el-col>
        </el-row>
        <el-row>
            <el-col :span="12">
                <div class="grid-content bg-purple grid-content_echarts">
                    <Echarts/>
                </div>
            </el-col>
            <el-col :span="12">
                <div class="grid-content bg-purple-light grid-content_echarts">
                    <HighEcharts/>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    // export default {
    //     name: "RevenueRecords"
    // }
    import { Component, Vue } from 'vue-property-decorator';
    import Echarts from "@/components/Echarts/Echarts.vue";
    import HighEcharts from '@/components/HighEcharts/HighEcharts.vue'
    @Component({
        components: {
            Echarts,HighEcharts
        }
    })
    export default class RevenueRecords extends Vue{

    }
</script>

<style scoped>
    .el-row {
        /*margin-bottom: 20px;*/
    &:last-child {
         margin-bottom: 0;
     }
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
        height: 100px;
    }
    .row-bg {
        padding: 10px 0;
        background-color: #fff;
    }
    .grid-content_date{
        height: 60px;
    }
    .grid-content_card{
        height: 180px;
        margin: 10px 0;
        margin-right: 10px;
    }
    .last{
        margin-right: 0;
    }
    .grid-content_echarts{
        height: 500px;
    }
</style>