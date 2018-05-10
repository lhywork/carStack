<template>
    <div class="sidebar" :class="[layout,collapse]">
        <el-menu :default-active="$route.path" :mode="navMode" class="el-menu-vertical-demo" background-color="#324157" text-color="#fff" nique-opened router :collapse = "collapse == 'false' || layout == 'top' ? false : true">
            <template v-for="(item,index) in navList" v-if="!item.hidden">
                <el-submenu :index="index+''" v-if="!item.leaf">
                    <template slot="title"><i class="fa" :class="item.iconCls"></i><span class="title-inlie" slot="title">{{item.name}}</span></template>
                    <el-menu-item v-for="child in item.children" :index="child.path" :key="child.path" v-if="!child.hidden">{{child.name}}</el-menu-item>
                </el-submenu>
                <el-menu-item v-if="item.leaf&&item.children.length>0" :index="item.children[0].path"><i class="fa" :class="item.iconCls"></i>{{item.children[0].name}}</el-menu-item>
            </template>
        </el-menu>
        <div class="sidebar-collapser" @click="changeCollapse" v-if="layout !=='top'">
            <div class="sidebar-item">
                <i class="fa " :class="collapse == 'false'?'fa-angle-double-left':'fa-angle-double-right'"></i>
                <span class="collapse-label">收缩侧边栏</span>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    export default {
        data() {
            return {

            }
        },
        props: ['layout','collapse'],
        computed:{
            ...mapState({
                navList: state => state.auth.permissionList
            }),          
            onRoutes(){
                return this.$route.path.replace('/','');
            },
            navMode(){
                if(this.layout == "left"){
                    return "vertical"
                }
                if(this.layout == "top"){
                    return "horizontal"
                }
            } 
        },
        methods:{
            changeCollapse(){
                var navbarPosition = this.$store.state.user.navbarPosition;
                if(navbarPosition == 'left'){
                   var Collapse = this.$store.state.user.Collapse === 'false' ? 'true' : 'false';
                    this.$store.commit("SET_Collapse", Collapse) 
                }else{
                    this.$alert('菜单栏为垂直状态时才能收起菜单');
                }              
            }
        }
    }
</script>

<style scoped>
    .sidebar.left{
        display: block;
        position: absolute;
        width: 180px;
        left: 0;
        top: 60px;
        bottom:0;
        background: #324157;
        font-size: 14px;
    }
    .sidebar.top {
        float: left;
        margin-left: 20px;
    }
    .sidebar.top .el-menu {
        border: none;
        width: 100%;
    }
    .sidebar .sidebar-collapser {
        width: 100%;
        height: 50px;
        line-height: 50px;
        position: absolute;
        bottom: 0;
        left:0;
        cursor: pointer;
    }
    .sidebar .sidebar-item i{
        color: #909399; 
    }
    .sidebar .sidebar-item {
        padding: 0 27px;
        margin: 0 0 5px;
        color: #fff;
        border-left: 3px solid transparent;
        border-right: 3px solid transparent;
        font-size: 14px;
        white-space: nowrap;
    }
    .sidebar.true .sidebar-item span {
        height: 0;
        width: 0;
        overflow: hidden;
        visibility: hidden;
        display: inline-block;
    }
    .sidebar.true .title-inlie{
        height: 0;
        width: 0;
        overflow: hidden;
        visibility: hidden;
        display: inline-block;
    }
</style>
