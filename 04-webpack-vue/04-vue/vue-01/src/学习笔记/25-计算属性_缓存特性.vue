<template>
    <div>

        <!-- 1.使用计算属性就跟使用变量一样，
               1. 计算属性有缓存的效果,只有函数内使用的变量出现变化,才会自动调用计算属性
               2. 计算属性对应函数执行后,会把return的值缓存起来,依赖项不变,多次调用都是从缓存获取
               3. 依赖项值-变化,函数会 "自动"  重新执行- 并缓存新的值
         -->
        <p>{{ reverseMsgComputed }}</p>
        <p>{{ reverseMsgComputed }}</p>
        <p>{{ reverseMsgComputed }}</p>

        <!-- 1.函数,主动的去调用才会执行, 在模板中只会被调用一次
         -->
        <p>{{ reverseMsgMethod() }}</p>
        <p>{{ reverseMsgMethod() }}</p>
        <p>{{ reverseMsgMethod() }}</p>

    </div>
</template>

<script>
export default {
    data() {
        return {
            msg: "Hello Word"
        }
    },
    computed: {
        reverseMsgComputed() {
            console.log('计算属性执行了')
            return this.msg.split("").reverse().join("")
        }
    },
    methods: {
        reverseMsgMethod() {
            console.log('普通函数执行了')
            return this.msg.split("").reverse().join("")
        }
    }

}
</script>
      <!-- 

            计算属性跟普通的方法有什么差异?

            计算属性,会减少函数的调用次数，会将函数内的值缓存,只有函数内依赖的值变化了,才会重新调用将值继续缓存
               1. 计算属性有缓存的效果,只有函数内使用的变量出现变化,才会自动调用计算属性
               2. 计算属性对应函数执行后,会把return的值缓存起来,依赖项不变,多次调用都是从缓存获取
               3. 依赖项值-变化,函数会 "自动"  重新执行- 并缓存新的值


     -->