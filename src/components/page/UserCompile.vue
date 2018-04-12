<template>
    <div class="panel">
        <div class="panel-head">
            <h5><span class="el-icon-star-off"></span>{{title}}</h5>
        </div>
        <div class="panel-cont">
            <el-form id="listform" :model="ruleForm" :rules="rules" ref="ruleForm">
                <div class="addo_contentall">
                    <div class="addo_content">
                        <el-row :gutter="10">
                            <el-col :span="10">
                                <div class="el-form-item">
                                        <label for="payNumber" class="el-form-item__label marl17">角色选择:</label>
                                        <el-form-item prop="role" class="el-form-item__content">
                                            <el-select placeholder="请选择" v-model="ruleForm.role">
                                                <el-option
                                                  v-for="item in RoleList"
                                                  :key="item.id"
                                                  :label="item.role"
                                                  :value="item.id">
                                                </el-option>
                                            </el-select>
                                        </el-form-item>
                                    </div>
                            </el-col>
                        </el-row>
                    </div>
                </div>
                <div class="addo_contentall">
                    <div class="addo_content">
                        <el-row :gutter="8">
                            <el-col :span="8">
                                <label for="payNumber" class="el-form-item__label marl17">用户名称:</label>
                                <el-form-item prop="niname" class="el-form-item__content">
                                    <el-input  placeholder="请输入内容" class="el-form-item__content" v-model="ruleForm.niname" :disabled="true"></el-input>
                                </el-form-item>
                            </el-col>
                        </el-row>
                    </div>
                </div>
                <div class="addo_contentall">
                    <div class="addo_content">
                        <el-row :gutter="8">
                            <el-col :span="8">
                                <label for="payNumber" class="el-form-item__label marl3">用户手机号:</label>
                                <el-form-item prop="phone">
                                    <el-input  placeholder="请输入内容" class="el-form-item__content" v-model.number="ruleForm.phone"></el-input>
                                </el-form-item>
                            </el-col>
                        </el-row>
                    </div>
                </div>
                <div class="addo_contentall">
                    <div class="addo_content">
                        <el-row :gutter="10">
                            <el-col :span="10">
                                <label for="payNumber" class="el-form-item__label marl17">默认密码:</label>
                                <label for="payNumber" class="el-form-item__label marl17">666666</label>
                            </el-col>
                        </el-row>
                    </div>
                </div>
                <el-button type="primary" class="suresmilt" @click="sure('ruleForm')">确认提交</el-button>
            </el-form>
        </div>
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
                    phone:'',
                    niname:'',
                    role:''
                },
                password:'',
                rules:{
                    role:[
                        { required: true, message: '请选择角色', trigger: 'change' },
                    ],
                    niname:[
                        { required: true, message: '请输入用户名称', trigger: 'blur' },
                    ],
                    phone: [
                        { required: true, message: '请输入手机号', trigger: 'blur' },
                        { pattern: /^1[34578]\d{9}$/, message: '请输入正确的手机号码'}
                    ]
                },
            }
        },
        created(){
            var self = this;
            self.getRoleInfoList(); 
            self.getAdminInfoByUserid();
        },
        methods: {
            sure(formName) {
                const self = this;
                self.$refs[formName].validate((valid) => {
                    console.log(self.$refs[formName])
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
                self.password = md5('666666').toUpperCase();
            },
            getAdminInfoByUserid(){
                var self = this;
                const params = {
                    userid:self.$route.params.id
                };
                this.$ajax.getAdminInfoByUserid(params).then((res)=> {
                    this.ruleForm.phone = res.lists[0].niname;
                    this.ruleForm.niname = res.lists[0].username;
                    this.ruleForm.role = res.lists[0].role;
                });
            },
            adminRolesave(){
                var self = this;
                self.getmd5();
                const params = {
                    username:this.ruleForm.niname,
                    password:this.password,
                    niname:this.ruleForm.phone,
                    role_id:this.ruleForm.role,
                    id:self.$route.query.id
                };
                console.log(self.$route.query.id);
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
    .addo_contentall{
      width: 100%;
      border-bottom:1px solid #ddd;
    }
    .addo_content{
      width: 1000px;
      margin: 20px 0 20px 20px;
    }
    .el-formz{
        padding: 10px 30px ;
        border-bottom: 1px solid #ddd;
    }
    .el-form-item{
        display: inline-block;
        margin-right: 20px;
        vertical-align: top;
        margin-bottom: 0!important
    }
    .el-form-item__label{
        display: inline-block;
        text-align: right;
        vertical-align: middle;
        font-size: 14px;
        color: #5a5e66;
        line-height: 40px;
        padding: 0 12px 0 0;
        box-sizing: border-box;
    }

    .el-form-item__content{
        display: inline-block;
        vertical-align: top;
        line-height: 40px;
        position: relative;
        font-size: 14px;
        width: 202px;
    }

    .el-input__inner{
        width: 202px!important;
    }
    .el-input{
        position: relative;
        font-size: 14px;
        display: inline-block;
        width: 100%;
    } 
    .panel-cont {
        overflow: hidden;
    }
    .marl11{
        margin-left: 11px
    }
    .table th{
        text-align: center;
        padding: 12px;
    }
    .table td {
        vertical-align: middle;
        padding: 10px;
    }
    .marl17{
        margin-left: 17px;
    }
    .marl3{
        margin-left: 3px;
    }
    .suresmilt{
        display: block;
        margin: 10px 0 10px 20px;
    }
</style>