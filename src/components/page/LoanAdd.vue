<template>
    <div class="main-content">
        <h2 class="main-title"><i class="fa fa-tags"></i>新增借款产品</h2>
        <div class="main-form">
            <el-form class="loan-form" :model="form" :rules="rules" ref="form" label-width="120px">
                <el-form-item label="借款产品名称" prop="name">
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
            <div class="add-data" @click="handleAdd"><i class="el-icon-plus"></i>添加子产品</div>
            <el-button @click="SubmitBtn('form')" class="form-submit" type="success">确认提交</el-button>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                form:{
                    name:'',
                    if_forward:"1",
                    tableData:[{
                        term_day:'',
                        apr_day:'',
                        incidental1:'',
                        incidental2:'',
                        incidental3:'',
                        incidental4:''
                    }],
                    arr5:[],
                },
                rules:{
                    name:[
                        { required: true, message: '请输入借款产品名称', trigger: 'blur' },
                    ],
                },            
            }
        },
        methods: {
            handleDel(index){
                var self = this;
                if (self.form.tableData.length !== '1' && parseInt(self.form.tableData.length)> 1) {
                   this.form.tableData.splice(index, 1)
                }else{
                    this.$alert("不能删除,至少保留一栏","系统后台提示")
                }
            },
            handleAdd(){
                var self = this;
                this.form.tableData.push({
                    term_day:'',
                    apr_day:'',
                    incidental1:'',
                    incidental2:'',
                    incidental3:'',
                    incidental4:''
                });
            },
            SubmitBtn(formName){
                const self = this;
                self.$refs[formName].validate((valid) => {
                    console.log(self.$refs[formName])
                    if (valid) {
                        const self = this;
                        const params = [];
                        self.form.tableData.forEach((item,index) => {
                            item.name = self.form.name;
                            item.if_forward = self.form.if_forward;
                            params.push(item)
                        })
                        this.$ajax.borrowProSave(params).then((res)=> {
                            if(res.data.returnCode == 1){
                                console.log("22222")
                                self.$router.push({ path: '/LoanList' });   
                            }else{
                                self.$alert(res.returnMsg,'系统提示')
                            }
                        });
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
        },  
        created:function(){  
            const self = this;
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