<template>
    <div class="login-wrap">
        <div class="ms-title">车栈金融后台管理系统</div>
        <div class="ms-login">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0px" class="demo-ruleForm">
                <el-form-item prop="username">
                    <el-input type="text" v-model="ruleForm.username" placeholder="请输入用户名"></el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <div class="el-input">
                        <input autocomplete="off" class="el-input__inner" type="password" v-model="ruleForm.password" placeholder="请输入密码" @keyup.enter.native="submitForm('ruleForm')">
                    </div>
                </el-form-item>
                <div class="login-btn">
                    <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
                </div>                
            </el-form>
        </div>
    </div>
</template>

<script>
    import md5 from 'js-md5';   
    export default {
        data: function(){
            return {
                ruleForm: {
                    username: '',
                    password: ''
                },
                rules: {
                    username: [
                        { required: true, message: '请输入用户名', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请输入密码', trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
            submitForm(formName) {
                const self = this;              
                self.$refs[formName].validate((valid) => {
                    if (valid) {
                        const params = {
                            username:self.ruleForm.username,
                            password:md5(self.ruleForm.password).toUpperCase()
                        };
                        self.$store.dispatch('Logins',params).then(res => {
                            if(res.returnCode == 1){
                                self.$router.push({ path: '/index' });
                            }else{
                                self.$alert(res.returnMsg,'系统提示');
                            } 
                        }).catch(res => {
                            // console.log(res)
                            self.$alert('网络繁忙，请稍后再试！','系统提示'); 
                        });
                    } else {
                        return false;
                    }
                });                             
            }
        }
    }
</script>

<style scoped>
    .login-wrap{
        position: relative;
        width:100%;
        height:100%;
    }
    .ms-title{
        position: absolute;
        top:50%;
        width:100%;
        margin-top: -230px;
        text-align: center;
        font-size:32px;
        color: #fff;
        font-family: cursive;
    }
    .ms-login{
        position: absolute;
        left:50%;
        top:50%;
        width:300px;
        height:160px;
        margin:-150px 0 0 -190px;
        padding:40px;
        border-radius: 5px;
        background: #fff;
    }
    .login-btn{
        text-align: center;
    }
    .login-btn button{
        width:100%;
        height:36px;
    }
</style>