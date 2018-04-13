<template>
    <div class="sidebar" :class="layout">
        <el-menu :default-active="$route.path" :mode="navMode" class="el-menu-vertical-demo" background-color="#324157" text-color="#fff" nique-opened router>
            <template v-for="(item,index) in navList" v-if="!item.hidden">
                <el-submenu :index="index+''" v-if="!item.leaf">
                    <template slot="title"><i class="fa" :class="item.iconCls"></i>{{item.name}}</template>
                    <el-menu-item v-for="child in item.children" :index="child.path" :key="child.path" v-if="!child.hidden">{{child.name}}</el-menu-item>
                </el-submenu>
                <el-menu-item v-if="item.leaf&&item.children.length>0" :index="item.children[0].path"><i class="fa" :class="item.iconCls"></i>{{item.children[0].name}}</el-menu-item>
            </template>
        </el-menu>
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    export default {
        data() {
            return {

            }
        },
        props: ['layout'],
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
        background: #2E363F;
        font-size: 14px;
    }
    .sidebar.top {
        float: left;
        margin-left: 20px;
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