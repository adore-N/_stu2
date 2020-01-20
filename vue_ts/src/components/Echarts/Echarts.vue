<!-- 引入Echarts图表-->
<template>
    <div>
        <!-- 为ECharts准备一个具备大小（宽高）的Dom -->
        <div id="main" style="width: 100%;height:500px;"></div>
    </div>
</template>

<script lang="ts">
    /**
     * 引入 Echarts 图表
     * npm install echarts --save(工程依赖)    npm install --save @types/echarts(声明依赖)
     * 引入 import echarts from 'echarts'
     * 定义数据 options: {.....}
     * typescript 中抓取 dom 节点 echarts.init(document.getElementById('main') as HTMLCanvasElement);
     * 设置 Echarts 图表响应式布局,修改css样式 width: 100%, 监听浏览器窗口变化,改变图表样式
     * */
    import { Component, Vue} from 'vue-property-decorator';
    import echarts from 'echarts'
    @Component
    export default class Echarts extends Vue{
        public colors: string[] =  ['#5793f3', '#d14a61', '#675bba'];
        private options: any = {
            color: this.colors,
            tooltip: {
                trigger: 'none',
                axisPointer: {
                    type: 'cross'
                }
            },
            legend: {
                data:['2015 降水量', '2016 降水量']
            },
            grid: {
                top: 70,
                bottom: 50
            },
            xAxis: [
                {
                    type: 'category',
                    axisTick: {
                        alignWithLabel: true
                    },
                    axisLine: {
                        onZero: false,
                        lineStyle: {
                            color: this.colors[1]
                        }
                    },
                    axisPointer: {
                        label: {
                            formatter: function (params: any) {
                                return '降水量  ' + params.value
                                    + (params.seriesData.length ? '：' + params.seriesData[0].data : '');
                            }
                        }
                    },
                    data: ['2016-1', '2016-2', '2016-3', '2016-4', '2016-5', '2016-6', '2016-7', '2016-8', '2016-9', '2016-10', '2016-11', '2016-12']
                },
                {
                    type: 'category',
                    axisTick: {
                        alignWithLabel: true
                    },
                    axisLine: {
                        onZero: false,
                        lineStyle: {
                            color: this.colors[0]
                        }
                    },
                    axisPointer: {
                        label: {
                            formatter: function (params: any) {
                                return '降水量  ' + params.value
                                    + (params.seriesData.length ? '：' + params.seriesData[0].data : '');
                            }
                        }
                    },
                    data: ['2015-1', '2015-2', '2015-3', '2015-4', '2015-5', '2015-6', '2015-7', '2015-8', '2015-9', '2015-10', '2015-11', '2015-12']
                }
            ],
            yAxis: [
                {
                    type: 'value'
                }
            ],
            series: [
                {
                    name: '2015 降水量',
                    type: 'line',
                    xAxisIndex: 1,
                    smooth: true,
                    data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
                },
                {
                    name: '2016 降水量',
                    type: 'line',
                    smooth: true,
                    data: [3.9, 5.9, 11.1, 18.7, 48.3, 69.2, 231.6, 46.6, 55.4, 18.4, 10.3, 0.7]
                }
            ]
        };
        // public echarts: any = require('echarts');
        mounted(): void{
            this.createEcharts();
        }
        createEcharts(): void {
            let myChart: any = echarts.init(document.getElementById('main') as HTMLCanvasElement);
            myChart.setOption(this.options);
            window.onresize = function (): void {
                myChart.resize();
            }
        }
    }
</script>

<style scoped>

</style>