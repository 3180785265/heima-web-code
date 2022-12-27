import Vue from 'vue'
// import App from './App.vue'
// import App from '@/笔记代码/01-vuex介绍.vue'
// import App from '@/笔记代码/02-通过计算属性获取.vue'
// import App from '@/笔记代码/03-计算属性-辅助函数.vue'
// import App from '@/笔记代码/04-通过提交miutations修改state'
// import App from '@/笔记代码/05-miutatoin的辅助函数'
// import App from '@/笔记代码/06-actoins异步操作'
// import App from '@/笔记代码/07-actoins辅助函数'
// import App from '@/笔记代码/08-getters'
import App from '@/笔记代码/09-getters的辅助函数'
// 1.import导入vuex
import Vuex from 'vuex'

// 2.调用Vue.use(), 注册引入的vuex模块的功能，实际上是调用了vuex中的install方法
Vue.use(Vuex)

// 3.实例化Vuex下的Store对象
// 3.1在Vuex.Store对象中,配置state,actions等
const store = new Vuex.Store({
  // 3.2存储状态
  state: {
    count: 0,
    name: '蔡徐坤',
    list: [1, 2, 3, 4, 5, 6]
  },
  // 3.3修改state必须通过mutations
  mutations: {
    /*3.4修改state的方法,mutation只能同步执行，一切的异步操作禁止！
         1.每一个miutoin方法都有对应参数,
         2.state: 指的是当前vuex中的state对象
         3.payload:  载荷,提交miutatoin方法的时候，传递的参数，它可以是任何形式的，任何参数的值 */
    addCount(state, payload) {
      state.count += payload//每次给count+payload
    },

  },

  /* 4.1.actoin
   action是负责异步更新操作的，因为miutatoin都只能同步
          使用场景: 假如要从后端获取数据，更新到state的conut中
  */
  actions: {
    /*
      4.2 action方法,两个参数 context ,payload
        1.context参数: 相当于组件中的 this.$store  实例 
        2.params:  actoin被调用时，调用者可传递的参数
    
    */
    getAsyncCount(context, params) {
      // 4.3. 进行异步的操作,更新到state的count中
      setTimeout(() => {

        let a = 10000;
        // 4.4.context参数: 相当于组件中的 this.$store  实例,然后调用里面的miutoin执行
        context.commit("addCount", params)

      }, 1200);
    }
  },


  // 5.getters 
  getters: {
    /* 
        放置所有的vuex的计算属性,属性值对应的是回调函数
     5.1 getters中的第一个参数是state
         state: 指的是当前vuex中的state对象
     */

    /*    
        fileList: function (state) {
          // 5.1拿到所有大于的的数据
          return state.list.filter(obj => obj > 3)
        }

    */

    //5.2用es6的写法，简化函数表达式,这种形式更常见一些
    fileList: state => state.list.filter(obj => obj > 3)
  }

})
Vue.config.productionTip = false

new Vue({

  render: h => h(App),
  // 4.将创建store的指向vue的 store
  store,//es6属性名和变量相同可以简写
}).$mount('#app')
