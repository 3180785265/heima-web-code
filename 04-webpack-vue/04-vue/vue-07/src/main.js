import Vue from 'vue'
// import App from './App.vue'
// import App from '@/学习笔记/01-动态组件.vue'
// import App from '@/学习笔记/02-动态组件缓存-keep-alive.vue'
// import App from '@/学习笔记/03-组件缓存-激活的钩子函数.vue'
// import App from '@/学习笔记/04-组件插槽.vue'
// import App from '@/学习笔记/05-组件插槽的默认内容.vue'
// import App from '@/学习笔记/06-具名插槽.vue'
// import App from '@/学习笔记/07-作用域插槽.vue'
import App from '@/学习笔记/08-作用域插槽的使用场景.vue'
// import App from '@/学习笔记/09-自定义指令'


// 1.全局指令注册, 能被所有的vue实例使用
// 2.inserted(el): 指令所在标签被插入到网页上才会触发的函数。 el参数表示当前DOM对象
Vue.directive("gfoucs", {
  inserted(el) {
    console.log(el)
    el.focus()
  }
})
// 改变颜色,binding参数是一个对象，里面有很多属性，其中value  属性表示指令在使用时传入的参数
// Vue.directive("color", {
//   inserted(el, binding) {
//     console.log(el, binding)
//     el.style.color = binding.value
//   },
//   update(el, binding) {
//     console.log(binding.value)
//     el.style.color = binding.value
//   },
// })

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
