<template>
    <div>
        <div id="container" style="width: 100%;height:500px;"></div>
    </div>
</template>

<script lang="ts">
    /**
     * 引入HighEcharts
     * npm i highcharts -D    npm i @types/highcharts -D
     * */
    import { Component, Vue } from 'vue-property-decorator';
    import * as Highcharts from 'highcharts';
    import * as Exporting from 'highcharts/modules/exporting';
    Vue.prototype.$Highcharts = Highcharts;

    @Component
    export default class HighEcharts extends Vue{
        private options: any = {
            title: {
                text: '2010 ~ 2016 年太阳能行业就业人员发展情况'
            },
            subtitle: {
                text: '数据来源：thesolarfoundation.com'
            },
            yAxis: {
                title: {
                    text: '就业人数'
                }
            },
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle'
            },
            plotOptions: {
                series: {
                    label: {
                        connectorAllowed: false
                    },
                    pointStart: 2010
                }
            },
            series: [{
                name: '安装，实施人员',
                data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
            }, {
                name: '工人',
                data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
            }, {
                name: '销售',
                data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
            }, {
                name: '项目开发',
                data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227]
            }, {
                name: '其他',
                data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111]
            }],
            responsive: {
                rules: [{
                    condition: {
                        maxWidth: 500
                    },
                    chartOptions: {
                        legend: {
                            layout: 'horizontal',
                            align: 'center',
                            verticalAlign: 'bottom'
                        }
                    }
                }]
            }
        };
        private mounted() {
            // Highcharts.chart('container',this.options );
            let ele: any = document.getElementById("container");
            const chart: any = Highcharts.chart(ele, this.options);
        }
    }
</script>

<style scoped>

</style>