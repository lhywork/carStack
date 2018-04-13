<template>
  <div class="main-content">
    <h2 class="main-title"><i class="fa fa-tags"></i>借款产品管理</h2>
    <div class="search-box">
        <el-button type="primary"><i class="fa fa-plus-square-o"></i>新增</el-button>
    </div>
    <div class="addo_contentall">
        <div class="addo_content">
            <el-row :gutter="24">
                <el-col :span="8">
                    <el-input  placeholder="输入借款产品名称" class="el-form-item__content"></el-input>
                </el-col>
                <el-col :span="8">
                    <el-button type="primary" @click="handleQuery()">查询</el-button>
                </el-col>
            </el-row>
        </div>
    </div>
    <div class="main-form">
        <el-table  v-bind:data="tableData" style="width: 100%">
            <el-table-column prop="name" label="借款产品名称"  show-overflow-tooltip  align="center"></el-table-column>
            <el-table-column prop="if_forward" label="提前还款"  show-overflow-tooltip  align="center">
                <template slot-scope="scope">
                    {{ scope.row.if_forward ? '能' : '不能' }}
                </template>
            </el-table-column>
            <el-table-column prop="status" label="状态"  show-overflow-tooltip  align="center">
                <template slot-scope="scope">
                    {{ scope.row.status=="1" ? '已上架' : '未上架' }}
                </template>
            </el-table-column>
            <el-table-column prop="add_time" label="创建时间"  show-overflow-tooltip  align="center"></el-table-column>
            <el-table-column prop="" label="操作" show-overflow-tooltip  align="center">
                <template slot-scope="scope">
                        <el-button type='primary' size='small' >查看</el-button>
                        <el-button type='success' size='small'  v-if="scope.row.status === '0'">编辑</el-button>
                        <el-button type='danger' size='small'  v-if="scope.row.status === '1'">下架</el-button>
                        <el-button type='danger' size='small'  v-else-if="scope.row.status === '0'">上架</el-button> 
                         
                        
                </template>
            </el-table-column>
        </el-table>
    </div>
    <el-row :gutter="24">
        <el-col :span="24">
            <el-pagination background layout="prev, pager, next" v-bind:total="total" class="page" :page-size="epage" :current-page="page" @current-change="handleCurrentChange"></el-pagination>
            </el-pagination>
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
                name:'',
                page:1,
                epage:1,
                total:1,
            }
        },
        methods: {
            getBorrowProList:function(){
                const self = this;
                const params = {
                    name:self.name,
                    page:self.page,
                    epage:self.epage
                }
                this.$ajax.getBorrowProList(params).then((res)=> {
                    this.total = res.total;
                    this.tableData = res.lists;
                    console.log(this.tableData)  
                });
            },
            handleCurrentChange:function(e){
                var self = this;
                this.page = e;
                self.getBorrowProList();
            }
        },  
        created:function(){  
            const self = this;
            self.getBorrowProList();
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