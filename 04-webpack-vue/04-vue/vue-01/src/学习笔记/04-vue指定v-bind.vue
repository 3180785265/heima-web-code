<template>
    <div>
        <!-- 1.给DOM标签的属性值， 设置vue的变量-->
        
        <!-- 2.不简写 -->
        <a v-bind:href="url">点击去百度</a>
        <br>
        <!-- 4.简写 -->
        <img :src="imageUrl"/>
        <br>

        <!--   
            引入本地图片路径
              5.注意： webpack的项目，在html 里可以写 路径，在css 也可以写路径因为有对应的loader 解析
               但是！ 在js 里，不能直接引用本地的路径,  因为在js 中 使用 路径，它会认为所有的路径都是要引入模块
               所以我们引入图片路径会被当作模块，从而显示不出来。
               所以，想引入本地的图片路径，就需要用import 把图片当作模块引入

         -->
        <img :src="oInUrl"/>
        
    </div>
</template>

<script>
import ImgObj  from'@/assets/1.gif' // 5.唯独js需要导入图片文件(css/标签里可以直接使用图片地址)
export default {
    // 1.准备变量
    data() {
        return {
            url: "http://www.baidu.com",
            urls: "http://www.baidu.com",
            localImg:ImgObj,

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


        注意： webpack的项目，在html 里可以写 路径，在css 也可以写路径因为有对应的loader 解析
               但是！ 在js 里，不能直接引用本地的路径,  因为在js 中 使用 路径，它会认为所有的路径都是要引入模块
               所以我们引入图片路径会被当作模块，从而显示不出来。
               所以，想引入本地的图片路径，就需要用import 把图片当作模块引入


 -->  


