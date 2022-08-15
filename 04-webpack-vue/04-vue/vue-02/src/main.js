import Vue from 'vue'
// import App from './App.vue'
// import App from '@/学习笔记/01-不使用组件的缺点.vue'
// import App from '@/学习笔记/02-局部组件和全局组件-commpoent的使用.vue'
// import App from '@/学习笔记/04-父子组件通信.vue'
import App from '@/学习笔记/05-跨组件传值EventBus.vue'

/* 

// 1.将组件用import 模块导入
import Pannel2 from "@/components/Pannel_2.vue"

// 2.全局注册组件进入Vue
Vue.component("Pannel2",Pannel2);

*/

import components from "@/components.js"

Vue.config.productionTip = false

for (const component in components) {

  Vue.component(component, components[component]);

}


new Vue({
  render: h => h(App),
}).$mount('#app')
