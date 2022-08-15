import Vue from 'vue'
import App from './App.vue'
// import App from '@/学习笔记/01-Vue的生命周期函数.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
