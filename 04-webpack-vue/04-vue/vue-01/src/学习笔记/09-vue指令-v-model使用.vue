<template>
  <div>
    <div>
        <span>用户名:</span>
        <!-- v-model 的作用是，让表单的value属性，和 vue的变量双向绑定到一起
            双向绑定的作用是，表单的value值改变，v-model绑定的变量也会改变
            value属性 - vue 变量  使用v-model 关联到了一起
         -->
        <input type="text" v-model="username">
        <input type="text" v-model="password">
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            username:"",
            password:''
        }
    },
 
}
</script>

<style>

</style>


   <!-- 
         1.vue 如果把他们互相关联起来呢?:  将表单的value属性，和vue的数据变量 双向绑定到一起
       
        语法: 在表单标签上加上指令  v-model="vue数据变量"    就能将表单的value属性和vue的变量双向绑定到一起
        双向数据绑定
         变量变化->视图自动变化
         视图变化->变量自动变化

         1.js获取表单的值，赋值给变量，获取input 的value值， f赋值，还是给value赋值

        

    -->