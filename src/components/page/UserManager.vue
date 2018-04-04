<template>
    <div class="panel">
        <div class="panel-head">
            <h5><span class="el-icon-star-off"></span>{{title}}</h5>
        </div>
        <div class="panel-cont">
            <div id="listform">
                <div class="padding border-bottom">
                    <ul class="search marl11">
                        <li>
                            <a class="button border-main" href="javascript:void(0);" @click="UserNew()">
                                <i class="fa fa-plus-square-o"></i>新增
                            </a>
                        </li>
                    </ul>
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
                <table class="table table-hover text-center" id="table1">
                    <tbody>
                        <tr>
                            <th>姓名</th>
                            <th>手机号</th>
                            <th>角色</th>
                            <th>操作</th>
                        </tr>
                    </tbody>
                    <tbody id="course-list">
                        <tr>
                            <td>1</td>
                            <td>2</td>                       
                            <td>2</td> 
                            <td>
                                <div>
                                    <el-button type="primary">查看</el-button>
                                    <el-button type="danger">删除</el-button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
    import FileSaver from 'file-saver'
    import XLSX from 'xlsx'
    export default {
        data() {
            return {
                title: "用户管理",
            }
        },
        created(){
            
        },
        methods: {
            UserNew:function(){
                const self = this;
                self.$router.push('/UserNew');
            },
        }
    }
</script>

<style scoped>
    .addo_contentall{
      width: 100%;
      border-bottom:1px solid #ddd;
    }
    .addo_content{
      width: 1000px;
      margin: 10px 0 10px 20px;
    }
    .el-formz{
        padding: 10px 30px ;
        border-bottom: 1px solid #ddd;
    }
    .el-form-item{
        display: inline-block;
        margin-right: 20px;
        vertical-align: top;
        margin-bottom: 0!important
    }
    .el-form-item__label{
        display: inline-block;
        text-align: right;
        vertical-align: middle;
        font-size: 14px;
        color: #5a5e66;
        line-height: 40px;
        padding: 0 12px 0 0;
        box-sizing: border-box;
    }

    .el-form-item__content{
        display: inline-block;
        vertical-align: top;
        line-height: 40px;
        position: relative;
        font-size: 14px;
        width: 202px;
    }

    .el-input__inner{
        width: 202px!important;
    }
    .el-input{
        position: relative;
        font-size: 14px;
        display: inline-block;
        width: 100%;
    } 
    .panel-cont {
        overflow: hidden;
    }
    .marl11{
        margin-left: 11px
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