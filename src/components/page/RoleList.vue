<template>
  <div class="main-content">
    <h2 class="main-title"><i class="fa fa-tags"></i>角色配置</h2>
    <div class="search-box">
        <el-button type="primary" @click="handleAdd()"><i class="fa fa-plus-square-o"></i>新增</el-button>
    </div>
    <div class="main-form">
        <el-table :data="tableData" style="width: 100%" height="500">
            <el-table-column prop="role" label="角色名称"  show-overflow-tooltip  align="center"></el-table-column>
            <el-table-column label="操作"  show-overflow-tooltip  align="center">
                <template slot-scope="scope">
                    <el-button @click="handleEdit(1)" type="danger" size="small">编辑</el-button>
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
      tableData:[]  
    }  
  },
  mounted () {
   
  },  
  methods:{  
      getListData:function() {
        const that = this;
        const params = {};
        this.$ajax.getRoleInfoList(params).then((res)=> {
            console.log(res)
            that.tableData = res.lists;
        });
      },
      //点击添加
      handleAdd(){
        // sessionStorage.setItem('sub_title','添加课程');
        this.$router.push('/RoleAdd');
      },
      handleEdit(index){
          this.$router.push({
              path: 'MaterialEdit',
              query: {
                  id: index
              }
          });
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
</style>
