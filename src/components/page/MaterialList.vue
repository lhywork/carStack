<template>
  <div class="main-content">
    <h2 class="main-title"><i class="fa fa-tags"></i>基础资料管理</h2>
    <div class="search-box">
        <el-button type="primary" @click="handleAdd()" icon="fa fa-plus-square-o">新增</el-button>
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
                    <el-option v-for="item in shiArr" :key="item.value" :label="item.value" :value="item.id"></el-option>
                </el-select>
              </el-col>
              <el-col :span="6">
                <el-select v-model="dealer_type" @change="choseDealer" placeholder="选择经销商类型">
                    <el-option v-for="item in dealerarr" :key="item.id" :label="item.label" :value="item.value"></el-option>
                </el-select>
              </el-col>
              <el-col :span="6">
                <el-select v-model="auditor_status" @change="choseAudit" placeholder="选择审核状态">
                    <el-option v-for="item in auditarr" :key="item.value" :label="item.label" :value="item.value"></el-option>
                </el-select>
              </el-col>
            </el-row>     
        </div>
        <div class="barli">
            <el-row :gutter="20">
              <el-col :span="6">
                <el-input class="barli-input" v-model="mobile" placeholder="请输入手机号"></el-input>
              </el-col>
              <el-col :span="6">
                <el-input class="barli-input" v-model="account_name" placeholder="输入姓名"></el-input>
              </el-col>
              <el-col :span="6">
                <el-input class="barli-input" v-model="company_name" placeholder="公司名称"></el-input>
              </el-col>        
                <el-button type="primary" icon="el-icon-search">搜索</el-button>         
                <el-button type="warning" icon="el-icon-download" @click="handleDownload()" :loading="downloadLoading">导出excel</el-button>        
            </el-row>         
        </div>
    </div>
    <div class="main-form">
        <el-table :data="tableData" style="width: 100%;min-height:335px;">
            <el-table-column prop="account_name" label="姓名"  show-overflow-tooltip  align="center"></el-table-column>
            <el-table-column prop="mobile" label="手机号码" show-overflow-tooltip  align="center"></el-table-column>
            <el-table-column prop="company_name" label="公司名称" show-overflow-tooltip  align="center"></el-table-column>
            <el-table-column prop="addr_area" label="地区" show-overflow-tooltip  align="center"></el-table-column>
            <el-table-column prop="dealer_type" label="是否同盟" show-overflow-tooltip  align="center">
              <template slot-scope="scope">
                  {{ scope.row.dealer_type =='2' ? '是' : '否' }}
              </template>
            </el-table-column>
            <el-table-column prop="add_time" label="操作时间" :formatter="dateFormat" show-overflow-tooltip  align="center"></el-table-column>
            <el-table-column prop="account_status" label="账户状态" show-overflow-tooltip  align="center">
                <template slot-scope="scope">
                  {{ scope.row.account_status ? '已启用' : '未启用' }}
                </template>
            </el-table-column>
            <el-table-column prop="auditor_status" label="审核状态" show-overflow-tooltip  align="center">
                <template slot-scope="scope" >
                    {{scope.row.auditor_status | filterFun }}
                </template>
            </el-table-column>
            <el-table-column label="操作" min-width="150" show-overflow-tooltip  align="center">
                <template slot-scope="scope">
                    <el-button @click="handleCheck(scope.row.account_no)" type="success" size="small">查看</el-button>
                    <el-button @click="handleEdit(scope.row.account_no)" type="danger" size="small">编辑</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
    <el-pagination v-if="total" :page-size="epage" :page-sizes="[5, 10, 15, 20]" background layout="prev, sizes, pager, next" :total="total" @current-change="handleCurrentChange" @size-change="pageSizeChange">
    </el-pagination>
  </div>
</template>

