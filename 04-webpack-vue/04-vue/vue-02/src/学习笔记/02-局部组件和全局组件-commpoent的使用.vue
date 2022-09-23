<template>
  <div id="app">
      <h3>案例：折叠面板</h3>
      <!-- 1.引入当前.vue 文件中定义的局部组件，只能在当前.vue文件中使用 -->
       <Pannel></Pannel>
       <Pannel></Pannel>
       <Pannel></Pannel>

       <!-- 2.直接引入在 main.js中 注册的全局组件 -->
       <Pannel2></Pannel2>
  </div>
</template>

<script>
import Pannel from "@/components/Pannel.vue"
export default {

  components:{
    Pannel
  }
}
</script>

<style lang="less" scoped>
body {
  background-color: #ccc;
  #app {
    width: 400px;
    margin: 20px auto;
    background-color: #fff;
    border: 4px solid blueviolet;
    border-radius: 1em;
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.5);
    padding: 1em 2em 2em;
    h3 {
      text-align: center;
    }
  }
}
</style>
 <!-- 
            定义组件:
            1.将组件写到compoemts文件夹下
            2.将要导入的组件 在<script>  </script>   标签内部用 import  组件名 from'组件路径'   模块化方式导入
            3. 将 import 接收到的组件， 定义在 vue 的 components 当中
            components: {
                
            }
            4.在template  html 当中 用标签的方式引入组件<组件名></组件名>


            5. 采用vue提供的单.vue文件-组件化方式来封装的一套组件，里面都有一个  export default {}  表示导出一个Vue实例
               所以说 组件就是一个可以复用的Vue实例，封装标签，样式和js代码，每一个组件都有自己独立的css,js，html



          // 组件注册几种方式
          1.全局注册: 在 main.js 中用 import 模块导入将 组件导入到main.js 在用Vue.compoent("组件名",组件对象) 将组件注册进vue中全局使用
          2.局部组件 将 import 接收到的组件， 定义在 vue 的 components 当中
            components: {
                
            }

-->

   