<template>
    <div>
        <!-- 给DOM标签的属性值， 设置vue的变量-->
        
        <!-- 不简写 -->
        <a v-bind:href="url">点击去百度</a>
        <br>
        <!-- 简写 -->
        <a :href="url">点击去百度</a>
    </div>
</template>

<script>
export default {
    // 1.准备变量
    data() {
        return {
            url: "http://www.baidu.com"
        }
    },
}
</script>

<style>
</style>
<!-- 
        给标签属性设置vue变量的值
        v-bind语法和简写
        1.不简写:   v-bind: 属性名='vue变量'
        2.简写:    :属性名='vue变量'


 -->  


