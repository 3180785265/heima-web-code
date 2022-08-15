<template>

  <div>
    <Lefe v-if="isShow"></Lefe>
  
    <button @click="isShow = false">删除组件</button>

    
  </div>
</template>

<script>
import Lefe from '@/学习笔记/01-Vue的生命周期函数.vue'

export default {
  data() {
    return {

      isShow: true
    }
  },
  components: {
    Lefe
  }
}
</script>

<style>
</style>