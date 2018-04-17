<template>
    <div class="main-content">
        <h2 class="main-title"><i class="fa fa-tags"></i>{{title}}</h2>
        <div class="main-form">
            <el-form class="user-form" :model="ruleForm" :rules="rules" ref="ruleForm" label-width="120px">
                <el-form-item label="角色选择:" prop="role_id">
                    <el-select placeholder="请选择" v-model="ruleForm.role_id">
                        <el-option
                          v-for="item in RoleList"
                          :key="item.id"
                          :label="item.r_role"
                          :value="item.id">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="用户名称:" prop="username">
                    <el-input class="user-input"  placeholder="请输入内容" v-model="ruleForm.username"></el-input>
                </el-form-item>
                <el-form-item label="用户手机号:" prop="niname">
                    <el-input class="user-input" placeholder="请输入内容" v-model="ruleForm.niname"></el-input>
                </el-form-item>
                <el-form-item label="默认密码:" prop="password">
                    <label for="payNumber" class="el-form-item__label marl17">666666</label>
                </el-form-item>
            </el-form>
        </div>
        <el-button type="success" class="suresmilt" @click="sure('ruleForm')">确认提交</el-button>
    </div> 
</template>

<script>
    import md5 from 'js-md5'
    export default {
        data() {
            return {
                title: "新增用户",
                RoleList:[],
                ruleForm:{
                    role_id:'',
                    username:'',                    
                    niname:'',
                    password:'666666'                   
                },               
                rules:{
                    role_id:[
                        { required: true, message: '请选择角色', trigger: 'change' },
                    ],
                    username:[
                        { required: true, message: '请输入用户名称', trigger: 'blur' },
                    ],
                    niname: [
                        { required: true, message: '请输入手机号', trigger: 'blur' },
                        { pattern: /^1[34578]\d{9}$/, message: '请输入正确的手机号码'}
                    ]
                }
            }
        },
        created(){
            var self = this;
            self.getRoleInfoList(); 
        },
        methods: {
            sure(formName) {
                const self = this;
                self.$refs[formName].validate((valid) => {
                    if (valid) {
                        self.adminRolesave()
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            getRoleInfoList(){
                const that = this;
                const params = {};
                this.$ajax.getRoleInfoList(params).then((res)=> {
                    that.RoleList = res.lists;
                });
            },
            getmd5(){
                var self = this;
                self.ruleForm.password = md5('666666').toUpperCase();
            },
            adminRolesave(){
                var self = this;
                self.getmd5();
                const params = self.ruleForm;
                this.$ajax.adminRolesave(params).then((res)=> {
                    if(res.returnCode == 1){
                        self.$router.push({ path: '/UserManager' });   
                    }else{
                        self.$alert(res.returnMsg,'系统提示')
                    }
                });
            }
        }
    }
</script>

<style scoped>
    .user-input{
        width: 216px;
    }
    .user-form{
        border: 1px solid #dfe6ec;
        padding: 20px 0; 
    }
    .suresmilt{
        display: block;
        margin: 0 auto;
    }
</style>