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
        计算属性使用辅助函数的优点：

          //1. 在导入下面这段代码的时候
           computed: {
            ...mapGetters(['fileList'])
          },

          //2. 辅助函数就会帮助我们自己写出这段代码, 简化了代码，起到了解耦
            computed: {
              
              fileList(){
                return   $store.getters.fileList
              }

            }
     -->