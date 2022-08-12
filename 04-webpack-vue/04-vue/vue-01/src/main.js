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
// import App from '@/学习笔记/11-v-model的修饰符.vue'
// import App from '@/学习笔记/13-v-if和v-show指令.vue'
// import App from '@/学习笔记/14_案例_折叠面板.vue'
// import App from '@/学习笔记/15-v-for指令.vue'
//  import App from '@/学习笔记/18-v-for更新监测.vue'
//  import App from '@/学习笔记/19-v-for性能为何高.vue'
 import App from '@/学习笔记/20-动态class.vue'

Vue.config.productionTip = false //3.只会在控制台有一句提示消息


let a=10;

// 4.new Vue()表示开始实例化vue 
new Vue({
  // 5.render()表示准备渲染App.vue页面
  render: h => h(App),

  //6.$mount('#app') 表示将App.vue页面渲染到 public/index.html 中的标签id为app的标签上
}).$mount('#app')
