<template>
  <div class="main-content">
    <div class="main-module">
        <h2 class="main-title"><i class="fa fa-tags"></i>新增角色</h2>
        <div class="action-bar">
            <div class="barli">
                <label>角色名称</label><el-input class="role-input" placeholder="请输入角色名称"></el-input>       
            </div>
        </div>
        <div class="main-form">
            <div id="J_Form" class="form-content">
                <el-table :data="tableData" style="width: 100%">
                    <el-table-column type="expand">
                        <template slot-scope="scope">
                            <el-form label-position="left" inline class="demo-table-expand">
                                <el-form-item >
                                <!-- <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange"> -->
                                    <el-checkbox v-for="(item, index) in scope.row.children" :key="index" style="margin:0 10px" v-model="item.isAuth" v-if="item.isAuth !== undefined">{{item.name}}</el-checkbox>
                                <!-- </el-checkbox-group> -->
                                </el-form-item>
                            </el-form>
                        </template>
                    </el-table-column>
                    <el-table-column prop="name" label="导航名称" show-overflow-tooltip align="center"></el-table-column>
                    <el-table-column prop="isAuth" label="权限分配" show-overflow-tooltip align="center">
                        <template slot-scope="scope">
                            <el-checkbox v-model="scope.row.isAuth" @change="handleCheckAll">显示</el-checkbox>
                        </template>                      
                    </el-table-column>
                </el-table>
            </div>
        </div>
    </div>
    <el-button class="form-submit" type="success">确认提交</el-button>
  </div>
</template>
<script>
export default {  
    data () {  
        return {  
            tableData:[{
                "name":"资产端管理",
                "isAuth":true,
                "children": [{
                    "name": "基础资料管理",
                    "path": "/MaterialList",
                    "isAuth":true
                },{
                    "name":"新增基础资料",
                    "path": "/MaterialAdd",
                    "isAuth":true
                }, {
                    "name":"编辑基础资料",
                    "path": "/MaterialEdit",
                    "isAuth":true
                },{
                    "name":"查看基础资料",
                    "path": "/MaterialCheck",
                    "isAuth":true
                },{
                    "name": "授权额度管理",
                    "path": "/GrantlimitList",
                    "isAuth":true
                }]
            },{
                "name": "产品管理",
                "isAuth":true,
                "children": [{
                    "name": "借款产品管理",
                    "path": "/LoanList",
                    "isAuth":true
                },{
                    "name": "新增借款产品",
                    "path": "/LoanAdd",          
                    "isAuth":true
                },{    
                    "name": "查看借款产品",
                    "path": "/LoanCheck",
                    "isAuth":true
                },{
                    "name": "编辑借款产品",
                    "path": "/LoanEdit",     
                    "isAuth":true
                }]
            },{
                "name":"标的管理",
                "isAuth":true,
                "children": [{
                    "path": "/Allobject",
                    "name": "所有标的",
                    "isAuth":true
                },{
                    "path": "/Addobject",
                    "name": "新增标的信息",
                    "isAuth":true
                },{
                    "path": "/Firstobject",
                    "name": "标的初审",
                    "isAuth":true
                },{
                    "path": "/Secondobject",
                    "name": "标的复审",
                    "isAuth":true
                },{
                    "path": "/Thirdlyobject",
                    "name": "真实借款金额信息",
                    "isAuth":true
                },{
                    "path": "/FobjectC",
                    "name": "初审标的审核",
                    "isAuth":true
                },{
                    "path": "/SobjectC",
                    "name": "复审标的审核",
                    "isAuth":true
                },{
                    "path": "/TobjectC",
                    "name": "真实借款金额审核",
                    "isAuth":true
                }]
            },{
                "name":"用户权限",
                "isAuth":true,
                "children": [{
                    "name": "用户管理",
                    "path": "/UserManager",
                    "isAuth":true
                },{
                    "name":"新增用户",
                    "path": "/UserAdd",
                    "isAuth":true
                }, {
                    "name":"编辑用户",
                    "path": "/UserCompile",
                    "isAuth":true
                },{
                    "name":"角色配置",
                    "path": "/RoleList",
                    "isAuth":true
                },{
                    "name": "新增角色",
                    "path": "/RoleAdd",
                    "isAuth":true
                }]
            }]
        }  
    },  
    methods:{
        handleCheckAll(e){
            console.log(e)
        }  
    }  
}  
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .form-content{
        width: 100%;
    }
    .action-bar{
        margin: 10px 0 10px 0;
    }
    .barli{
        height: 40px;
        line-height: 40px;
    }
    .role-input{
        width: 210px;
        margin-left: 10px;
    }
    .form-submit{
        display: block;
        margin: 0 auto;      
    }  
</style>
