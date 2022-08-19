<template>
    <div>
        <p>{{ $store.state.count }}</p>

        <button @click="addCount(100)">通过Child子组件,修改vue中的state数据</button>
    </div>
</template>

<script>
// 1.导入mapMiutatoins
import { mapMutations } from 'vuex';

export default {

    methods: {
        // 2. 在methods中用  ...mapMutations(['miutatoin名称']) 把位于 mutations中的方法提取了出来,将它导入到methods中
        ...mapMutations(['addCount']),


        /* 
           3.上面...mapMutations(['addCount'])代码的含义是将mutations的方法导入了methods中，等同于在methods中定义了一个方法通过 
             原始形式 this.$store.commit('miutaoin名称', 参数)去调用了miutotoin 方法 。
            addCount() {
                this.$store.commit('addCount', 10)  // 直接调用mutations 
            }, 
        
        
        */


    },

}
</script>

<style>
</style>