<script>
import FileSaver from 'file-saver'
import XLSX from 'xlsx' 
export default { 
  data () {  
    return {  
      mapJson:'../static/json/map.json',  
      province:[],
      city:[], 
      block:[],  
      sheng: '',  
      shi: '',  
      shiArr: [],  
      qu: '',  
      quArr: [],  
      mobile:'',
      account_name:'',
      company_name:'',
      dealer_type:'',
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
      auditor_status:'',
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
      downloadLoading:false,
      page:1,
      epage:5,
      total:1,
      tableData:[]  
    }  
  },
  mounted () {
   
  },
  filters:{
    filterFun: function (value) {
      if(value == 0){
        return "待审核";
      }else if(value == 1){
        return "审核成功";
      }else{
        return "审核失败";
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
            this.sheng = this.province[index2].value  
            this.shiArr = this.province[index2].children  
            this.shi = this.province[index2].children[0].value  
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
            // console.log(this.E)  
          }  
        }  
      },
      getListData() {
        const that = this;
        const params = {
          addr_province:that.sheng,
          addr_city:that.shi,
          dealer_type:that.dealer_type,
          auditor_status:that.auditor_status,
          page:that.page,
          epage:that.epage
        }
        this.$ajax.getBaseMaterialList(params).then((res)=> {
            that.tableData = res.lists;
            that.total = res.total;
        });
      },
      dateFormat(row, column){
          var timestamp = row[column.property];  
          if (timestamp == undefined) {  
              return "";  
          }  
          return this.$ajax.formatDate(timestamp,"yyyy-MM-dd hh:mm:ss");
      },
      auditorFormat(value){
          if(value == 0){
            return "待审核";
          }else if(value == 1){
            return "审核成功";
          }else{
            return "审核失败";
          }
      },
      //点击添加
      handleAdd(){
        const self = this;
        self.$ajax.getAccountNo({}).then((res)=>{
          self.$router.push({
              path: 'MaterialAdd',
              query: {
                id: res.account_no
              }
          });
        });
      },
      //点击查看
      handleCheck(id){
          this.$router.push({
              path: 'MaterialCheck',
              query: {
                id: id
              }
          });
      },
      handleEdit(id){
          this.$router.push({
              name: '编辑基础资料',
              query: {
                id: id
              }
          });
      },
      handleCurrentChange(e){
        this.page = e;
        this.getListData();
      },
      pageSizeChange(e){
        this.epage = e;
        this.getListData();
      },  
      choseDealer:function(e) {
        this.dealer_type = e;
        this.getListData();
      },
      choseAudit:function(e) {
        this.auditor_status = e;
        this.getListData();  
      },
      handleDownload() {
        this.downloadLoading = true
        import('@/vendor/Export2Excel').then(excel => {
          const times = this.$ajax.formatDate(new Date(),"yyyyMMddhhmm");
          const filename = times+'_基础资料'
          const tHeader = ['姓名', '手机号码', '公司名称', '地区', '同盟', '操作时间', '账户状态','审核状态']
          const filterVal = ['account_name', 'mobile', 'company_name', 'addr_area', 'dealer_type','add_time','account_status','auditor_status']
          const tableData = this.tableData
          const data = this.formatJson(filterVal, tableData)
          excel.export_json_to_excel({
            header: tHeader,
            data,
            filename: filename,
            autoWidth: true
          })
          this.downloadLoading = false
        })
      },
      formatJson(filterVal, jsonData) {
        return jsonData.map(v => filterVal.map(j => {
          if (j === 'add_time') {
            return this.$ajax.formatDate(v[j],"yyyy-MM-dd hh:mm:ss")
          } else if(j === 'account_status'){
            return v[j] ? '已启用' : '未启用'
          } else if(j === 'auditor_status'){
            return this.auditorFormat(v[j])
          }else {
            return v[j]
          }
        }))
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
    .action-bar{
        padding: 10px 0 0 0;
        border-top:1px solid #ddd;
    }
    .barli{
        width: 100%;
        margin-bottom: 14px;
    }
    .el-row{
        width: 1000px;
    }
    .barli-input{
        width: 216px;
    }
    .el-pagination{
      text-align: right;
    }
</style>
