<template>
  <div class="main-content">
    <div class="main-module">
        <h2 class="main-title"><i class="fa fa-tags"></i>经销商资料</h2>
        <div class="main-form">
            <div id="J_Form" class="form-content">
                <el-form :inline="true" :model="form" :label-position="'right'" label-width="130px" class="demo-form-inline">
                    <el-form-item class="J-form-item" label="姓名">
                        <el-input class="form-input" v-model="form.account_name" placeholder="请输入真实姓名"></el-input>
                    </el-form-item>
                    <el-form-item class="J-form-item" label="Email地址">
                        <el-input class="form-input" v-model="form.email" placeholder="请输入邮箱地址"></el-input>
                    </el-form-item>
                    <el-form-item class="J-form-item" label="手机号码">
                        <el-input class="form-input" v-model="form.mobile" placeholder="请输入手机号码"></el-input>
                    </el-form-item>                   
                    <el-form-item class="J-form-item" label="固定电话">
                        <el-input class="form-input" v-model="form.phone" placeholder="请输入固定电话"></el-input>
                    </el-form-item>
                    <el-form-item class="J-form-item" label="身份证号">
                        <el-input class="form-input" v-model="form.id_no" placeholder="请输入二代身份证号码"></el-input>
                    </el-form-item>
                    <el-form-item class="J-form-item card-laber-item" label="身份证照片">
                    </el-form-item>
                    <el-form-item class="J-form-item card-laber-item" label="公司地址">
                        <el-select class="select-item" v-model="form.addr_province" @change="choseProvince" placeholder="选择省份">
                            <el-option v-for="item in province" :key="item.id" :label="item.value" :value="item.id"></el-option>
                        </el-select>
                        <el-select class="select-item" v-model="form.addr_city" @change="choseCity" placeholder="选择市">
                            <el-option v-for="item in shiArr" :key="item.id" :label="item.value" :value="item.id"></el-option>
                        </el-select>
                        <el-input class="address-input" v-model="form.addr_area" placeholder="请输入详细地址"></el-input>
                    </el-form-item>
                    <el-form-item class="J-form-item card-item" label="">
                        <template>
                            <div class="card-box">
                                <div class="card-left">
                                    <el-upload class="card-border" name="uploadfile" ref="id_no_front"
                                        accept="image/gif,image/jpeg,image/jpg,image/png"
                                        list-type="picture-card"
                                        :action="uploadUrl"                                        
                                        :data="uploadData1"
                                        :before-upload="beforeUpload"
                                        :on-preview="handlePreview"
                                        :on-success="handleSuccess">
                                        <i class="plus-icon el-icon-plus"></i>
                                    </el-upload>
                                    <p>（身份证正面）</p>   
                                </div>
                                <div class="card-right">
                                    <el-upload class="card-border" name="uploadfile" ref="id_no_back"
                                        accept="image/gif,image/jpeg,image/jpg,image/png"
                                        list-type="picture-card"
                                        :action="uploadUrl"                                      
                                        :data="uploadData2"
                                        :before-upload="beforeUpload"
                                        :on-preview="handlePreview"
                                        :on-success="handleSuccess">
                                        <i class="plus-icon el-icon-plus"></i>
                                    </el-upload>
                                    <p>（身份证反面）</p> 
                                </div>
                            </div>
                        </template>
                    </el-form-item>
                    <el-form-item class="J-form-item" label="升级为分栈经销商">
                        <el-radio-group v-model="form.dealer_type">
                          <el-radio label="2">是</el-radio>
                          <el-radio label="1">否</el-radio>
                        </el-radio-group>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
    <div class="main-module" v-show="form.dealer_type == '2'">
        <h2 class="main-title"><i class="fa fa-tags"></i>公司资料</h2>
        <div class="main-form">
            <div id="J_Form" class="form-content">
                <el-form :inline="true" :model="form" :label-position="'right'" label-width="130px" class="demo-form-inline">
                    <el-form-item class="J-form-item" label="公司名称">
                        <el-input class="form-input" v-model="form.company_name" placeholder="请输入公司名称"></el-input>
                    </el-form-item>
                    <el-form-item class="J-form-item" label="经营年限">
                        <el-input class="form-input" v-model="form.run_life" placeholder="请输入经营年限"></el-input>
                    </el-form-item>
                    <el-form-item class="J-form-item block-item" label="公司简介">
                        <el-input class="form-textarea" type="textarea" v-model="form.company_des"></el-input>
                    </el-form-item>
                    <el-form-item class="J-form-item block-item" label="分栈名称">
                        <el-input class="form-input" v-model="form.stack_name" placeholder="请输入分栈名称"></el-input>
                    </el-form-item>
                    <el-form-item class="J-form-item block-item" label="分栈介绍">
                        <el-input class="form-textarea" type="textarea" v-model="form.stack_des"></el-input>
                    </el-form-item>
                    <el-form-item class="J-form-item block-item" label="公司合同显示名称">
                        <el-input class="form-input" v-model="form.company_use_name" placeholder="请输入公司合同显示名称"></el-input>
                    </el-form-item>
                    <el-form-item class="J-form-item" label="车栈照片">
                      <div class="card-box">
                          <el-upload class="card-border" name="uploadfile"
                              accept="image/gif,image/jpeg,image/jpg,image/png"
                              list-type="picture-card"
                              :action="uploadUrl"                                      
                              :data="uploadData3"
                              :before-upload="beforeUpload"
                              :on-preview="handlePreview"
                              :on-success="handleSuccess">
                              <i class="plus-icon el-icon-plus"></i>
                          </el-upload>
                      </div>                
                    </el-form-item>
                    <el-form-item class="J-form-item" label="营业执照">
                        <div class="card-box">
                          <el-upload class="card-border" name="uploadfile"
                              accept="image/gif,image/jpeg,image/jpg,image/png"
                              list-type="picture-card"
                              :action="uploadUrl"                                      
                              :data="uploadData4"
                              :before-upload="beforeUpload"
                              :on-preview="handlePreview"
                              :on-success="handleSuccess">
                              <i class="plus-icon el-icon-plus"></i>
                          </el-upload>
                      </div>
                    </el-form-item>
                    <el-form-item class="J-form-item block" label="场地租赁合同">
                        <div class="card-box">
                          <el-upload class="card-border" name="uploadfile"
                              accept="image/gif,image/jpeg,image/jpg,image/png"
                              list-type="picture-card"
                              :action="uploadUrl"                                      
                              :data="uploadData5"
                              :before-upload="beforeUpload"
                              :on-preview="handlePreview"
                              :on-success="handleSuccess">
                              <i class="plus-icon el-icon-plus"></i>
                          </el-upload>
                      </div>
                    </el-form-item>
                    <el-form-item class="J-form-item block" label="场地照片">
                        <div class="card-box">
                          <el-upload class="card-border" name="uploadfile"
                              accept="image/gif,image/jpeg,image/jpg,image/png"
                              list-type="picture-card"
                              :action="uploadUrl"                                      
                              :data="uploadData6"
                              :before-upload="beforeUpload"
                              :on-preview="handlePreview"
                              :on-success="handleSuccess">
                              <i class="plus-icon el-icon-plus"></i>
                          </el-upload>
                      </div>
                    </el-form-item>
                    <el-form-item class="J-form-item block" label="申请表">
                      <div class="card-box">
                        <el-upload class="card-border" name="uploadfile"
                            accept="image/gif,image/jpeg,image/jpg,image/png"
                            list-type="picture-card"
                            :action="uploadUrl"                                      
                            :data="uploadData7"
                            :before-upload="beforeUpload"
                            :on-preview="handlePreview"
                            :on-success="handleSuccess">
                            <i class="plus-icon el-icon-plus"></i>
                        </el-upload>
                      </div>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
    <div class="main-module" v-show="form.dealer_type == '2'">
        <h2 class="main-title"><i class="fa fa-tags"></i>附件信息</h2>
        <div class="main-form">
            <div id="J_Form" class="form-content">
                <el-form :inline="true" :model="form" :label-position="'right'" label-width="130px" class="demo-form-inline">
                    <el-form-item class="J-form-item" label="车商增信报告">
                        <el-input class="form-input" v-model="form.user" placeholder="请输入车商增信报告"></el-input>
                    </el-form-item>
                    <el-form-item class="J-form-item" label="经营流水电子版">
                        <el-input class="form-input" v-model="form.user" placeholder="请输入经营年限"></el-input>
                    </el-form-item>
                    <el-form-item class="J-form-item card-laber-item" label="担保人姓名">
                        <el-input class="form-input" v-model="form.user" placeholder="请输入担保人姓名"></el-input>
                    </el-form-item>
                    <el-form-item class="J-form-item card-laber-item" label="身份证照片">
                    </el-form-item>
                    <el-form-item class="J-form-item card-laber-item" label="担保人手机号">
                        <el-input class="form-input" v-model="form.user" placeholder="请输入担保人手机号"></el-input>
                        <el-select class="address-input" v-model="gx"  placeholder="与被担保人关系">
                            <el-option v-for="item in dbr" :key="item.value" :label="item.label" :value="item.value"></el-option>
                        </el-select>
                    </el-form-item>             
                    <el-form-item class="J-form-item card-item" label="">
                        <template>
                            <div class="card-box">
                                <div class="card-left">
                                    <el-upload class="card-border" name="uploadfile"
                                        accept="image/gif,image/jpeg,image/jpg,image/png"
                                        list-type="picture-card"
                                        :action="uploadUrl"                                        
                                        :data="uploadData"
                                        :before-upload="beforeUpload"
                                        :on-preview="handlePreview"
                                        :on-success="handleSuccess">
                                        <i class="plus-icon el-icon-plus"></i>
                                    </el-upload>
                                    <p>（身份证正面）</p>   
                                </div>
                                <div class="card-right">
                                    <el-upload class="card-border" name="uploadfile"
                                        accept="image/gif,image/jpeg,image/jpg,image/png"
                                        list-type="picture-card"
                                        :action="uploadUrl"                                      
                                        :data="uploadData"
                                        :before-upload="beforeUpload"
                                        :on-preview="handlePreview"
                                        :on-success="handleSuccess">
                                        <i class="plus-icon el-icon-plus"></i>
                                    </el-upload>
                                    <p>（身份证反面）</p> 
                                </div>
                            </div>
                        </template>
                    </el-form-item>
                    <el-form-item class="J-form-item block" label="资产证明">
                        <div class="card-box">
                          <el-upload class="card-border" name="uploadfile"
                              accept="image/gif,image/jpeg,image/jpg,image/png"
                              list-type="picture-card"
                              :action="uploadUrl"                                      
                              :data="uploadData8"
                              :before-upload="beforeUpload"
                              :on-preview="handlePreview"
                              :on-success="handleSuccess">
                              <i class="plus-icon el-icon-plus"></i>
                          </el-upload>
                        </div>
                    </el-form-item>
                </el-form>                
            </div>
        </div>
    </div>
    <div class="main-dialog">
      <el-dialog :visible.sync="dialogVisible">
        <img width="100%" :src="dialogImageUrl" alt="">
      </el-dialog>
    </div>
    <el-button @click="SubmitBtn()" class="form-submit" type="success">确认提交</el-button>
  </div>
