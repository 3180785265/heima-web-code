<template>
    <div>
        <div>
            <p>state数据: {{ count }}</p>
            <!-- 异步调用 -->
            <button @click="btn">异步调用更新state</button>

        </div>
    </div>
</template>

<script>
// 使用辅助函数
import { mapState } from 'vuex';

export default {

  
    computed: {
        ...mapState(['count'])
    },


    methods: {
        btn() {
            // 1.原始形式调用actoin
            // commit是提交miutatoins
            // dispatch 是调用actoin

            this.$store.dispatch('getAsyncCount',100)

        }


    },


}
</script>

    <!--        
                    // 1.原始形式调用actoin
                    // commit是提交miutatoins
                    // dispatch 是调用actoin

                    actoin的原始调用方式
                     this.$store.dispatch('getAsyncCount')
        




                注意点的点: 
                 在定义miutoin和actoin时，可以定义形参，如果在调用时，没有传入参数，则第一个参数就会变成事件对象
     -->