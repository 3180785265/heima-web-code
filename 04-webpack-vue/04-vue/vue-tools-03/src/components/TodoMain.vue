<template>
  <ul class="todo-list">
    <!-- completed: 完成的类名 -->

    <!-- 1.在v-for 循环props接收到的数组
         2. li 标签的 completed 类 写成 class动态样式
     -->
    <li :class="{ completed: obj.isDone }" v-for="obj in arr" :key="obj.id">
      <div class="view">
        <!-- 2.在chebox复选框上绑定 v-model -->
        <input class="toggle" type="checkbox" v-model="obj.isDone" />
        <label>{{ obj.name }}</label>
        <button class="destroy" @click="delTask(obj.id)"></button>
      </div>
    </li>
  </ul>

</template>

<script>

export default {
  props: ['arr'],
  methods: {
    // 删除
    delTask(id){
        // 1.子组件向父组件通信，通过id,修改父组件的数组
        this.$emit("TodoMainDelTask",id)
        

    }
  },

}
</script>