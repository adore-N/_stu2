<template>
    <div class="login">
        <div class="loginForm">
            <div class="box">
                <template>
                    <el-tabs v-model="activeName" @tab-click="handleClick">
                        <el-tab-pane label="密码登录" name="first">
                            <el-form ref="form" :model="form" label-width="80px">
                                <el-form-item
                                        label="手机号"
                                        prop="phone"
                                >
                                    <el-input v-model="form.phone"/>
                                </el-form-item>
                                <el-form-item label="密码" prop="password">
                                    <el-input v-model="form.password"/>
                                </el-form-item>
                                <el-form-item>
                                    <el-button type="primary" @click="onSubmit($event,'form')">立即创建</el-button>
                                    <el-button type="primary" @click="onReg">注册</el-button>
                                </el-form-item>
                            </el-form>
                        </el-tab-pane>
                        <el-tab-pane label="短信登录" name="second">
<!--                            <el-form ref="form" :model="form" label-width="80px">-->
<!--                                <el-form-item label="活动名称">-->
<!--                                    <el-input v-model="form.phone"/>-->
<!--                                </el-form-item>-->
<!--                                <el-form-item label="活动名称">-->
<!--                                    <el-input v-model="form.password"/>-->
<!--                                </el-form-item>-->
<!--                                <el-form-item>-->
<!--                                    <el-button type="primary" @click="onSubmit($event,'form')">立即创建</el-button>-->
<!--                                </el-form-item>-->
<!--                            </el-form>-->
                        </el-tab-pane>
                    </el-tabs>
                </template>
            </div>
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
        validatePass(rule: any, value: any, callback: any){
            if (value === '') {
                callback(new Error('请输入密码'));
            }
        }
        validatePass1(rule: any, value: any, callback: any){
            if (value === '') {
                callback(new Error('请输入密码'));
            }
        }

        private rules: any = {
            phone: [{ validator: this.validatePass, trigger: 'blur' }],
            password: [{ validator: this.validatePass1, trigger: 'blur' }],

        }
        private activeName: string = 'first';

        private async onSubmit(ev: any,form: string): Promise<void>{
            console.log(this.form);
            console.log(ev)
            console.log(form)
            this.$refs[form].validate((valid: any) => {
                if (valid) {
                    console.log(valid)
                    alert('submit!');
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
            // const data: any =  await this.$https.get(
            //     '/login',{params: this.form}
            // );
            // console.log(data)

            // this.$refs[from].validate(()=>{
            //
            // })
        }
        private handleClick(tab: any, event: any): void{
            console.log(tab,event)
        }
        private onReg(): void{
            this.$router.push('/reg')
        }
    }
</script>

<style scoped>
    .login{
        width: 100%;
        min-height: 100%;
        background: url('https://static.zcool.cn/v1.1.88/passport4.0/images/login-ground.jpg') no-repeat ;
        background-size: cover;
        display: flex;
        justify-content: center;
    }
    .loginForm{
        width: 336px;
        height: 440px;
        border: 1px solid #ccc;
        margin: 0 auto;
        min-height: 200px;
        padding: 30px 32px;
        box-shadow: 0px 1px 12px 0px rgba(0,0,0,0.2);
        background: #fff;
        margin-top: 150px;
    }

</style>