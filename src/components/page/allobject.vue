<template>
    <div class="main-content">
        <h2 class="main-title"><i class="fa fa-tags"></i>所有标的</h2>
        <div class="search-box">
            <el-button type="primary" @click="Addobject()" icon="fa fa-plus-square-o">新增</el-button>
        </div>
                <div class="addo_contentall">
                    <div class="addo_content">
                        <el-row :gutter="24">
                            <el-col :span="8">
                                <div class="el-form-item">
                                    <label for="payNumber" class="el-form-item__label">标的流水号:</label>
                                    <div class="el-form-item__content">
                                        <el-input  placeholder="请输入内容" class="el-form-item__content" v-bind="target_nid"></el-input>
                                    </div>
                                </div>
                            </el-col>
                            <el-col :span="8">
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
                            <el-col :span="8">
                                <div class="el-form-item">
                                    <label for="payNumber" class="el-form-item__label">资金端:</label>
                                    <div class="el-form-item__content">
                                        <el-select v-model="asset_name" placeholder="请选择">
                                            <el-option
                                              v-for="item in moneyoptions"
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
                <div class="addo_contentall">
                    <div class="addo_content">
                        <el-row :gutter="16">
                            <el-col :span="8">
                                <div class="el-form-item">
                                    <label for="payNumber" class="el-form-item__label padl10">标的状态:</label>
                                    <div class="el-form-item__content marl5">
                                        <el-select v-model="examine_status" placeholder="请选择" >
                                            <el-option
                                              v-for="item in stateoptions"
                                              :key="item.value"
                                              :label="item.label"
                                              :value="item.value">
                                            </el-option>
                                        </el-select>
                                    </div>
                                </div>
                            </el-col>
                            <el-col :span="8">
                                <div class="el-form-item">
                                    <label for="payNumber" class="el-form-item__label padl14">借款产品:</label>
                                    <div class="el-form-item__content marl3">
                                        <el-select v-model="borrow_name" placeholder="请选择">
                                            <el-option
                                              v-for="item in productoptions"
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
                <div class="addo_contentall">
                    <div class="addo_content">
                        <el-row :gutter="24">
                            <el-col :span="14">  
                                <span class="demonstration">申请时间:</span>
                                <el-date-picker
                                  v-model="start_time"
                                  type="date"
                                  placeholder="选择日期" class="marl14" value-format="yyyy-MM-dd">
                                </el-date-picker>
                                <el-date-picker
                                  v-model="end_time"
                                  type="date"
                                  placeholder="选择日期" class="marl14" value-format="yyyy-MM-dd">
                                </el-date-picker>
                            </el-col>
                            <el-col :span="10">  
                                <el-button type="primary" class="inquire" @click="Allcheck()">查询</el-button>
                                <el-button type="warning" @click="exportExcel()">导出excel</el-button>
                            </el-col>
                        </el-row>
                    </div>
                </div>
                <div class="main-form">
                    <el-table :data="tablist" style="width: 100%">
                        <el-table-column prop="target_nid" label="标的流水号"  show-overflow-tooltip  align="center"></el-table-column>
                        <el-table-column prop="borrow_id" label="借款产品"  show-overflow-tooltip  align="center"></el-table-column>
                        <el-table-column prop="dealer_name" label="经销商名称"  show-overflow-tooltip  align="center"></el-table-column>
                        <el-table-column prop="quote" label="评估金额"  show-overflow-tooltip  align="center"></el-table-column>
                        <el-table-column prop="info_term" label="期限"  show-overflow-tooltip  align="center"></el-table-column>
                        <el-table-column prop="asset" label="资金端"  show-overflow-tooltip  align="center"></el-table-column>
                        <el-table-column prop="" label="标的状态"  show-overflow-tooltip  align="center">
                            <template slot-scope="scope">
                                <label for="payNumber" v-if="scope.row.examine_status == '0'">未审核</label>
                                <label for="payNumber" v-else-if="scope.row.examine_status == '1'">初审通过</label>
                                <label for="payNumber" v-else-if="scope.row.examine_status == '2'">初审失败</label>
                                <label for="payNumber" v-else-if="scope.row.examine_status == '3'">复审通过</label>
                                <label for="payNumber" v-else-if="scope.row.examine_status == '4'">复审失败</label>
                            </template>
                        </el-table-column>
                        <el-table-column prop="add_time" label="申请时间"  show-overflow-tooltip  align="center" v-bind:formatter="Addtime"></el-table-column>
                        <el-table-column prop="examine_review_time" label="放款时间"  show-overflow-tooltip  align="center" v-bind:formatter="Addtime"></el-table-column>
                        <el-table-column label="操作"  show-overflow-tooltip  align="center">
                            <template slot-scope="scope">
                                <el-button type="success" size="small" @click="viewDetails(scope.row.target_nid)">查看详情</el-button>
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
        data() {
            return {
                originoptions: [{
                  value: '01',
                  label: 'A机构'
                }, {
                  value: '02',
                  label: 'B机构'
                }],
                moneyoptions:[{
                    value: '01',
                    label: 'A端'
                }, {
                  value: '02',
                  label: 'B端'
                }],
                stateoptions:[{
                    value: '01',
                    label: 'A端'
                }, {
                  value: '02',
                  label: 'B端'
                }],
                productoptions:[{
                    value: '产品A',
                    label: '产品A'
                }, {
                  value: '产品B',
                  label: '产品B'
                }],
                productvalue:'',
                start_time:'',
                end_time:'',
                total:1,
                page:1,
                epage:5,
                target_nid:'',
                asset_name:'',
                examine_status:'',
                borrow_name:'',
                tablist:[],
                name:'',
                start_time:'',
                end_time:'',
            }
        },
        created(){
            const self = this;
            self.getTargetList();
        },
        methods: {
            Addobject:function(){
                const self = this;
                self.$router.push('/Addobject');
            },
            exportExcel () {
                const self = this;
                 import('@/vendor/Export2Excel').then(excel => {
                 const times = this.$ajax.formatDate(new Date(),"yyyyMMddhhmm");
                 const filename = times+'_所有标的'
                 const tHeader = ['标的流水号', '借款产品', '经销商名称', '评估金额', '期限','资金端','标的状态','申请时间','放款时间']
                 const filterVal = ['target_nid', 'borrow_id', 'dealer_name', 'quote', 'info_term','asset','examine_status','add_time','examine_review_time']
                 const tablist = this.tablist
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
                console.log(jsonData)
        　　　　return jsonData.map(v => filterVal.map(j => {
                  if (j == 'add_time' || j == 'examine_review_time') {
                    return this.$ajax.formatDate(v[j],"yyyy-MM-dd hh:mm:ss")
                  }else {
                    return v[j]
                  }  
                })) 
　　　　    },
            getTargetList(){
                const self = this;
                const params = {
                    page:self.page,
                    epage:self.epage,
                    target_nid:self.target_nid,
                    name:self.name,
                    start_time:self.start_time,
                    end_time:self.end_time,
                }
                this.$ajax.getTargetList(params).then((res)=> {
                    self.total = res.total;
                    self.tablist = res.lists
                });
            },
            Addtime(row,column){
                const self = this;
                const date = row[column.property]; 
                if (date == undefined) {  
                     return "";  
                }  
                return self.$ajax.formatDate(date,"yyyy-MM-dd hh:mm:ss"); 
            },
            handleCurrentChange(e){
                const self = this;
                self.page = e;
                self.getTargetList();
            },
            pageSizeChange(e){
                const self = this;
                self.epage = e;
                self.getTargetList();
            },
            Allcheck(){
               const self = this;
               self.getTargetList(); 
            },
            viewDetails(e){
                const self = this;
                self.$router.push({
                    path:'Allc',
                    query: {id: e}
                })    
            }
        }
    }
</script>

<style scoped>
    .addo_contentall{
      width: 100%;
      border-top:1px solid #ddd;
    }
    .addo_content{
      width: 1000px;
      margin: 10px 0 10px 20px;
    }
    .el-formz{
        padding: 10px 30px ;
        border-bottom: 1px solid #ddd;
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
    .marl14{
        margin-left: 14px;
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