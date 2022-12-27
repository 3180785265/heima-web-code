<template>
    <div>
        <div>
            <p>state数据: {{ count }}</p>
            <!-- 异步调用 -->
            <button @click="getAsyncCount(101)">异步调用更新state</button>

        </div>
    </div>
</template>

<script>
// 使用辅助函数
import { mapActions,mapState } from 'vuex';

export default {

  
    computed: {
        ...mapState(['count'])
    },


    methods: {
        ...mapActions(['getAsyncCount']),
    


    },


}
</script> 

    <!--
        actions的辅助函数的优点也是和前面的state和miutaions辅助函数一样，让辅助函数去帮我们把 this.$store.dispatch()的调用封装一个方法          
                 
          actions也有辅助函数，可以将action导入到组件中

            语法: 
            mport { mapActions } from 'vuex'
            methods: {
                ...mapActions(['getAsyncCount'])
            }



                注意点的点: 
                 在定义miutoin和actoin时，可以定义形参，如果在调用时，没有传入参数，则第一个参数就会变成事件对象
     -->