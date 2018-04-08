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
                    <el-input  placeholder="用户姓名" class="el-form-item__content"></el-input>
                </el-col>
                <el-col :span="8">
                    <el-input  placeholder="手机号" class="el-form-item__content"></el-input>
                </el-col>
                <el-col :span="8">
                    <el-button type="primary">查询</el-button>
                </el-col>
            </el-row>
        </div>
    </div>
    <div class="main-form">
        <el-table :data="tableData" style="width: 100%" height="500">
            <el-table-column prop="username" label="姓名"  show-overflow-tooltip  align="center"></el-table-column>
            <el-table-column prop="niname" label="手机号"  show-overflow-tooltip  align="center"></el-table-column>
            <el-table-column prop="role" label="角色"  show-overflow-tooltip  align="center"></el-table-column>
            <el-table-column prop="add_time" label="更新时间" :formatter="dateFormat" show-overflow-tooltip  align="center"></el-table-column>
            <el-table-column label="操作"  show-overflow-tooltip  align="center">
                <template slot-scope="scope">
                    <el-button type="success" size="small">查看</el-button>
                    <el-button @click="handleEdit(1)" type="danger" size="small">编辑</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
  </div>
</template>
<script>
    export default {
        data() {
            return {
                title: "用户管理",
                tableData:[]
            }
        },
        created(){
            
        },
        methods: {
            handleAdd:function(){
                const self = this;
                self.$router.push('/UserAdd');
            },
            dateFormat:function(row, column){
                var date = row[column.property];  
                if (date == undefined) {  
                    return "";  
                }  
                return this.$ajax.formatDate(date,"yyyy-MM-dd hh:mm:ss");
            },
            getListData:function() {
                const that = this;
                const params = {};
                this.$ajax.getAdminInfoList(params).then((res)=> {
                    that.tableData = res.lists;
                });
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
</style>