<template>
    <div>

        <div>{{ $store.state.user.token }}</div>
        <button @click="updateToken">点击</button>
    </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'
export default {
    computed: {
        ...mapGetters(['name', 'token'])
    },
    methods: {
        ...mapActions(['user/asyncToken']),//actions辅助函数引入分模块的语法
        ...mapMutations(['user/updateToken']), //mutations辅助函数引入分模块的语法
        
        //..... 讲师没有讲分模块引入其他state变量，可能是这样写...mapState(['user/token','setting/name'])   但是这种写法没有必要，所以我们都是直接原生调用

        updateToken() {
            //如果没有给模块加命名空间 namespaced：true，就会被注册到全局。可以直接调用
            // 如果给vuex模块加了如果加了namespaced:true 属性，调用时就必须要用 模块名+/ 的形式区分调用什么模块
            // 1.原始调用
            // this.$store.commit('updateToken',111) 


            // 2.如果有给模块加命名空间,则需要采用路径 / 的形式区分模块去调用 
            // this.$store.dispatch('user/asyncToken',100)
        
            // 3. 配合辅助函数的调用 注意，要加() 并且要用路径/ 区分模块名
            this['user/asyncToken'](1)


           


        }
    }
}
</script>

   <!-- 
    1. Vuex的 Module模块化问题

        1.默认情况下，每个模块内部的 actoin，miutatoin，和getter 是注册在全局命名空间
        的，这就造成在任意.vue 文件中 调用.store不需要区分模块名就可以调用,但是这样调用模块 变量/方法就容易混淆

        2.如果我们想让模块具有高封闭性
        可以采用
        namespaced： 表示命名空间, 给true 就表示封闭加锁，false就表示注册到全局命名空间


        3.如果加了namespaced, 在调用模块时要写模块名才能调用成功

            调用actoins/miutatoin 采用路径形式调用比如:  模块名/actoin或者mutation
            this.$store.commit('user/updateToken',100) //调用user模块下的miutoin
            this.$store.dispach('user/asyncToken')   //调用user模块下的action


       4. 以上原始办法调用代码this.$store.dispach()太长了，用了辅助函数后，只需要通过this即可调用，
            只不过导入和调用要加路径

            1.导入到methods当中
            ...mapActions(['user/asyncToken']),//如果是模块化，如果是模块化，以 / 路径方式区分不同的模块

            2.调用执行:
                 this['user/asyncToken'](1)





        模块化的辅助函数形式怎么写?
          


     -->