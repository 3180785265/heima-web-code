<template>

  <div>
    测试 getters的辅助函数
    <p>{{ fileList }}</p>
  </div>
</template>

<script>
// 1.导入mapGetters
import { mapGetters } from 'vuex';
export default {

  // 2. 将getters中的计算属性导入到组件的计算属性中
  computed: {
    ...mapGetters(['fileList'])
  },

  methods: {
    btn() {
      // 3.也能通过this直接访问
      console.log(this.fileList)
    }
  },

}
</script>
  <!-- 
   
     -->