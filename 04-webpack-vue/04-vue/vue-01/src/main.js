// 1.引入vue对象
import Vue from 'vue'  
// 2.App.vue文件里对象引入过来(vue项目页面入口)
// import App from './App.vue'
// import App from '@/学习笔记/03-vue插值表达式.vue'
// import App from '@/学习笔记/04-vue指定v-bind.vue'
// import App from '@/学习笔记/05-vue指令v-on绑定事件.vue'
import App from '@/学习笔记/05-vue指令v-on绑定事件.vue'

Vue.config.productionTip = false //3.只会在控制台有一句提示消息


let a=10;

// 4.new Vue()表示开始实例化vue 
new Vue({
  // 5.render()表示准备渲染App.vue页面
  render: h => h(App),

  //6.$mount('#app') 表示将App.vue页面渲染到 public/index.html 中的标签id为app的标签上
}).$mount('#app')
