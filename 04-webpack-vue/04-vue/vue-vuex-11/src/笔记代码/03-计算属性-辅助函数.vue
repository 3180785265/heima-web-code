<template>
    <div>
        <!-- 1.使用计算属性-辅助函数内引用的state变量 -->
        <p>通过计算属性获取state的数据：{{ count }}</p>
        <p>通过计算属性获取state的数据：{{ name }}</p>
    </div>
</template>

<script>
// 2.导入辅助函数
import { mapState } from 'vuex';
export default {
    created() {
        console.log(this.$store)
    },

    computed: {
        // 3.采用数组形式引入state属性,利用延展运算符 ... 将导出的状态映射给计算属性
        // mapState(['count']) 相当于把vuex中state.count 引入到了一个computed计算属性中
        ...mapState(['count','name'])

    }
}
</script>
<style scoped>
p {
    margin: 0 auto;
    width: 800px;
}
</style>

    <!-- 

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

            上面的代码最终相当于帮我们自动定义了一个计算属性
            count(){  
              return this.$store.state.count
            }
     -->