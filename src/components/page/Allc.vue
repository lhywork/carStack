<template>
   <div class="main-content" v-bind:data="tabledata">
            <h2 class="main-title"><i class="fa fa-tags"></i>查看标的信息</h2>
            <div class="addo_content">
                <el-row :gutter="20">
                    <el-col :span="10">
                        <label for="payNumber" class="el-form-item__label marl28">借款产品:</label>
                        <label for="payNumber" class="el-form-item__label">{{tabledata.borrow_id}}</label>
                    </el-col>
                </el-row>
                <el-row :gutter="20">
                    <el-col :span="10">
                        <label for="payNumber" class="el-form-item__label marl42">主品牌:</label>
                        <label for="payNumber" class="el-form-item__label">{{tabledata.main_brand}}</label>
                    </el-col>
                    <el-col :span="10">
                        <label for="payNumber" class="el-form-item__label marl28">车辆名称:</label>
                        <label for="payNumber" class="el-form-item__label">{{tabledata.car_name}}</label>
                    </el-col>
                </el-row>
                <el-row :gutter="20">
                    <el-col :span="10">
                        <label for="payNumber" class="el-form-item__label marl27">厂商系列:</label>
                        <label for="payNumber" class="el-form-item__label">{{tabledata.car_factory}}</label>
                    </el-col>
                    <el-col :span="10">
                        <label for="payNumber" class="el-form-item__label marl42">零售价:</label>
                        <label for="payNumber" class="el-form-item__label">{{tabledata.retail_price}}</label>
                    </el-col>
                </el-row>
                <el-row :gutter="20">
                    <el-col :span="10">
                        <label for="payNumber" class="el-form-item__label marl54">型号:</label>
                        <label for="payNumber" class="el-form-item__label">{{tabledata.car_model}}</label>
                    </el-col>
                    <el-col :span="10">
                        <label for="payNumber" class="el-form-item__label marl42">批发价:</label>
                        <label for="payNumber" class="el-form-item__label">{{tabledata.trade_price}}</label>
                    </el-col>
                </el-row>
                <el-row :gutter="10">
                    <el-col :span="10">
                        <label for="payNumber" class="el-form-item__label marl12">信息有效期:</label>
                        <label for="payNumber" class="el-form-item__label">{{tabledata.info_term}}</label>
                    </el-col>
                </el-row>
            </div>
            <h5 class="mart10"><span class="el-icon-star-off"></span>车辆信息（必填）</h5>
            <div class="addo_content">
                <el-row :gutter="20">
                    <el-col :span="10">
                        <label for="payNumber" class="el-form-item__label">车辆识别代码:</label>
                        <label for="payNumber" class="el-form-item__label">{{tabledata.car_vin}}</label>
                    </el-col>
                    <el-col :span="10">
                        <label for="payNumber" class="el-form-item__label marl28">汽车颜色:</label>
                        <label for="payNumber" class="el-form-item__label">{{tabledata.car_out_colour}}</label>
                    </el-col>
                </el-row>
                <el-row :gutter="20">
                    <el-col :span="10">
                        <label for="payNumber" class="el-form-item__label marl27">行驶里程:</label>
                        <label for="payNumber" class="el-form-item__label">{{tabledata.car_mileage}}</label>
                    </el-col>
                    <el-col :span="10">
                        <label for="payNumber" class="el-form-item__label marl28">内饰颜色:</label>
                        <label for="payNumber" class="el-form-item__label">{{tabledata.car_in_colour}}</label>
                    </el-col>
                </el-row>
                <el-row :gutter="20">
                    <el-col :span="10">
                        <label for="payNumber" class="el-form-item__label marl27">车辆性质:</label>
                        <label for="payNumber" class="el-form-item__label">{{tabledata.car_nature}}</label>
                    </el-col>
                    <el-col :span="10">
                        <label for="payNumber" class="el-form-item__label marl13">保险有效期:</label>
                        <label for="payNumber" class="el-form-item__label">{{tabledata.insurance_term}}</label>
                    </el-col>
                </el-row>
                <el-row :gutter="20">
                    <el-col :span="10">
                        <label for="payNumber" class="el-form-item__label marl12">车辆所在地:</label>
                        <label for="payNumber" class="el-form-item__label">{{tabledata.car_province}}{{tabledata.car_city}}</label>
                    </el-col>
                    <el-col :span="10">
                        <label for="payNumber" class="el-form-item__label marl13">年检有效期:</label>
                        <label for="payNumber" class="el-form-item__label">{{tabledata.inspect_term}}</label>
                    </el-col>
                </el-row>
                <el-row :gutter="20">
                    <el-col :span="10">
                        <label for="payNumber" class="el-form-item__label">车辆出厂年月:</label>
                        <label for="payNumber" class="el-form-item__label">{{tabledata.car_time}}</label>
                    </el-col>
                    <el-col :span="10">
                        <label for="payNumber" class="el-form-item__label marl56">排量:</label>
                        <label for="payNumber" class="el-form-item__label">{{tabledata.car_displacement}}</label>
                    </el-col>
                </el-row>
                <el-row :gutter="20">
                    <el-col :span="10">
                        <label for="payNumber" class="el-form-item__label marl42">变速器:</label>
                        <label for="payNumber" class="el-form-item__label">{{tabledata.car_transmission}}</label>
                    </el-col>
                    <el-col :span="10">
                        <label for="payNumber" class="el-form-item__label marl56">备注:</label>
                        <label for="payNumber" class="el-form-item__label">{{tabledata.remark}}</label>
                    </el-col>
                </el-row>
                <h5 class="mart10">车辆照片:</h5>
                <el-row :gutter="24">
                    <el-col :span="24">
                      <el-upload :disabled="true" name="uploadfile" accept="image/gif,image/jpeg,image/jpg,image/png" :file-list="imagesarr" list-type ="picture-card" action=" " :on-preview="handlePictureCardPreview">
                          <i class="el-icon-plus"></i>
                      </el-upload>
                      <el-dialog :visible.sync="dialogVisible">
                        <img width="100%" :src="dialogImageUrl" alt="">
                      </el-dialog>
                    </el-col>
                </el-row>
                <el-row :gutter="10">
                    <el-col :span="10">
                        <label for="payNumber" class="el-form-item__label marl28">是否上牌:</label>
                        <label for="payNumber" class="el-form-item__label" v-if="tabledata.if_card == 1">是</label>
                        <label for="payNumber" class="el-form-item__label" v-if="tabledata.if_card == 0">否</label>
                    </el-col>
                </el-row>
                <div>   
                  <el-row :gutter="20">
                    <el-col :span="10">
                          <label for="payNumber" class="el-form-item__label">首次上牌时间:</label>
                          <label for="payNumber" class="el-form-item__label">{{tabledata.first_card_time}}</label>
                      </el-col>
                      <el-col :span="10">
                          <label for="payNumber" class="el-form-item__label marl13">牌照归属地:</label>
                          <label for="payNumber" class="el-form-item__label">{{tabledata.card_belong}}</label>
                      </el-col>
                  </el-row>
                  <el-row :gutter="20">
                    <el-col :span="10">
                          <label for="payNumber" class="el-form-item__label marl27">牌照类型:</label>
                          <label for="payNumber" class="el-form-item__label">{{tabledata.card_type}}</label>
                      </el-col>
                      <el-col :span="10">
                              <label for="payNumber" class="el-form-item__label">是否含拍照出售:</label>
                              <label for="payNumber" class="el-form-item__label" v-if="tabledata.if_card_sell == 1">是</label>
                              <label for="payNumber" class="el-form-item__label" v-if="tabledata.if_card_sell == 0">否</label>
                        </el-col>
                  </el-row>
                </div> 
                <h5 class="mart10"><span class="el-icon-star-off"></span>更多信息（非必填）</h5>
                <el-row :gutter="20">
                    <el-col :span="10">
                        <label for="payNumber" class="el-form-item__label">是否随带/赠送交强险:</label>
                        <label for="payNumber" class="el-form-item__label">{{tabledata.insurance_give}}</label>
                    </el-col>
                    <el-col :span="10" class="marl14">
                        <label for="payNumber" class="el-form-item__label ">交强险到期年月:</label>
                        <label for="payNumber" class="el-form-item__label">{{tabledata.insurance_expiration}}</label>
                    </el-col>
                </el-row>
                <el-row :gutter="20">
                    <el-col :span="10">
                        <label for="payNumber" class="el-form-item__label marl17">是否随送商业保险:</label>
                        <label for="payNumber" class="el-form-item__label">{{tabledata.if_send_insurance}}</label>
                    </el-col>
                    <el-col :span="10">
                        <label for="payNumber" class="el-form-item__label ">商业保险到期年月:</label>
                        <label for="payNumber" class="el-form-item__label">{{tabledata.commercial_insurance_expiration}}</label>
                    </el-col>
                </el-row>
                <el-row :gutter="12">
                    <el-col :span="12">
                        <label for="payNumber" class="el-form-item__label">车辆使用税截至年月:</label>
                        <label for="payNumber" class="el-form-item__label">{{tabledata.tax_expiration}}</label>
                    </el-col>
                </el-row>
                <el-row :gutter="24">
                    <el-col :span="8">
                        <label for="payNumber" class="el-form-item__label marl28">购置税:</label>
                        <label for="payNumber" class="el-form-item__label">{{tabledata.tax_purchase}}</label>
                    </el-col>
                    <el-col :span="8">
                        <label for="payNumber" class="el-form-item__label marl28">车辆登记证:</label>
                        <label for="payNumber" class="el-form-item__label">{{tabledata.car_registration}}</label>
                    </el-col>
                    <el-col :span="8">
                        <label for="payNumber" class="el-form-item__label marl28">车辆行驶证:</label>
                        <label for="payNumber" class="el-form-item__label">{{tabledata.driving_license}}</label>
                    </el-col>
                </el-row>
                <el-row :gutter="24">
                  <el-col :span="3">
                      <label for="payNumber" class="el-form-item__label marl13">可选配置:</label>
                  </el-col>
                  <el-col :span="3">
                      <label for="payNumber" class="el-form-item__label ">外观:</label>
                  </el-col>
                  <el-col :span="18">
                    <label for="payNumber" class="el-form-item__label">{{exterior}}</label>
                  </el-col>
                </el-row>
                <el-row :gutter="24">
                  <el-col :span="3" class="marl128">
                      <label for="payNumber" class="el-form-item__label ">内饰:</label>
                  </el-col>
                  <el-col :span="18">
                    <label for="payNumber" class="el-form-item__label">{{interior}}</label>
                  </el-col>
                </el-row>
                <el-row :gutter="24">
                  <el-col :span="3" class="marl128">
                      <label for="payNumber" class="el-form-item__label ">安全:</label>
                  </el-col>
                  <el-col :span="18">
                    <label for="payNumber" class="el-form-item__label">{{security}}</label>
                  </el-col>
                </el-row>
                <el-row :gutter="24">
                  <el-col :span="3" class="marl128">
                      <label for="payNumber" class="el-form-item__label">舒适:</label>
                  </el-col>
                  <el-col :span="18">
                   <label for="payNumber" class="el-form-item__label">{{comfort}}</label>
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
                tabledata:[],
                exterior:'',
                interior:'',
                security:'',
                comfort:'',
                imagesarr:[],
                uploadUrl:this.$ajax.getBaseUrl+'/file/uploadPic',
                dialogImageUrl: '',
                dialogVisible: false
            }
        },
        created(){
            const self = this;
            self.getCityData();
            self.firstDate();
        },
        methods: {
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
            firstDate:function(){
              const self = this;
              const params = {
                target_nid:self.$route.query.id,
              }
              self.$ajax.getTargetByTargetnid(params).then((res)=> {
                  self.tabledata= res;
                  const imagesarr1 = res.stack_pic;
                  imagesarr1.forEach((item,index) => {
                     item.url = this.$ajax.getBaseUrl + '/images' + item.res_url;
                  })
                  console.log(imagesarr1)
                  self.imagesarr = imagesarr1
                  self.initialize();
              });
            },
            initialize:function(){
              const self = this
              const exteriorarr = ["大包围","尾翼","运动轮廓","铝合金"];
              const interiorarr = ["真皮坐椅","中控台液晶屏","电动门窗"];
              const securityarr = ["倒车雷达","中控防盗","刹车辅助"];
              const comfortarr = ["电动天窗","GPS导航系统","电动加热座椅","自动空调","可调节方向盘","自动加温反光镜","自动巡航系统"]
              self.newdata(exteriorarr,"exterior");
              self.newdata(interiorarr,"interior");
              self.newdata(securityarr,"security");
              self.newdata(comfortarr,"comfort");
            },
            newdata:function(arr,e){
              const self = this;
              const newarr =self.tabledata[e].split(",");
              var  i = 0;
              for(i = 0;i<newarr.length;i++){
                if(newarr[i] == 1){
                  self[e] = self[e] + arr[i] + " ";
                }
              }
            },
            handleRemove(file, fileList) {
                console.log(file, fileList);
            },
            handlePictureCardPreview(file) {
                this.dialogImageUrl = file.url;
                this.dialogVisible = true;
                console.log(file)
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
    .marl12{
      margin-left: 12px;
    }
    .marl743{
      margin-left: 743px;
    }
    .carphoto{
      width: 148px;
      height: 148px;
    }
</style>