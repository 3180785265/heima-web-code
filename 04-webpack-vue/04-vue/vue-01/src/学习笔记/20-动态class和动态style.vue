<template>
    <div>
        <!-- 
        以前用原生js 使用className 判断能否给一个标签添加类名

        1.用 vue 的 v-bind 给class设置动态的值
        语法 :class:"{css类名:布尔值}"
     -->

        <div>
            <p :class="{ redStr: bool }">值为true,key作为类名生效</p>

            <button @click="btn">变色</button>
        </div>

        




        <!--  动态style 语法
                语法:style="{css属性名:'值'}" 
                值要加单引号，否则会被当作vue变量
        -->

        <div>
            <p :style="{color:'red'}">动态style</p>
            <br>
            <p :style="{color: backgroundColor}">动态style</p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            bool: true,
            backgroundColor:"green"
        }
    },
    methods: {
        btn() {
            this.bool = !this.bool
        }
    }
}
</script>

<style scoped>
.redStr {
    color: red;
}
</style>

 <!-- 
        以前用原生js 使用className 判断能否给一个标签添加类名

        1.用 vue 的 v-bind 给class设置动态的值
        语法 :class:"{css类名:布尔值}"

        2.动态style 语法
                语法:style="{css属性名:'值'}" 
                值要加单引号，否则会被当作vue变量


        动态class 是 {css类名: 布尔条件} 
        动态style 是  {css属性名:css属性值} 
 -->