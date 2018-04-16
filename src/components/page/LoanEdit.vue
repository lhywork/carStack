<template>
    <div class="main-content">
        <h2 class="main-title"><i class="fa fa-tags"></i>编辑借款产品</h2>
        <div class="main-form">
            <el-form class="loan-form" ref="form" :model="form" label-width="120px">
                <el-form-item label="借款产品名称">
                    <el-input v-model="form.name" placeholder="请输入借款产品名称"></el-input>
                </el-form-item>
                <el-form-item label="提前还款">
                    <el-radio-group v-model="form.if_forward">
                      <el-radio label="1">能</el-radio>
                      <el-radio label="0">不能</el-radio>
                    </el-radio-group>
                </el-form-item>
            </el-form>
            <el-table :data="form.tableData" style="width: 100%">
                <el-table-column
                    label="期限（月）"
                    align="center">
                    <template slot-scope="scope">
                        <el-input v-model="scope.row.term_day"></el-input>
                    </template>
                </el-table-column>
                <el-table-column
                    label="日利率"
                    align="center">
                    <template slot-scope="scope">
                        <el-input v-model="scope.row.apr_day"></el-input>
                    </template>
                </el-table-column>
                <el-table-column
                    label="基础年化利率"
                    align="center">
                    <template slot-scope="scope">
                        <el-input v-model="scope.row.apr_year"></el-input>
                    </template>
                </el-table-column>
                <el-table-column
                    label="杂费项1"
                    align="center">
                    <template slot-scope="scope">
                        <el-input v-model="scope.row.incidental1"></el-input>
                    </template>
                </el-table-column>
                <el-table-column
                    label="杂费项2"
                    align="center">
                    <template slot-scope="scope">
                        <el-input v-model="scope.row.incidental2"></el-input>
                    </template>
                </el-table-column>
                <el-table-column
                    label="杂费项3"
                    align="center">
                    <template slot-scope="scope">
                        <el-input v-model="scope.row.incidental3"></el-input>
                    </template>
                </el-table-column>
                <el-table-column
                    label="杂费项4"
                    align="center">
                    <template slot-scope="scope">
                        <el-input v-model="scope.row.incidental4"></el-input>
                    </template>
                </el-table-column>
                <el-table-column
                    label="操作"
                    align="center">
                    <template slot-scope="scope">
                       <el-button @click="handleDel(scope.$index)" type="danger" size="small">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
<!--             <div class="add-data" @click="handleAdd"><i class="el-icon-plus"></i>添加子产品</div> -->
            <el-button @click="SubmitBtn()" class="form-submit" type="success">确认提交</el-button>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                form:{
                    name:'',
                    tableData:[],
                    if_forward:"",
                },           
            }
        },
        methods: {
            handleDel(index){
                if (index !== 0) {
                   this.form.tableData.splice(index, 1)
                }else{
                    this.$alert("不能删除,至少保留一栏","系统后台提示")
                }
            },
            handleAdd(){
                this.form.tableData.push({
                    term_day:'',
                    apr_day:'',
                    incidental1:'',
                    incidental2:'',
                    incidental3:'',
                    incidental4:''
                });
            },
            Ready(){
                const self = this;
                const params = {
                    id:self.$route.query.id
                }
                self.$ajax.getBorrowProById(params).then((res)=> {
                    self.form.name = res.lists[0].name;
                    self.form.if_forward = res.lists[0].if_forward.toString();
                    self.form.tableData = res.lists
                });  
            }
        },  
        created:function(){  
            const self = this;
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
</style>