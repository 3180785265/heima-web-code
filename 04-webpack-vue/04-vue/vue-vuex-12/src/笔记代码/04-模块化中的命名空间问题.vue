<template>
    <div>

        <div>{{ $store.state.user.token }}</div>
        <div>{{ token }}</div>
        <button @click="btn">点击</button>
        <!-- 
            1.原生 通过$store调用
            2.通过辅助函数自动将actoins/miutaoin 的函数添加 到methods中，将state变成计算属性添加到 computed中

         -->
    </div>
</template>

<script>
import { mapGetters, createNamespacedHelpers, mapState } from 'vuex'


// 1.创建基于某个命名空间的辅助函数
const { mapMutations: userMapMutations } = createNamespacedHelpers('user')
export default {
    computed: {
        // userToken() {
        //     return this.$store.state.user.token
        // }
        //组件中以对象形式获取state,我们也可以用简写的方式，如果用简写方式就要以数组方式进行存取
        ...mapState({
            token: state => state.user.token
        })

        //因为我们有多个模块，并且我们为模块加上了命名空间，所以我们可以在前面指定名字，来跟vuex说我们需要从哪个模块里面获取这个状态
        // ...mapState('cart',['count','cartShop'])



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

