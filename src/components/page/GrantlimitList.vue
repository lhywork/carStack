<template>
  <div class="main-content">
    <h2 class="main-title"><i class="fa fa-tags"></i>授权额度管理</h2>
    <div class="action-bar">
        <div class="barli">
            <el-row :gutter="20">
              <el-col :span="6">
                <el-input v-model.trim="company_name" placeholder="公司名称"></el-input>
              </el-col>
              <el-col :span="6">
                <el-input v-model.trim="mobile" placeholder="输入姓名/手机号"></el-input>
              </el-col>                    
                <el-button @click="handSearch()" class="marginl10" type="primary" icon="el-icon-search">搜索</el-button>
              </el-row>         
        </div>
    </div>
    <div class="main-form">
        <el-table :data="tableData" style="width: 100%;min-height:334px;">
            <el-table-column prop="company_name" label="公司名称" show-overflow-tooltip align="center"></el-table-column>
            <el-table-column prop="mobile" label="手机号码" show-overflow-tooltip align="center"></el-table-column>
            <el-table-column prop="addr_area" label="省份" show-overflow-tooltip align="center"></el-table-column>
            <el-table-column prop="dealer_type" label="是否同盟" show-overflow-tooltip align="center">
              <template slot-scope="scope">
                  {{ scope.row.dealer_type =='2' ? '是' : '否' }}
              </template>
            </el-table-column>
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
            <div class="" v-for="item in listsData" :key="item.subject_id">
              <el-form-item class="radio-form-item" :label="item.subject_des">          
              </el-form-item>
              <el-form-item class="radio-form-item">
                <el-radio-group v-model="AnnualFlowAmount" v-for="v in item.options" :key="v.sno">
                  <el-radio :label="v.sno">{{v.option_des}}</el-radio>
                </el-radio-group>
              </el-form-item>
            </div>  
          </el-form>  
          <div slot="footer" class="dialog-footer">
            <el-button @click.native="dialogFormVisible = false">取消</el-button>
            <el-button @click.native="handleNext" type="primary">下一步</el-button>
            <el-button type="primary">确认提交</el-button>
          </div>
        </el-dialog>
    </div>
    <el-pagination v-if="total" :page-size="epage" :page-sizes="[5, 10, 15, 20]" background layout="prev, sizes, pager, next" :total="total" @current-change="handleCurrentChange" @size-change="pageSizeChange">
    </el-pagination>
  </div>
</template>

<script>
export default {  
  data () {  
    return {  
      mapJson:'./static/json/map.json',  
      province:'',  
      sheng: '',  
      shi: '',  
      shi1: [],  
      qu: '',  
      qu1: [],  
      city:'', 
      block:'',
      AnnualFlowAmount:'2',
      dialogFormVisible: false,//编辑界面是否显示
      company_name:'',
      mobile:'',
      page:1,
      epage:5,
      total:1,
      tableData:[],
      lists:[],
      listsData:[],
      liststotal:1,
      size:8,
      curpage:1 
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
            company_name:that.company_name,
            mobile:that.mobile,
            page:that.page,
            epage:that.epage
        }
        this.$ajax.getGrantMaterialList(params).then((res)=> {
            that.tableData = res.lists;
            that.total = res.total;
        });
      },
      getSubjectAndOptions(){
        const that = this;
        const params = {
            account_no:'',
        }
        this.$ajax.getSubjectAndOptions(params).then((res)=> {
          that.lists = res.lists;
          that.listsData = res.lists.slice(0,that.size);
          that.liststotal = res.total;
        });
      },
      //点击评分
      handleScore(){
        this.dialogFormVisible = true;
        this.curpage = 1;
        this.listsData = this.pagination(this.curpage,this.size,this.lists); 
      },
      handleCurrentChange(e){
        this.page = e;
        this.getListData();
      },
      pageSizeChange(e){
        this.epage = e;
        this.getListData();
      },  
      handSearch:function() {
        this.getListData();
      },
      handleNext(){
        this.curpage++;
        var pages =  Math.ceil(this.liststotal/this.size);
        if(this.curpage > pages){
          return false;
        }
        this.listsData = this.pagination(this.curpage,this.size,this.lists);      
      },
      pagination(pageNo, pageSize, array) {
        var offset = (pageNo - 1) * pageSize;           
        return (offset + pageSize >= array.length) ? array.slice(offset, array.length) : array.slice(offset, offset + pageSize);  
      } 
    },  
    created:function(){  
      this.getCityData();
      this.getListData();
      this.getSubjectAndOptions();  
    }  
}  
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .action-bar{
        padding: 10px 0 0 0;       
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
    .radio-form-item{
        margin-bottom: 0;
    }
    .el-radio+.el-radio {
        margin-left: 20px;
    }
    .el-pagination{
      text-align: right;
    }
</style>
