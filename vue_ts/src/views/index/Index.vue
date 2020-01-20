<!-- 首页 -->
<template>
    <div>
        <Header/>
        <LeftSlider/>
        <div class="content">
            <div class="content_box">
                <router-view/>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator'
    import Header from "@/components/Header/Header.vue";
    import LeftSlider from "@/components/leftslider/Leftslider.vue";
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
    .content{
        position: absolute;
        left: 200px;
        right: 0;
        top: 60px;
        bottom: 0;
        background: #f0f0f0;
        padding: 15px;
        /*height: 100%;*/
    }
    .content_box{
        background: #fff;
        height: 100%;
        overflow-y: auto;
    }
</style>