import Vue from 'vue'
import Demo from '@/components/Demo.vue'
// import App from './App.vue'
// import App from '@/学习笔记/01-获取原生DOM.vue'
// import App from '@/学习笔记/02-通过ref获取组件对象.vue'
// import App from '@/学习笔记/03-nextTick的基本使用.vue'
// import App from '@/学习笔记/04-nextTick的使用案例.vue'
import App from '@/学习笔记/05-组件里使用name属性作用.vue'

Vue.config.productionTip = false

Vue.component("Demo",Demo);
new Vue({
  render: h => h(App),
}).$mount('#app')
