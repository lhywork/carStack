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
                                新增
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="el-formz">
                    <div class="el-form-item">
                        <label for="payNumber" class="el-form-item__label">标的流水号:</label>
                        <div class="el-form-item__content">
                        <el-input  placeholder="请输入内容" class="el-form-item__content"></el-input>
                        </div>
                    </div>
                    <div class="el-form-item">
                        <label for="payNumber" class="el-form-item__label">借款人/机构:</label>
                        <div class="el-form-item__content">
                            <el-select v-model="originvalue" placeholder="请选择">
                                <el-option
                                  v-for="item in originoptions"
                                  :key="item.value"
                                  :label="item.label"
                                  :value="item.value">
                                </el-option>
                            </el-select>
                        </div>
                    </div>
                    <div class="el-form-item">
                        <label for="payNumber" class="el-form-item__label">资金端:</label>
                        <div class="el-form-item__content">
                            <el-select v-model="moneyvalue" placeholder="请选择">
                                <el-option
                                  v-for="item in moneyoptions"
                                  :key="item.value"
                                  :label="item.label"
                                  :value="item.value">
                                </el-option>
                            </el-select>
                        </div>
                    </div>
                </div>
                <div class="el-formz">
                    <div class="el-form-item">
                        <label for="payNumber" class="el-form-item__label padl10">标的状态:</label>
                        <div class="el-form-item__content marl5">
                            <el-select v-model="statevalue" placeholder="请选择" >
                                <el-option
                                  v-for="item in stateoptions"
                                  :key="item.value"
                                  :label="item.label"
                                  :value="item.value">
                                </el-option>
                            </el-select>
                        </div>
                    </div>
                    <div class="el-form-item">
                        <label for="payNumber" class="el-form-item__label padl14">借款产品:</label>
                        <div class="el-form-item__content marl3">
                            <el-select v-model="productvalue" placeholder="请选择">
                                <el-option
                                  v-for="item in productoptions"
                                  :key="item.value"
                                  :label="item.label"
                                  :value="item.value">
                                </el-option>
                            </el-select>
                        </div>
                    </div>
                </div>
                <div class="el-formz">
                     <div class="block">
                        <span class="demonstration">申请时间:</span>
                        <el-date-picker
                          v-model="datatime1"
                          type="date"
                          placeholder="选择日期" class="marl14">
                        </el-date-picker>
                        <el-date-picker
                          v-model="datatime2"
                          type="date"
                          placeholder="选择日期" class="marl14">
                        </el-date-picker>
                      </div>
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
    
    export default {
        data() {
            return {
                title: "所有标的",
                curPage: 1,
                rows:50,
                tableData: [],
                originoptions: [{
                  value: '01',
                  label: 'A机构'
                }, {
                  value: '02',
                  label: 'B机构'
                }],
                originvalue: '',
                moneyoptions:[{
                    value: '01',
                    label: 'A端'
                }, {
                  value: '02',
                  label: 'B端'
                }],
                moneyvalue:'',
                stateoptions:[{
                    value: '01',
                    label: 'A端'
                }, {
                  value: '02',
                  label: 'B端'
                }],
                statevalue:'',
                productoptions:[{
                    value: '01',
                    label: 'A端'
                }, {
                  value: '02',
                  label: 'B端'
                }],
                productvalue:'',
                datatime1:'',
                datatime2:''
            }
        },
        created(){
           
        },
        methods: {

        }
    }
</script>

<style scoped>
    .el-formz{
        margin: 10px 30px ;
    }
    .el-form-item{
        display: inline-block;
        margin-right: 20px;
        vertical-align: top;
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
    .padl14{
        padding-left: 14px;
    }
    .padl10{
        padding-left: 10px;
    }
    .marl5{
        margin-left: 5px;
    }
    .marl3{
        margin-left: 3px;
    }
    .marl14{
        margin-left: 14px;
    }
    .el-date-editor--date{
        width: 202px;
    }
    .demonstration{
        padding-left: 9px;
    }
</style>