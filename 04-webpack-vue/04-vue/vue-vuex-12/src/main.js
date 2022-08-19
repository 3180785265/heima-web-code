import Vue from 'vue'
// import App from './App.vue'
// import App from '@/笔记代码/01-为什么会有Vuex的模块化.vue'
// import App from '@/笔记代码/02-辅助函数引入模块化的vuex.vue'
// import App from '@/笔记代码/03-模块化中的命名空间问题'
import App from '@/笔记代码/04-模块化中的命名空间问题.vue'

// 1.import导入vuex
import Vuex from 'vuex'

// 2.调用Vue.use(), 注册引入的vuex模块的功能，实际上是调用了vuex中的install方法
Vue.use(Vuex)

// 3.实例化Vuex下的Store对象
// 3.1在Vuex.Store对象中,配置state,actions等
const store = new Vuex.Store({



  getters: {
    //建立快捷的访问方式(vuex中的计算属性)
    token: state => state.user.token, //通过state.子模块名.属性名调用
    name: state => state.setting.name,
  },

  // 放置子模块的属性,每个子模块中同样都有自己的 state miutations actoins 
  modules: {
    user: {
      namespaced: true,      //给true就表示不注册到全局命名空间，封闭
      state: {
        token: "12345"
      },
      mutations: {
        // 这里的state表示的是user的state
        updateToken(state, payload) {
          state.token += payload
        }
      },

      actions: {
        asyncToken(store, context) {
          setTimeout(() => {
            store.commit('updateToken', context)

          }, 1400);
        }
      }


    },


    setting: {
      state: {
        name: "Vuex实例"

      }
    }


  }

})
Vue.config.productionTip = false

new Vue({

  render: h => h(App),
  // 4.将创建store的指向vue的 store
  store,//es6属性名和变量相同可以简写
}).$mount('#app')
