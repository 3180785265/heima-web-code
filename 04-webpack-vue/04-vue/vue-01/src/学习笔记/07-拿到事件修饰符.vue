<template>
    <div>
        <div @click="monther">
            <a @click.stop="son">上天</a>

            <br>
            <a @click.prevent.stop="son" href="http://www.baidu.com">阻止去百度</a>
        </div>

        <!-- 2.绑定键盘按下事件 -->
        <input type="text" @keydown.enter="enterFn">
        <input type="text" @keydown.esc="escFn">
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    methods: {
        monther() {
            document.write('佩奇上天了')

        },
        son() {
            document.write('佩奇向上天')
        },
        enterFn() {
            alert('用户按下了回车')
        },
        escFn() {
            alert('用户按下了返回键')

        }
    }
}
</script> 

<style>
</style>

<!-- 
        事件修饰符，可以给事件带来更强大的功能

        语法:
            1.@事件名.修饰符='vue函数'

             @事件名.修饰符
             .stop:    阻止事件的冒泡
             .prevent: 阻止事件的冒泡
             @keydown.enter 
             @keyup.enter 监测回车按键
             @keyup.esc   监测返回按键

             可以一次使用多个修饰符: @事件名.修饰符.修饰符
             比如   @click.prevent.stop="son"


             更多修饰符，看vue的官方文档扩展知识
-->