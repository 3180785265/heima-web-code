<template>
    <div>
        <p>你要购买的商品的数量:{{ count }}</p>

        <!-- 1.少量代码的写法 -->
        <button v-on:click="count=count+1">+1</button>
        <br>
        <!-- 2.调用函数写法 -->
        <button v-on:click="addFn">+1</button>
        <br>
        <!-- 3.传递实参的写法 -->
        <button v-on:click="addCountFn(10)">+10</button>


        <!--  v-on:事件名="函数名" 可以简写成 @事件名='函数名' -->

        <br>
        <button @click="addCountFn(20)">简写+20</button>
        
    </div>
</template>

<script>
export default {
    data() {
        return {
            count: 1
        }
    },
    methods: {
        addFn() {

            // 让变量改变的话，绑定了这个变量的视图也就会跟着改变
            // 函数中的this export default 的{} 对象，也就是说谁调用我，我就指向了谁，所以能通过this.调用变量 
            this.count++;
        },

        addCountFn(num){
            this.count+=num;
        }
    },
}
</script>

<style>
</style>

 <!-- 
        给标签绑定事件
        语法:
        1.v-on:事件名='要执行的少量代码'
        2.v-on:事件名='methods中的函数名'
        3.v-on:事件名='methods中的函数名(实参)'

         1.让变量改变的话，绑定了这个变量的视图也就会跟着改变
         2.methods函数中的this 指的是 export default 的{} 对象，也就是说谁调用我，我就指向了谁，所以能通过this.调用变量 
 
 

        4. v-on:事件名="函数名" 可以简写成 @事件名='函数名'


        5. 在模板中使用变量，无需加 this ,因为插值表达式，v-bind 引用树形都没有加this
 -->