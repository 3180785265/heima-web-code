<template>
    <div>
        <h3>标题：</h3>


        <!-- 
            1.Product组件要和List组件通信
                去EventBus，Product和List 中看代码
         -->
        <Product v-for="(obj, index) in list  " :key="index" :title="obj.proname" :price="obj.proprice" :intro="obj.info"
            :index="index" @subprice="fn">
        </Product>


        <List :arr="list"></List>



   
    </div>
</template>

<script>
import Product from '@/components/MyProduct.vue'
import List from '@/components/List.vue'
export default {
    data() {
        return {
            str: "很好，维瑞谷的",

            // 1.模拟后台获取的接口数据
            list: [
                { id: 1, proname: "超级好吃的棒棒糖", proprice: 1, info: '开业大酬宾, 全场8折' },
                { id: 2, proname: "超级好吃的大鸡腿", proprice: 34.2, info: '好吃不腻, 快来买啊' },
                { id: 3, proname: "超级无敌的冰激凌", proprice: 4.2, info: '炎热的夏天, 来个冰激凌了' },
            ],
        }
    },

    components: {
        //key  和 value的变量名同名了，可以重写
        List,Product
    },
    methods: {
        fn(index, price) {
            // 1.商品大于扣减的价格,才能被扣减
            if (this.list[index].proprice > price) {
                // 2.进行扣减
                this.list[index].proprice = (this.list[index].proprice -= price).toFixed(2)

            }



        }
    },
}
</script>

     <!-- 
            组件通信: EventBus ，跨组件通信
            1.同时将Product 和 List 引入 当前父组件
            2.如果Product 想传值给List ，但是它们之间是没有父子关系的，
              1.接收方(事件监听者)： 在created()中使用 eventBus.$on("事件名","回调函数(形参)" )   来监听注册事件 
                传递方(事件触发者)： eventBus.$emit("事件名","自定义事件的实参"....) 跨组件通信,触发 List组件中的事件,
              
              语法:
              1. src/EventBus/index.js  新建一个index.js (叫index.js就可以省略不写)
                 在这个js中定义如果下:
                 import Vue from 'vue'
                 // 导出一个空白的Vue对象
                 export default new Vue()

              2. 在两个要跨组件中通信的.vue 文件中使用如下语法
                1.接收方(事件监听者)：导入 import eventBus from '../EventBus',
                  因为是注册事件，所以要现在在created()中使用 eventBus.$on("事件名","回调函数(形参)" )   来监听注册事件。 
                2.传递方(事件触发者)：导入 import eventBus from '../EventBus',
                  根据需求在恰当的时机中，使用eventBus.$emit("事件名","自定义事件的实参"....) 跨组件通信,触发 接收方组件中的 监听事件,

              
              3.什么时候使用EventBus技术
                1.当2个没有引用关系的组件之间要进行组件通信
                2.空白Vue对象,只负责 $on监听事件 和 $emit触发事件 
         -->


 