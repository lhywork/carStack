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
            <h5 class="mart10"><span class="el-icon-star-off"></span>车辆信息（必填）</h5>
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
                        <label for="payNumber" class="el-form-item__label marl13">保险有效期:</label>
                        <el-date-picker
                          v-model="datatime4"
                          type="date"
                          placeholder="选择日期" class="marl14">
                        </el-date-picker>
                    </el-col>
                </el-row>
                <el-row :gutter="24">
                    <el-col :span="14">
                        <span class="demonstration padl20">车辆所在地:</span>
                        <el-select v-model="sheng" @change="choseProvince" placeholder="选择省份">
                        <el-option v-for="item in province" :key="item.id" :label="item.value" :value="item.id"></el-option>
                        </el-select>
                        <el-select v-model="shi" @change="choseCity" placeholder="选择市">
                            <el-option v-for="item in shi1" :key="item.id" :label="item.value" :value="item.id"></el-option>
                        </el-select>
                    </el-col>
                    <el-col :span="10">
                        <label for="payNumber" class="el-form-item__label marl13">年检有效期:</label>
                        <el-date-picker
                          v-model="datatime3"
                          type="date"
                          placeholder="选择日期" class="marl14">
                        </el-date-picker>
                    </el-col>
                </el-row>
                <el-row :gutter="20">
                    <el-col :span="10">
                        <label for="payNumber" class="el-form-item__label">车辆出厂年月:</label>
                        <el-date-picker
                          v-model="datatime2"
                          type="date"
                          placeholder="选择日期" class="marl14">
                        </el-date-picker>
                        </el-col>
                    <el-col :span="10">
                        <label for="payNumber" class="el-form-item__label">车辆识别代码:</label>
                        <div class="el-form-item__content">
                            <el-input  placeholder="请输入内容" class="el-form-item__content"></el-input>
                        </div>
                    </el-col>
                </el-row>
                <el-row :gutter="20">
                    <el-col :span="10">
                        <label for="payNumber" class="el-form-item__label marl42">变速器:</label>
                        <div class="el-form-item__content">
                            <el-select v-model="value08" placeholder="请选择">
                                <el-option
                                  v-for="item in options08"
                                  :key="item.value"
                                  :label="item.label"
                                  :value="item.value">
                                </el-option>
                            </el-select>
                        </div>
                    </el-col>
                    <el-col :span="10">
                        <label for="payNumber" class="el-form-item__label">备注:</label>
                        <div class="el-form-item__content">
                            <el-input  placeholder="请输入内容" class="el-form-item__content"></el-input>
                        </div>
                    </el-col>
                </el-row>
                <h5 class="mart10">车辆照片:</h5>
                <el-form ref="form" v-model="form1" label-width="80px">
                    <el-row :gutter="10">
                        <el-col :span="10">
                            <el-form-item label="是否上牌">
                            <el-radio-group v-model="label1">
                              <el-radio label="是"></el-radio>
                              <el-radio label="否"></el-radio>
                            </el-radio-group>
                        </el-form-item> 
                        </el-col>
                    </el-row>
                </el-form>
                <h5 class="mart10"><span class="el-icon-star-off"></span>更多信息（非必填）</h5>
                <el-row :gutter="24">
                    <el-col :span="12">
                        <label for="payNumber" class="el-form-item__label marl42">是否随带/赠送交强险</label>
                        <div class="el-form-item__content">
                            <el-select v-model="value09" placeholder="请选择">
                                <el-option
                                  v-for="item in options09"
                                  :key="item.value"
                                  :label="item.label"
                                  :value="item.value">
                                </el-option>
                            </el-select>
                        </div>
                    </el-col>
                    <el-col :span="12">
                        <label for="payNumber" class="el-form-item__label marl13">交强险到期年月</label>
                        <el-date-picker
                          v-model="datatime5"
                          type="date"
                          placeholder="选择日期" class="marl14">
                        </el-date-picker>
                    </el-col>
                </el-row>
                <el-row :gutter="24">
                    <el-col :span="12">
                        <label for="payNumber" class="el-form-item__label marl58">是否随送商业保险</label>
                        <div class="el-form-item__content">
                            <el-select v-model="value10" placeholder="请选择">
                                <el-option
                                  v-for="item in options10"
                                  :key="item.value"
                                  :label="item.label"
                                  :value="item.value">
                                </el-option>
                            </el-select>
                        </div>
                    </el-col>
                    <el-col :span="12">
                        <label for="payNumber" class="el-form-item__label ">商业保险到期年月</label>
                        <div class="el-form-item__content">
                            <el-input  placeholder="请输入内容" class="el-form-item__content"></el-input>
                        </div>
                    </el-col>
                </el-row>
                <el-row :gutter="12">
                    <el-col :span="12">
                        <label for="payNumber" class="el-form-item__label marl42">车船使用税截至年月</label>
                        <div class="el-form-item__content">
                            <el-select v-model="value11" placeholder="请选择">
                                <el-option
                                  v-for="item in options11"
                                  :key="item.value"
                                  :label="item.label"
                                  :value="item.value">
                                </el-option>
                            </el-select>
                        </div>
                    </el-col>
                </el-row>         
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                mapJson:'../static/json/map.json',
                province:'',
                shi1: [],
                form1:'',
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
                datatime2:'',
                datatime3:'',
                datatime4:'',
                datatime5:'',
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
                value07:'',
                sheng: '',  
                shi: '',
                value08:'',
                options08: [{
                  value: '01',
                  label: 'A机构'
                }, {
                  value: '02',
                  label: 'B机构'
                }],
                label1:'',
                value09:'',
                options09: [{
                  value: '01',
                  label: 'A机构'
                }, {
                  value: '02',
                  label: 'B机构'
                }],
                value10:'',
                options10: [{
                  value: '01',
                  label: 'A机构'
                }, {
                  value: '02',
                  label: 'B机构'
                }],
                value11:'',
                options11: [{
                  value: '01',
                  label: 'A机构'
                }, {
                  value: '02',
                  label: 'B机构'
                }],
            }
        },
        created(){
            this.getCityData();
        },
        methods: {
                 handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
                getCityData:function(){  
                    var that = this;  
                    this.$axios.get(this.mapJson).then(function(response){  
                      if (response.status==200) {  
                        var data = response.data  
                        that.province = []  
                        that.city = []  
                        that.block = []  
                        // 省市区数据分类  
                        for (var item in data) {  
                          if (item.match(/0000$/)) {//省  
                            that.province.push({id: item, value: data[item], children: []})  
                          } else if (item.match(/00$/)) {//市  
                            that.city.push({id: item, value: data[item], children: []})  
                          } else {//区  
                            that.block.push({id: item, value: data[item]})  
                          }  
                        }  
                        // 分类市级  
                        for (var index in that.province) {  
                          for (var index1 in that.city) {  
                            if (that.province[index].id.slice(0, 2) === that.city[index1].id.slice(0, 2)) {  
                              that.province[index].children.push(that.city[index1])  
                            }  
                          }  
                        }  
                        // 分类区级  
                        for(var item1 in that.city) {  
                          for(var item2 in that.block) {  
                            if (that.block[item2].id.slice(0, 4) === that.city[item1].id.slice(0, 4)) {  
                              that.city[item1].children.push(that.block[item2])  
                            }  
                          }  
                        }  
                      }  
                      else{  
                        console.log(response.status)  
                      }  
                    }).catch(function(error){console.log(typeof+ error)})  
              }, 
            // 选省  
            choseProvince:function(e) {  
                for (var index2 in this.province) {  
                  if (e === this.province[index2].id) {  
                    this.shi1 = this.province[index2].children  
                    this.shi = this.province[index2].children[0].value  
                    this.qu1 =this.province[index2].children[0].children  
                    this.qu = this.province[index2].children[0].children[0].value  
                    this.E = this.qu1[0].id  
                  }  
                }  
            },  
            // 选市  
            choseCity:function(e) {  
                for (var index3 in this.city) {  
                  if (e === this.city[index3].id) {  
                    this.qu1 = this.city[index3].children  
                    this.qu = this.city[index3].children[0].value  
                    this.E = this.qu1[0].id  
                    // console.log(this.E)  
                  }  
                }  
            },
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
    .marl20{
        margin-left: 20px;
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
    .marl13{
        margin-left: 13px;
    }
    .el-date-editor--date{
        width: 202px;
    }
    .el-form-item{
        margin-bottom: 0!important
    }
    .marl58{
        margin-left: 58px;
    }
</style>