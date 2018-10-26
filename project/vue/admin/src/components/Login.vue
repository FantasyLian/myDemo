<template>
    <el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-position="left" label-width="0" class="demo-ruleForm login-container">
        <h3 class="title">系统登录</h3>
        <el-form-item prop="account">
            <el-input type="text" v-model="ruleForm2.account" auto-complete="off" placeholder="账号"></el-input>
        </el-form-item>
        <el-form-item>
            <el-input type="password" v-model="ruleForm2.passwd" auto-complete="off" placeholder="密码"></el-input>
        </el-form-item>
        <el-form-item style="width:100%;">
            <el-button type="primary" style="width:100%" @click.native.prevent="handleSubmit2">登录</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
    export default {
        name: 'Login',
        data() {
            let checkAccount = (rule, value, callback) => {
                if(!value) {
                    return callback(new Error('请输入账号!'));
                } else if(value.length < 4 || value.length > 12) {
                    return callback(new Error('账号名必须在4·12位'));
                } else {
                    callback();
                }
            };
            let checkPass = (rule, vlaue, callback) => {
                debugger;
                if(value === '') {
                    return callback(new Error('请输入密码！'));
                } else if(value.length < 4) {
                    return callback(new Error('密码不能少于四位数'));
                } else {
                    callback();
                }
            };
            return {
                ruleForm2: {
                    account: '',
                    passwd: ''
                },
                rules2: {
                    account: [
                        {validator: checkAccount, trigger: 'blur'},
                    ],
                    passwd: [
                        {validator: checkPass, trigger: 'blur'},
                    ]
                }
            }
        },
        methods: {
            handleSubmit2(ruleForm2) {
                this.$refs.ruleForm2.validate(valid => {
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
        width: 350px;
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