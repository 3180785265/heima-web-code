<template>
    <div>
        <!-- 1.使用组件时,在标签夹着的地方，传入标签替换 slot标签占位  -->
        <Pannle>
            <img src="../assets/a.jpg" alt="">
            <span>我是span内容</span>
        </Pannle>

        <!-- 使用组件时,在标签夹着的地方，传入标签替换 slot标签占位  -->
        <Pannle>

            <img src="../assets/a.jpg" alt="">
            <p>我是p标签</p>
        </Pannle>
        <!-- 使用组件时,在标签夹着的地方，传入标签替换 slot标签占位  -->
        <Pannle>

            <p>寒雨连江夜入吴,</p>
            <p>平明送客楚山孤。</p>
            <p>洛阳亲友如相问，</p>
            <p>一片冰心在玉壶。</p>
        </Pannle>
    </div>
</template>

<script>
import Pannle from '@/views/03/Pannle.vue'
export default {
    components: {
        Pannle
    }
}
</script>

    <!-- 
        问题1: 组件里的数据不确定可以怎么做
        问题2:组件里的标签不确定怎么办

        1.动态数据不确定，都是用 props 抽取
        2.如果组件内的标签也不确定，要根据不同的业务需求写出动态的效果
          比如一个组件内的div标签的子标签 可能使用的是p, 但第二次使用的是img,第三次使用的是span 

        组件的插槽技术,就是在用子组件时，能给子组件插入不同的标签，实现动态的效果
        3.插槽技术: 通过 slot标签，让组件内可以接收不同的标签,显示不同的效果
          给组件插入什么标签，组件就显示什么标签

          语法:
           1.组件内使用<slot></slot>占位
           2.使用组件时,在标签夹着的地方，传入标签替换 slot标签占位
           3.插槽的运行效果: 传入的标签会替换掉slot显示
           4.总结: 插槽，给子组件插入什么就显示什么

           5.黑马头条项目，发现具名插槽可以直接在标签上使用 slot='插槽名称'
           6.插槽不仅可以插入普通的html，还可以将vue组件作为插槽内容使用
     -->


<style>
</style>