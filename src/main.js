// import './css/index.css'
// import './css/index.less'
// import './css/index.scss'

// //class 关键字，是ES6中提供的新语法，是用来 实现 ES6 中面向对象编程的方式
// class Person {
//     static info = {name:'zs',age:20}
// }

// console.log(Person.info)
 
// 导入bootstrap样式
import 'bootstrap/dist/css/bootstrap.css'

import Vue from "vue"
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import app from "./App.vue"
import router from './router.js'

// 全部导入
// import 'mint-ui/lib/style.css'
// import  MintUI  from 'mint-ui'
// Vue.use(MintUI) 
//按需导入
import { Button, Cell } from 'mint-ui'
Vue.component(Button.name, Button)

// 导入 MUI 的样式表， 和 Bootstrap 用法没有差别
import './lib/mui/css/mui.min.css'

var vm = new Vue({
    el: '#app',
    data: {
        msg: '123'
    },
    render:c => c(app),
    router
})
