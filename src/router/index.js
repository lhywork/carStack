import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router); //将VueRouter注入Vue

import Home from '@/components/common/Home';


export default new Router({
    routes: [{
        path: '/login',
        name: '',
        component: resolve => require(['@/components/page/Login.vue'], resolve),
        hidden: true
    },{
        path: '/',
        name: '',
        hidden: true,
        redirect: '/login'
    }, {
        path: '*',
        name: '',
        redirect: '/login',
        hidden: true
    }, {
        path: '/',
        name: '资产端管理',
        iconCls:'fa-money',
        component: Home,
        children: [{
            path: '/index',
            name: '基础资料管理',
            component: resolve => require(['@/components/page/Index.vue'], resolve)
        },{
            path: '/MaterialAdd',
            name: '新增基础资料',
            component: resolve => require(['@/components/page/MaterialAdd.vue'], resolve),
            hidden: true
        },{
            path: '/MaterialCheck',
            name: '查看基础资料',
            component: resolve => require(['@/components/page/MaterialCheck.vue'], resolve),
            hidden: true
        },{
            path: '/MaterialEdit',
            name: '编辑基础资料',
            component: resolve => require(['@/components/page/MaterialEdit.vue'], resolve),
            hidden: true
        },{
            path: '/GrantlimitList',
            name: '授权额度管理',
            component: resolve => require(['@/components/page/GrantlimitList.vue'], resolve)
        }]
    },{
        path: '/',
        name: '标的管理',
        iconCls:'fa-inbox',
        component: Home,
        children: [{
            path: '/Allobject',
            name: '所有标的',
            component: resolve => require(['@/components/page/Allobject.vue'], resolve)
        },{
            path: '/Addobject',
            name: '新增标的信息',
            hidden: true,
            component: resolve => require(['@/components/page/Addobject.vue'], resolve)
        },{
            path: '/Firstobject',
            name: '初审标的信息',
            component: resolve => require(['@/components/page/Firstobject.vue'], resolve)
        },{
            path: '/Secondobject',
            name: '标的审核',
            component: resolve => require(['@/components/page/Secondobject.vue'], resolve)
        },{
            path: '/Thirdlyobject',
            name: '真实借款金额信息',
            component: resolve => require(['@/components/page/Thirdlyobject.vue'], resolve)
        },{
            path: '/FobjectC',
            name: '初审标的审核',
            hidden: true,
            component: resolve => require(['@/components/page/FobjectC.vue'], resolve)
        },{
            path: '/SobjectC',
            name: '复审标的审核',
            hidden: true,
            component: resolve => require(['@/components/page/SobjectC.vue'], resolve)
        },{
            path: '/TobjectC',
            name: '真实借款金额审核',
            hidden: true,
            component: resolve => require(['@/components/page/TobjectC.vue'], resolve)
        }]
    },{
        path: '/',
        name: '用户权限',
        iconCls:'fa-user',
        component: Home,
        children: [{
            path: '/UserManager',
            name: '用户管理',
            component: resolve => require(['@/components/page/UserManager.vue'], resolve)
        },{
            path: '/UserNew',
            name: '新增用户',
            hidden: true,
            component: resolve => require(['@/components/page/UserNew.vue'], resolve)
        },{
            path: '/RoleList',
            name: '角色配置',
            component: resolve => require(['@/components/page/RoleList.vue'], resolve)
        },{
            path: '/RoleAdd',
            name: '新增角色',
            hidden: true,
            component: resolve => require(['@/components/page/RoleAdd.vue'], resolve)
        }]
    }]
});