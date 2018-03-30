<template>
  <div class="main-content">
    <h2 class="main-title"><i class="fa fa-tags"></i>基础资料管理</h2>
    <div class="search-box">
        <a class="button border-main" href="javascript:void(0);" @click="handleAdd()"><i class="fa fa-plus-square-o"></i>新增</a>
    </div>
    <div class="action-bar">
        <div class="barli">
            <el-row :gutter="20">
              <el-col :span="6">
                <el-select v-model="sheng" @change="choseProvince" placeholder="选择省份">
                    <el-option v-for="item in province" :key="item.id" :label="item.value" :value="item.id"></el-option>
                </el-select>
              </el-col>
              <el-col :span="6">
                <el-select v-model="shi" @change="choseCity" placeholder="选择市">
                    <el-option v-for="item in shi1" :key="item.id" :label="item.value" :value="item.id"></el-option>
                </el-select>
              </el-col>
              <el-col :span="6">
                <el-select v-model="dealer" @change="choseDealer" placeholder="选择经销商类型">
                    <el-option v-for="item in dealer" :key="item.id" :label="item.value" :value="item.id"></el-option>
                </el-select>
              </el-col>
              <el-col :span="6">
                <el-select v-model="audit" @change="choseAudit" placeholder="选择审核状态">
                    <el-option  :label="0" :value="0">待审核</el-option>
                    <el-option  :label="1" :value="1">审核成功</el-option>
                    <el-option  :label="2" :value="2">审核失败</el-option>
                </el-select>
              </el-col>
            </el-row>     
        </div>
        <div class="barli">
            <el-row :gutter="20">
              <el-col :span="6">
                <el-input v-model="input" placeholder="请输入手机号"></el-input>
              </el-col>
              <el-col :span="6">
                <el-input v-model="input" placeholder="输入姓名/手机号"></el-input>
              </el-col>
              <el-col :span="6">
                <el-input v-model="input" placeholder="公司名称"></el-input>
              </el-col>
              <el-col :span="3">
                <el-button type="primary">搜索</el-button>
              </el-col>
              <el-col :span="3">
                <el-button type="warning">导出excel</el-button>
              </el-col>
            </el-row>         
        </div>
    </div>
    <div class="main-form">
        <el-table :data="tableData" style="width: 100%" height="500" header-align="center">
            <el-table-column fixed prop="date" label="姓名" min-width="80"></el-table-column>
            <el-table-column prop="name" label="手机号码" min-width="140"></el-table-column>
            <el-table-column prop="province" label="公司名称" min-width="140"></el-table-column>
            <el-table-column prop="city" label="地区" min-width="100"></el-table-column>
            <el-table-column prop="address" label="同盟" min-width="100"></el-table-column>
            <el-table-column prop="zip" label="注册时间" min-width="100"></el-table-column>
            <el-table-column prop="zip" label="账户状态" min-width="100"></el-table-column>
            <el-table-column prop="zip" label="审核状态" min-width="100"></el-table-column>
            <el-table-column label="操作" min-width="100">
              <template slot-scope="scope">
                <el-button @click="" type="text" size="small">查看</el-button>
                <el-button type="text" size="small">编辑</el-button>
              </template>
            </el-table-column>
        </el-table>
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
      dealer:'',
      audit:'', 
      block:'',
      input:'',
      tableData:''  
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
      choseDealer:function(e) {

      },
      choseAudit:function(e) {
        console.log(e)
      } 
    },  
    created:function(){  
      this.getCityData()  
    }  
}  
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .search-box {
        padding: 10px;
        border-bottom: solid 1px #dfe6ec;
        line-height: 35px;
    }
    .action-bar{
        padding: 10px;
    }
    .barli{
        width: 100%;
        margin-bottom: 10px;
    }
    .el-row{
        width: 1000px;
    }
    .el-input{
        width: 216px;
    }
    .main-form {
        width: 100%;
    }
    .el-table thead{
        font-size: 14px;
        color: #1f2d3d;
    }
    .el-table th {
        background-color: #eef1f6;
        text-align: center;
    }
</style>
