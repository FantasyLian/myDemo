<template>
    <el-form :model="forms" :rules="rules" ref="forms" class="demo-ruleForm login-container">
        <h3 class="title">系统登录</h3>
        <el-form-item prop="account" :label="alias.account">
            <el-input type="text" v-model="forms.account" auto-complete="off" placeholder="账号"></el-input>
        </el-form-item>
        <el-form-item prop="password" :label="alias.password">
            <el-input type="password" v-model="forms.passwd" auto-complete="off" placeholder="密码"></el-input>
        </el-form-item>
        <el-form-item style="width:100%;">
            <el-button type="primary" style="width:100%" @click.native.prevent="handleSubmit">登录</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
import { loginPrei as alias } from './data/form.preinstall';
import { loginForm as forms } from './data/form.data';
import { checkForm as rules } from './data/form.validate.rule';
export default {
    name: 'Login',
    data() {
        return {
            rules,
            alias,
            forms
        }
    },
    methods: {
        handleSubmit(forms) {
            this.$refs.forms.validate(valid => {
                if(valid) {
                    alert('提交！');
                } else {
                    alert('登录失败！');
                    console.log('error submit !!');
                    return false;
                }
            });
        }
    }
}
</script>

<style lang="scss" scoped>
    .login-container {
        border-radius: 5px;
        background-clip: padding-box;
        margin: 180px auto;
        width: 600px;
        padding: 35px 35px 15px;
        background-color: #fff;
        border: 1px solid #eaeaea;
        box-shadow: 0 0 25px #cac6c6;
        .title {
            margin: 0 auto 40px;
            text-align: center;
            color: #505458;
        }
        .remember {
            margin: 0 0 35px;
        }
    }
</style>