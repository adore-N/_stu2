<template>
    <div class="login">
        <div class="loginForm">
            <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label="活动名称">
                    <el-input v-model="form.phone"/>
                </el-form-item>
                <el-form-item label="活动名称">
                    <el-input v-model="form.password"/>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">立即创建</el-button>
                    <el-button>取消</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Emit, Vue} from 'vue-property-decorator';
    import { LoginData } from '@/dataTypes/index.ts'

    @Component({

    })
    export default class Login extends Vue{
        private form: LoginData = {
            phone: '',
            password: ''
        };
        // $https: any;
        @Emit('ok')
        private async onSubmit(): Promise<void>{
            console.log(this);
            const data: any =  await this.$https.get(
                '/banner',
            )
        }
    }
</script>

<style scoped>
    .login{
        width: 100%;
        height: 100%;
    }
    .loginForm{
        width: 30%;
        height: 30%;
        border: 1px solid #ccc;
        position: relative;
        left: 0;
        right: 0;
        top: 50%;
        bottom: 50%;
        margin:  auto;
        min-height: 200px;
    }
</style>