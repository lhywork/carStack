<template>
     <div class='bread_container' id="bread_container">
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
        }
    },
    methods:{

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

</style>