</template>
<script>
export default {  
    data () {  
        return {  
          mapJson:'../static/json/map.json',  
          province:[],
          city:[], 
          block:[],    
          shiArr: [],  
          qu: '',  
          quArr: [],
          gx:'',
          dbr: [{
              value: '1',
              label: '父子'
            }, {
              value: '2',
              label: '朋友'
            }, {
              value: '3',
              label: '夫妻'
          }], 
          form: {
              email: 'lhywork@aliyu.com',
              account_name:'鑫荣1号',
              mobile:"13335711774",
              id_no:'362202199307164455',
              phone:'400-8878288',
              addr_province:'浙江省',
              addr_city:'杭州市',
              addr_area:'中天MCC',
              id_no_front:'',
              id_no_back:'',
              company_name:'微拍贷',
              run_life:'',
              company_des:'',
              stack_name:'',
              stack_des:'',
              company_use_name:'',
              stack_pic:'',
              run_license:'',
              lease_contract:'',
              lease_pic:'',
              dealer_type:'2',
              application:''
          },
          dialogImageUrl: '',
          dialogVisible: false,
          uploadUrl:'http://192.168.1.222:8087/file/uploadPic',
          uploadData:{
            tablename:'hrcf_stack_asset_base_materia',
            cloumnname:'11',
            linkno:'22',
            moreFlag:true
          },
          uploadData1:{
            tablename:'hrcf_stack_asset_base_materia',
            cloumnname:'id_no_front',
            linkno:'22',
            moreFlag:true
          },
          uploadData2:{
            tablename:'hrcf_stack_asset_base_materia',
            cloumnname:'id_no_back',
            linkno:'22',
            moreFlag:true
          },
          uploadData3:{
            tablename:'hrcf_stack_asset_base_materia',
            cloumnname:'stack_pic',
            linkno:'22',
            moreFlag:true
          },
          uploadData4:{
            tablename:'hrcf_stack_asset_base_materia',
            cloumnname:'run_license',
            linkno:'22',
            moreFlag:true
          },
          uploadData5:{
            tablename:'hrcf_stack_asset_base_materia',
            cloumnname:'lease_contract',
            linkno:'22',
            moreFlag:true
          },
          uploadData6:{
            tablename:'hrcf_stack_asset_base_materia',
            cloumnname:'lease_pic',
            linkno:'22',
            moreFlag:true
          },
          uploadData7:{
            tablename:'hrcf_stack_asset_base_materia',
            cloumnname:'application',
            linkno:'22',
            moreFlag:true
          },
          uploadData8:{
            tablename:'hrcf_stack_asset_base_materia',
            cloumnname:'11',
            linkno:'22',
            moreFlag:true
          }  
        }  
    },  
  methods:{  
      // 加载china地点数据，三级  
      getCityData(){  
        var that = this;  
        this.$axios.get(this.mapJson).then(function(response){
          if (response.status==200) {  
            var data = response.data   
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
      choseProvince(e) {  
        for (var index2 in this.province) {  
          if (e === this.province[index2].id) {
            this.form.addr_province = this.province[index2].value  
            this.form.addr_city= this.province[index2].children[0].value  
            this.shiArr = this.province[index2].children  
            this.quArr =this.province[index2].children[0].children  
            this.qu = this.province[index2].children[0].children[0].value  
            this.E = this.quArr[0].id  
          }  
        }  
      },  
      // 选市  
      choseCity(e) {  
        for (var index3 in this.city) {  
          if (e === this.city[index3].id) {  
            this.quArr = this.city[index3].children  
            this.qu = this.city[index3].children[0].value  
            this.E = this.quArr[0].id    
          }  
        }  
      }, 
      SubmitBtn(){
        const that = this;
        const params = this.form;
        that.$ajax.BaseMaterialSave(params).then((res)=> {
          if(res.returnCode == 1){
            that.$alert('新增成功！', '系统后台提示', {
              confirmButtonText: '确定',
              callback: action => {
                that.$router.push({ path: '/index' });
              }
            });
          }else{
            this.msgAlert(res.returnMsg);
          }        
        })
      },
      //图片上传之前
      beforeUpload(file) {
        const isJPG = /\.(gif|jpg|jpeg|png)$/.test(file.name);
        const isLt2M = file.size / 1024 / 1024 < 2;
        if(!isJPG){
          this.msgAlert('上传图片只能是jpg/png/gif格式!');
        }
        else if (!isLt2M) {
          this.msgAlert('上传图片大小不能超过 2MB!');
        }else{
            
        }
        return isJPG && isLt2M; 
      },
      //图片预览
      handlePreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
      //图片上传成功
      handleSuccess(response, file, fileList){
        console.log(response, file, fileList)
      },
      //系统消息提示
      msgAlert(title){
        this.$alert(title,'系统后台提示');
      }, 
    },  
    created:function(){  
      this.getCityData();  
    }  
}  
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
    .form-content{
        width: 900px;
    }
    .J-form-item{
        width: 350px;
    }
    .card-laber-item{
        width: 354px;
    }
    .card-item .el-form-item__content{
        display:block;
    }
    .el-form--inline .el-form-item.block{
      display: block;
    }
    .card-item{
        margin-bottom: -50px;
    }
    .card-box{
        width: 310px;
        height: 170px;
        overflow: hidden;
        margin-left:42px;
        color: #999; 
    }
    .card-left{
        width: 150px;
        height: 148px;
        text-align: center;     
        float: left;
    }
    .card-border{
        width: 148px;
        margin: 0 auto;
        height: 88px;
        line-height: 80px;
        text-align: center;
        cursor: pointer;
    }
    .card-border:hover {
        border-color: #409EFF;
    }
    .card-right{
        width: 150px;
        height: 148px;
        text-align: center;
        float: right;
    }
    .plus-icon {
        font-size: 28px;
        font-weight: bolder;
        color: #8c939d;
        width: 125px;
        height: 70px;
        line-height: 70px;
        text-align: center;
    }
    .form-input{
        width: 220px;
    }
    .select-item .el-input{
        width: 110px;
    }
    .block-item{
        display: block;
        width: 100%;
    }
    .form-textarea{
        width: 586px;
    }
    .main-form{
        padding: 20px 0;
    }
    .address-input{
        width: 222px;
        display: block;
        margin-top: 15px;
    }
    .form-submit{
        display: block;
        margin: 0 auto;      
    }  
</style>
