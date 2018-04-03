<template>
  <div class="main-content">
    <h2 class="main-title"><i class="fa fa-tags"></i>基础资料管理</h2>
    <div class="search-box">
        <el-button type="primary" @click="handleAdd()"><i class="fa fa-plus-square-o"></i>新增</el-button>
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
                    <el-option v-for="item in dealerarr" :key="item.id" :label="item.label" :value="item.value"></el-option>
                </el-select>
              </el-col>
              <el-col :span="6">
                <el-select v-model="audit" @change="choseAudit" placeholder="选择审核状态">
                    <el-option v-for="item in auditarr" :key="item.value" :label="item.label" :value="item.value"></el-option>
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
                <el-button class="marginl10" type="primary"><i class="el-icon-search"></i><span>搜索</span></el-button>
                <a id="downlink"></a>         
                <el-button type="warning" @click="downloadFile(tableData)"><i class="el-icon-download"></i><span>导出excel</span></el-button>        
            </el-row>         
        </div>
    </div>
    <div class="main-form">
        <el-table :data="tableData" style="width: 100%" height="500" >
            <el-table-column prop="account_name" label="姓名"  show-overflow-tooltip  align="center"></el-table-column>
            <el-table-column prop="mobile" label="手机号码" ></el-table-column>
            <el-table-column prop="company_name" label="公司名称" ></el-table-column>
            <el-table-column prop="addr_area" label="地区" ></el-table-column>
            <el-table-column prop="dealer_type" label="同盟" ></el-table-column>
            <el-table-column prop="add_time" label="注册时间" ></el-table-column>
            <el-table-column prop="account_status" label="账户状态" >
                <template slot-scope="scope">
                    {{ scope.row.account_status ? '已启用' : '未启用' }}
                </template>
            </el-table-column>
            <el-table-column prop="auditor_status" label="审核状态" >
                <template slot-scope="scope" >
                    <span v-if = "scope.row.auditor_status == 0">待审核</span>
                    <span v-else-if = "scope.row.auditor_status == 1">审核成功</span>
                    <span v-else = "scope.row.auditor_status == 2">审核失败</span>
                </template>
            </el-table-column>
            <el-table-column label="操作" min-width="150">
                <template slot-scope="scope">
                    <el-button @click="" type="success" size="small">查看</el-button>
                    <el-button type="danger" size="small">编辑</el-button>

                </template>
            </el-table-column>
        </el-table>
    </div>
  </div>
</template>

<script>
  var XLSX = require('xlsx') 
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
      block:'',
      input:'',
      outFile: '',
      dealer:'',
      dealerarr:[{
          value: '1',
          label: '普通合伙人'
        }, {
          value: '2',
          label: '城市分栈'
        }, {
          value: '3',
          label: '省栈同盟'
      }],
      audit:'',
      auditarr: [{
          value: '0',
          label: '待审核'
        }, {
          value: '1',
          label: '审核成功'
        }, {
          value: '2',
          label: '审核失败'
        }],
      tableData:[]  
    }  
  },
  mounted () {
    this.outFile = document.getElementById('downlink')
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
      //点击添加
      handleAdd(){
        // sessionStorage.setItem('sub_title','添加课程');
        this.$router.push('/MaterialAdd');
      },  
      choseDealer:function(e) {

      },
      choseAudit:function(e) {
        // console.log(e)
      },
      s2ab: function (s) { // 字符串转字符流
        var buf = new ArrayBuffer(s.length)
        var view = new Uint8Array(buf)
        for (var i = 0; i !== s.length; ++i) {
          view[i] = s.charCodeAt(i) & 0xFF
        }
        return buf
      },
      downloadFile: function (rs) { // 点击导出按钮
        let data = [{}]
        for (let k in rs[0]) {
          data[0][k] = k
        }
        data = data.concat(rs)
        this.downloadExl(data, '菜单')
      },
      downloadExl: function (json, downName, type) {  // 导出到excel
        let keyMap = [] // 获取键
        for (let k in json[0]) {
          keyMap.push(k)
        }
        console.info('keyMap', keyMap, json)
        let tmpdata = [] // 用来保存转换好的json
        json.map((v, i) => keyMap.map((k, j) => Object.assign({}, {
          v: v[k],
          position: (j > 25 ? this.getCharCol(j) : String.fromCharCode(65 + j)) + (i + 1)
        }))).reduce((prev, next) => prev.concat(next)).forEach(function (v) {
          tmpdata[v.position] = {
            v: v.v
          }
        })
        let outputPos = Object.keys(tmpdata)  // 设置区域,比如表格从A1到D10
        let tmpWB = {
          SheetNames: ['mySheet'], // 保存的表标题
          Sheets: {
            'mySheet': Object.assign({},
              tmpdata, // 内容
              {
                '!ref': outputPos[0] + ':' + outputPos[outputPos.length - 1] // 设置填充区域
              })
          }
        }
        let tmpDown = new Blob([this.s2ab(XLSX.write(tmpWB,
          {bookType: (type === undefined ? 'xlsx' : type), bookSST: false, type: 'binary'} // 这里的数据是用来定义导出的格式类型
        ))], {
          type: ''
        })  // 创建二进制对象写入转换好的字节流
        var href = URL.createObjectURL(tmpDown)  // 创建对象超链接
        this.outFile.download = downName + '.xlsx'  // 下载名称
        this.outFile.href = href  // 绑定a标签
        this.outFile.click()  // 模拟点击实现下载
        setTimeout(function () {  // 延时释放
          URL.revokeObjectURL(tmpDown) // 用URL.revokeObjectURL()来释放这个object URL
        }, 100)
      } 
    },  
    created:function(){  
      this.getCityData();
      this.getListData();  
    }  
}  
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .search-box {
        padding: 10px 0;
        border-bottom: solid 1px #dfe6ec;
        line-height: 35px;
    }
    .action-bar{
        padding: 10px 0;
    }
    .barli{
        width: 100%;
        margin-bottom: 14px;
    }
    .el-row{
        width: 1000px;
    }
    .el-input{
        width: 216px;
    }
    .marginl10{
        margin-left:10px;
    }
    .main-form{
        padding: 10px 0;
    }
</style>
