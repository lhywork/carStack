<template>
    <div class="panel">
        <div class="panel-head">
            <h5><span class="icon-key"></span>{{title}}</h5>
        </div>
        <div class="panel-cont">
            <div id="listform">
                <div class="padding border-bottom">
                    <ul class="search">
                        <li>
                            <a class="button border-main icon-plus-square-o" href="javascript:void(0);" @click="handleAdd()">
                                添加课程类别
                            </a>
                        </li>
                    </ul>
                </div>
                <table class="table table-hover text-center">
                    <tbody>
                        <tr>
                            <th>ID</th>
                            <th>课程类型</th>
                            <th>操作</th>
                            <th>更新时间</th>
                        </tr>
                    </tbody>
                    <tbody id="course-list">
                        <tr v-for="item in tableData">
                            <td>{{item.id}}</td>
                            <td>{{item.name}}</td>                       
                            <td>
                                <div class="button-group">
                                    <a class="button border-main" href="javascript:void(0);" @click="handleEdit(item.name,item.id)">
                                        <span class="icon-edit"></span>
                                        编辑
                                    </a>
                                    <a class="button border-red" href="javascript:void(0);" @click="handleDel(item.id)">
                                        <span class="icon-trash-o"></span>
                                        删除
                                    </a>
                                </div>
                            </td>
                            <td>{{item.updateTime}}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
    import { getCourseTypeList,addCourseType,delCourseType,updateCourseType } from '@/api';
    export default {
        data() {
            return {
                title: "课程类别",
                curPage: 1,
                rows:50,
                tableData: [],
            }
        },
        created(){
            this.getData();
        },
        methods: {
            //获取课程类别数据
            getData() {
                const self = this;
                const Params = self.curPage + '/' + self.rows;
                getCourseTypeList(Params).then((res) => {
                    self.tableData = res.data.rows;
                })
            },
            //新增课程类别
            handleAdd() {
                const self = this;    
                self.$prompt('请输入课程类别', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    inputPattern: /\S/,
                    inputErrorMessage: '课程类别不能为空'
                }).then(({ value }) => {
                    const Params = { 
                        name: value               
                    };
                    addCourseType(Params).then((res) => {
                        if(res.data.flag){
                            self.$message.success(res.data.msg);
                            self.getData();
                        }
                    })
                });
            },
            //编辑课程类别
            handleEdit(name,id){
                const self = this;    
                self.$prompt('请输入修改课程类别', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    inputValue:name,
                    inputPattern: /\S/,
                    inputErrorMessage: '课程类别不能为空'
                }).then(({ value }) => {
                    let Value = value.replace(/(^\s+)|(\s+$)/g, ""); //去除空格
                    if(name == Value){
                        return false;
                    };
                    let Params = { 
                        id: id,
                        name: Value               
                    };
                    updateCourseType(id,Params).then((res) => {
                        if(res.data.flag){
                            self.$message.success(res.data.msg);
                            self.getData();
                        }
                    });
                });
            },
            //删除课程类别
            handleDel(id){
                const self = this;
                self.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                    type: 'warning'
                }).then(() => {
                    delCourseType(id).then((res) => {
                        if(res.data.flag){
                            self.$message.success(res.data.msg);
                            self.getData();
                        }
                    });
                }).catch(() => {
                    // this.$message.info('已取消删除!');          
                });
            }
        }
    }
</script>

<style scoped>
    .panel-cont {
        overflow: hidden;
    }
    h5{
        font-weight: bold;
    }
    .search {
        overflow: hidden;
        padding-left:10px;
    }
    .search li {
        float: left;
        margin-right: 15px;
        line-height: 35px
    }
    .search .input{
        width: 200px;
        line-height: 16px;
        cursor: pointer;
    }
    .search .keywords{
        width:250px; 
        line-height:16px;
        display:inline-block;
    }
    .button {
        padding: 8px 15px;
    }
    .table th{
        text-align: center;
        padding: 12px;
    }
    .table td {
        vertical-align: middle;
        padding: 10px;
    }
</style>