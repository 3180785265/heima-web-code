<template>
    <div>

        <div>{{ $store.state.user.token }}</div>
        <button @click="btn">点击</button>
        <!-- 
            1.原生 通过$store调用
            2.通过辅助函数自动将actoins/miutaoin 的函数添加 到methods中，将state变成计算属性添加到 computed中

         -->
    </div>
</template>

<script>
import { mapGetters, createNamespacedHelpers } from 'vuex'


// 1.创建基于某个命名空间的辅助函数
const { mapMutations: userMapMutations } = createNamespacedHelpers('user')
export default {
    computed: {
        
    },
    methods: {
            // 2.导入到methods中，无需在用 / 路径区分
        ...userMapMutations(['updateToken']),


        btn() {


            // 3.直接调用，无需在用 / 路径区分
            this.updateToken(1)



        }
    }
}
</script>

