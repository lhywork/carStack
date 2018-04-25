<template>
  <div class="main-content">
    <div class="main-module">
        <h2 class="main-title"><i class="fa fa-tags"></i>经销商资料</h2>
        <div class="main-form">
            <div id="J_Form" class="form-content">
                <el-form :inline="true" :model="form" :rules="rules" ref="form"  :label-position="'right'" label-width="130px" class="demo-form-inline">
                    <el-form-item class="J-form-item" label="姓名" prop="account_name">
                        <el-input class="form-input" v-model="form.account_name" placeholder="请输入真实姓名"></el-input>
                    </el-form-item>
                    <el-form-item class="J-form-item" label="Email地址" prop="email">
                        <el-input class="form-input" v-model="form.email" placeholder="请输入邮箱地址"></el-input>
                    </el-form-item>
                    <el-form-item class="J-form-item" label="手机号码" prop="mobile">
                        <el-input class="form-input" v-model="form.mobile" placeholder="请输入手机号码"></el-input>
                    </el-form-item>                   
                    <el-form-item class="J-form-item" label="固定电话">
                        <el-input class="form-input" v-model="form.phone" placeholder="请输入固定电话"></el-input>
                    </el-form-item>
                    <el-form-item class="J-form-item" label="身份证号" prop="id_no">
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
                            <div class="card-box ml24">
                                <div class="card-left">
                                    <el-upload class="card-border" name="uploadfile" ref="id_no_front"
                                        accept="image/gif,image/jpeg,image/jpg,image/png"
                                        list-type="picture-card"
                                        :action="uploadUrl"                                        
                                        :http-request="(res)=>{return uploadImg(res, 'id_no_front', false)}"
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
                                        :http-request="(res)=>{return uploadImg(res, 'id_no_back', false)}"
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
                              :http-request="(res)=>{return uploadImg(res, 'stack_pic', false)}"
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
                              :http-request="(res)=>{return uploadImg(res, 'run_license', false)}"
                              :before-upload="beforeUpload"
                              :on-preview="handlePreview"
                              :on-success="handleSuccess">
                              <i class="plus-icon el-icon-plus"></i>
                          </el-upload>
                      </div>
                    </el-form-item>
                    <el-form-item class="block-item" label="场地租赁合同">
                        <div class="card-box">
                          <el-upload class="card-border more" name="uploadfile"
                              accept="image/gif,image/jpeg,image/jpg,image/png"
                              list-type="picture-card"
                              :action="uploadUrl"                                      
                              :http-request="(res)=>{return uploadImg(res, 'lease_contract', true)}"
                              :before-upload="beforeUpload"
                              :on-preview="handlePreview"
                              :on-success="handleSuccess">
                              <i class="plus-icon el-icon-plus"></i>
                          </el-upload>
                      </div>
                    </el-form-item>
                    <el-form-item class="block-item" label="场地照片">
                        <div class="card-box">
                          <el-upload class="card-border more" name="uploadfile"
                              accept="image/gif,image/jpeg,image/jpg,image/png"
                              list-type="picture-card"
                              :action="uploadUrl"                                      
                              :http-request="(res)=>{return uploadImg(res, 'lease_pic', true)}"
                              :before-upload="beforeUpload"
                              :on-preview="handlePreview"
                              :on-success="handleSuccess">
                              <i class="plus-icon el-icon-plus"></i>
                          </el-upload>
                      </div>
                    </el-form-item>
                    <el-form-item class="block-item" label="申请表">
                      <div class="card-box">
                        <el-upload class="card-border more" name="uploadfile"
                            accept="image/gif,image/jpeg,image/jpg,image/png"
                            list-type="picture-card"
                            :action="uploadUrl"                                      
                            :http-request="(res)=>{return uploadImg(res, 'application', true)}"
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
                <el-form :inline="true" :model="form" :label-position="'right'" label-width="120px" class="demo-form-inline">
                    <el-form-item class="J-file-item" label="车商增信报告">
                        <el-upload class="upload-file" name="uploadfile"
                          :action="FileUrl"
                          :http-request="(res)=>{return uploadFile(res, 'credit_report', false)}">
                          <el-button size="small" type="primary">点击上传</el-button>
                        </el-upload>
                    </el-form-item>
                    <el-form-item class="J-file-item" label="经营流水电子版">
                        <el-upload class="upload-file" name="uploadfile"
                          :action="FileUrl"
                          :http-request="(res)=>{return uploadFile(res, 'running_water', false)}">
                          <el-button size="small" type="primary">点击上传</el-button>
                        </el-upload>
                    </el-form-item>
                    <el-form-item class="J-form-item card-laber-item" label="担保人姓名">
                        <el-input class="form-input" v-model="form.guarantor_name" placeholder="请输入担保人姓名"></el-input>
                    </el-form-item>
                    <el-form-item class="J-form-item card-laber-item" label="身份证照片">
                    </el-form-item>
                    <el-form-item class="J-form-item card-laber-item" label="担保人手机号">
                        <el-input class="form-input" v-model="form.guarantor_phone" placeholder="请输入担保人手机号"></el-input>                      
                    </el-form-item>             
                    <el-form-item class="J-form-item card-item" label="">
                        <template>
                            <div class="card-box ml24">
                                <div class="card-left">
                                    <el-upload class="card-border" name="uploadfile"
                                        accept="image/gif,image/jpeg,image/jpg,image/png"
                                        list-type="picture-card"
                                        :action="uploadUrl"                                        
                                        :http-request="(res)=>{return uploadImg(res, 'gt_id_no_front', false)}"
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
                                        :http-request="(res)=>{return uploadImg(res, 'gt_id_no_back', false)}"
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
                    <el-form-item class="J-form-item links-item" label="与被担保人关系">
                        <el-input class="form-input" v-model="form.guarantor_links" placeholder="与被担保人关系"></el-input>
                    </el-form-item>
                    <el-form-item class="block-item" label="资产证明">
                        <div class="card-box">
                          <el-upload class="card-border more" name="uploadfile"
                              accept="image/gif,image/jpeg,image/jpg,image/png"
                              list-type="picture-card"
                              :action="uploadUrl"                                      
                              :http-request="(res)=>{return uploadImg(res, 'asset_proof', true)}"
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
          form: {
              account_no:this.$route.query.id,
              email: '',
              account_name:'',
              mobile:"",
              id_no:'',
              phone:'',
              addr_province:'',
              addr_city:'',
              addr_area:'',
              id_no_front:'',
              id_no_back:'',
              company_name:'',
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
              application:'',
              guarantor_name:'',
              guarantor_phone:'',
              guarantor_links:''
          },
          rules:{
              account_name:[
                  { required: true, message: '请输入真实姓名', trigger: 'blur' },
              ],
              email:[
                  { required: true, message: '请输入邮箱地址', trigger: 'blur' },
                  { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] },
              ],
              mobile:[
                  { required: true, message: '请输入手机号码', trigger: 'blur' },
                  { pattern: /^1[345789]\d{9}$/, message: '请输入正确的手机号码'},
              ],
              id_no:[
                  {required: true, message: '请输入二代身份证号码', trigger: 'blur' },
                  {pattern: /(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}$)/, message: '二代身份证号码格式有误！', trigger: 'blur'}
              ]
          },
          dialogImageUrl: '',
          dialogVisible: false,
          uploadUrl:this.$ajax.getBaseUrl+'/file/uploadPic',         
          FileUrl:this.$ajax.getBaseUrl+'/file/uploadFile' 
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
        that.$refs['form'].validate((valid) => {
          if (valid) {
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
          }else {
              console.log('error submit!!');
              return false;
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
      uploadImg(file,cloumnname,moreFlag){
        const formData = new FormData()
              formData.append('uploadfile', file.file)
              formData.append('tablename', 'hrcf_stack_asset_base_material')
              formData.append('cloumnname', cloumnname)
              formData.append('linkno', this.$route.query.id)
              formData.append('moreFlag', moreFlag)
        this.$ajax.uploadPic(formData).then((res)=>{
          //console.log(res)
        })
      },
      uploadFile(file,cloumnname,moreFlag){
        const formData = new FormData()
              formData.append('uploadfile', file.file)
              formData.append('tablename', 'hrcf_stack_asset_base_material')
              formData.append('cloumnname', cloumnname)
              formData.append('linkno', this.$route.query.id)
              formData.append('moreFlag', moreFlag)
        this.$ajax.uploadFile(formData).then((res)=>{
          //console.log(res)
        })
      },
      //图片预览
      handlePreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
      //图片上传成功
      handleSuccess(response, file, fileList){

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
<style scoped>
    .form-content{
        width: 900px;
    }
    .J-form-item{
        width: 350px;
    }
    .J-file-item{
      min-width: 350px;
    }
    .J-file-item .el-form-item__content{
      width: 260px;
      overflow: hidden;
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
        height: 170px;
        overflow: hidden;        
        color: #999; 
    }
    .ml24{
        margin-left:42px;
    }
    .card-left{
        width: 150px;
        height: 148px;
        text-align: center;     
        float: left;
        margin-right: 8px;
    }
    .card-border{
        width: 148px;
        margin: 0 auto;
        height: 88px;
        line-height: 80px;
        text-align: center;
        cursor: pointer;
    }
    .card-border.more{
      width: auto;
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
    .select-item {
        width: 110px;
    }
    .block-item{
        display: block;
        width: 100%;
    }
    .links-item{
      position: relative;
      top: -55px;
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
