<template>
    <div>
        <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="活动名称">
                <el-input v-model="form.name"/>
            </el-form-item>
            <el-form-item label="活动名称">
                <el-input v-model="form.date1"/>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">立即创建</el-button>
                <el-button>取消</el-button>
            </el-form-item>
        </el-form>
        <router-view/>
    </div>
</template>

<script>
    export default {
        name: "Login",
        data() {
            return {
                form: {
                    name: '',
                    date1: '',
                }
            }
        },
        methods: {
            onSubmit() {
                console.log('submit!');
            }
        }
    }
</script>

<style scoped>

</style>