<template>
    <div class="panel">
        <div class="panel-head">
            <h5><span class="el-icon-star-off"></span>{{title}}</h5>
            <div class="addo_content">
                <el-row :gutter="10">
                  <el-col :span="10">
                        <label for="payNumber" class="el-form-item__label">选择借款产品:</label>
                        <div class="el-form-item__content">
                            <el-select v-model="value01" placeholder="请选择">
                                <el-option
                                  v-for="item in options01"
                                  :key="item.value"
                                  :label="item.label"
                                  :value="item.value">
                                </el-option>
                            </el-select>
                        </div>
                  </el-col>
                </el-row>
                <el-row :gutter="20">
                    <el-col :span="10">
                        <label for="payNumber" class="el-form-item__label marl42">主品牌:</label>
                        <div class="el-form-item__content">
                            <el-select v-model="value02" placeholder="请选择">
                                <el-option
                                  v-for="item in options02"
                                  :key="item.value"
                                  :label="item.label"
                                  :value="item.value">
                                </el-option>
                            </el-select>
                        </div>
                    </el-col>
                    <el-col :span="10">
                        <label for="payNumber" class="el-form-item__label">选择借款产品:</label>
                        <div class="el-form-item__content">
                            <el-input  placeholder="请输入内容" class="el-form-item__content"></el-input>
                        </div>
                    </el-col>
                </el-row>
                <el-row :gutter="20">
                    <el-col :span="10">
                        <label for="payNumber" class="el-form-item__label marl27">厂商系列:</label>
                        <div class="el-form-item__content">
                            <el-select v-model="value03" placeholder="请选择">
                                <el-option
                                  v-for="item in options03"
                                  :key="item.value"
                                  :label="item.label"
                                  :value="item.value">
                                </el-option>
                            </el-select>
                        </div>
                    </el-col>
                    <el-col :span="10">
                        <label for="payNumber" class="el-form-item__label marl42">零售价:</label>
                        <div class="el-form-item__content">
                            <el-input  placeholder="请输入内容" class="el-form-item__content"></el-input>
                        </div>
                    </el-col>
                </el-row>
                <el-row :gutter="20">
                    <el-col :span="10">
                        <label for="payNumber" class="el-form-item__label marl54">型号:</label>
                        <div class="el-form-item__content">
                            <el-select v-model="value04" placeholder="请选择">
                                <el-option
                                  v-for="item in options04"
                                  :key="item.value"
                                  :label="item.label"
                                  :value="item.value">
                                </el-option>
                            </el-select>
                        </div>
                    </el-col>
                    <el-col :span="10">
                        <label for="payNumber" class="el-form-item__label marl42">批发价:</label>
                        <div class="el-form-item__content">
                            <el-input  placeholder="请输入内容" class="el-form-item__content"></el-input>
                        </div>
                    </el-col>
                </el-row>
                <el-row :gutter="10">
                    <el-col :span="10">
                        <span class="demonstration padl20">信息有效期:</span>
                        <el-date-picker
                          v-model="datatime1"
                          type="date"
                          placeholder="选择日期" class="marl14">
                        </el-date-picker>
                    </el-col>
                </el-row>
            </div>
            <h5 class="mart10"><span class="el-icon-star-off"></span>{{title1}}</h5>
            <div class="addo_content">
                <el-row :gutter="20">
                    <el-col :span="10">
                        <label for="payNumber" class="el-form-item__label">车辆识别代码:</label>
                        <div class="el-form-item__content">
                            <el-input  placeholder="请输入内容" class="el-form-item__content"></el-input>
                        </div>
                    </el-col>
                    <el-col :span="10">
                        <label for="payNumber" class="el-form-item__label marl28">汽车颜色:</label>
                        <div class="el-form-item__content">
                            <el-select v-model="value05" placeholder="请选择">
                                <el-option
                                  v-for="item in options05"
                                  :key="item.value"
                                  :label="item.label"
                                  :value="item.value">
                                </el-option>
                            </el-select>
                        </div>
                    </el-col>
                </el-row>
                <el-row :gutter="20">
                    <el-col :span="10">
                        <label for="payNumber" class="el-form-item__label marl27">行驶里程:</label>
                        <div class="el-form-item__content">
                            <el-input  placeholder="请输入内容" class="el-form-item__content"></el-input>
                        </div>
                    </el-col>
                    <el-col :span="10">
                        <label for="payNumber" class="el-form-item__label marl28">内饰颜色:</label>
                        <div class="el-form-item__content">
                            <el-select v-model="value06" placeholder="请选择">
                                <el-option
                                  v-for="item in options06"
                                  :key="item.value"
                                  :label="item.label"
                                  :value="item.value">
                                </el-option>
                            </el-select>
                        </div>
                    </el-col>
                </el-row>
                <el-row :gutter="20">
                    <el-col :span="10">
                        <label for="payNumber" class="el-form-item__label marl27">汽车性质:</label>
                        <div class="el-form-item__content">
                            <el-select v-model="value07" placeholder="请选择">
                                <el-option
                                  v-for="item in options07"
                                  :key="item.value"
                                  :label="item.label"
                                  :value="item.value">
                                </el-option>
                            </el-select>
                        </div>
                    </el-col>
                    <el-col :span="10">
                        <label for="payNumber" class="el-form-item__label marl28">保险有效期:</label>
                        <div class="el-form-item__content">
                            <el-input  placeholder="请输入内容" class="el-form-item__content"></el-input>
                        </div>
                    </el-col>
                </el-row>
                <el-row :gutter="24">
                    <el-col :span="14">
                        <span class="demonstration padl20">车辆所在地:</span>
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
                    </el-col>
                    <el-col :span="10">
                        <label for="payNumber" class="el-form-item__label marl28">年检有效期:</label>
                        <div class="el-form-item__content">
                            <el-input  placeholder="请输入内容" class="el-form-item__content"></el-input>
                        </div>
                    </el-col>
                </el-row>          
            </div>
        </div>
    </div>
