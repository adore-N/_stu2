<template>
    <div class="header">
<!--        <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">-->
<!--            <el-radio-button :label="false">展开</el-radio-button>-->
<!--            <el-radio-button :label="true">收起</el-radio-button>-->
<!--        </el-radio-group>-->
        <el-menu
                default-active="1-4-1"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
                :collapse="isCollapse"
                background-color="#545c64"
                router
        >
            <el-submenu index="1">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span slot="title">导航一</span>
                </template>
                <el-menu-item-group>
                    <span slot="title">分组一</span>
                    <el-menu-item index="1-1">选项1</el-menu-item>
                    <el-menu-item index="1-2">选项2</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="分组2">
                    <el-menu-item index="1-3">选项3</el-menu-item>
                </el-menu-item-group>
                <el-submenu index="1-4">
                    <span slot="title">选项4</span>
                    <el-menu-item index="1-4-1">选项1</el-menu-item>
                </el-submenu>
            </el-submenu>
            <el-menu-item index="/revenueRecords">
                <i class="el-icon-menu"></i>
                <span slot="title">导航二</span>
            </el-menu-item>
            <el-menu-item index="3" disabled>
                <i class="el-icon-document"></i>
                <span slot="title">导航三</span>
            </el-menu-item>
            <el-menu-item index="/login">
                <i class="el-icon-setting"></i>
                <span slot="title">导航四</span>
            </el-menu-item>
        </el-menu>
    </div>
</template>

<script lang="ts">
    import { Component, Vue} from 'vue-property-decorator';
    @Component
    export default class LeftSlider extends Vue{
        private isCollapse: boolean = false;
        private handleOpen(key: any, keyPath: any) {
            console.log(key, keyPath);
        }
        private  handleClose(key: any, keyPath: any) {
            console.log(key, keyPath);
        }
    }
</script>

<style scoped>
    .el-menu-vertical-demo:not(.el-menu--collapse) {
        width: 200px;
        min-height: 400px;
    }
    .header{
        position: absolute;
        top: 60px;
        /*width: 200px;*/
        left: 0;
        bottom: 0;
        background-color: #545c64;
    }
    .el-menu-vertical-demo{
        height: 100%;
    }
</style>