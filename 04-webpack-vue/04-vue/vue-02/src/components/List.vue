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
    //   3.组件创建完毕，监听send事件
    created() {
        eventBus.$on('send', (index, price) => {
            
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