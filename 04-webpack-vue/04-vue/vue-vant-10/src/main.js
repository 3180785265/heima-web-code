import Vue from 'vue'
// import App from './App.vue'
// import App from '@/笔记代码/02-Dialog弹出框.vue'
import App from '@/笔记代码/03-表单组件.vue'

// 1.全局引入:
// 引入vant的组件库，和vant的css,Vue.use(Vant);//表示将vant工程里的组件都全局注册到vue中
// import Vant from 'vant';
// import 'vant/lib/index.css';

// Vue.use(Vant);//表示将vant工程里的组件都全局注册到vue中


// 2.自动按需导入(推荐,只引入自己要使用的组件)
import { Button,Dialog,Form,Field } from 'vant';
//2.1注册到vue实例当中
Vue.use(Form);
Vue.use(Field);
Vue.use(Button)
Vue.use(Dialog)




Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
