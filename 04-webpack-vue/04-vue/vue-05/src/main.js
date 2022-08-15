import Vue from 'vue'
// import App from './App.vue'
// import App from '@/学习笔记/01-获取DOM.vue'
// import App from '@/学习笔记/02-通过ref获取组件对象.vue'
// import App from '@/学习笔记/04-nextTick的使用案例.vue'
import App from '@/学习笔记/05-组件里使用name属性作用.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
