import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  el:"#app", //el选中的作用:vue实例模板编译后的模板挂载到index.html 的id为 app 的标签上
  render: h => h(App),
})
// .$mount('#app') //两种方式都可以
