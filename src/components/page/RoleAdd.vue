<template>
  <div class="main-content">
    <div class="main-module">
        <h2 class="main-title"><i class="fa fa-tags"></i>新增角色</h2>
        <div class="main-form">
            <div id="J_Form" class="form-content">
                
            </div>
        </div>
    </div>
    <el-button class="form-submit" type="success">确认提交</el-button>
  </div>
</template>
<script>
export default {  
    data () {  
        return {  
 
        }  
    },  
  methods:{  
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
        display: block;
        margin: 0 auto;      
    }  
</style>
