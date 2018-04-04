<template>
    <div class="panel">
        <div class="panel-head">
            <h5><span class="el-icon-star-off"></span>{{title}}</h5>
        </div>
        <div class="panel-cont">
            <div id="listform">
                <div class="addo_contentall">
                    <div class="addo_content">
                        <el-row :gutter="8">
                            <el-col :span="8">
                                <div class="el-form-item">
                                        <label for="payNumber" class="el-form-item__label">借款人/机构:</label>
                                        <div class="el-form-item__content">
                                            <el-select v-model="value1" placeholder="请选择">
                                                <el-option
                                                  v-for="item in options1"
                                                  :key="item.value"
                                                  :label="item.label"
                                                  :value="item.value">
                                                </el-option>
                                            </el-select>
                                        </div>
                                    </div>
                            </el-col>
                        </el-row>
                    </div>
                </div>
                <div class="addo_contentall">
                    <div class="addo_content">
                        <el-row :gutter="8">
                            <el-col :span="8">
                                <label for="payNumber" class="el-form-item__label marl17">用户名称:</label>
                                <div class="el-form-item__content">
                                    <el-input  placeholder="请输入内容" class="el-form-item__content"></el-input>
                                </div>
                            </el-col>
                        </el-row>
                    </div>
                </div>
                <div class="addo_contentall">
                    <div class="addo_content">
                        <el-row :gutter="8">
                            <el-col :span="8">
                                <label for="payNumber" class="el-form-item__label marl3">用户手机号:</label>
                                <div class="el-form-item__content">
                                    <el-input  placeholder="请输入内容" class="el-form-item__content"></el-input>
                                </div>
                            </el-col>
                        </el-row>
                    </div>
                </div>
                <el-button type="primary" class="suresmilt">确认提交</el-button>
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
                title: "新增用户",
                options1:[{
                    value: '01',
                    label: 'A端'
                }, {
                  value: '02',
                  label: 'B端'
                }],
                value1:''
            }
        },
        created(){
            
        },
        methods: {
            
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
    .marl17{
        margin-left: 17px;
    }
    .marl3{
        margin-left: 3px;
    }
    .suresmilt{
        display: block;
        margin: 10px 0 10px 20px;
    }
</style>