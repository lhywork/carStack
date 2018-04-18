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
                <el-form-item label="修改密码:" prop="password">
                    <el-input type="password" class="user-input" placeholder="不填默认666666" v-model="ruleForm.password"></el-input>
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
                title: "编辑用户",
                RoleList:[],
                ruleForm:{
                    r_role:'',
                    role_id:'',
                    username:'',                    
                    niname:'',
                    password:''                   
                },
                rules:{
                    role_id:[
                        { required: true, message: '请选择角色', trigger: 'change' }
                    ],
                    username:[
                        { required: true, message: '请输入用户名称', trigger: 'blur' }
                    ],
                    niname: [
                        { required: true, message: '请输入手机号', trigger: 'blur' },
                        { pattern: /^1[34578]\d{9}$/, message: '请输入正确的手机号码'}
                    ]
                },
            }
        },
        created(){
            const self = this;
            self.getRoleInfoList(); 
            self.getAdminInfoByUserid();
        },
        methods: {
            sure(formName) {
                const self = this;
                self.$refs[formName].validate((valid) => {
                    if (valid) {
                        self.adminRolesave();
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
            getAdminInfoByUserid(){
                const self = this;
                const params = {
                    userid:self.$route.query.id
                };
                this.$ajax.getAdminInfoByUserid(params).then((res)=> {
                    this.ruleForm = res.lists[0];
                    this.ruleForm.role_id = parseInt(this.ruleForm.role_id);
                });
            },
            adminRolesave(){
                const self = this;
                const password = self.ruleForm.password ? md5(this.ruleForm.password).toUpperCase() : md5("666666").toUpperCase();
                const params = {
                    username:self.ruleForm.username,
                    password:password,
                    niname:self.ruleForm.niname,
                    role_id:self.ruleForm.role_id,
                    id:self.$route.query.id
                };
                self.$ajax.adminRolesave(params).then((res)=> {
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