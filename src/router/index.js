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
        name: 'login',
        component: Login
    }, {
        path: '/',
        redirect: '/login'
    }, {
        path: '*',
        redirect: '/login'
    }, {
        path: '/index',
        component: Home,
        children: [{
            path: '/',
            component: Index
        },{
            path: '/MaterialAdd',
            component: MaterialAdd
        },{
            path: '/GrantlimitList',
            component: GrantlimitList
        },{
            path: '/Allobject',
            component: resolve => require(['../components/page/Allobject.vue'], resolve)
        },{
            path: '/Addobject',
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