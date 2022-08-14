<template>
    <div class="my-product">
        <h3>标题: {{ title }}</h3>
        <p>价格: {{ price }}元</p>
        <p>{{ intro }}</p>

        <button @click="kjBtn">砍价</button>

    </div>
</template>

<script>
import eventBus from '@/EventBus'

export default {
    // 1.子组件内 定义props变量，准备接收
    props: ['index', 'title', 'price', 'intro'],


    methods: {


        kjBtn() {
    
            //1.使用 this.$emit("事件名","事件回调函数的实参")  触发父组件的自定义事件
            this.$emit("subprice", this.index, 1)
            

            // 2.使用 eventBus.$emit("事件名","自定义事件的实参"....) 跨组件通信,触发 List组件中的事件,
            eventBus.$emit("send",index,price)

        }
    },
}
</script>

<style>
.my-product {
    width: 400px;
    padding: 20px;
    border: 2px solid #000;
    border-radius: 5px;
    margin: 10px;
}
</style>