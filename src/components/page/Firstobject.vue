<template>
    <div class="panel">
        <div class="panel-head">
            <h5><span class="el-icon-star-off"></span>{{title}}</h5>
            <div class="addo_content">
                <el-row :gutter="10">
                  <el-col :span="10">
                        <label for="payNumber" class="el-form-item__label">选择借款产品:</label>
                        <label for="payNumber" class="el-form-item__label">111111:</label>
                  </el-col>
                </el-row>
                <el-row :gutter="20">
                    <el-col :span="10">
                        <label for="payNumber" class="el-form-item__label marl42">主品牌:</label>
                        <label for="payNumber" class="el-form-item__label">22222:</label>
                    </el-col>
                    <el-col :span="10">
                        <label for="payNumber" class="el-form-item__label marl28">车辆名称:</label>
                        <label for="payNumber" class="el-form-item__label">22222:</label>
                    </el-col>
                </el-row>
                <el-row :gutter="20">
                    <el-col :span="10">
                        <label for="payNumber" class="el-form-item__label marl27">厂商系列:</label>
                        <label for="payNumber" class="el-form-item__label">22222:</label>
                    </el-col>
                    <el-col :span="10">
                        <label for="payNumber" class="el-form-item__label marl42">零售价:</label>
                        <label for="payNumber" class="el-form-item__label">22222:</label>
                    </el-col>
                </el-row>
                <el-row :gutter="20">
                    <el-col :span="10">
                        <label for="payNumber" class="el-form-item__label marl54">型号:</label>
                        <label for="payNumber" class="el-form-item__label">22222:</label>
                    </el-col>
                    <el-col :span="10">
                        <label for="payNumber" class="el-form-item__label marl42">批发价:</label>
                        <label for="payNumber" class="el-form-item__label">22222:</label>
                    </el-col>
                </el-row>
                <el-row :gutter="10">
                    <el-col :span="10">
                        <label for="payNumber padl20" class="el-form-item__label">信息有效期:</label>
                        <label for="payNumber" class="el-form-item__label">22222:</label>
                    </el-col>
                </el-row>
            </div>
            <h5 class="mart10"><span class="el-icon-star-off"></span>车辆信息（必填）</h5>
            <div class="addo_content">
                <el-row :gutter="20">
                    <el-col :span="10">
                        <label for="payNumber" class="el-form-item__label">车辆识别代码:</label>
                        <label for="payNumber" class="el-form-item__label">22222:</label>
                    </el-col>
                    <el-col :span="10">
                        <label for="payNumber" class="el-form-item__label marl28">汽车颜色:</label>
                        <label for="payNumber" class="el-form-item__label">22222:</label>
                    </el-col>
                </el-row>
                <el-row :gutter="20">
                    <el-col :span="10">
                        <label for="payNumber" class="el-form-item__label marl27">行驶里程:</label>
                        <label for="payNumber" class="el-form-item__label">22222:</label>
                    </el-col>
                    <el-col :span="10">
                        <label for="payNumber" class="el-form-item__label marl28">内饰颜色:</label>
                        <label for="payNumber" class="el-form-item__label">22222:</label>
                    </el-col>
                </el-row>
                <el-row :gutter="20">
                    <el-col :span="10">
                        <label for="payNumber" class="el-form-item__label marl27">车辆性质:</label>
                        <label for="payNumber" class="el-form-item__label">22222:</label>
                    </el-col>
                    <el-col :span="10">
                        <label for="payNumber" class="el-form-item__label marl13">保险有效期:</label>
                        <label for="payNumber" class="el-form-item__label">22222:</label>
                    </el-col>
                </el-row>
                <el-row :gutter="24">
                    <el-col :span="14">
                        <span class="demonstration padl20">车辆所在地:</span>
                        <label for="payNumber" class="el-form-item__label">22222:</label>
                    </el-col>
                    <el-col :span="10">
                        <label for="payNumber" class="el-form-item__label marl13">年检有效期:</label>
                        <label for="payNumber" class="el-form-item__label">22222:</label>
                    </el-col>
                </el-row>
                <el-row :gutter="20">
                    <el-col :span="10">
                        <label for="payNumber" class="el-form-item__label">车辆出厂年月:</label>
                        <label for="payNumber" class="el-form-item__label">22222:</label>
                    </el-col>
                    <el-col :span="10">
                        <label for="payNumber" class="el-form-item__label marl56">排量:</label>
                        <label for="payNumber" class="el-form-item__label">22222:</label>
                    </el-col>
                </el-row>
                <el-row :gutter="20">
                    <el-col :span="10">
                        <label for="payNumber" class="el-form-item__label marl42">变速器:</label>
                        <label for="payNumber" class="el-form-item__label">22222:</label>
                    </el-col>
                    <el-col :span="10">
                        <label for="payNumber" class="el-form-item__label marl56">备注:</label>
                        <label for="payNumber" class="el-form-item__label">22222:</label>
                    </el-col>
                </el-row>
                <h5 class="mart10">车辆照片:</h5>
                <el-row :gutter="10">
                    <el-col :span="10">
                        <label for="payNumber" class="el-form-item__label marl28">是否上牌:</label>
                        <label for="payNumber" class="el-form-item__label">22222:</label>
                    </el-col>
                </el-row>
                <div v-show="radio1 == 1">   
                  <el-row :gutter="20">
                    <el-col :span="10">
                          <label for="payNumber" class="el-form-item__label">首次上牌时间:</label>
                          <div class="el-form-item__content">
                              <el-input  placeholder="请输入内容" class="el-form-item__content"></el-input>
                          </div>
                      </el-col>
                      <el-col :span="10">
                          <label for="payNumber" class="el-form-item__label marl13">牌照归属地:</label>
                          <div class="el-form-item__content">
                              <el-input  placeholder="请输入内容" class="el-form-item__content"></el-input>
                          </div>
                      </el-col>
                  </el-row>
                  <el-row :gutter="20">
                    <el-col :span="10">
                          <label for="payNumber" class="el-form-item__label marl27">厂商系列:</label>
                          <div class="el-form-item__content">
                              <el-select v-model="value15" placeholder="请选择">
                                  <el-option
                                    v-for="item in options15"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                  </el-option>
                              </el-select>
                          </div>
                      </el-col>
                      <el-col :span="10">
                              <label for="payNumber" class="el-form-item__label">是否含拍照出售:</label>
                              <el-radio v-model="radio2" label="1" class="mart13">是</el-radio>
                              <el-radio v-model="radio2" label="2" class="mart13">否</el-radio>
                        </el-col>
                  </el-row>
                </div> 
                <h5 class="mart10"><span class="el-icon-star-off"></span>更多信息（非必填）</h5>
                <el-row :gutter="20">
                    <el-col :span="10">
                        <label for="payNumber" class="el-form-item__label">是否随带/赠送交强险:</label>
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
                    <el-col :span="10" class="marl14">
                        <label for="payNumber" class="el-form-item__label ">交强险到期年月:</label>
                        <el-date-picker
                          v-model="datatime5"
                          type="date"
                          placeholder="选择日期">
                        </el-date-picker>
                    </el-col>
                </el-row>
                <el-row :gutter="20">
                    <el-col :span="10">
                        <label for="payNumber" class="el-form-item__label marl17">是否随送商业保险:</label>
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
                    <el-col :span="10">
                        <label for="payNumber" class="el-form-item__label ">商业保险到期年月:</label>
                        <el-date-picker
                          v-model="datatime6"
                          type="date"
                          placeholder="选择日期">
                        </el-date-picker>
                    </el-col>
                </el-row>
                <el-row :gutter="12">
                    <el-col :span="12">
                        <label for="payNumber" class="el-form-item__label">车辆使用税截至年月:</label>
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
                <el-row :gutter="24">
                    <el-col :span="8">
                        <label for="payNumber" class="el-form-item__label marl28">购置税:</label>
                        <div class="el-form-item__content">
                            <el-select v-model="value12" placeholder="请选择">
                                <el-option
                                  v-for="item in options12"
                                  :key="item.value"
                                  :label="item.label"
                                  :value="item.value">
                                </el-option>
                            </el-select>
                        </div>
                    </el-col>
                    <el-col :span="8">
                        <label for="payNumber" class="el-form-item__label marl28">车辆登记证:</label>
                        <div class="el-form-item__content">
                            <el-select v-model="value13" placeholder="请选择">
                                <el-option
                                  v-for="item in options13"
                                  :key="item.value"
                                  :label="item.label"
                                  :value="item.value">
                                </el-option>
                            </el-select>
                        </div>
                    </el-col>
                    <el-col :span="8">
                        <label for="payNumber" class="el-form-item__label marl28">车辆行驶证:</label>
                        <div class="el-form-item__content">
                            <el-select v-model="value14" placeholder="请选择">
                                <el-option
                                  v-for="item in options14"
                                  :key="item.value"
                                  :label="item.label"
                                  :value="item.value">
                                </el-option>
                            </el-select>
                        </div>
                    </el-col>
                </el-row>
                <el-row :gutter="24">
                  <el-col :span="3">
                      <label for="payNumber" class="el-form-item__label marl13">可选配置:</label>
                  </el-col>
                  <el-col :span="3">
                      <label for="payNumber" class="el-form-item__label ">外观:</label>
                  </el-col>
                  <el-col :span="18" class="mart11">
                    <el-checkbox v-model="checked1">大包围</el-checkbox>
                    <el-checkbox v-model="checked2">尾翼</el-checkbox>
                    <el-checkbox v-model="checked3">运动轮廓</el-checkbox>
                    <el-checkbox v-model="checked4">铝合金</el-checkbox>
                  </el-col>
                </el-row>
                <el-row :gutter="24">
                  <el-col :span="3" class="marl128">
                      <label for="payNumber" class="el-form-item__label ">内饰:</label>
                  </el-col>
                  <el-col :span="18" class="mart11">
                    <el-checkbox v-model="checked5">真皮座椅</el-checkbox>
                    <el-checkbox v-model="checked6">中控台液晶屏</el-checkbox>
                    <el-checkbox v-model="checked7">电动门窗</el-checkbox>
                  </el-col>
                </el-row>
                <el-row :gutter="24">
                  <el-col :span="3" class="marl128">
                      <label for="payNumber" class="el-form-item__label ">内饰:</label>
                  </el-col>
                  <el-col :span="18" class="mart11">
                    <el-checkbox v-model="checked8">倒车雷达</el-checkbox>
                    <el-checkbox v-model="checked9">中控防盗</el-checkbox>
                    <el-checkbox v-model="checked10">刹车辅助</el-checkbox>
                  </el-col>
                </el-row>
                <el-row :gutter="24">
                  <el-col :span="3" class="marl128">
                      <label for="payNumber" class="el-form-item__label">舒适:</label>
                  </el-col>
                  <el-col :span="18" class="mart11">
                    <el-checkbox v-model="checked11">电动车窗</el-checkbox>
                    <el-checkbox v-model="checked12">GPS导航系统</el-checkbox>
                    <el-checkbox v-model="checked13">电动加热座椅</el-checkbox>
                    <el-checkbox v-model="checked14">自动空调</el-checkbox>
                  </el-col>
                </el-row>
                <el-row :gutter="24">
                  <el-col :span="18" class="marl256">
                    <el-checkbox v-model="checked15">自动空调</el-checkbox>
                    <el-checkbox v-model="checked16">可调节方向盘</el-checkbox>
                    <el-checkbox v-model="checked17">自动加温反光镜</el-checkbox>
                    <el-checkbox v-model="checked18">自动巡航系统</el-checkbox>
                  </el-col>
                </el-row>
                <el-row :gutter="24">
                  <el-col :span="24">
                  <el-button type="primary" class="chusubmit">确认提交</el-button>
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
                datatime6:'',
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
                value12:'',
                options12: [{
                  value: '01',
                  label: 'A机构'
                }, {
                  value: '02',
                  label: 'B机构'
                }],
                value13:'',
                options13: [{
                  value: '01',
                  label: 'A机构'
                }, {
                  value: '02',
                  label: 'B机构'
                }],
                value14:'',
                options14: [{
                  value: '01',
                  label: 'A机构'
                }, {
                  value: '02',
                  label: 'B机构'
                }],
                value15:'',
                options15: [{
                  value: '01',
                  label: 'A机构'
                }, {
                  value: '02',
                  label: 'B机构'
                }],
                checked1:'',
                checked2:'',
                checked3:'',
                checked4:'',
                checked5:'',
                checked6:'',
                checked7:'',
                checked8:'',
                checked9:'',
                checked10:'',
                checked11:'',
                checked12:'',
                checked13:'',
                checked14:'',
                checked15:'',
                checked16:'',
                checked17:'',
                checked18:'',
                radio1:'2',
                radio2:'',
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
    .mart11{
      margin-top: 11px;
    }
    .marl128{
      margin-left: 128px;
    }
    .marl256{
      margin-left: 256px;
    }
    .chusubmit{
      display: block;
      margin: 0 auto;
      margin-top: 10px;
    }
    .mart13{
      margin-top: 13px; 
    }
    .marl56{
      margin-left: 56px;
    }
    .marl17{
      margin-left: 17px;
    }
    .marl14{
      margin-left: 14px;
    }
</style>