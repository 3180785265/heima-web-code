<template>
    <div>
        <div>
            <p>{{ count }}</p>
            <!-- 1.直接调用导入到methods中的miutotion  -->
            <button @click="addCount(100)">1.点击增加(直接调用导入methods中的miutatoin)</button>

            <!-- 2.通过自定义函数，在次调用导入到methods中的miutotion  -->
            <button @click="btn">2.点击增加</button>


            <!--3. 使用子组件,修改state中的数据，就能发现对于多个.vue来说，
                   vuex的state数据，对于整个项目都是共享的数据, 其他组件都可以共享到同一份state中存储的数据 -->
            <ChildA></ChildA>
        </div>
    </div>
</template>

<script>
// 使用辅助函数，并导入mutations
import { mapState, mapMutations } from 'vuex';
import ChildA from '../components/Child-a.vue'; '@components/Child-a.vue'

export default {

    components:{
        ChildA
    },
    computed: {
        ...mapState(['count'])
    },


    methods: {
        // 2. 在methods中用...mapMutations(['miutatoin名称']) 把位于mutations中的方法提取了出来,将它导入到methods中
        ...mapMutations(['addCount']),


        /* 
           3.上面...mapMutations(['addCount'])代码的含义是将mutations的方法导入了methods中，等同于在methods中定义了一个方法通过 
               this.$store.commit('miutaoin名称', 参数)去调用了miutotoin 方法 。
            addCount() {
                this.$store.commit('addCount', 10)  // 直接调用mutations 
            }, 
        
        
        */

        //4.直接通过 this.miutaoin方法名  就可以调用执行，无需在写成 this.$store.commit('addCount', 10)  , 并且在vue的模板中也可以直接调用
        btn() {
            // miutotion已被导入当当前vue实例的methods中，所以可以直接this.调用
            this.addCount(18)
        }


    },


}
</script>

    <!--        

                mapMutations和mapState很像，它把位于mutations中的方法提取了出来，我们可以将它导入
                1.使用辅助函数，并导入mutations
                import { mapState, mapMutations } from 'vuex';

                2.mapState是通过computed计算属性，mapMutations则是通过methods导入
                methods: {
                    ...mapMutations(['addCount'])
                }

              
           3.上面...mapMutations(['addCount'])代码的含义是将mutations的方法导入了methods中，
             等同于在methods中定义了一个方法, 方法内在通过 this.$store.commit('miutaoin名称', 参数)去调用了miutotoin 方法 
               
                methods: {
                    // commit(mutation名称, 参数)
                    addCount () {
                        this.$store.commit('addCount',10)
                    }
                }

            4.此时，就可以直接通过this.addCount调用定义在methods中的miutoin函数了

                模板中调用: <button @click="addCount(100)">+100</button>
                或者在js中this.addCount(100)调用
        

            重点：
            5. 使用子组件,修改state中的数据，就能发现对于多个.vue来说，
                   vuex的state数据，对于整个项目都是共享的数据, 其他组件都可以共享到同一份state中存储的数据。
                并且state中的数据，是双向绑定的，model发生变化，视图也会发生变化



     -->