<template>
  <header class="header">
    <h1>todos</h1>
    <input id="toggle-all" class="toggle-all" type="checkbox" v-model="isAll">
    <label for="toggle-all"></label>

    <!-- 1.给input 输入框绑定vue变量接收用户输入的值
         2.给input 表单组件绑定回车事件
     -->
    <input class="new-todo" v-model="taskName" @keydown.enter="addTask" placeholder="输入任务名称-回车确认" autofocus />
  </header>

  <!-- 

      1.把input中用户输入的值和v-model的vue变量绑定
      2.要将数据传递到TodoMain组件当中，跨组件用EventBus

   -->
</template>

<script>

export default {
  data() {
    return {
      taskName: "",
      isAll:false
    }
  },

  methods: {
    addTask() {
      // 1.输入框输入的内容
      if (this.taskName.trim().length === 0) {
        alert('请输入内容')
        return;
      }
      // 2.触发父组件上的事件
      this.$emit("TodoMainAddTask", this.taskName)
    }
  },
}
</script>