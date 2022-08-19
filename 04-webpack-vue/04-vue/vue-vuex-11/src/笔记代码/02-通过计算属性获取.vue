<template>
  <div>
    <!-- 1.通过计算属性获取 vuex中的state数据-->
    <p>state的数据：{{ count }}</p>
    <p>state的数据：{{ count }}</p>
  </div>
</template>

<script>
export default {
  created() {
    console.log(this.$store)
  },

  computed: {

    // 2.将获取state.count的方式写在计算属性中获取，就不需要重复的去写this.$store.count,
    //   只需要写计算属性名获取就可以了
    count() {
      // 来源于vuex
      return this.$store.state.count
    }
  }
}
</script>
<style scoped>
p {
  margin: 0 auto;
  width: 200px;
}
</style>

    <!-- 
                 
     1.如何在组件中获取 count?
       原始形式{{}} 插值表达式
       可以使用this.store 获取vuex中的store对象实例，在通过state属性获取coount如下
         this.$store.state.count



     2.通过计算属性 computed 获取state:
       直接调用$store.state.count 代码里太多，可以将state中的某些属性，定义到计算属性当中,在通过
       计算属性名获取，就不需要重复的去写this.$store.count, 只需要写计算属性名获取就可以了
        2.1辅助函数mapState: 
            mapStae能帮我们把store中的数据映射到组件的计算属性(computed)中,它属于一种快捷方式

            语法：
            第一步:导入mapState
            import  {mapState} from 'vuex'

            第二步:采用数组形式引入state属性
            mapState:['count']

            上面的代码最终相当于帮我们自动定义了计算属性
            count(){  
              return this.$store.state.count
            }
     -->