<template>
  <div class="main-content">
    <h2 class="main-title"><i class="fa fa-tags"></i>用户评分</h2>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
      <el-row :gutter="20">
        <el-col :span="20">
          <div class="el-form-item">
            <label for="payNumber" class="el-form-item__label">请输入您的评分(最高为10分):</label>
            <div class="el-form-item__content">
             <el-form-item prop="grade" class="el-form-item__content">
              <el-input placeholder="请输入您的评分" class="el-form-item__content" v-model.number="ruleForm.grade" ></el-input>
              </el-form-item>
            </div>
          </div>
          <el-button type="success" size="small" class="suresmall" @click="sure('ruleForm')">确认</el-button>  
        </el-col>
      </el-row>
    </el-form>
    <div style="font-size:0;">
        <template v-if="ruleForm.grade == ''">
          <span class="beingno">暂无评分</span>
       </template>
       <template v-for="n in full">
          <span class="star-full"></span>
       </template>
       <template v-for="n in half">
          <span class="star-half"></span>
       </template>
       <template v-for="n in gray">
          <span class="star-gray"></span>
       </template>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    var validatePass = (rule, value, callback) => {
        console.log(value)
        var res =/^[+]{0,1}(\d+)$|^[+]{0,1}(\d+\.\d+)$/;
        var self = this;
        if (value === '') {
          self.first();
          callback(new Error('请输入评分'));
        }else if(!res.test(value)){
          self.first();
          callback(new Error('评分必须是非负数字'));
        }else if(value > 10){
          self.first();
          callback(new Error('评分需小于10分'));
        }else{
          callback();
        }
    };
    return {
      full:0,
      gray:0,
      half:0,
      ruleForm:{
        grade:'',
      },
      rules:{
        grade:[
          { validator: validatePass, trigger: 'change'}
        ]
      }
    }
  },
  methods:{
    sure(formName) {
        const self = this;
        self.$refs[formName].validate((valid) => {
            if (valid) {
                self.agrade();
            } else {
                return false;
            }
        });
    },
    agrade(){
       const self = this;
       if(self.ruleForm.grade > 0){
          console.log(self.ruleForm.grade)
          self.full = parseInt(self.ruleForm.grade / 2);
          self.half = self.ruleForm.grade % 2 == 0 ? 0 : 1
          self.gray = 5 - self.full - self.half;
       }
    },
    first(){
      const self = this;
      self.full = 0;
      self.gray = 0;
      self.half = 0;
    }
  },
  created: function() {

  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.star-full {
  display: inline-block;
  width: 20px;
  height: 20px;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAfhJREFUOBGlVD1LHFEUPXfWrzGJO2uhaIQ0iljESgKSpAjBwpXVKikEl6TzD6TwJ4gWaQMBS8WQgCRZ61QpglUgRbQUbMR1XfwodvbmvE1mdt/ssDPBC493733nnrkf7w2QQrSU29D9wY8poJAkkG6hD8O5E+IGgJsHkr8+7hTjdDpsnA0PLkHE4yK2r5iETyYUfdUkkRa96W3VOhLqXv8oFHNhgGCC/Xwc2jFKR0J0966w1IwVp/LasiNGOBTdxV24bhbqenCQRUY9qLzl2CasGEUVdbyA1M5R1wrq/gUqVxUp4tLghCX85D7VlonFksJQ9Un3w5S8c2sy8z3TGtGDRsla8op0vKe3O0UuMRBVDm9N8uX1Zg/3s8+hmU/sGS/wf8kN0UWZP/tgokJCY+jX3ENmWqJ3zNiJonoKXxalcPY9wFqExqmf3fvIuL+SM2WZNX9SCheHAZnZ2++h9FyxufdaQfG6CBznTvQshtDhSyA4jQieRmExhO2gaFBoi5OK8EkYECiqX9jdd1wauP7tbVgrw8a/TzETBpkp1nWZ96sg8+VV8j0j6VF4Dozo3sB4ix0ZypD3iO3r+QvQbfi1KVkobwcBkj//hmp5msSbXHxqlC67bCtDDr2fN/43wYvMaFkK1dOALNjlJa6Z8RuIP0vfAZfVhj/iqoy46fpKwgAAAABJRU5ErkJggg==);
}
.star-gray {
  display: inline-block;
  width: 20px;
  height: 20px;
   background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAeRJREFUOBGtlDsvBFEUx3d2djfiMbTsQ0NEwTaiQSGiRKWREDofgMJHEAqdSPSE0BC9SiEqWQWSzT4SzSbrsR7Fzo7fEXfNg9klbjI5j/s/vzn3MRMI1DFyudxaPp8/qEMa0GqJ0ul0QzgcvtM0zbAsqzMWi+X9aoJ+kzIXiUSmgLXhinZOcn6jJpDieRvA7tvSX64vMJvNdiAdV3I67c5kMkMq/s76AgHMUqTbC0Oh0II9dvvVQ0mlUs2GYbRWKpU2ij4swA3pylX0ZJrmNPn7crn8oOv6Y7FYfEgmk8+i07gOl0z24js6cUHqCU1uwbksefcfYPJCHeDFx5LpUq7DNp2GZeYPw2KrVuLx+Gp1D4GOATwEZvwGSFdv6Oe48PtSVwVKwCfWB/SEJyZxHaMAcBLYmdI6gJIEGg0Gg1e4tTqVZfawzBsFE+u5h4heyLfYRT/4LERrcs95gNwr+RI8nbsLJWa5I+68B8hbPSJ3kYq/03qAvHVYFShL7phni9hSuU/r0TqA8u9DOGArKvCZzXCKEzyL7O8o4Fs1T4ftHGKXisU6gOzfIKLIp2CnVCr1JhKJHVXAiZ4C7Ae8Ts6UPDfCsUUhJRYLrJGCa+xSNBo9ss8pH+gr/jK/tj0a2ETv2IZ35FSkS7HbzakAAAAASUVORK5CYII=);
}
.star-half {
  display: inline-block;
  width: 20px;
  height: 20px;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjY4QUI1QjNDNTdGMDExRThBQjc5QkRFMUIzODlBNDFDIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjY4QUI1QjNENTdGMDExRThBQjc5QkRFMUIzODlBNDFDIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NjhBQjVCM0E1N0YwMTFFOEFCNzlCREUxQjM4OUE0MUMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NjhBQjVCM0I1N0YwMTFFOEFCNzlCREUxQjM4OUE0MUMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6LRSHmAAACs0lEQVR42pxUO2tUQRg9M3P3mezGSJJK2UJFC7WTKGh8FNHEVqxU1NWfkNI0WgY7qwjiqxHBSsRGQTClCGkUkkaFVLLmtY/7mPHMfW6yGwx+cHb2zr3fmfM95hPm7TAgEJkmhERqdt/fhCmMza8ceV/z1Mik1C1sNykjH2MMnMyZ3oKMrVX7JiKzByg9bIrqhhAiLyCO0WlRCLGFzD5bsvC55zgRk2W4yL18rPhKoiQh6CbfShh+wJflPUBlADhQBsYIJ19HcrqUt4iCVZWgJ/yeHUXnDvGMuVryDmNQXMhSKvZT0WWrKkGidGdCG1ybqX3oA19VHXtTGUFcvPp2km6zRWF8YKlRCP+3TBmDXF8NDaAor2KFShUsg7G/VHWe/68Rv4hmFzrEHweOXESgK/wyH5OrUMkoz/LI4IY73VYi6fOsOYRnCbnaLzclHO8bKmqEAVVJlLm2jQ0y69GdLUeyIcdxRlmkNYk3a9P46M1h5N+e/SwpzPr6+gvP805ILHH3uzeDMu7+D6FSCo1GY3ZhYeE6VboyzNoA1WnzGDqYZu5XdktGZata65tBENynulCtxEZco5ztDv0ObsDbECZ4N3aHJE9tyK7rxm1zqciGocKfXtTQEr/D62d2RbhGdahWqxgfHwfV0v04CQ+xuBsmmjRKTsTtvSX3/S4BlU1akmKxiFqtFivsxFOgnJbtTI86e1mEkH0qfNaGatFqteKr5zbQBYfHnkqbT4porLXdJ/D1XJ+etONsXzJ9LNjYLHOKwaN0OphG6eml8JptNm8j8GeCQJ+m06dkZHEtMNyJUqmEBBKqhAyFqXSyOnoeP5on0fRfIqdCpST7TJxji9zjmozuqe5xxhCD7cn/wjs3w5R/gB9PbZm95dAyvu8/4NNrqnvEpm4vLy8jn4/q+FeAAQCkHhPR1W+mLAAAAABJRU5ErkJggg==);
}
.el-form-item {
  display: inline-block;
  margin-right: 20px;
  vertical-align: top;
  margin-bottom: 0!important
}
.el-form-item__label {
  display: inline-block;
  text-align: right;
  vertical-align: middle;
  font-size: 14px;
  color: #5a5e66;
  line-height: 40px;
  padding: 0 12px 0 0;
  box-sizing: border-box;
}
.el-form-item__content {
  display: inline-block;
  vertical-align: top;
  line-height: 40px;
  position: relative;
  font-size: 14px;
  width: 202px;
}
.el-input__inner {
  width: 202px!important;
}
.beingno{
  font-size: 12px;
}
</style>
