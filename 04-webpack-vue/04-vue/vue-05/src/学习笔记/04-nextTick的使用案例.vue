<template>

  <div>
    <input ref="input" type="text" placeholder="这是一个输入框" v-if="isShow">
    <button v-else @click="btn">点击我进行搜索</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: false
    }
  },
  methods: {
    btn() {
      // 1.显示输入框
      this.isShow = true

      // 获取input 的 原生dom, 给input获取聚焦行为,

      // 2.this.$refs.input.focus() 原因: data变化，更新到dom是vue的viewModel去异步更新dom的，所以异步任务还没执行就获取dom就会获取不到


      // 3.阻塞等待异步更新dom的任务执行完，在执行$nextTick 中的异步回调
      this.$nextTick(() => {
        this.$refs.input.focus()
      })


    }
  }
}
</script>

<style>
</style>