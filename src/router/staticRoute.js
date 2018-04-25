import Home from '@/components/common/Home';

const staticRoute = [
    {
        path: '/',
        redirect: '/login'
    },{
        path: '/login',
        component: resolve => require(['@/components/page/Login.vue'], resolve)
    },{
        path: '/',
        name:"个人信息",
        component: Home,
        children:[{
            path: '/UserInfo',
            component: resolve => require(['@/components/page/UserInfo.vue'], resolve)
        }]     
    },{
        path: '/error',
        component: Home,
        name:"错误页",   
        children: [
            {
                path: '401',
                component: resolve => require(['@/components/error/401'], resolve)
            },{
                path: '403',
                name:"无权限访问",
                component: resolve => require(['@/components/error/403'], resolve)
            },{
                path: '404',
                name:"页面不存在",
                component: resolve => require(['@/components/error/404'], resolve)
            },{
                path: '500',
                component: resolve => require(['@/components/error/500'], resolve)
            }
        ]
    }
]

export default staticRoute