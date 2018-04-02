<template>
     <div class='bread_container' id="bread_container">
        <span @click="handleLefeMenu" class="bars"> 
            <!-- <i class="fa fa-bars"  :class="{isactive:changeBarDirection}"></i> -->
        </span>
        <el-breadcrumb class="breadcrumb" separator="/">
            <el-breadcrumb-item :to="{ path: '/index' }">首页</el-breadcrumb-item>
            <div class="el-breadcrumb el-breadcrumb-inner f-fr">
                <el-breadcrumb-item v-for='(item,index) in $route.matched' :key='index' v-if='item.name'>
                    {{item.name}}
                </el-breadcrumb-item>
            </div>
        </el-breadcrumb>
    </div>
</template>


<script>
export default {
    data(){
        return {
            changeBarDirection:false,
            levelList: null
        }
    },
    created() {
        this.getBreadcrumb()
    },
    methods:{
        setSize() {
            const win_size = {
                width:(this.$store.state.menu.sidebar.opened)? this.$$lib_$(window).width()-180:this.$$lib_$(window).width()-35,
                height:this.$$lib_$(window).height()-73
            }
            //将content部分的宽高，存入store中，
            this.$store.dispatch('set_win_content',win_size);
        },
        handleLefeMenu(){
            // this.$store.dispatch('setLeftCollapse');  // 折叠菜单
            // this.$store.dispatch('handleLeftMenu');  // 改变菜单宽度
            // this.$store.dispatch('dropName');   // 隐藏单一菜单名称
            // this.setSize()
            // this.changeBarDirection = !this.changeBarDirection;
        },
        getBreadcrumb() {
            // 前三个，只拿数组[0]的值；
            // let matched = this.$route.matched.filter(item => item.name);
            // const first = matched[0];
            // if(first && first.path == '/index'){
            //     matched = {};
            // }else if(first && (first.path == '/userList' || first.path == '/infoList')){
            //     matched = [matched[0]];
            // }
            // this.levelList = matched;
      }
    },
    watch: {
      $route() {
           this.getBreadcrumb();
      }
    }
}
</script>

<style lang="less">
    .bread_container{
        margin-bottom: 15px;
        width: 100%;
        .bars{
            float: left;
            margin: 7px 8px;
            cursor: pointer;
            .isactive{
                -webkit-transform: rotate(90deg);
                transform: rotate(90deg);
                transition: .38s;
                -webkit-transform-origin: 50% 50%;
                transform-origin: 50% 50%;
            }
        }
        .breadcrumb{
            .breadbutton{
                float:left;
                margin:4px 5px 0 0;
                
            }
        }
    }
    .el-breadcrumb__separator{
        color: #606266; 
    }
    .el-breadcrumb-inner span{
        font-weight: 400;
        color: #606266;
        cursor: text;
    }
    .el-breadcrumb__inner a:hover, .el-breadcrumb__inner:hover{
        color: #606266;
        cursor: text;
    }
</style>