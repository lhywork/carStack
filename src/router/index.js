import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router); //将VueRouter注入Vue

import Home from '@/components/common/Home';
import Login from '@/components/page/Login';
import Index from '@/components/page/Index';
import MaterialAdd from '@/components/page/MaterialAdd';
import GrantlimitList from '@/components/page/GrantlimitList'


export default new Router({
    routes: [{
        path: '/login',
        name: '',
        component: Login,
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
            component: Index
        },{
            path: '/MaterialAdd',
            name: '新增基础资料',
            component: MaterialAdd,
            hidden: true
        },{
            path: '/GrantlimitList',
            name: '授权额度管理',
            component: GrantlimitList
        }]
    },{
        path: '/',
        name: '标的管理',
        iconCls:'fa-inbox',
        component: Home,
        children: [{
            path: '/Allobject',
            name: '所有标的',
            component: resolve => require(['../components/page/Allobject.vue'], resolve)
        },{
            path: '/Addobject',
            name: '新增标的信息',
            component: resolve => require(['../components/page/Addobject.vue'], resolve)
        // }, {
        //     path: '/CourseType',
        //     component: CourseType
        // }, {
        //     path: '/CourseAdd',
        //     component: CourseAdd
        // }, {
        //     path: '/CourseEdit',
        //     name: 'CourseEdit',
        //     component: CourseEdit
        // }, {
        //     path: '/AppManage',
        //     component: AppManage
        // }, {
        //     path: '/AppManageAdd',
        //     component: AppManageAdd
        // }, {
        //     path: '/AppManageEdit',
        //     component: AppManageEdit
        // }, {
        //     path: '/AdminRole',
        //     component: AdminRole
        // }, {
        //     path: '/AdminEdit',
        //     component: AdminEdit
        // }, {
        //     path: '/AdminAdd',
        //     component: AdminAdd
        }]
    }]
});