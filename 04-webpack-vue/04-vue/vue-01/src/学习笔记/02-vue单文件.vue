
<!--
    1. template里，只能由一个根标签，
 -->
<template>
  <div>欢迎使用vue</div>
</template>


<!--
    2. js相关, 每一个vue 的script 都是独立作用域，互不影响
 -->
<script>
export default {

}
</script>


<!--
    3. 当前组件的样式，加上scoped 属性，可以保证样式只对当前页面由效果
 -->

<style scoped>

</style>

<!--
    4. 将vue-cli 中的App.vue 中的欢迎页面删掉
        HelloWord.vue 
        将App.vue 中全部删掉，只留下一个空模板
        删除assets中的图片

    5.@vue-cli 本质上是一个全局模块的包(必须下载node.js,在npm -i @vue-cli -g 全局安装)，可以用来创建 使用vue命令 创建脚手架
      脚手架项目创建后，是零配置的项目，可以直接使用里面零配置的webpack,为我们打包
      脚手架的打包入口是main.js 
      App.vue ，如果想让页面在网页上看得见，就必须让页面和App.vue 有引用关系
    6.单页面vue的好处： 有独立的作用域，不用担心 js, style 等重名的问题。


   
 -->


