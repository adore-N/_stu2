<!-- 首页 -->
<template>
    <div>
        <h1>首页</h1>
        <Header/>
        <router-view/>
        <LeftSlider/>
    </div>
</template>

<script>


    import { Component, Vue } from 'vue-property-decorator'
    import Header from "@/components/Header/Header";
    import LeftSlider from "@/components/leftslider/Leftslider";
    /**
     * 这里有个大坑: 如果需要有嵌套路由的话,就必须声明 @component 要不然就会组件渲染错误
     * */
    @Component({
        components: {
            Header, LeftSlider
        }
    })
    export default class Index extends Vue{

    }
</script>

<style scoped>

</style>