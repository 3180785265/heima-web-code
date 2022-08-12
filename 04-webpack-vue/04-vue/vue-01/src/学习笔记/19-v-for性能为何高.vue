<template>
    <div>
        <ul>
            <li v-for="(item, index) in arr " :key="index">
                {{ item }}
            </li>
        </ul>

        <button @click="btn">插入一个新数据</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            arr: ['老大', '老二', '老三']
        }
    },
    methods: {
        btn() {
            // splice() 可以往数组 添加/删除项目。
            this.arr.splice(1, 0,'新来的')
        }
    }

}
</script>

 <!-- 

        问题1.js 原生数组变化，如果更新页面
        问题2 重新渲染，重绘和重拍性能差

        v-for 不会让标签消失，进行重绘，而是尽可能的让标签可以被复用
              

        
        1.回流/重排:  当页面中的部分元素的尺寸，结构，布局发生了变化的时候，浏览器就会重新渲染部分或者全部文档的过程称为回流。
                    回流就是，网页在重新布局一次, 比如我页面中的一个盒子改变了，那么它会重新回流，重新布局，包括被它影响到的盒子也会重新回流布局
        2.重绘: 由于节点(元素)的样式改变但是不影响它在文档流中的位置和文档布局，就称为重绘。比如
                改变元素的 color , background-color,outline 等称为重绘

        3.简单理解：影响了页面布局的叫做回流(重排),比如padding,margin   不影响页面布局的叫做重绘比如color,background-color

        4.面试重点：重绘不一定会引起回流，但是回流一定会引起重绘, 因为回流的过程中包含了重绘的这一过程


        虚拟dom

        1684开始看
-->