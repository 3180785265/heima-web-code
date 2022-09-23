// 1.引入vue对象
import Vue from 'vue'
// 2.App.vue文件里对象引入过来(vue项目页面入口)
// import App from './App.vue'
// import App from '@/学习笔记/03-vue插值表达式.vue'
// import App from '@/学习笔记/04-vue指定v-bind.vue'
// import App from '@/学习笔记/05-vue指令v-on绑定事件.vue'
// import App from '@/学习笔记/06-拿到事件对象、阻止标签的默认行为.vue'
// import App from '@/学习笔记/07-拿到事件修饰符.vue'
// import App from '@/学习笔记/08-反转字符串.vue'
// import App from '@/学习笔记/08-反转字符串.vue'
// import App from '@/学习笔记/09-vue指令-v-model使用.vue'
// import App from '@/学习笔记/10-vue指令-v-model绑定不同表单标签.vue'
// import App from '@/学习笔记/11-v-model的修饰符.vue'
// import App from '@/学习笔记/12-v-innerText和v-InnerHtml.vue'
// import App from '@/学习笔记/13-v-if和v-show指令.vue'
// import App from '@/学习笔记/14_案例_折叠面板.vue'
// import App from '@/学习笔记/15-v-for指令.vue'
//  import App from '@/学习笔记/18-v-for更新监测.vue'
//  import App from '@/学习笔记/19-v-for性能为何高.vue'
//  import App from '@/学习笔记/20-动态class和动态style.vue'
// import App from '@/学习笔记/22-过滤器.vue'
// import App from '@/学习笔记/23-过滤器传参-同时使用多个过滤器.vue'
// import App from '@/学习笔记/25-计算属性_缓存特性.vue'
// import App from '@/学习笔记/26-计算属性的完整写法.vue'
// import App from '@/学习笔记/27-小选框影响全选框.vue'
// import App from '@/学习笔记/28-侦听器.vue'
// import App from '@/学习笔记/29-侦听器-深度侦听-引用类型.vue'
 import App from '@/学习笔记/30-品牌管理.vue'


// 1.导入bootstrap的css, css文件只需要import 进来就行，不需要有变量值接收
import 'bootstrap/dist/css/bootstrap.css';
// 2.导入 过滤器模块
import Filters from '@/filters.js' 

Vue.config.productionTip = false //3.只会在控制台有一句提示消息



// 3.遍历fileter模块中导出的对象, 循环注册到vue中
for (let key in Filters) {
  Vue.filter(key, Filters[key])

}


// 1.全局过滤器,在这里定义的过滤器，可以全局的在任意的.vue文件内被使用
// 语法： Vue.fileter("过滤器名称",(要处理的值) => { return "处理的结果" } )

// Vue.filter("reverseFileter", val => {
//   return val.split("").reverse().join("")
// })



// 4.new Vue()表示开始实例化vue 
new Vue({
  // 5.render()表示准备渲染App.vue页面
  render: h => h(App),

  //6.$mount('#app') 表示将App.vue页面渲染到 public/index.html 中的标签id为app的标签上
}).$mount('#app')
