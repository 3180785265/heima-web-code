<template>
  <div id="app">
     
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: false
    }
  }
}
</script>

<style lang="less">
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
    .title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border: 1px solid #ccc;
      padding: 0 1em;
    }
    .title h4 {
      line-height: 2;
      margin: 0;
    }
    .container {
      border: 1px solid #ccc;
      padding: 0 1em;
    }
    .btn {
      /* 鼠标改成手的形状 */
      cursor: pointer;
    }
  }
}
</style>

<!--
                    // vue 组件
          当遇到重复的标签， 如何做的呢?
          粘贴复制，效率低，代码冗余，可读性差

          问题2: 如果同样的代码写成了多份，每份一样的代码里面使用的变量名却不一样区分开来管理
              造成了变量的冗余 。

          解决方案: 采用vue提供的单.vue文件-组件化方式来封装一套，然后复用
                  每套组件里的变量和函数虽然都是一样的，但是都有自己的独立作用域，互不干扰

-->