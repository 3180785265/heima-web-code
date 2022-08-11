<template>
    <div>
        <h1>{{ msg }}</h1>
        <button @click="btn">点击反转</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            msg: "Hello Word"
        }
    },
    methods: {
        btn() {
            // 1.把字符串切割成数组, 传入一个空字符切割
            let resolveMsg = this.msg.split("")

            // 2.把数组反转

            resolveMsg.reverse();
            console.log(resolveMsg)

            // 3.将数组链接成字符串,传入一个空字符链接
            this.msg = resolveMsg.join("")

            console.log(this.msg)


        }
    }
}
</script>

<style>
</style>