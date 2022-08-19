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
                 
          actions也有辅助函数，可以将action导入到组件中

            语法: 
            mport { mapActions } from 'vuex'
            methods: {
                ...mapActions(['getAsyncCount'])
            }



                注意点的点: 
                 在定义miutoin和actoin时，可以定义形参，如果在调用时，没有传入参数，则第一个参数就会变成事件对象
     -->