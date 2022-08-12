<template>
    <div>

        <ul>
            <li v-for="(val, index) in arr" :key="index">
                {{ val }}
            </li>
        </ul>

        <button @click="btn">数组翻转</button>
        <button @click="spliceBtn">截取前三个</button>
        <button @click="updateBtn">点击更新第一个的值</button>

        <!-- 

        问题：v-for 数组变化，会更新页面嘛？

            1.数组的reverse会使v-for更新页面

        问题: 哪些数组方法会造成v-for更新，哪些不能

     -->
    </div>
</template>

<script>
export default {
    data() {
        return {
            arr: [1, 2, 3, 4, 5, 6]
        }
    },
    methods: {
        // 数组反转
        btn() {
            this.arr.reverse()
        },
        // 截取
        spliceBtn() {

            // slice() 不会改变原始数组，会返回一个新数组
            this.arr = this.arr.slice(0, 3)

            console.log(this.arr)
        },

        // 3.通过索引更新数组的某个值
        updateBtn() {

            //1. 通过索引 更新数组某个元素 的 时候， v-for 是监测不到的无法更新到页面
            // this.arr[0] = 10000000000000

            //2.解决: 通过 this.$set( 数组 , 更新的索引位置, 要更新的值 )     
            // 参数1：更新目标解构
            this.$set(this.arr, 0, 1000)
        }
    }
}
</script>

<!-- 

        问题：v-for 数组变化，会更新页面嘛？

            1.数组的reverse会使v-for更新页面
            2.只有数组的一些能改变原数组的API 方法，才能使v-for 指令去更新页面。
              比如 push() pop() shift() unshift() splice()  reverse() 等

              splice() 和 slice() 区别是 slice()会返回一个新数组，splice()是直接对原数组进行操作

        问题: 哪些数组方法会造成v-for更新，哪些不能
        1.能改变原始数组的数组API 都能使v-for 更新视图，
        2.改变不了数组的API 和 直接通过索引修改数组的某个元素，都无法让v-for 指令 更新视图 
        3. 可以用 $this.set()  解决对数组的某个值更新，然后让v-for 对视图进行更新
        4. 如果有的数组API 返回的是一个新数组，而不是修改原数组，我们就直接拿新的数组赋值给旧数组整个替换掉，也能使v-for 指令更新视图

-->