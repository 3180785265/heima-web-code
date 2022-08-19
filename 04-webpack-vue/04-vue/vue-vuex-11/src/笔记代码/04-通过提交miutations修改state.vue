<template>
    <div>
        <div>
            <p>state中的count{{ count }}</p>
            <p>state中的count{{ count }}</p>
            <p>state中的count{{ count }}</p>

            <!-- 1.注意的点：miutotion只能同步更新数据 -->
            <button @click="addCount">点击增加</button>

            
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  
    methods: {
        // 1.调用store中的mutations , 并带参数的传递
        addCount() {
            this.$store.commit('addCount', 10)  // 直接调用mutations 
        },
     
    },
    computed: {
            ...mapState(['count'])
    }
}
</script>

    <!--        

            1.state的数据只有miutatoin能修改:  但是miutotion只能同步更新state数据, 无法在miutoin方法内做比如ajax，定时任务的一切异步操作
                1.在 Vuex.Store对象中声明修改state的 mutation方法
                2.mutation函数都两个重要参数 state和payload
                  state:   指的是当前vuex中的state对象
                  payload: 载荷,提交miutatoin方法的时候，传递的参数，它可以是任何形式的，任何参数的值

                    const store = new Vuex.Store({
                            state: {
                                count: 0,
                                name: '蔡徐坤'
                            },
                            // 3.3修改state必须通过mutations
                            mutations: {
                                /*3.4修改state的方法
                                    1.每一个miutoin方法都有对应参数,
                                    2.state: 指的是当前vuex中的state对象
                                    3.payload:  载荷,提交miutatoin方法的时候，传递的参数，它可以是任何形式的，任何参数的值 */
                                    
                                    
                                addCount(state, payload) {
                                state.count + 1//每次给count+1
                                }





                            }
                    }) 

                2.在任意的.vue文件中调用 miutaoins提交
                        语法:
                           this.$store.commit('miutaoin名称', 参数)  // 直接调用mutations 



     -->