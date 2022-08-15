<template>
  <div id="app">
    <TodoHeader :todoArr="showArr" @changeType="typeFun" @clear="clearFun"></TodoHeader>
    <TodoMain :arr="showArr" @TodoMainDelTask="TodoMainDelTask"></TodoMain>
    <TodoFooter @TodoMainAddTask="todoMainAddTask"></TodoFooter>

  </div>

</template>

<script>
// 1.目标:创建工程-准备相关组件文件,样式等

// 1.样式引入,直接执行css
import "@/styles/base.css"
import "@/styles/index.css"
// 2.组件引入
import TodoFooter from "@/components/TodoFooter.vue"
import TodoHeader from "@/components/TodoHeader.vue"
import TodoMain from "@/components/TodoMain.vue"

export default {
  name: "App",
  components: {
    TodoFooter,
    TodoHeader,
    TodoMain,

  },
  methods: {
    //  todoMain添加数据事件的回调函数
    todoMainAddTask(taskName) {


      this.list.push({
        name: taskName,
        id: this.list.length ? this.list[this.list.length - 1].id + 10 : 100,
        isDone: false

      })




    },
    // todoMain删除数据事件的回调函数
    TodoMainDelTask(id) {
      // 1.根据数据的id找到对应的数组索引
      //获取第一个obj.id=id的元素
      let idnex = this.list.findIndex(obj => obj.id === id)

      // 2.删除数组中的数据
      this.list.splice(idnex, 1)



    },
    // 切换不同的数据事件回调函数
    typeFun(type) {

      this.getSel = type
    },

    // 清空数组的回调事件
    clearFun() {
      // 将已完成的数据清空掉
      // 筛选出未完成的在重新赋值
      this.list = this.list.filter(obj => obj.isDone === false)
    }
  },

  data() {
    return {
      list: JSON.parse(localStorage.getItem("tastList")) || [
        // { id: 100, name: "吃饭", isDone: true },
        // { id: 201, name: "睡觉", isDone: false },
        // { id: 103, name: "打豆豆", isDone: true },
      ],
      getSel: 'all'// 中转变量

    }
  },
  // 计算属性
  computed: {

    // 使用计算属性，作为过滤出 ye all no  数据的副本，不修改原数据list(会被覆盖掉)
    // getSel 和  list 原数组变化就执行一次
    showArr() {
      if (this.getSel === 'yes') {
        return this.list.filter(obj => obj.isDone === true)

      } else if (this.getSel === 'all') {
        return this.list

      } else if (this.getSel === 'no') {
        return this.list.filter(obj => obj.isDone === false)

      }
    },



  },
  watch: {
    // 侦听list的变化，一旦变化，就立马更新到缓存当中
    list: {
      deep: true,//深度侦听引用类型数据
      handler(newVal) {

        localStorage.setItem('tastList', JSON.stringify(this.list))
      }

    }
  }


}
</script>

  <!-- 
        1.添加功能
          1.TodoHeader.vue- 输入框-键盘事件-回车按键,往数组添加数据
          2.子传父, 子组件要修改数据但不能直接修改props，要向父组件通信，用自定义事件,子组件触发自定义事件,调用父组件中使用的自定义事件的回调函数,
            从而去改变父组件中的vue变量
          3.原数组一旦改变，所有用到的地方都会被更新，包括依赖原数组的子组件的props
          4.输入框为空，提示用户必须输入内容  


        2.删除功能



        3.tabs切换: 
          定义一个变量，isDel, 值为多种不同的值，每个tab对应自己的一个值，如果
          isDel 的当前值等于了 tab的值说明切换了那个tab就让它有高亮的class


        4.缓存功能: 
          1.将数据更新到缓存，用侦听器，侦听list数组，如果list数组改变了，
            就将list重新缓存到本地缓存当中
          2.list取值，直接给它从 localstore.get()中获取, 如果没有则为[]数组
    


        5. 全选功能
            1.全选 根据 子组件的全选按钮，向父组件通信，修改父组件中的数组，
            2.小选  每次点击，循环 




   -->
