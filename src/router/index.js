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
        }]
    }]
});