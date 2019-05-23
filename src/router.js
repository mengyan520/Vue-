import VueRouter from 'vue-router'

import account from './components/Account.vue'
import goods from './components/GoodsList.vue'
import login from './components/login.vue'
import register from './components/register.vue'

//创建路由对象
var router = new VueRouter({
    routes: [
        {path:"/account",
        component:account,
        children:[
            {path:'login',component:login},
            {path:'register',component:register}
        ]},
        {path:"/goods",component:goods}
    ]
})
//把路有对象暴漏出去
export default router