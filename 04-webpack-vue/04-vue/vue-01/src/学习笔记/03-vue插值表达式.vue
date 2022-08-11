<template>
    <div>

        <!--
             以前是获取dom,在用innerHtml插值，
             而使用插值表达式直接使用就能将变量插入到dom中
        -->
        <h1>{{ msg }}</h1>
        <h1>{{ obj.name }}</h1>
        <h1>{{ obj.age > 18 ? '成年' : '未成年' }}</h1>
    </div>
</template>

<script>
name: "vue-d1"
export default {
    // 1.变量都声明在data函数的return的对象上
    data() {
        return {
            // key 相当于变量名
            msg: "hello ,vue",
            obj: {
                name: "小vue",
                age: 5
            }
        }
    },
}
</script>

<style>
</style>

<!--
    浏览器安装 vue-devtoos

    1.修改一个标签的内容，用dom我们需要做两部，获取元素对应的dom，innerHtml修改元素的内容
    2. 使用vue的 插值表达式，只需要一步
    语法：
    1.可以使用变量： {{msg}}, {{obj.name}}
    2.可以使用表达式,比如三目运算符，但是不能使用语句,比如if:  {{obj.age>18? '成年':'未成年'}}


    3.变量，要声明在 js中data函数的return的对象上
      1.vue变量，如果变量的值改变，页面也会改变  
      2.如果用js,js要监听属性的变化，还要同步到对应的dom上

    4. vue的mvvm，让我们不在去自己操作dom，极大简化了开发的效率
      以前都是操作dom，而vue是基于mvvm的思想
      用数据驱动视图改变，操作dom的失去，vue源码自己做了
      mvvm是一个设计模式，它进行了分层,分为了三大块
      view : 浏览器的dom 
      viewModel: 对应的是vue的源码,它会干两件事，会监听值得改变，将改变得值同步到view中，
                  当view改变也会监听，也会将view得值同步到model中，这叫双向绑定
      model : 数据层，对应的是vue中的变量

    
-->