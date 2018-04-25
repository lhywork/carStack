<template>
  <div class="main-content">
    <h2 class="main-title"><i class="fa fa-tags"></i>编辑角色</h2>
    <el-form class="role-form" :model="ruleForm" :rules="rules" ref="ruleForm" label-width="120px">
        <el-form-item label="角色名称:" prop="role">
            <el-input class="role-input"  placeholder="请输入角色名称" v-model="ruleForm.role"></el-input>
        </el-form-item>
        <div class="main-form">
            <div id="J_Form" class="form-content">
                <el-table :data="ruleForm.tableData" style="width: 100%">
                    <el-table-column type="expand">
                        <template slot-scope="scope">
                            <el-form label-position="left" inline class="demo-table-expand">
                                <el-form-item>
                                    <el-checkbox v-for="(item, index) in scope.row.children" :key="index" style="margin:0 10px" v-model="item.isAuth" v-if="item.isAuth !== undefined" title="勾选显示页面">{{item.name}}</el-checkbox>
                                </el-form-item>
                            </el-form>
                        </template>
                    </el-table-column>
                    <el-table-column prop="name" label="导航名称" show-overflow-tooltip></el-table-column>
                    <el-table-column prop="isAuth" label="权限分配" show-overflow-tooltip align="center">
                        <template slot-scope="scope">
                            <el-checkbox v-model="scope.row.isAuth" @change="handleCheckAll(scope.row.isAuth,scope.$index)">显示</el-checkbox>
                        </template>                      
                    </el-table-column>
                </el-table>
            </div>
        </div>
    </el-form>
    <el-button @click="SubmitBtn('ruleForm')" class="form-submit" type="success">确认提交</el-button>
  </div>
</template>
<script>
import navJson from '../../../static/json/navlist.json';
export default {  
    data () {  
        return {
            ruleForm:{
                role:'',  
                tableData:navJson.data
            },               
            rules:{
                role:[
                    { required: true, message: '请输入角色名称', trigger: 'change' }
                ]
            }
        }  
    },
    created(){
        this.getResourceByRoleId(); 
    },  
    methods:{
        getResourceByRoleId(){
            var self = this;
            const params = {
                roleid:self.$route.query.id
            };
            self.$ajax.getResourceByRoleId(params).then((res)=> {
                self.ruleForm.role = res.lists[0].r_role;
                var listsData = JSON.parse(res.lists[0].r_resource);
                self.filterData(listsData)
            });
        },
        filterData(listsData){
            var self = this;
            listsData.forEach((item) => {
                if(item.children && item.children.length){
                    // 递归
                    self.filterData(item.children)
                }
                self.ruleForm.tableData.forEach((s) => {
                    if((s.name == item.name)){
                        s.isAuth = item.isAuth;
                    }
                    s.children.forEach((j) =>{
                       if((j.name == item.name)){
                            j.isAuth = item.isAuth;
                            return
                        } 
                    })                   
                })           
            })
        },
        handleCheckAll(e,index){
            console.log()
            this.ruleForm.tableData[index].children.forEach((item)=>{
                item.isAuth = e;
            });
        },
        SubmitBtn(formName){
            const self = this;
            self.$refs[formName].validate((valid) => {
                if (valid) {
                    self.saveRole()
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        saveRole(){
            const self = this;
            const params = {
                r_role: self.ruleForm.role,
                r_desc: self.ruleForm.role,
                r_resource:JSON.stringify(self.ruleForm.tableData),
                id:self.$route.query.id
            };
            self.$ajax.saveRole(params).then((res)=> {
                if(res.returnCode == 1){
                    self.$router.push({ path: '/RoleList' });   
                }else{
                    self.$alert(res.returnMsg,'系统提示')
                }
            });
        } 
    }  
}  
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .form-content{
        width: 100%;
    }
    .role-input{
        width: 210px;
    }
    .form-submit{
        display: block;
        margin: 0 auto;      
    }  
</style>
