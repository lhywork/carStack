<template>
    <div class="main-content">
        <h2 class="main-title"><i class="fa fa-tags"></i>初审</h2>
        <div class="addo_contentall">
          <div class="addo_content">
            <el-row :gutter="20">
               <el-col :span="10">
                    <div class="el-form-item">
                      <label for="payNumber" class="el-form-item__label">标的流水号:</label>
                      <div class="el-form-item__content">
                        <el-input  placeholder="请输入内容" class="el-form-item__content" v-model="target_nid"></el-input>
                      </div>
                    </div>
                </el-col>
                <el-col :span="10">
                    <div class="el-form-item">
                      <label for="payNumber" class="el-form-item__label">借款人/机构:</label>
                      <div class="el-form-item__content">
                          <el-select v-model="name" placeholder="请选择">
                              <el-option
                                  v-for="item in originoptions"
                                  :key="item.value"
                                  :label="item.label"
                                  :value="item.value">
                              </el-option>
                          </el-select>
                      </div>
                    </div>
                </el-col>
            </el-row>
          </div>
        </div>
        <div class="addo_contentall bordernone">
          <div class="addo_content">
            <el-row :gutter="24">
              <div class="el-formz">
                  <div class="block">
                      <el-col :span="14">
                        <span class="demonstration">申请时间:</span>
                        <el-date-picker
                            v-model="start_time"
                            type="date"
                            placeholder="选择日期" class="marl10" value-format="yyyy-MM-dd">
                        </el-date-picker>
                        <el-date-picker
                            v-model="end_time"
                            type="date"
                            placeholder="选择日期" class="marl10" value-format="yyyy-MM-dd">
                        </el-date-picker>
                      </el-col>
                      <el-col :span="10">
                        <el-button type="primary" class="inquire" @click="inquire()">查询</el-button>
                        <el-button type="warning" @click="exportExcel()">导出excel</el-button>
                      </el-col>
                  </div>
              </div>
              </el-row>
          </div>
        </div>
       <div class="main-form">
            <el-table :data="getTargetList.lists" style="width: 100%">
                <el-table-column prop="target_nid" label="标的流水号"  show-overflow-tooltip  align="center"></el-table-column>
                <el-table-column prop="borrow_id" label="借款产品"  show-overflow-tooltip  align="center"></el-table-column>
                <el-table-column prop="" label="借款人/机构"  show-overflow-tooltip  align="center"></el-table-column>
                <el-table-column prop="quote" label="申请金额"  show-overflow-tooltip  align="center"></el-table-column>
                <el-table-column prop="valuation" label="评估定价"  show-overflow-tooltip  align="center"></el-table-column>
                <el-table-column prop="examine_status" label="审核状态"  show-overflow-tooltip  align="center">
                    <template slot-scope="scope">
                        <label for="payNumber" v-if="scope.row.examine_status == '0'">未审核</label>
                        <label for="payNumber" v-else-if="scope.row.examine_status == '1'">初审通过</label>
                        <label for="payNumber" v-else-if="scope.row.examine_status == '2'">初审失败</label>
                        <label for="payNumber" v-else-if="scope.row.examine_status == '3'">复审通过</label>
                        <label for="payNumber" v-else-if="scope.row.examine_status == '4'">复审失败</label>
                    </template>
                </el-table-column>
                <el-table-column prop="add_time" label="申请时间"  show-overflow-tooltip  align="center" v-bind:formatter="Addtime"></el-table-column>
                <el-table-column label="操作"  show-overflow-tooltip  align="center">
                    <template slot-scope="scope">

                        <el-button type="success" size="small" @click="viewDetails(scope.row.target_nid)" v-if="scope.row.examine_status == '0'">审核</el-button>
                        <el-button type="success" size="small" @click="viewDetails(scope.row.target_nid)" v-else>查看</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
        <el-pagination v-if="getTargetList.total" :page-size="epage" :page-sizes="[5, 10, 15, 20]" background layout="prev, sizes, pager, next" :total="getTargetList.total" @current-change="handleCurrentChange" @size-change="pageSizeChange">
        </el-pagination>
    </div>
