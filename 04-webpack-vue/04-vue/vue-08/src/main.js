import Vue from 'vue'
// import App from './App.vue'
// import App from '@/笔记代码/04-编程式导航的使用.vue'
import App from '@/笔记代码/05-编程式路由导航的传参.vue'
Vue.config.productionTip = false

// 1.下载完vue-router后，import 导入
import VueRouter from 'vue-router'

// 2.导入路由对应的组件
import Find from '@/views/Find.vue' //@ 表示src的别名，代表从src开始，表示src下的绝对路径
import My from '@/views/My.vue'
import Part from '@/views/Part.vue'
import NotFound from '@/views/NotFound.vue'

// 3.注册全局组件，使用Vue.use(VueRouter)后，会将VueRouter包中的 RouterLink和RouterView 组件,全局注册到Vue中，方便全局使用
Vue.use(VueRouter);

// 4.创建路由规则数组,添加路由和组件的映射
const routes = [
  // 3.1 path和computed属性配置路由和组件映射关系

  {

    path: "/",        // 1.匹配的是浏览器url默认的hash值/路径
    redirect: "/find" //2.重定向到find，会将浏览器url #后面的路径改变成/find 然后在重新到路由数组匹配对应的组件渲染
  },
  {
    path: "/find", // 路由路径
    name: "Find",//路由的名称
    component: Find //组件
  },
  {
    path: "/my/:musicName",
    name: "My",//路由的名称
    component: My //组件
  },
  {
    path: "/part/", // 路由
    name: "Part",//路由的名称
    component: Part //组件
  },

  // 404页面
  //一定要放到最后，因为规则是从前往后比较path
  {
    path: "*",
    component: NotFound

  }

]

// 5.生成路由对象,传入路由规则作为参数配置项
const router = new VueRouter({
  routes, //4.1routers是固定的key，值必须是一个规则数组
  mode: "history" //设置路由为history模式(不显示#)
})

// 6.把路由对象注入到vue实例中，this可以访问到$router和$route
new Vue({
  router,//5.1 将路由对象注入
  render: h => h(App),
}).$mount('#app')
