<template>
    <div class="main-content">
        <h2 class="main-title"><i class="fa fa-tags"></i>复审</h2>
        <div class="addo_contentall">
          <div class="addo_content">
            <el-row :gutter="20">
               <el-col :span="10">
                    <div class="el-form-item">
                      <label for="payNumber" class="el-form-item__label">标的流水号:</label>
                      <div class="el-form-item__content">
                        <el-input  placeholder="请输入内容" class="el-form-item__content"></el-input>
                      </div>
                    </div>
                </el-col>
                <el-col :span="10">
                    <div class="el-form-item">
                      <label for="payNumber" class="el-form-item__label">借款人/机构:</label>
                      <div class="el-form-item__content">
                          <el-select v-model="originvalue" placeholder="请选择">
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
        <div class="addo_contentall">
          <div class="addo_content">
            <el-row :gutter="24">
              <div class="el-formz">
                  <div class="block">
                      <el-col :span="14">
                        <span class="demonstration">申请时间:</span>
                        <el-date-picker
                            v-model="datatime1"
                            type="date"
                            placeholder="选择日期" class="marl10">
                        </el-date-picker>
                        <el-date-picker
                            v-model="datatime2"
                            type="date"
                            placeholder="选择日期" class="marl10">
                        </el-date-picker>
                      </el-col>
                      <el-col :span="10">
                        <el-button type="primary" class="inquire">查询</el-button>
                        <el-button type="warning" @click="exportExcel()">导出excel</el-button>
                      </el-col>
                  </div>
              </div>
              </el-row>
          </div>
        </div>
        <div class="main-form">
            <el-table :data="tabledata" style="width: 100%">
                <el-table-column prop="aa" label="标的流水号"  show-overflow-tooltip  align="center"></el-table-column>
                <el-table-column prop="bb" label="借款产品"  show-overflow-tooltip  align="center"></el-table-column>
                <el-table-column prop="cc" label="经销商名称"  show-overflow-tooltip  align="center"></el-table-column>
                <el-table-column prop="dd" label="评估金额"  show-overflow-tooltip  align="center"></el-table-column>
                <el-table-column prop="ee" label="期限"  show-overflow-tooltip  align="center"></el-table-column>
                <el-table-column prop="ff" label="资金端"  show-overflow-tooltip  align="center"></el-table-column>
                <el-table-column prop="gg" label="申请时间"  show-overflow-tooltip  align="center" v-bind:formatter="Addtime"></el-table-column>
                <el-table-column prop="hh" label="放款时间"  show-overflow-tooltip  align="center"></el-table-column>
                <el-table-column label="操作"  show-overflow-tooltip  align="center">
                    <template slot-scope="scope">
                        <el-button type="success" size="small" @click="">查看详情</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>
<script>
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
                    originvalue: '',
                    moneyoptions:[{
                            value: '01',
                            label: 'A端'
                        }, {
                            value: '02',
                            label: 'B端'
                        }],
                    moneyvalue:'',
                    stateoptions:[{
                            value: '01',
                            label: 'A端'
                        }, {
                            value: '02',
                            label: 'B端'
                        }],
                    statevalue:'',
                    productoptions:[{
                            value: '01',
                            label: 'A端'
                        }, {
                            value: '02',
                            label: 'B端'
                        }],
                    productvalue:'',
                    datatime1:'',
                    datatime2:'',
                    tabledata:[{aa:11,bb:22,cc:33,dd:44,ee:55,ff:66,gg:88,hh:'操作'},{aa:11,bb:22,cc:33,dd:44,ee:55,ff:66,gg:88,hh:'操作'},{aa:11,bb:22,cc:33,dd:44,ee:55,ff:66,gg:88,hh:'操作'}]
                }
            },
            created(){
            
            },
            methods: {
                Addobject:function(){
                    const self = this;
                    self.$router.push('/Addobject');
                },
                shenhe:function(){
                    const self = this;
                    self.$router.push('/FobjectC');
                },
                Addobject:function(){
                    const self = this;
                    self.$router.push('/Addobject');
                },
                exportExcel () {
                     /* generate workbook object from table */
                     var wb = XLSX.utils.table_to_book(document.querySelector('#table1'))
                     /* get binary string as output */
                     var wbout = XLSX.write(wb, { bookType: 'xlsx', bookSST: true, type: 'array' })
                     try {
                         FileSaver.saveAs(new Blob([wbout], { type: 'application/octet-stream' }), 'sheet1js.xlsx')
                     } catch (e) { if (typeof console !== 'undefined') console.log(e, wbout) }
                     return wbout
                },
            }
        }
</script>

<style scoped>
    .addo_contentall{
      width: 100%;
      border-bottom:1px solid #ddd;
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
    #table1{
        display: none;
    }
</style>