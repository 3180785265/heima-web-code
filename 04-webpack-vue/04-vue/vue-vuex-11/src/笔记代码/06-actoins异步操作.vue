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

    <!--   1. 如果想异步的修改共享数据state，必须用actions，如果是同步修改数据就用miutaions    
            actions是异步的去修改数据，vuex中规定miutions只能同步修改数据，不能做异步的处理比如ajax，settimeout等异步的操作。
            所以如果我们在修改state的时候要异步执行一些操作，，需要通过actions才能异步操作，然后actions在调用miutaions去修改数据

                    // 1.原始形式调用actoin
                    // commit是提交miutatoins
                    // dispatch 是调用actoin

                    actoin的原始调用方式
                     this.$store.dispatch('getAsyncCount')
        
            2.action方法,两个参数 context ,payload
                1.context参数: 相当于组件中的 this.$store  实例 , 通过store可以调用miutaions,state,actions等数据 
                2.params:  actoin被调用时，调用者可传递的参数



                注意点的点: 
                 在定义miutoin和actoin时，可以定义形参，如果在调用时，没有传入参数，则第一个参数就会变成事件对象
     -->