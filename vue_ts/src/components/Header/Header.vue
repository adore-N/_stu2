<template>
    <div class="header" style="background: #545c64">
        <el-row >
            <el-col :span="12" >
                <div class="grid-content bg-purple" style="background: #545c64">
                    <img class="logo" src="../../assets/logo.png" alt="">
                </div>
            </el-col>
            <el-col :span="12">
                <div class="grid-content bg-purple-light floatright">
                    <el-menu
                            :default-active="activeIndex2"
                            class="el-menu-demo"
                            mode="horizontal"
                            @select="handleSelect"
                            background-color="#545c64"
                            text-color="#fff"
                            active-text-color="#ffd04b">
                        <el-menu-item index="1">处理中心</el-menu-item>
                        <el-submenu index="2">
                            <template slot="title">我的工作台</template>
                            <el-menu-item index="2-1">选项1</el-menu-item>
                            <el-menu-item index="2-2">选项2</el-menu-item>
                            <el-menu-item index="2-3">选项3</el-menu-item>
                            <el-submenu index="2-4">
                                <template slot="title">选项4</template>
                                <el-menu-item index="2-4-1">选项1</el-menu-item>
                                <el-menu-item index="2-4-2">选项2</el-menu-item>
                                <el-menu-item index="2-4-3">选项3</el-menu-item>
                            </el-submenu>
                        </el-submenu>
                        <el-menu-item index="3" disabled>消息中心</el-menu-item>
                        <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
                    </el-menu>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script lang="ts">
    import { Component, Vue} from 'vue-property-decorator';
    @Component
    export default class Header extends Vue{
        private activeIndex: string = '1';
        private activeIndex2: string = '1';
        private handleSelect(key: any, keyPath: any) {
            console.log(key, keyPath);
        }
    }
</script>

<style scoped>
    .header{
        position: absolute;
        left: 0;
        right: 0;
        height: 60px;
    }
    .logo{
        width: 50px;
        height: 50px;
    }
</style>