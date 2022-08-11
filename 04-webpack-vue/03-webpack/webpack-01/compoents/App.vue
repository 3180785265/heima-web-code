<template>
    <div>
        <!-- 1.vue 的模版区域 -->

        <h1>这是app </h1>
    </div>
</template>

<script>
//2. vue的业务逻辑区域
export default {
    data() {
        return {

        }
    },
    methods: {

    },
}

</script>



<style scoped>
/*3. scoped属性：表示每个样式都是自己私有的，不会影响到其他样式的组件 */
</style>
<!-- 

    vue单文件组件的基本语法
    每一个单页面组件都是.vue 
    单文件组件的组成解构
    <template>: 组件的模块区域,用来定义vue组件的模板内容
        <template>
            <div>
                
            </div>
        </template>

    script: 用来定义vue组件的业务逻辑的区域 
    <script>
    export default {
        
    }
    </script>

    style: 用来定义当前vue组件的私有样式，其中建议为每个style 添加scoped属性，防止多个vue组件中的样式冲突问题

 -->