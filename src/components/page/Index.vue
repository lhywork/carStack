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
                <el-button class="marginl10" type="primary"><i class="el-icon-search"></i><span>搜索</span></el-button>         
                <el-button type="warning" @click="downloadFile()"><i class="el-icon-download"></i><span>导出excel</span></el-button>        
            </el-row>         
        </div>
    </div>
    <div class="main-form">
        <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="account_name" label="姓名"  show-overflow-tooltip  align="center"></el-table-column>
            <el-table-column prop="mobile" label="手机号码" show-overflow-tooltip  align="center"></el-table-column>
            <el-table-column prop="company_name" label="公司名称" show-overflow-tooltip  align="center"></el-table-column>
            <el-table-column prop="addr_area" label="地区" show-overflow-tooltip  align="center"></el-table-column>
            <el-table-column prop="dealer_type" label="同盟" show-overflow-tooltip  align="center"></el-table-column>
            <el-table-column prop="add_time" label="注册时间" :formatter="dateFormat" show-overflow-tooltip  align="center"></el-table-column>
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
                    <el-button @click="handleCheck(1)" type="success" size="small">查看</el-button>
                    <el-button @click="handleEdit(1)" type="danger" size="small">编辑</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-table :data="tableData" style="width: 100%;display:none;" id="ExcelTable">
            <el-table-column prop="account_name" label="姓名"  show-overflow-tooltip  align="center"></el-table-column>
            <el-table-column prop="mobile" label="手机号码" show-overflow-tooltip  align="center"></el-table-column>
            <el-table-column prop="company_name" label="公司名称" show-overflow-tooltip  align="center"></el-table-column>
            <el-table-column prop="addr_area" label="地区" show-overflow-tooltip  align="center"></el-table-column>
            <el-table-column prop="dealer_type" label="同盟" show-overflow-tooltip  align="center"></el-table-column>
            <el-table-column prop="add_time" label="注册时间" :formatter="dateFormat" show-overflow-tooltip  align="center"></el-table-column>
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
        </el-table>
    </div>
    <el-pagination :page-size="epage" :page-sizes="[5, 10, 15, 20]" background layout="prev, sizes, pager, next" :total="total" @current-change="handleCurrentChange" @size-change="pageSizeChange">
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
      province:'',  
      sheng: '',  
      shi: '',  
      shi1: [],  
      qu: '',  
      qu1: [],  
      city:'', 
      block:'',
      input:'',
      dealer:'',
      mobile:'',
      account_name:'',
      company_name:'',
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
          auditor_status:that.auditor_status,
          page:that.page,
          epage:that.epage
        }
        this.$ajax.getBaseMaterialList(params).then((res)=> {
            that.tableData = res.lists;
            that.total = res.total;
        });
      },
        dateFormat:function(row, column){
            var date = row[column.property];  
            if (date == undefined) {  
                return "";  
            }  
            return this.$ajax.formatDate(new Date(date*1000),"yyyy-MM-dd hh:mm:ss");
        },
      //点击添加
      handleAdd(){
        // sessionStorage.setItem('sub_title','添加课程');
        this.$router.push('/MaterialAdd');
      },
      //点击查看
      handleCheck(index){
          this.$router.push({
              path: 'MaterialCheck',
              query: {
                  id: index
              }
          });
      },
      handleEdit(index){
          this.$router.push({
              path: 'MaterialEdit',
              query: {
                id: index
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

      },
      choseAudit:function(e) {
        this.auditor_status = e;
        this.getListData();  
      },
      downloadFile() {
        /* generate workbook object from table */
         var wb = XLSX.utils.table_to_book(document.querySelector('#ExcelTable'));
         var times = this.$ajax.formatDate(new Date(),"yyyyMMddhhmm");
         /* get binary string as output */
         var wbout = XLSX.write(wb, { bookType: 'xlsx', bookSST: true, type: 'array' })
         try {
            FileSaver.saveAs(new Blob([wbout], { type: 'application/octet-stream' }), times+'_基础资料.xlsx')
         } catch (e) { if (typeof console !== 'undefined') console.log(e, wbout) }
         return wbout;
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
        padding: 10px 0;
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
    .marginl10{
        margin-left:10px;
    }
    .main-form{
        padding: 10px 0;
    }
    .el-pagination{
      text-align: right;
    }
</style>
