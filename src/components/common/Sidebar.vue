<template>
    <div class="sidebar">
        <el-menu :default-active="onRoutes" class="el-menu-vertical-demo" background-color="#324157" text-color="#fff" nique-opened router>
            <template v-for="item in items">
                <template v-if="item.subs">
                    <el-submenu :index="item.index">
                        <template slot="title"><i class="fa fa-margin" :class="item.icon"></i>{{ item.title }}</template>
                        <el-menu-item v-for="(subItem,i) in item.subs" :key="i" :index="subItem.index">{{ subItem.title }}
                        </el-menu-item>
                    </el-submenu>
                </template>
                <template v-else>
                    <el-menu-item :index="item.index">
                        <i class="fa fa-margin" :class="item.icon"></i>{{ item.title }}
                    </el-menu-item>
                </template>
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