<template>
  <div>
<!--  -->
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>

<!-- 

//什么时候使用？
当我们使用一个子组件时，父组件既要传值给子组件的props，并且子组件要调用事件修改父组件中传过来的这个值
使用步骤
  1.在引用子组件要传入props时，给树形用.sync 修饰
  2.当子组件中要修改那个.sync修饰的属性时，用 $emit( 'update:属性名' , 参数值)

-->

