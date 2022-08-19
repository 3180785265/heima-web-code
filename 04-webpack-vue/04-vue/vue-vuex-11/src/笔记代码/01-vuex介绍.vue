<template>
  <div>
    <!-- 1.通过 this.$store, 获取vuex中的store对象实例，在通过state属性获取count -->
    <p>state的数据：{{ $store.state.count }}</p>
    <p>state的数据：{{ count }}</p>
    <p>state的数据：{{ count }}</p>
  </div>
</template>

<script>
export default {
  created() {
    console.log(this.$store)
  },

  computed: {

    // 2.将获取state.count的方式写在计算属性中获取，就不需要重复的去写this.$store.count,
    //   只需要写计算属性名获取就可以了
    count() {
      // 来源于vuex
      return this.$store.state.count
    }
  }
}
</script>
<style scoped>
p {
  margin: 0 auto;
  width: 200px;
}
</style>

    <!-- 
                  数据传递,状态共享
                  组件之间的通信.. 
                  父=>子 props 
                  子=>父 自定义事件 this.$emit()
                  兄弟=>兄弟 eventBus  公共的vue实例

                  组件之间通信缺点,需要很多的变量副本,维护起来就很难

              vuex可以帮助我们完成，非关系组件的数据共享，Vuex它是一个状态共享框架


              Vuex是采用集中式管理组件依赖的共享数据的一个工具，
              Vue可以解决不同组件数据共享的问题
              1.state: 只能存储组件之间共享状态的数据
              2.mutations: state数据,只能通过mutations才能完成共享数据状态数据的修改，但是它不能去做异步的操作,只能执行同步代码
              2.actions:  异步的方式去修改state。 (actions=>mutations=>state)


              在任何.vue 的组件下,都可以引用Vuex下的数据
              1.可以去共享Vuex中存储的state数据
              2.可以去调用Vue中的actoins异步修改staate数据



                总结: 
                1.修改state状态数据只能通过 mutations
                2.mutations只能执行同步代码，类似ajax,setTimeOut定时器之类的代码不在mutations中执行
                3.执行异步代码，要通过actoins，然后在将数据提交给mutations去修改才可以完成
                4.state的状态即共享数据，可以在任何.vue组件中被使用
                5.组件也可以调用actoins(一般都是调用actoin,因为需要异步更新state)



                下载安装vuex
                - 第一步：npm i vuex --save  => 安装到运行时依赖   => 项目上线之后依然使用的依赖 ,开发时依赖  => 开发调试时使用  
                          开发时依赖 就是开开发的时候，需要的依赖，运行时依赖，项目上线运行时依然需要的

                - 第二步： 在main.js中 import Vuex from 'vuex'
                - 第三步：在main.js中  Vue.use(Vuex)  => 调用了 vuex中的 一个install方法
                - 第四步：const store = new Vuex.Store({...配置项})
                - 第五步：在根实例配置 store 选项指向 store 实例对象
                

                    import Vue from 'vue'
                    import App from './App.vue'
                    // 1.import导入vuex
                    import vuex from 'vuex'

                    // 2.调用Vue.use(), 注册引入的vuex模块的功能，实际上是调用了vuex中的install方法
                    Vue.use(vuex)

                    // 3.实例化Vuex下的Store对象
                    import Vue from 'vue'
                    //import App from './App.vue'
                    import App from '@/笔记代码/01-vuex介绍.vue'
                    // 1.import导入vuex
                    import Vuex from 'vuex'

                    // 2.调用Vue.use(), 注册引入的vuex模块的功能，实际上是调用了vuex中的install方法
                    Vue.use(Vuex)

                    // 3.实例化Vuex下的Store对象
                    // 3.1在Vuex.Store对象中,配置state,actions等
                    const store = new Vuex.Store({
                      // 3.2存储状态
                      state: {
                        count:0
                      }
                    })
                    Vue.config.productionTip = false

                    new Vue({
                      
                      render: h => h(App),
                      // 4.将创建store的指向vue的 store
                      store,//es6属性名和变量相同可以简写
                    }).$mount('#app')




     1.如何在组件中获取 count?
       原始形式{{}} 插值表达式
       可以使用this.store 获取vuex中的store对象实例，在通过state属性获取coount如下
         this.$store.state.count



     2.通过计算属性 computed 获取state:
       直接调用$store.state.count 代码里太多，可以将state中的某些属性，定义到计算属性当中,在通过
       计算属性名获取，就不需要重复的去写this.$store.count, 只需要写计算属性名获取就可以了
        2.1辅助函数mapState: 
            mapStae能帮我们把store中的数据映射到组件的计算属性(computed)中,它属于一种快捷方式

            语法：
            第一步:导入mapState
            import  {mapState} from 'vuex'

            第二步:采用数组形式引入state属性
            mapState:['count']

            上面的代码最终相当于帮我们自动定义了计算属性
            count(){  
              return this.$store.state.count
            }


            原始方式获取: 
            this.$store.state.属性名
            this.$store.commit('mutation')  提交一个 mutation执行
            this.$store.dispatch('actoin')  调用一个异步的actoin 
     -->