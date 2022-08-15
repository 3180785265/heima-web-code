<template>

  <div>
    <!-- vue生命周期组件 -->
    <Lefe v-if="isShow"></Lefe>
  
    <button @click="isShow = false">删除组件</button>


    <br>

    <!-- ajax请求组件 -->
    <UseAxios></UseAxios>
    
  </div>
</template>

<script>
import Lefe from '@/学习笔记/01-Vue的生命周期函数.vue'
import UseAxios from '@/学习笔记/02-axios的使用.vue'

export default {
  data() {
    return {

      isShow: true
    }
  },
  components: {
    Lefe,UseAxios
  }
}
</script>

<style>
</style>