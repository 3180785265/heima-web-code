<template>
    <div class="my-product">
        <h3>标题: {{ title }}</h3>
        <p>价格: {{ price }}元</p>
        <p>{{ intro }}</p>

        <button @click="kjBtn">砍价</button>
    </div>
</template>

<script>
export default {
    // 1.子组件内 定义props变量，准备接收
    props: ['index', 'title', 'price', 'intro'],


    methods: {


        kjBtn() {
            /*  2. 直接修改子组件的props变量，但是父组件的变量是没有修改的并且Vue不允许子组件直接修改props变量
                   会出现子组件props和父组件传值的变量不一致，还会出现报错
                    this.price--
           */

            //3.使用 this.$emit("事件名","事件回调函数的实参")
            
            this.$emit("subprice", this.index, 1)

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