</template>

<script>
    import cityOptions from '../../../static/js/city_data2017_element.js';
    export default {
        data() {
            return {
                title: "新增标的信息（必填)",
                options01: [{
                  value: '01',
                  label: 'A机构'
                }, {
                  value: '02',
                  label: 'B机构'
                }],
                value01:'',
                options02: [{
                  value: '01',
                  label: 'A机构'
                }, {
                  value: '02',
                  label: 'B机构'
                }],
                value02:'',
                options03: [{
                  value: '01',
                  label: 'A机构'
                }, {
                  value: '02',
                  label: 'B机构'
                }],
                value03:'',
                options04: [{
                  value: '01',
                  label: 'A机构'
                }, {
                  value: '02',
                  label: 'B机构'
                }],
                value04:'',
                datatime1:'',
                title1:'车辆信息(必填)',
                options05: [{
                  value: '01',
                  label: 'A机构'
                }, {
                  value: '02',
                  label: 'B机构'
                }],
                value05:'',
                options06: [{
                  value: '01',
                  label: 'A机构'
                }, {
                  value: '02',
                  label: 'B机构'
                }],
                value06:'',
                options07: [{
                  value: '01',
                  label: 'A机构'
                }, {
                  value: '02',
                  label: 'B机构'
                }],
                value07:''
            }
        },
        created(){
            
        },
        methods: {
        }
    }
</script>

<style scoped>
    h5{
        font-weight: bold;
    }
    .el-row {
        margin-top: 10px;
        &:last-child {
          margin-bottom: 0;
        }
    }
    .addo_content{
        width: 1000px;
    }
    .el-form-item__content{
        display: inline-block;
        vertical-align: top;
        line-height: 40px;
        position: relative;
        font-size: 14px;
        width: 202px;
    }
    .mart10{
        margin-top: 10px;
    }
    .marl41{
        margin-left: 41px;
    }
    .marl27{
        margin-left: 27px;
    }
    .marl42{
        margin-left: 42px;
    }
    .marl54{
        margin-left: 54px;
    }
    .padl20{
        padding-left: 20px;
    }
    .marl28{
        margin-left: 28px;
    }
    .el-date-editor--date{
        width: 202px;
    }
</style>