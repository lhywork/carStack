<template>
  <div class="main-content">
    <h2 class="main-title"><i class="fa fa-tags"></i>授权额度管理</h2>
<!--     <div class="search-box">
        <el-button type="primary" @click="handleAdd()"><i class="fa fa-plus-square-o"></i>新增</el-button>
    </div> -->
    <div class="action-bar">
        <div class="barli">
            <el-row :gutter="20">
              <el-col :span="6">
                <el-input v-model="input" placeholder="公司名称"></el-input>
              </el-col>
              <el-col :span="6">
                <el-input v-model="input" placeholder="输入姓名/手机号"></el-input>
              </el-col>                    
                <el-button class="marginl10" type="primary"><i class="el-icon-search"></i><span>搜索</span></el-button>             
            </el-row>         
        </div>
    </div>
    <div class="main-form">
        <el-table :data="tableData" style="width: 100%" height="500" >
            <el-table-column prop="company_name" label="公司名称" show-overflow-tooltip align="center"></el-table-column>
            <el-table-column prop="mobile" label="手机号码" show-overflow-tooltip align="center"></el-table-column>
            <el-table-column prop="addr_area" label="省份" show-overflow-tooltip align="center"></el-table-column>
            <el-table-column prop="dealer_type" label="是否同盟" show-overflow-tooltip align="center"></el-table-column>
            <el-table-column prop="grant_type" label="额度类型" show-overflow-tooltip align="center"></el-table-column>
            <el-table-column prop="risk_score" label="风控评分" show-overflow-tooltip align="center"></el-table-column>
            <el-table-column prop="grant_account" label="授权金额" show-overflow-tooltip align="center"></el-table-column>
            <el-table-column prop="use_account" label="已用额度" show-overflow-tooltip align="center"></el-table-column>
            <el-table-column label="操作" min-width="240" show-overflow-tooltip align="center">
                <template slot-scope="scope">       
                    <el-button @click="handleScore()" type="primary" size="small">立即评分</el-button>
                    <el-button @click="handleScore()" type="success" size="small">查看</el-button>
                    <el-button type="danger" size="small">编辑</el-button>
                </template>
            </el-table-column>
        </el-table>
        <!--编辑界面-->
        <el-dialog title="公司风控评分" :visible.sync="dialogFormVisible">
          <el-form ref="editForm" :label-position="'left'">
            <h3>一.流水审核</h3>
            <el-form-item class="radio-form-item" label="1.年流水金额">
                
            </el-form-item>
            <el-form-item class="radio-form-item">
              <el-radio-group v-model="AnnualFlowAmount">
                <el-radio label="1">1000<总量<2000万</el-radio>
                <el-radio label="2">2000<总量<3000万</el-radio>
                <el-radio label="3">3000<总量<4000万</el-radio>
                <el-radio label="4">5000万以上</el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item class="radio-form-item" label="2.月均赢利">         
            </el-form-item>
            <el-form-item class="radio-form-item">
                <el-radio-group v-model="AnnualFlowAmount">
                  <el-radio label="1">1000<总量<2000万</el-radio>
                  <el-radio label="2">2000<总量<3000万</el-radio>
                  <el-radio label="3">3000<总量<4000万</el-radio>
                  <el-radio label="4">5000万以上</el-radio>
                </el-radio-group>
            </el-form-item>      
            <el-form-item class="radio-form-item" label="3.有无其它信贷公司入账">         
            </el-form-item>
            <el-form-item class="radio-form-item">
                <el-radio-group v-model="AnnualFlowAmount">
                  <el-radio label="1">0</el-radio>
                  <el-radio label="2">1</el-radio>
                  <el-radio label="3">2</el-radio>
                  <el-radio label="4">3</el-radio>
                </el-radio-group>
            </el-form-item>      
          </el-form>  
          <div slot="footer" class="dialog-footer">
            <el-button @click.native="dialogFormVisible = false">取消</el-button>
            <el-button type="primary">确认提交</el-button>
          </div>
        </el-dialog>
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
      block:'',
      input:'',
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
      AnnualFlowAmount:'2',
      dialogFormVisible: false,//编辑界面是否显示
      tableData:[]  
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
        this.$ajax.getGrantMaterialList(params).then((res)=> {
            that.tableData = res.lists;
        });
      },
      //点击评分
      handleScore(){
        this.dialogFormVisible = true;
      },  
      choseDealer:function(e) {

      },
      choseAudit:function(e) {
        // console.log(e)
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
    .el-input{
        width: 216px;
    }
    .marginl10{
        margin-left:10px;
    }
    .main-form{
        padding: 10px 0;
    }
    .radio-form-item{
        margin-bottom: 0;
    }
    .el-radio+.el-radio {
        margin-left: 20px;
    }
</style>
