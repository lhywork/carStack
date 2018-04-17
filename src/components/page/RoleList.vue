<template>
  <div class="main-content">
    <h2 class="main-title"><i class="fa fa-tags"></i>角色配置</h2>
    <div class="search-box">
        <el-button type="primary" @click="handleAdd()"><i class="fa fa-plus-square-o"></i>新增</el-button>
    </div>
    <div class="main-form">
        <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="r_role" label="角色名称"  show-overflow-tooltip  align="center"></el-table-column>
            <el-table-column label="操作"  show-overflow-tooltip  align="center">
                <template slot-scope="scope">
                    <el-button @click="handleEdit(scope.row.id)" type="danger" size="small">编辑</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
    <el-pagination v-if="total" :page-size="epage" :page-sizes="[5, 10, 15, 20]" background layout="prev, sizes, pager, next" :total="total" @current-change="handleCurrentChange" @size-change="pageSizeChange">
    </el-pagination>
  </div>
</template>
<script>
export default { 
  data () {  
    return {  
      tableData:[],
      page:1,
      epage:5,
      total:1  
    }  
  },
  mounted () {
   
  },  
  methods:{  
      getListData:function() {
        const that = this;
        const params = {};
        this.$ajax.getRoleInfoList(params).then((res)=> {
            // console.log(res)
            that.tableData = res.lists;
            self.total = parseInt(res.total);
        });
      },
      //点击添加
      handleAdd(){
        this.$router.push('/RoleAdd');
      },
      handleEdit(index){
        this.$router.push({
            path: 'RoleEdit',
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
      }
    },  
    created:function(){  
      this.getListData();  
    }  
}  
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .main-form{
        padding: 10px 0;
    }
    .el-pagination{
      text-align: right;
    }
</style>
