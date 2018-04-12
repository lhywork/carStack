<template>
  <div class="main-content">
    <h2 class="main-title"><i class="fa fa-tags"></i>用户管理</h2>
    <div class="search-box">
        <el-button type="primary" @click="handleAdd()"><i class="fa fa-plus-square-o"></i>新增</el-button>
    </div>
    <div class="addo_contentall">
        <div class="addo_content">
            <el-row :gutter="24">
                <el-col :span="8">
                    <el-input  placeholder="用户姓名" class="el-form-item__content" v-model="username"></el-input>
                </el-col>
                <el-col :span="8">
                    <el-input  placeholder="手机号" class="el-form-item__content" v-model="niname"></el-input>
                </el-col>
                <el-col :span="8">
                    <el-button type="primary" @click="handleQuery()">查询</el-button>
                </el-col>
            </el-row>
        </div>
    </div>
    <div class="main-form">
        <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="username" label="姓名"  show-overflow-tooltip  align="center"></el-table-column>
            <el-table-column prop="niname" label="手机号"  show-overflow-tooltip  align="center"></el-table-column>
            <el-table-column prop="role" label="角色"  show-overflow-tooltip  align="center"></el-table-column>
            <el-table-column label="操作"  show-overflow-tooltip  align="center">
                <template slot-scope="scope">
                    <el-button type="success" size="small" @click="handleEdit(scope.row.id)">编辑</el-button>
                    <el-button type="danger" size="small" @click="handleDelete(scope.row.id)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
    <el-row :gutter="24">
        <el-col :span="24">
            <el-pagination background layout="prev, pager, next" v-model="total" :total="total" class="page1" :page-size="epage" :current-page="page" @current-change="handleCurrentChange"></el-pagination>
        </el-col>
    </el-row>
  </div>
</template>
<script>
    export default {
        data() {
            return {
                title: "用户管理",
                tableData:[],
                page:1,
                epage:5,
                total:1,
                username:'',
                niname:''
            }
        },
        methods: {
            handleAdd:function(){
                const self = this;
                self.$router.push('/UserAdd');
            },
            getListData:function() {
                const self = this;
                const params = {
                    username:self.username,
                    niname:self.niname,
                    page:self.page,
                    epage:self.epage
                };
                self.$ajax.getAdminInfoList(params).then((res)=> {
                    self.tableData = res.lists;
                    self.total = parseInt(res.total);
                    console.log(self.total)
                });
            },
            handleEdit:function(e){
                // console.log(e)
                const self = this;
                self.$router.push({
                    name:'编辑用户',
                    query: {id:e}
                })
            },
            handleDelete:function(e){
                const self = this;
                self.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                    type: 'warning'
                }).then(() => {
                    const params = {
                        userid:e
                    };
                    self.$ajax.adminRoledelete(params).then((res)=> {
                        if(res.returnCode == 1){
                             self.getListData(); 
                        }else{
                            self.$alert(res.returnMsg,'系统提示')
                        }
                    });
                }).catch(() => {         
                });
            },
            handleCurrentChange:function(val){
                var self = this;
                self.page=val
                self.getListData();
            },
            handleQuery:function(){
                var self = this;
                self.getListData();
            }
        },  
        created:function(){  
          this.getListData();  
        }
    }
</script>

<style scoped>
    .addo_content{
        width: 1000px;
        margin: 10px 0 10px 0;
    }
    .el-pagination{
        display: block;
        margin: 0 auto;
    }
    .page1{
        text-align: center;
    }
</style>