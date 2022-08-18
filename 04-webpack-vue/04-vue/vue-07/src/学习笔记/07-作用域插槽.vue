<template>
  <div>
    <pannle>
      <!-- 需求:插槽，使用组件内变量
         -->
      <!-- 1.在template内使用 v-slot="变量名"
                 如果写成scope变量,会将子组件的slot标签自定义的所有属性名和值全部接收 -->
      <template v-slot="scope">
        <!-- 2.scope接收到所有属性和值，调用其中的一个自定义的row1属性 -->
        <p>{{ scope.row1.defaultTwo }}</p>
        <p>{{ scope.row2 }}</p>
      </template>

    </pannle>
    <pannle>


      <!-- 具名插槽和作用插槽一起混合使用的语法 -->
      <template v-slot:slotB="{ row1 }">
        <!-- 2.scope接收到所有属性和值，调用其中的一个自定义的row1属性 -->
        <p>{{row1.defaultTwo }}</p>
      </template>



    </pannle>
  </div>
</template>

<script>

import Pannle from '@/views/06/Pannle.vue'
export default {
  components: {
    Pannle
  }
}
</script>

 <!--  作用域插槽的作用: 在使用子组件时，需要在插槽中,使用到子组件中的变量   


        语法: 
        1.子组件,在solot上绑定多个自定义属性并给自定义属性用v-bind绑定子组件内的vue变量
        2.使用组件，传入自定义标签时,, 必须使用teplemnete然后在里面 使用v-slot="自定义变量名",就能使用子组件中 slot 标签中绑定的属性和变量
        3.使用scope变量接收:    v-slot="scope"   scope变量名会自定绑定slot上所有属性和值
        4.作用域插槽和具名插槽的混合使用: v-slot:插槽名称="{ 属性名 }"

        作用域插槽什么使用使用?
        当需要使用子组件内的变量时，就需要 用到作用域插槽技术
  -->