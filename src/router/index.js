// import Vue from 'vue';
// import Router from 'vue-router';
// Vue.use(Router); //将VueRouter注入Vue

// import Home from '@/components/common/Home';


// export default new Router({
//     routes: [{
//         path: '/login',
//         name: '',
//         component: resolve => require(['@/components/page/Login.vue'], resolve),
//         hidden: true
//     },{
//         path: '/',
//         name: '',
//         hidden: true,
//         redirect: '/login'
//     }, {
//         path: '*',
//         name: '',
//         redirect: '/login',
//         hidden: true
//     }, {
//         path: '/',
//         name: '资产端管理',
//         iconCls:'fa-money',
//         component: Home,
//         children: [{
//             path: '/index',
//             name: '基础资料管理',
//             component: resolve => require(['@/components/page/Index.vue'], resolve)
//         },{
//             path: '/MaterialAdd',
//             name: '新增基础资料',
//             component: resolve => require(['@/components/page/MaterialAdd.vue'], resolve),
//             hidden: true
//         },{
//             path: '/MaterialCheck',
//             name: '查看基础资料',
//             component: resolve => require(['@/components/page/MaterialCheck.vue'], resolve),
//             hidden: true
//         },{
//             path: '/MaterialEdit',
//             name: '编辑基础资料',
//             component: resolve => require(['@/components/page/MaterialEdit.vue'], resolve),
//             hidden: true
//         },{
//             path: '/GrantlimitList',
//             name: '授权额度管理',
//             component: resolve => require(['@/components/page/GrantlimitList.vue'], resolve)
//         }]
//     },{
//         path: '/',
//         name: '标的管理',
//         iconCls:'fa-inbox',
//         component: Home,
//         children: [{
//             path: '/Allobject',
//             name: '所有标的',
//             component: resolve => require(['@/components/page/Allobject.vue'], resolve)
//         },{
//             path: '/Addobject',
//             name: '新增标的信息',
//             hidden: true,
//             component: resolve => require(['@/components/page/Addobject.vue'], resolve)
//         },{
//             path: '/Firstobject',
//             name: '标的初审',
//             component: resolve => require(['@/components/page/Firstobject.vue'], resolve)
//         },{
//             path: '/Secondobject',
//             name: '标的复审',
//             component: resolve => require(['@/components/page/Secondobject.vue'], resolve)
//         },{
//             path: '/Thirdlyobject',
//             name: '真实借款金额信息',
//             component: resolve => require(['@/components/page/Thirdlyobject.vue'], resolve)
//         },{
//             path: '/FobjectC',
//             name: '初审标的审核',
//             hidden: true,
//             component: resolve => require(['@/components/page/FobjectC.vue'], resolve)
//         },{
//             path: '/SobjectC',
//             name: '复审标的审核',
//             hidden: true,
//             component: resolve => require(['@/components/page/SobjectC.vue'], resolve)
//         },{
//             path: '/TobjectC',
//             name: '真实借款金额审核',
//             hidden: true,
//             component: resolve => require(['@/components/page/TobjectC.vue'], resolve)
//         }]
//     },{
//         path: '/',
//         name: '用户权限',
//         iconCls:'fa-user',
//         component: Home,
//         children: [{
//             path: '/UserManager',
//             name: '用户管理',
//             component: resolve => require(['@/components/page/UserManager.vue'], resolve)
//         },{
//             path: '/UserAdd',
//             name: '新增用户',
//             hidden: true,
//             component: resolve => require(['@/components/page/UserAdd.vue'], resolve)
//         },{
//             path: '/RoleList',
//             name: '角色配置',
//             component: resolve => require(['@/components/page/RoleList.vue'], resolve)
//         },{
//             path: '/RoleAdd',
//             name: '新增角色',
//             hidden: true,
//             component: resolve => require(['@/components/page/RoleAdd.vue'], resolve)
//         },{
//             path: '/UserCompile',
//             name: '编辑用户',
//             hidden: true,
//             component: resolve => require(['@/components/page/UserCompile.vue'], resolve)
//         }]
//     }]
// });
// 
import Vue from 'vue'
import VueRouter from 'vue-router'
import { Message } from 'element-ui'
// import Auth from '@/util/auth'
import store from '../store'
import staticRoute from './staticRoute'
import { asyncLayout, asyncRoute, redirectRoute} from './asyncRoute'
import whiteList from './whiteList'



/**
 * 根据返回的菜单列表确认异步路由
 * @param {array} permission 权限列表（菜单列表）
 * @param {array} router 异步路由对象
 */
function routerMatch(permission, router){
    return new Promise((resolve) => {
        // 创建需要校验的参数数组
        function addPermision(permission){
            permission.forEach((item) => {
                // console.log(item)
                if(item.children && item.children.length){
                    // 递归
                    addPermision(item.children)
                }
                router.forEach((s) => {
                    // console.log(s.children,'1',item,'2')
                    s.children.forEach((j) =>{
                        // console.log(item.path)
                       if((j.path == item.path) && item.isAuth){
                        // s.meta.permission = item.permission
                            asyncLayout.push(j)
                            return
                        } 
                    })                   
                })
            })
        }
        // asyncLayout[0].children = []
        // console.log(asyncLayout)
        addPermision(permission)
        resolve(asyncLayout)
    })
}

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: staticRoute
})

// 路由跳转前验证
router.beforeEach((to, from, next) => {    
    // 判断用户是否处于登录状态
    if (store.state.login.username) {
        // 如果当前处于登录状态，并且跳转地址为login，则自动跳回系统首页
        // 这种情况出现在手动修改地址栏地址时
        if (to.path === '/login') {
            router.replace('/index')
        } else {
            // 页面跳转前先判断是否存在权限列表，如果存在则直接跳转，如果没有则请求一次
            if (store.state.auth.permissionList.length === 0) {
                // 获取权限列表，如果失败则跳回登录页重新登录
                store.dispatch('getPermission').then(res => {
                    // 匹配并生成需要添加的路由对象
                    routerMatch(res.data, asyncRoute).then(res => {
                        console.log(asyncRoute)
                        router.addRoutes(asyncRoute)
                        router.addRoutes(redirectRoute)
                        next(to.path)
                    })
                })
            } else {
                next()
            }
        }
    } else {
        // 如果是免登陆的页面则直接进入，否则跳转到登录页面
        if (whiteList.indexOf(to.path) >= 0) {
            console.log('该页面无需登录即可访问')
            next()
        } else {
            router.replace('/login')
            // 如果store中有token，同时Cookie中没有登录状态
            // if(store.state.user.token){
            //     Message({
            //         message: '登录超时，请重新登录'
            //     })
            // }
        }
    }
})

router.afterEach(() => {
  
})

export default router