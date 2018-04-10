<template>
  <div class="main-content">
    <div class="main-module">
        <h2 class="main-title"><i class="fa fa-tags"></i>新增角色</h2>
        <div class="action-bar">
            <div class="barli">
                <label>角色名称</label><el-input class="role-input" placeholder="请输入角色名称"></el-input>       
            </div>
        </div>
        <div class="main-form">
            <div id="J_Form" class="form-content">
                <el-table :data="tableData" style="width: 100%">
                    <el-table-column type="expand">
                        <template slot-scope="props">
                            <el-form label-position="left" inline class="demo-table-expand">
                                <!-- <el-form-item>
                                    <span>{{ props.row.children.title }}</span>
                                </el-form-item>
                                <el-form-item>
                                    <el-checkbox v-model="props.row.children.checked">显示</el-checkbox>
                                </el-form-item> -->
                            </el-form>
                        </template>
                    </el-table-column>
                    <el-table-column prop="title" label="导航名称" show-overflow-tooltip align="center"></el-table-column>
                    <el-table-column prop="checked" label="权限分配" show-overflow-tooltip align="center">
                        <template slot-scope="scope">
                            <el-checkbox v-model="scope.row.checked">显示</el-checkbox>
                        </template>                      
                    </el-table-column>
                </el-table>
            </div>
        </div>
    </div>
    <el-button class="form-submit" type="success">确认提交</el-button>
  </div>
</template>
<script>
export default {  
    data () {  
        return {  
            tableData:[{
                title:'资产端管理',
                checked:false,
                children:[{
                    title:'基础资料管理',
                    checked:false
                },{
                    title:'授权额度管理',
                    checked:false
                }]
            },{
                title:'标的管理',
                checked:false
            },{
                title:'用户权限',
                checked:false
            }]
        }  
    },  
  methods:{  
  }  
}  
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .action-bar{
        margin: 10px 0 10px 0;
    }
    .barli{
        height: 40px;
        line-height: 40px;
    }
    .role-input{
        width: 210px;
        margin-left: 10px;
    }
    .form-submit{
        display: block;
        margin: 0 auto;      
    }  
</style>
