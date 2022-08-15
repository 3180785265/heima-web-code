<template>
    <ul class="my-product">
        <li v-for="(item, index) in arr" :key="index">
            <span>{{ item.proname }}</span>
            <span>{{ item.proprice }}</span>
        </li>
    </ul>
</template>

<script>
// 1.引入空白Vue对象(EventBus)
// 2.接收方- $on监听事件
import eventBus from '@/EventBus'
export default {
    props: ['arr'],
    //   1.组件创建完毕，监听注册send事件，所以要写在 created 中
    created() {

        // 2.使用 eventBus.$on("事件名","回调函数(形参)") 来监听注册事件,
        eventBus.$on('send', (index, price) => {
               // 2.商品大于扣减的价格,才能被扣减
            if (this.arr[index].proprice > price) {
                // 3.进行扣减 (为什么可以直接修改引用类型的arr? 目测引用类型修改不会报错，而基本数据类型的props会报错，但是还是不建议直接修改props的值)
                this.arr[index].proprice = (this.arr[index].proprice -= price).toFixed(2)
            }
        })
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