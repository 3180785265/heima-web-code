<template>
  <div id="myP">
    <p>学习生命周期</p>
    <p>{{ msg }}</p>

    <ul id="myUl">
      <li v-for="(obj, index) in arr " :key="index">
        <span>{{ obj }}</span>
      </li>
    </ul>
    <button @click="arr.push(1000)">点击末尾价值</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "hello vue",
      arr: [1, 2, 3, 4],
      timer:null
    }
  },


  // 1. new Vue(_) 以后,Vue内部会给实例对象添加一些属性和方法,data和methods初始化"之前"执行
  beforeCreate() {
    console.log("beforeCreate--执行")
    console.log(this.msg) //undefined
  },
  //2. data和methods初始化以后执行,所以这个阶段可以访问data和methods,但是这个阶段还不能获取真实的dom
  // 场景: 网络静秋，注册全局事件等
  created() {
    console.log("created--执行了")
    console.log(this.msg) //hello vue 



    this.timer = setInterval(() => {
      console.log('哈哈')
    }, 1000)
  },

  // 2.1: 这时候 模板已经被编译成DOM ，但还没有被挂载。

  // 3.真实DOM挂载之前
  // 场景：预处理data,不会触发updated钩子函数
  beforeMount() {
    console.log('beforeMount--执行')
    console.log(document.querySelector("#myP")) //null
  },

  // 3.1这个时候 会把DOM挂载

  // 4.真实DOM挂载以后
  mounted() {
    console.log('mounted--执行')
    console.log(document.querySelector("#myP")) //获取到了dom
  },

  // 5.0当data里的数据发生变化,准备更新dom



  //5.1: data数据发生变化,  更新dom之前的钩子函数
  beforeUpdate() {
    console.log('beforeUpdate--执行了')

    // 拿不到最新添加进去的li , 因为这是dom还没更新之前执行的函数
    console.log(document.querySelectorAll('#myUl>li')[4]) // undefined 
  },


  // 5.2 dom 更新之后 
  // 场景: 获取更新后的dom
  updated() {
    console.log('updated--执行了')
    console.log(document.querySelectorAll('#myUl>li')[4]) // 拿到了最新添加进去的li DOM  

  },

  // 前提,v-if 销毁一个vue实例

  //6.1 销毁之前
  // 场景: 移除当前页面的，定时器,计时器, 全局事件(EvnetBus移除事件,$off方法),
  // 在销毁vue实例阶段之前，可以做一些销毁当前组件占用的一些全局资源
  beforeDestroy() {
    console.log('beforeDestroy--执行了')
    clearInterval(this.timer)

  },


  // 6.2 : 会移除这个vue 中 相关的数据监视器，子组件(如果组件套用了其他组件会被先销毁)，以及一些事件侦听器

  // 6.3 : 之后会把vue实例完全销毁

  // 6.4 : vue 实例销毁之后，执行的钩子函数
  destroyed() {
    console.log('destroyed--执行了')

  },



}
</script>

<style>
</style>


<!--
                          


            vue的生命周期指的是什么
            1.从创建，挂载，到销毁的过程
            2.每一个.vue 文件都可以看作是一个vue实例
            2.vue的生命周期到达了那几个阶段

            vue 的钩子函数
            场景: 在组件创建完毕之后，可以在created生命周期中发起ajax请求，初始化data 中的变量数据

            分类: 4大阶段8大方法
            
            初始化
              1.beforeCreate(初始化之前,这个阶段是不能访问data里的变量的)
              2.created(初始化之后)
            挂载 beforeMount(挂载之前) mounted(挂载之后)
            更新 beforeUpdate(更新之前) updated(更新之后)
            销毁 beforeDestroy(销毁之前) destroyed(销毁之后)

          组件也是一个vue实例，只不过会new conpoment
            new Vue() -实例化(组件也是一个小小的Vue实例)
          1.init Evnets 和lifecyle-初始化事件和生命周期函数  会在vue挂载 vm.$mount,vm.$nexttick 一些内置的属性和方法
          
          2.调用beforeCreate()钩子函数,这个生命周期不能使用data 和 methods 因为还没有被挂载到vue上
            
          3.init injecttions 和 reactivity 这个阶段，会往Vue实例对象上挂载添加data 和 methods

          4.created()钩子函数被调用 , Vue实例被创建完毕

          5. 接下来就是编译模板的阶段 
            模板语法
            new Vue({
              el:"#app", //el选中的作用:vue实例模板编译后的模板挂载到index.html 的id为 app 的标签上
              render: h => h(App),
            })
            // .$mount('#app') //两种方式都可以

          编译模板阶段
           如果有  template 模板的话会去 执行 render()函数
           没有则编译el/$mount 指定的标签作为 template 模板进行渲染


          6.beforeMount(): 真实dom挂载之前执行这个钩子函数
          
          7.mounted(): 真实dom挂载之后执行这个钩子函数

          

           当data里的数据改变，都会执行哪些钩子函数?

          8.beforUpdate():  dom更新之前会执行beforUpdate,这个阶段是拿不到更新后的新DOM的,就算拿到也不是新的
          

          8.1: virtual DOM(更新dom) : 对比新和旧的dom，找出差异打补丁,在重新渲染

          9. updated():  dom更新之后执行的钩子函数，此时可以获取更新后的最新dom 




          效果vue实例的阶段
          v-if 也能销毁一个vue实例,把dom整个删除掉

          1.

          10.beforeDestroy(): vue实例销毁之前执行，
           // 场景: 移除当前页面的，定时器,计时器, 全局事件(EvnetBus移除事件,$off方法),
           // 在销毁vue实例阶段之前，可以做一些销毁当前组件占用的一些全局资源

          11.destroyed(): vue 实例销毁之后执行。
          // 6.2 : 会移除这个vue 中 相关的数据监视器，子组件(如果组件套用了其他组件会被先销毁)，以及一些事件侦听器
          // 6.3 : 之后会把vue实例完全销毁

-->