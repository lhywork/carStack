<template>
  <div class="main-content">
    <div class="main-module">
        <h2 class="main-title"><i class="fa fa-tags"></i>经销商资料</h2>
        <div class="main-form">
            <div id="J_Form" class="form-content">
                <el-form :inline="true" :model="form" :label-position="'right'" label-width="130px" class="demo-form-inline">
                    <el-form-item label="账号">
                        <el-input v-model="form.user" placeholder="请输入账号"></el-input>
                    </el-form-item>
                    <el-form-item label="Email地址">
                        <el-input v-model="form.user" placeholder="请输入邮箱地址"></el-input>
                    </el-form-item>
                    <el-form-item label="密码">
                        <el-input v-model="form.user" placeholder="请输入6位以上密码"></el-input>
                    </el-form-item>
                    <el-form-item label="手机号码">
                        <el-input v-model="form.user" placeholder="请输入手机号码"></el-input>
                    </el-form-item>
                    <el-form-item label="姓名">
                        <el-input v-model="form.user" placeholder="请输入真实姓名"></el-input>
                    </el-form-item>
                    <el-form-item label="固定电话">
                        <el-input v-model="form.user" placeholder="请输入固定电话"></el-input>
                    </el-form-item>
                    <el-form-item label="身份证号">
                        <el-input v-model="form.user" placeholder="请输入二代身份证号码"></el-input>
                    </el-form-item>
                    <el-form-item class="card-laber-item" label="身份证照片">
                    </el-form-item>
                    <el-form-item class="card-laber-item" label="公司地址">
                        <el-select class="select-item" v-model="sheng" @change="choseProvince" placeholder="选择省份">
                            <el-option v-for="item in province" :key="item.id" :label="item.value" :value="item.id"></el-option>
                        </el-select>
                        <el-select class="select-item" v-model="shi" @change="choseCity" placeholder="选择市">
                            <el-option v-for="item in shi1" :key="item.id" :label="item.value" :value="item.id"></el-option>
                        </el-select>
                        <el-input class="address-input" v-model="form.user" placeholder="请输入详细地址"></el-input>
                    </el-form-item>
                    <el-form-item class="card-item" label="">
                        <template>
                            <div class="card-box">
                                <div class="card-left">
                                    <el-upload class="card-border" action="http://192.168.1.222:8087/file/uploadPic"
                                      :show-file-list="false"
                                      :on-success="handleAvatarSuccess"
                                      :before-upload="beforeAvatarUpload" :accept="'image/gif,image/jpeg,image/jpg,image/png'">
                                      <img v-if="imageUrl" :src="imageUrl" class="avatar">
                                      <i v-else class="plus-icon el-icon-plus"></i>
                                    </el-upload>
                                    <p>（身份证正面）</p>   
                                </div>
                                <div class="card-right">
                                    <div class="card-border">
                                        <el-upload class="card-border" action="http://192.168.1.222:8087/file/uploadPic"
                                          :show-file-list="false"
                                          :on-success="handleAvatarSuccess"
                                          :before-upload="beforeAvatarUpload" :accept="'image/gif,image/jpeg,image/jpg,image/png'">
                                          <img v-if="imageUrl" :src="imageUrl" class="avatar">
                                          <i v-else class="plus-icon el-icon-plus"></i>
                                        </el-upload>
                                    </div>
                                    <p>（身份证反面）</p> 
                                </div>
                            </div>
                        </template>
                    </el-form-item>
                    <el-form-item label="升级为分栈经销商">
                        <el-radio-group>
                          <el-radio label="是"></el-radio>
                          <el-radio label="否"></el-radio>
                        </el-radio-group>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
    <div class="main-module">
        <h2 class="main-title"><i class="fa fa-tags"></i>公司资料</h2>
        <div class="main-form">
            <div id="J_Form" class="form-content">
                <el-form :inline="true" :model="form" :label-position="'right'" label-width="130px" class="demo-form-inline">
                    <el-form-item label="公司名称">
                        <el-input v-model="form.user" placeholder="请输入公司名称"></el-input>
                    </el-form-item>
                    <el-form-item label="经营年限">
                        <el-input v-model="form.user" placeholder="请输入经营年限"></el-input>
                    </el-form-item>
                    <el-form-item class="block-item" label="公司简介">
                        <el-input type="textarea" v-model="form.user"></el-input>
                    </el-form-item>
                    <el-form-item class="block-item" label="分栈名称">
                        <el-input v-model="form.user" placeholder="请输入分栈名称"></el-input>
                    </el-form-item>
                    <el-form-item class="block-item" label="分栈介绍">
                        <el-input type="textarea" v-model="form.user"></el-input>
                    </el-form-item>
                    <el-form-item class="block-item" label="公司合同显示名称">
                        <el-input v-model="form.user" placeholder="请输入公司合同显示名称"></el-input>
                    </el-form-item>
                    <el-form-item label="车栈照片">
                        <div class="card-border">
                            <i class="plus-icon el-icon-plus"></i>
                        </div>
                    </el-form-item>
                    <el-form-item label="营业执照">
                        <div class="card-border">
                            <i class="plus-icon el-icon-plus"></i>
                        </div>
                    </el-form-item>
                    <el-form-item class="block-item" label="场地租赁合同">
                        <div class="card-border">
                            <i class="plus-icon el-icon-plus"></i>
                        </div>
                    </el-form-item>
                    <el-form-item class="block-item" label="场地照片">
                        <div class="card-border">
                            <i class="plus-icon el-icon-plus"></i>
                        </div>
                    </el-form-item>
                    <el-form-item class="block-item" label="申请表">
                        <div class="card-border">
                            <i class="plus-icon el-icon-plus"></i>
                        </div>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
    <div class="main-module">
        <h2 class="main-title"><i class="fa fa-tags"></i>附件信息</h2>
        <div class="main-form">
            <div id="J_Form" class="form-content">
                <el-form :inline="true" :model="form" :label-position="'right'" label-width="130px" class="demo-form-inline">
                    <el-form-item label="车商增信报告">
                        <el-input v-model="form.user" placeholder="请输入公司名称"></el-input>
                    </el-form-item>
                    <el-form-item label="经营流水电子版">
                        <el-input v-model="form.user" placeholder="请输入经营年限"></el-input>
                    </el-form-item>
                    <el-form-item class="card-laber-item" label="担保人姓名">
                        <el-input v-model="form.user" placeholder="请输入担保人姓名"></el-input>
                    </el-form-item>
                    <el-form-item class="card-laber-item" label="身份证照片">
                    </el-form-item>
                    <el-form-item class="card-laber-item" label="担保人手机号">
                        <el-input v-model="form.user" placeholder="请输入担保人手机号"></el-input>
                        <el-select class="address-input" v-model="gx"  placeholder="与被担保人关系">
                            <el-option v-for="item in dbr" :key="item.value" :label="item.label" :value="item.value"></el-option>
                        </el-select>
                    </el-form-item>             
                    <el-form-item class="card-item" label="">
                        <template>
                            <div class="card-box">
                                <div class="card-left">
                                    <!-- <div class="card-border">
                                        <i class="plus-icon el-icon-plus"></i>
                                    </div> -->
                                    <el-upload class="card-border" action="http://192.168.1.222:8087/file/uploadPic"
                                      :show-file-list="false"
                                      :on-success="handleAvatarSuccess"
                                      :before-upload="beforeAvatarUpload">
                                      <img v-if="imageUrl" :src="imageUrl" class="avatar">
                                      <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                                    </el-upload>
                                    <p>（身份证正面）</p>   
                                </div>
                                <div class="card-right">
                                    <div class="card-border">
                                        <i class="plus-icon el-icon-plus"></i>
                                        <input type="file" name="file" accept="image/gif,image/jpeg,image/jpg,image/png" class="el-upload__input">
                                    </div>
                                    <p>（身份证反面）</p> 
                                </div>
                            </div>
                        </template>
                    </el-form-item>
                    <el-form-item class="block-item" label="资产证明">
                        <div class="card-border">
                            <i class="plus-icon el-icon-plus"></i>
                        </div>
                    </el-form-item>
                </el-form>
                <el-button class="form-submit" type="success">确认提交</el-button>
            </div>
        </div>
    </div>
  </div>
