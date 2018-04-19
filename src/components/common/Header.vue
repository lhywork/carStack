<template>
    <div class="header">
        <div class="logo">{{sysName}}</div>
        <slot name="topnav"></slot>
        <div class="userinfo">
            <el-dropdown trigger="click">
                <span class="el-dropdown-link userinfo-inner"><img :src="this.sysUserAvatar" /> {{sysUserName}}</span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>个人信息</el-dropdown-item>
                    <el-dropdown-item divided @click.native="changeTheme">切换布局</el-dropdown-item>
                    <el-dropdown-item divided @click.native="logout">退出登录</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </div>
</template>
<script>
    import {isLogin} from '../../utils';
    export default {
        data() {
            return {
                sysName:'车栈金融后台管理',
                sysUserAvatar:'../../../static/img/img.jpg',
                sysUserName: ''
            }
        },
        created() {
            var user = this.$store.state.user;
            if (isLogin()) {
                this.sysUserName = user.username || '';
                this.sysUserAvatar = user.avatar || this.sysUserAvatar;
            }else{
                this.$router.push('/login');
            }
        },
        methods:{
            logout() {
                var self = this;
                self.$confirm('确认退出吗?', '提示', {
                    type: 'warning'
                }).then(() => {
                    self.$store.dispatch('Logout').then(() => {
                        // self.$router.push({ path: '/login' });
                        location.reload();
                    }).catch(err => {
                        self.$message.error(err);
                    });                  
                });
            },
            changeTheme(){
                var navbarPosition = this.$store.state.user.navbarPosition == 'left' ? 'top' : 'left';
                this.$store.commit("SET_LAYOUT", navbarPosition)
            }
        }
    }
</script>
<style scoped>
    .header {
        position: relative;
        box-sizing: border-box;
        width: 100%;
        height: 60px;
        font-size: 22px;
        line-height: 60px;
        color: #fff;
    }
    .header .logo{
        float: left;
        width:200px;
        text-align: center;
        font-family: cursive;
    }
    .userinfo {
        text-align: right;
        padding-right: 50px;
        font-size: 16px;
        float: right;
    }
    .userinfo-inner {
        cursor: pointer;
        color:#fff;       
    }
    .userinfo-inner img {
        width: 40px;
        height: 40px;
        border-radius: 20px;
        margin: 10px 0px 10px 10px;
        float: right;
    }
    .userinfo .el-dropdown-link{
        position: relative;
        display: inline-block;
        padding-left: 50px;
        color: #fff;
        cursor: pointer;
        vertical-align: middle;
    }
    .el-dropdown-menu__item{
        text-align: center;
    }
</style>