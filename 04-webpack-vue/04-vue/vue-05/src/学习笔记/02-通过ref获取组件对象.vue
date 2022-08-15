<template>
  <div>
    <!-- 3.使用组件，并标记ref属性 -->
    <Demo ref="demo"></Demo>
  </div>

</template>

<script>
// 1.导入子组件
import Demo from '@/components/Demo.vue'
export default {
    // 2.引入组件
    components:{
        Demo
    },

    // 
    mounted() {
        // 4.获取组件对象
        let demo=this.$refs.demo
        // 5.调用子组件的方法执行
        demo.fn()
    },
}
</script>


  <!-- 

        获取组件的对象

        1.创建一个组件，里面写一个方法
        2.在父组件中引入子组件，给子组件标签一个ref属性
        3.恰当时机，通过ref属性获取组件对象，可调用组件对象里的方法


        4.这种也是组件通信的一种方式，但是正常还是要用 props 和 自定义事件进行通信比较合适
   -->