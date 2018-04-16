<template>
  <div class="main-content errPage-container">
    <el-button @click="back" icon='arrow-left' class="pan-back-btn">返回</el-button>
    <el-row>
      <el-col :span="12">
        <h1 class="text-jumbo text-ginormous">Oops!</h1>
        <div class="bullshit__headline">特朗普说这个页面你不能进......</div>
        <h2 class="text-h2">你没有权限访问该页面</h2>
        <ul class="list-unstyled">
            <li>如有不满请联系你领导</li>
            <li>或者你可以<router-link to="/index">回首页</router-link></li>
        </ul>
      </el-col>
      <el-col :span="12">
        <img :src="errGif" width="313" height="428" alt="Girl has dropped her ice cream.">
      </el-col>
    </el-row>
  </div>
</template>

<script>

export default {
  name: 'page401',
  data() {
    return {
      errGif: '../static/img/401.gif?'+new Date()
    }
  },
  methods: {
    back() {
      if (this.$route.query.noGoBack) {
        this.$router.push({ path: '/index' })
      } else {
        this.$router.go(-1)
      }
    }
  }
}
</script>

<style scoped>
    html{
        line-height: 1.15;
    }
    .errPage-container {
        padding: 100px 50px;  
    }
    .pan-back-btn {
       background: #008489;
       color: #fff;
    }
    .text-h2{
        font-size: 1.5em;
        font-weight: bold;
        margin: 0.67em 0;
    }
    .pan-gif {
       margin: 0 auto;
       display: block;
    }
    .pan-img {
       display: block;
       margin: 0 auto;
    }
    .text-jumbo {
        font-size: 60px;
        font-weight: 700;
        color: #484848;
        margin: 20px 0;
    }
    .list-unstyled {
       font-size: 14px;   
    }
    .list-unstyled li {
        padding-bottom: 5px;
    }
    .list-unstyled li  a {
        color: #008489;
        text-decoration: none;      
    }
    .list-unstyled li  a:hover {
        text-decoration: underline;
    }
</style>
