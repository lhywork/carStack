<template>
    <div class="main-content">
        <h2 class="main-title"><i class="fa fa-tags"></i>查看借款产品</h2>
        <div class="main-form">
            <el-form class="loan-form" :model="form" label-width="120px">
                <el-form-item label="借款产品名称:">
                    <label for="payNumber" class="el-form-item__label">{{form.name}}</label>
                </el-form-item>
                <el-form-item label="提前还款:">
                    <label for="payNumber" v-if="form.if_forward == '0'">不能</label>
                    <label for="payNumber" v-if="form.if_forward == '1'">能</label>
                </el-form-item>
            </el-form>
            <el-table :data="form.tableData" style="width: 100%">
                <el-table-column prop="term_day" label="期限(月)"  show-overflow-tooltip  align="center"></el-table-column>
                <el-table-column prop="apr_day" label="日利率"  show-overflow-tooltip  align="center"></el-table-column>
                <el-table-column prop="apr_year" label="基础年化利率"  show-overflow-tooltip  align="center"></el-table-column>
                <el-table-column prop="incidental1" label="杂费项1"  show-overflow-tooltip  align="center"></el-table-column>
                <el-table-column prop="incidental2" label="杂费项2"  show-overflow-tooltip  align="center"></el-table-column>
                <el-table-column prop="incidental3" label="杂费项3"  show-overflow-tooltip  align="center"></el-table-column>
                <el-table-column prop="incidental4" label="杂费项4"  show-overflow-tooltip  align="center"></el-table-column>
            </el-table>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                form:{
                    name:'',
                    if_forward:'',
                    tableData:[],
                },            
            }
        },
        methods: {
            Ready(){
                const self = this;
                const params = {
                    id:self.$route.query.id
                }
                self.$ajax.getBorrowProById(params).then((res)=> {
                    self.form.name = res.lists[0].name;
                    self.form.if_forward = res.lists[0].if_forward;
                    self.form.tableData = res.lists;
                    // self.form.if_forward = res.lists["0"].if_forward;
                });               
            }
        },  
        created:function(){  
            var self = this;
            self.Ready();
        }
    }
</script>

<style scoped>
    .main-form{  
        margin: 10px 0 ;
    }
    .loan-form{
        width: 460px;
    }
    .barli{
        height: 40px;
        line-height: 40px;
    }
    .add-data{
        width: 100%;
        height: 50px;
        line-height: 50px;
        border: 1px dashed #c0ccda;
        text-align: center;
        margin: 10px 0;
        cursor: pointer;
    }
    .add-data:hover, .add-data:focus {
        border-color: #409EFF;
    }
    .add-data i{
        margin-right: 8px;
    }
    .form-submit{
        float: right;      
    }
    .cell{
        text-align: center;
    }
    .payNumber{
        text-align: center;
    }
</style>