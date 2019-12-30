import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path:'',
        redirect:'/home'
    },
    {
        path:'/home',
        component:()=>import('views/home')
    },
    {
        path:'/share',
        component:()=>import('views/share')
    },
    {
        path:'/service',
        component:()=>import('views/service')
    },
    {
        path:'/my',
        component:()=>import('views/my')
    }
]

const router = new VueRouter({
    routes,
    mode:'history'
})

export default router