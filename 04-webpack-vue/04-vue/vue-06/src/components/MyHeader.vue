<template>

  <!-- 3.使用 动态的style 引用props传来的变量，让组件拥有不同的样式, 
         {}中, 如果css属性名和变量名同名，可以简写！
   -->
  <div class="my-header" :style="{ backgroundColor: background, color}">{{title}}</div>
</template>

<script>
// 1.目标：让Header组件支持不同的背景颜色和字体颜色
// 2.使用 动态的style 引用props传来的变量，让组件拥有不同的样式
export default {
  props: {
    // 可以对props中的变量进行校验,换成对象的写法

    background: String, // 外部传入此变量的值，必须是字符串类型，否则报错
    color: {
      type: String, // 约束color的类型
      default: "#fff" // color变量的默认值(外部不给color传值，使用默认值)
    },
    title: {
      type: String,
      required: true //表示必须传入此变量的值

    }

  }
}
</script>

<style lang="less" scoped>
.my-header {
  height: 45px;
  line-height: 45px;
  text-align: center;
  background-color: #1d7bff;
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 2;
}
</style>