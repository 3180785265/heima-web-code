import Vue from 'vue'
import App from './App.vue'
// 1.全局使用,要引入到主入口才能被webpack打包
import 'bootstrap/dist/css/bootstrap.min.css'

// 1.在main.js中引入,比在.vue单独引入方便,将axios添加到vue的PropType原型上，作为全局属性,让任务的.vue文件都可以任意的访问axios这个方法

import axios from 'axios'

// 2.将基准地址添加到axios上
axios.defaults.baseURL="https:www.escook.cn"

// 3.将axios,添加到Vue的PropType原型链上
Vue.prototype.$axios=axios


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
