import Home from '@/components/common/Home';

const staticRoute = [
    {
        path: '/',
        redirect: '/login'
    },{
        path: '/login',
        component: resolve => require(['@/components/page/Login.vue'], resolve)
    },{
        path: '/index',
        component: Home,
        children: [
            {
                path: '',
                component: resolve => require(['@/components/page/Index.vue'], resolve)
            }
        ]
    },{
        path: '/error',
        component: resolve => require(['@/components/error'], resolve),
        children: [
            {
                path: '401',
                component: resolve => require(['@/components/error/401'], resolve)
            },{
                path: '403',
                component: resolve => require(['@/components/error/403'], resolve)
            },{
                path: '404',
                component: resolve => require(['@/components/error/404'], resolve)
            },{
                path: '500',
                component: resolve => require(['@/components/error/500'], resolve)
            }
        ]
    }
]

export default staticRoute