</template>
<script>
export default {  
    data () {  
        return {  
          mapJson:'../static/json/map.json',  
          province:'',  
          sheng: '',  
          shi: '',  
          shi1: [],  
          qu: '',  
          qu1: [],  
          city:'',
          gx:'',
          imageUrl: '',
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
              user: '',
              region: ''
          } 
        }  
    },  
  methods:{  
      // 加载china地点数据，三级  
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
      getListData:function() {
        const that = this;
        const params = {
            addr_province:'',
            addr_city:'',
            dealer_type:'',
            auditor_status:''
        }
        this.$ajax.getBaseMaterialList(params).then((res)=> {
            that.tableData = res.lists;
        });
      },  
      choseDealer:function(e) {

      },
      choseAudit:function(e) {
        // console.log(e)
      },
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        // const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        // if (!isJPG) {
        //   this.$message.error('上传头像图片只能是 JPG 格式!');
        // }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isLt2M;
      } 
    },  
    created:function(){  
      this.getCityData();
      this.getListData();  
    }  
}  
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
    .form-content{
        width: 900px;
    }
    .el-form-item{
        width: 350px;
    }
    .card-laber-item{
        width: 354px;
    }
    .el-form--inline .card-item .el-form-item__content{
        display:block;
    }
    .card-box{
        width: 300px;
        height: 100px;
        overflow: hidden;
        margin-left:50px;
        color: #999; 
    }
    .card-left{
        width: 150px;
        height: 100px;
        text-align: center;     
        float: left;
    }
    .card-border{
        width: 125px;
        margin: 0 auto;
        height: 70px;
        line-height: 80px;
        border-radius: 4px; 
        border: 1px dashed #dcdfe6;
        text-align: center;
        cursor: pointer;
    }
    .card-border:hover {
        border-color: #409EFF;
    }
    .card-right{
        width: 150px;
        height: 100px;
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
    .el-input{
        width: 220px;
    }
    .select-item .el-input{
        width: 110px;
    }
    .block-item{
        display: block;
        width: 100%;
    }
    .el-textarea{
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
        float: right;
    }  
</style>
