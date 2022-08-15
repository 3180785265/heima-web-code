<template>
  <footer class="footer">
    <span class="todo-count">剩余<strong>{{ todoArr.length }}</strong></span>
    <ul class="filters" @click="upIsSel">
      <li>
        <a :class="{ selected: isSel === 'all' }"  @click="isSel='all'" href="javascript:;">全部</a>
      </li>
      <li>
        <a :class="{ selected: isSel === 'no' }"  @click="isSel='no'"  href="javascript:;">未完成</a>
      </li>
      <li>
        <a :class="{ selected: isSel === 'yes' }"  @click="isSel='yes'" href="javascript:;">已完成</a>
      </li>
    </ul>
    <button class="clear-completed" @click='clearFn'>清除已完成</button>
  </footer>
</template>

<script>
export default {
  props: [
    'todoArr'
  ],
  data() {
    return {
      isSel: "all"  //全部:"all" , 已完成:'yes' ,未完成:'no'
    }
  },
  
  methods:{

    // 1.切换tabs的触发父组件的数组的删选条件
    upIsSel(isSel){

      this.$emit('changeType',this.isSel)
      

    },

  // 清空已完成的任务
    clearFn(){
      // 1.子组件向父组件通信,触发 App.vue里事件对应的clearF方法
      this.$emit('clear')
      
    }
  }
}
</script>