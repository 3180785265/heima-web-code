<template>
    <div>
        <!-- 给DOM标签的属性值， 设置vue的变量-->
        
        <!-- 不简写 -->
        <a v-bind:href="url">点击去百度</a>
        <br>
        <!-- 简写 -->
        <img :src="imageUrl"/>
        <br>
        <img :src="oInUrl"/>
    </div>
</template>

<script>
import oInUrl  from'@/assets/1.gif'
export default {
    // 1.准备变量
    data() {
        return {
            url: "http://www.baidu.com",
            urls: "http://www.baidu.com",
            oInUrl:oInUrl,

            imageUrl:'https://pics0.baidu.com/feed/00e93901213fb80ec905c2ac4654e924b8389401.png?token=2b1c7664a6fc2cfa69d07b186849684b'
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


