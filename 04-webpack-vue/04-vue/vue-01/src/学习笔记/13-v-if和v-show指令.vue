<template>
    <div>
        <!-- 
        css 隐藏元素
        display:none   隐藏元素，不在文档流中显示    
        visblity:hidden 隐藏元素，但在文档流占位

        js的方式
        removeChiled



        v-if 和 v-show 控制标签的隐藏,   值为false 隐藏
        语法
        v-show="vue变量"
        v-if="vue变量"

        原理区别:
            v-show:  采用的是CSS的 display:none 隐藏                (频繁切换使用)
            v-if:    采直接从JS 从DOM 树上移出 dom.removeChild()   (移除后不在显示)


            v-show 性能比 v-if 的性能差
            v-show 频繁切换隐藏使用
            v-if 适合删除后，不在显示


            v-else: 如果v-if 不成立为false，就会执行v-else 


     -->

        <h1 v-show="isShow">我很好琪琪</h1>
        <p v-if="age >= 18">成年</p>
        <p v-else>未成年</p>



        <button @click="btn" v-text="text"></button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isShow: true,
            text: "",
            age: 2
        }
    },
    methods: {
        btn() {
            this.isShow = !this.isShow

            this.btnText()
        },

        btnText() {
            this.text = this.isShow ? '隐藏' : '显示'

        }
    },
    created() {
        this.btnText()
    }
}
</script>

 <!-- 
        css 隐藏元素
        display:none   隐藏元素，不在文档流中显示    
        visblity:hidden 隐藏元素，但在文档流占位

        js的方式
        removeChiled



        v-if 和 v-show 控制标签的隐藏,   值为false 隐藏
        语法
        v-show="vue变量"
        v-if="vue变量"

        原理区别:
            v-show:  采用的是display:none 隐藏                (频繁切换使用)
            v-if:    采直接从DOM 树上移出 dom.removeChild()   (移除后不在显示)


            v-show 性能比 v-if 的性能差
            v-show 频繁切换隐藏使用
            v-if 适合删除后，不在显示



-->