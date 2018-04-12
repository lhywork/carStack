<template>
  <div style="background:#f0f2f5;height:100%;">
    <div class="http404">
        <div class="pic-404">
            <img :src="img_404" alt="404">
        </div>
        <div class="bullshit">
            <div class="bullshit__headline">{{ message }}</div>
            <div class="bullshit__info">请检查您输入的网址是否正确，请点击以下按钮返回主页或者发送错误报告</div>
            <a href="/" class="bullshit__return-home">返回首页</a>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'page404',
  data() {
    return {
      img_404:'../static/img/404.png'
    }
  },
  computed: {
    message() {
      return '特朗普说这个页面你不能进......'
    }
  }
}
</script>

<style scoped>
    .http404 {
        position: relative;
        width: 900px;
        height: 630px;
        margin: 0 auto;
        overflow: hidden;
    }
    .pic-404 {
        position: relative;
        float: left;
        width: 600px;
        padding: 150px 0;
        overflow: hidden;
    }
    .pic-404 img{
        width: 100%;
    }
    .bullshit {
        position: relative;
        float: left;
        width: 300px;
        padding: 150px 0;
        overflow: hidden;
    }
    .bullshit__headline {
      font-size: 20px;
      line-height: 24px;
      color: #1482f0;
      margin-bottom: 10px;
    }
    .bullshit__info {
      font-size: 13px;
      line-height: 21px;
      color: grey;
      margin-bottom: 30px;
    }
    .bullshit__return-home {
      display: block;
      float: left;
      width: 110px;
      height: 36px;
      background: #1482f0;
      border-radius: 100px;
      text-align: center;
      color: #ffffff;
      font-size: 14px;
      line-height: 36px;
      cursor: pointer;
    }
</style>
