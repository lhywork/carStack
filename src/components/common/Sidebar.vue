<template>
    <div class="sidebar">
        <el-menu :default-active="$route.path" class="el-menu-vertical-demo" background-color="#324157" text-color="#fff" nique-opened router>
           <!--  <template v-for="item in $router.options.routes" v-if="!item.hidden">
                <template v-if="item.subs">
                    <el-submenu :index="item.index">
                        <template slot="title"><i class="fa fa-margin" :class="item.icon"></i>{{ item.name }}</template>
                        <el-menu-item v-for="(subItem,i) in item.children" :key="i" >{{ subItem.name }}
                        </el-menu-item>
                    </el-submenu>
                </template>
                <template v-else>
                    <el-menu-item :index="item.index">
                        <i class="fa fa-margin" :class="item.icon"></i>{{ item.name }}
                    </el-menu-item>
                </template>
            </template> -->
            <template v-for="(item,index) in $router.options.routes" v-if="!item.hidden">
                <el-submenu :index="index+''" v-if="!item.leaf">
                    <template slot="title"><i :class="item.iconCls"></i>{{item.name}}</template>
                    <el-menu-item v-for="child in item.children" :index="child.path" :key="child.path" v-if="!child.hidden">{{child.name}}</el-menu-item>
                </el-submenu>
                <el-menu-item v-if="item.leaf&&item.children.length>0" :index="item.children[0].path"><i :class="item.iconCls"></i>{{item.children[0].name}}</el-menu-item>
            </template>
        </el-menu>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                items: [
                    {
                        icon: 'fa-money',
                        index: '1',
                        title: '资产端管理',
                        subs: [
                            {
                                index: 'index',
                                title: '基础资料管理'
                            },
                            {
                                index: 'GrantlimitList',
                                title: '授权额度管理'
                            }
                        ]
                    },
                    {
                        icon: 'fa-inbox',
                        index: '2',
                        title: '标的管理',
                        subs: [
                            {
                                index: 'Allobject',
                                title: '所有标的'
                            },
                            {
                                index: 'vuetable',
                                title: '初审'
                            },
                            {
                                index: 'vuetable',
                                title: '复审'
                            },
                            {
                                index: 'vuetable',
                                title: '核对真实借款金额'
                            }
                        ]
                    }
                ]
            }
        },
        computed:{
            onRoutes(){
                return this.$route.path.replace('/','');
            } 
        },  
        created:function(){  
          console.log(this.$route) 
        } 
    }
</script>

<style scoped>
    .sidebar{
        display: block;
        position: absolute;
        width: 180px;
        left: 0;
        top: 60px;
        bottom:0;
        background: #2E363F;
        font-size: 14px;
    }
    .el-menu {
        border: none;
        width: 100%;
    }
    .el-submenu .el-menu-item {
        min-width: 180px;
    }
    .sidebar > ul {
        height:100%;
    }
</style>