</template>
<script>
    import { mapState } from 'vuex'
    import FileSaver from 'file-saver'
    import XLSX from 'xlsx'
    export default {
            data() {
                return {
                    title: "初审",
                    originoptions: [{
                            value: '01',
                            label: 'A机构'
                        }, {
                            value: '02',
                            label: 'B机构'
                        }],
                    start_time:'',
                    end_time:'',
                    tablist:[],
                    total:1,
                    page:1,
                    epage:5,
                    target_nid:'',
                    name:'',
                }
            },
            computed: {
                // Getting Vuex State from store/modules/search
                ...mapState({
                   getTargetList: state => state.loan.getTargetList
                })
            },
            methods: {
                Addtime(row,column){
                    const self = this;
                    const date = row[column.property]; 
                    if (date == undefined) {  
                         return "";  
                    }  
                    return self.$ajax.formatDate(date,"yyyy-MM-dd hh:mm:ss"); 
                },
                exportExcel () {
                    const self = this;
                     import('@/vendor/Export2Excel').then(excel => {
                     const times = this.$ajax.formatDate(new Date(),"yyyyMMddhhmm");
                     const filename = times+'_标的初审'
                     const tHeader = ['标的流水号', '借款产品', '借款人/机构', '申请金额', '评估定价','审核状态','申请时间',]
                     const filterVal = ['target_nid', 'borrow_id', '', 'quote', 'valuation','examine_status','add_time',]
                     const tablist = self.tablist;

                     const data = self.formatJson(filterVal, tablist)

                     excel.export_json_to_excel({
                        header: tHeader,
                        data,
                        filename: filename,
                        autoWidth: true
                     })
                    })
                },
                formatJson(filterVal, jsonData) {
            　　　　return jsonData.map(v => filterVal.map(j => {
                      if (j == 'add_time') {
                        return this.$ajax.formatDate(v[j],"yyyy-MM-dd hh:mm:ss")
                      }else if(j == 'examine_status'){
                        if(v[j] == 0){
                            return "未审核"
                        }else if(v[j] == 1){
                            return "初审通过"
                        }else if(v[j] == 2){
                            return "初审失败"
                        }else if(v[j] == 3){
                            return "复审通过"
                        }else if(v[j] == 4){
                            return "复审失败"
                        }
                    }else {
                        return v[j]
                      }  
                    })) 
    　　　　    },
                getList(){
                    const self = this;
                    const params = {
                        page:self.page,
                        epage:self.epage,
                        target_nid:self.target_nid,
                        name:self.name,
                        start_time:self.start_time,
                        end_time:self.end_time,
                    }
                    self.$store.dispatch('getTargetList',params)
                },
                Addtime(row,column){
                    const self = this;
                    const date = row[column.property]; 
                    if (date == undefined) {  
                         return "";  
                    }  
                    return self.$ajax.formatDate(date,"yyyy-MM-dd hh:mm:ss"); 
                },
                viewDetails(e){
                    const self = this;
                    self.$router.push({
                        path:'FobjectC',
                        query: {id: e}
                    })    
                },
                handleCurrentChange(e){
                    const self = this;
                    self.page = e;
                    self.getList();
                },
                pageSizeChange(e){
                    const self = this;
                    self.epage = e;
                    self.getList();
                },
                inquire(){
                    const self = this;
                    self.getList();
                }
            },
            created(){
                const self = this;
                self.getList();
            },
        }
</script>

<style scoped>
    .addo_contentall{
      width: 100%;
      border-bottom:1px solid #ddd;
    }
    .bordernone{
        border: none;
    }
    .addo_content{
      width: 1000px;
      margin: 10px 0 10px 20px;
    }
    .el-row{
      margin: 0!important;
    }
    .el-form-item{
        display: inline-block;
        margin-right: 20px;
        vertical-align: top;
        margin-bottom: 0!important
    }
    .el-form-item__label{
        display: inline-block;
        text-align: right;
        vertical-align: middle;
        font-size: 14px;
        color: #5a5e66;
        line-height: 40px;
        padding: 0 12px 0 0;
        box-sizing: border-box;
    }

    .el-form-item__content{
        display: inline-block;
        vertical-align: top;
        line-height: 40px;
        position: relative;
        font-size: 14px;
        width: 202px;
    }

    .el-input__inner{
        width: 202px!important;
    }
    .el-input{
        position: relative;
        font-size: 14px;
        display: inline-block;
        width: 100%;
    } 
    .panel-cont {
        overflow: hidden;
    }
    h5{
        font-weight: bold;
    }
    .search {
        overflow: hidden;
        padding-left:10px;
    }
    .search li {
        float: left;
        margin-right: 15px;
        line-height: 35px
    }
    .search .input{
        width: 200px;
        line-height: 16px;
        cursor: pointer;
    }
    .search .keywords{
        width:250px; 
        line-height:16px;
        display:inline-block;
    }
    .button {
        padding: 8px 15px;
    }
    .table th{
        text-align: center;
        padding: 12px;
    }
    .table td {
        vertical-align: middle;
        padding: 10px;
    }
    .padl14{
        padding-left: 14px;
    }
    .padl10{
        padding-left: 10px;
    }
    .marl5{
        margin-left: 5px;
    }
    .marl3{
        margin-left: 3px;
    }
    .marl10{
        margin-left: 10px;
    }
    .el-date-editor--date{
        width: 202px;
    }
    .demonstration{
        padding-left: 9px;
    }
    .inquire{
        margin-left: 55px;
    }
    .el-pagination{
      text-align: right;
    }
</style>