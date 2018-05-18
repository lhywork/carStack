<template>
  <div class="main-content">
    <h2 class="main-title"><i class="fa fa-tags"></i>借款产品管理</h2>
    <div class="search-box">
        <el-button type="primary" @click="handleAdd()"><i class="fa fa-plus-square-o"></i>新增</el-button>
    </div>
    <div class="addo_contentall">
        <div class="addo_content">
            <el-row :gutter="24">
                <el-col :span="8">
                    <el-input  placeholder="输入借款产品名称" class="el-form-item__content" v-model="name"></el-input>
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
                    <label for="payNumber" v-if="scope.row.status == '0'">未上架</label>
                    <label for="payNumber" v-else-if="scope.row.status == '1'">已上架</label>
                    <label for="payNumber" v-else="scope.row.status == '2'">已下架</label>
                </template>
            </el-table-column>
            <el-table-column prop="add_time" label="创建时间"  show-overflow-tooltip  align="center" v-bind:formatter="Addtime"></el-table-column>
            <el-table-column prop="" label="操作" show-overflow-tooltip  header-align="center">
                <template slot-scope="scope">
                        <el-button type='primary' size='small' @click="LoanCheck(scope.row.id)">查看</el-button>
                        <el-button type='success' size='small' @click="LoanEdit(scope.row.id)" v-if="scope.row.status === '0'">编辑</el-button>
                        <el-button type='success' size='small' @click="LoanEdit(scope.row.id)" v-if="scope.row.status === '2'">编辑</el-button>
                        <el-button type='danger'  size='small' v-if="scope.row.status === '1'" @click="SoldOut(scope.row.id,scope.row.status)">下架</el-button>
                        <el-button type='danger' size='small'  v-else @click="SoldUp(scope.row.id,scope.row.status)">上架</el-button>     
                </template>
            </el-table-column>
        </el-table>
    </div>
    <el-row :gutter="24">
        <el-col :span="24">
            <el-pagination background layout="prev, pager, next,sizes" v-bind:total="total" class="page" v-bind:page-size="epage" v-bind:current-page="page" @current-change="handleCurrentChange" v-bind:page-sizes="pagesizes" @size-change="handleSizeChange"></el-pagination>
            </el-pagination>
        </el-col>
    </el-row>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
    export default {
        data() {
            return {
                title: "用户管理",
                tableData:[],
                name:'',
                page:1,
                epage:5,
                total:1,
                pagesizes:[5, 10, 15, 20],
                status1:''
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
                self.$store.dispatch('getlist',params).then((res)=> {
                    console.log(res);
                    self.total = res.total;
                    self.tableData = res.lists;  
                });
            },
            handleCurrentChange:function(e){
                const self = this;
                this.page = e;
                self.getBorrowProList();
            },
            handleAdd(){
                this.$router.push('/LoanAdd');
            },
            handleSizeChange(e){
                const self = this;
                this.epage = e;
                self.getBorrowProList();
            },
            handleQuery(){
                const self = this;
                self.getBorrowProList();
            },
            Addtime(row,column){
                const self = this;
                const date = row[column.property]; 
                if (date == undefined) {  
                     return "";  
                }  
                return self.$ajax.formatDate(date,"yyyy-MM-dd hh:mm:ss"); 
            },
            SoldOut(id,status){
                const self = this;
                if(status == 1){
                    self.status1 = 2
                }else{
                    self.status1 = 1
                }
                const params = {
                    id:id,
                    status:self.status1,
                }
                self.$ajax.updateStatus(params).then((res)=> {
                    if(res.returnCode == 1){
                        self.getBorrowProList();  
                    }else{
                        self.$alert(res.returnMsg,'系统提示')
                    }
                });
            },
            SoldUp(id,status){
                const self = this;
                if(status == 1){
                    self.status1 = 2
                }else{
                    self.status1 = 1
                }
                const params = {
                    id:id,
                    status:self.status1,
                }
                self.$ajax.updateStatus(params).then((res)=> {
                    if(res.returnCode == 1){
                        self.getBorrowProList();  
                    }else{
                        self.$alert(res.returnMsg,'系统提示')
                    }
                });
            },
            LoanCheck(e){
                const self = this;
                self.$router.push({
                    path:'LoanCheck',
                    query: {id: e}
                })
            },
            LoanEdit(e){
                const self = this;
                self.$router.push({
                    path:'LoanEdit',
                    query: {id: e}
                })
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
    .addo_contentall{
        border-top: 1px solid #ddd;
    }
    .el-pagination{
        display: block;
        margin: 0 auto;
    }
    .page1{
        text-align: center;
    }
    .page{
        text-align: right;
    }
</style>