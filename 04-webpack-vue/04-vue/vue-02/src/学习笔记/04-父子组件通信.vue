<template>
    <div>
        <h3>标题：</h3>

        <!-- 2.v-for 循环将list接口的数据 循环遍历出多个组件 -->
        <Product v-for="(obj, index) in list  " :key="index" :title="obj.proname" :price="obj.proprice" :intro="obj.info"
            :index="index" @subprice="fn">
        </Product>


        <Product title="好吃的口水鸡" price="50" :intro="str"></Product>
    </div>
</template>

<script>
import Product from '@/components/MyProduct.vue'
export default {
    data() {
        return {
            str: "很好，维瑞谷的",

            // 1.模拟后台获取的接口数据
            list: [
                { id: 1, proname: "超级好吃的棒棒糖", proprice: 1, info: '开业大酬宾, 全场8折' },
                { id: 2, proname: "超级好吃的大鸡腿", proprice: 34.2, info: '好吃不腻, 快来买啊' },
                { id: 3, proname: "超级无敌的冰激凌", proprice: 4.2, info: '炎热的夏天, 来个冰激凌了' },
            ],
        }
    },

    components: {
        //key  和 value的变量名同名了，可以重写
        Product
    },
    methods: {
        fn(index, price) {
            // 1.商品大于扣减的价格,才能被扣减
            if (this.list[index].proprice > price) {
                // 2.进行扣减
                this.list[index].proprice = (this.list[index].proprice -= price).toFixed(2)

            }



        }
    },
}
</script>

<style>
</style>


 <!-- 
 总结：1.父向子传值,子组件内使用props接收，父组件内引入的子组件标签使用属性方式传值
           2.子向父传递,或者修改父的数据,用自定义函数,在父组件中引入的子组件标签内用自定义事件标记 
             语法: @自定义事件名="回调函数"   在子组件中使用this.$emit("自定义事件名","回调函数的参数")
             触发自定义事件的回调函数

        2. 如何让封装的组件支持不同的项目需求(组件内部样式的数据,css样式等)?
            可以定义props变量使用

       




    1.问题
        问题1：从一个组件内，给另一个组件传值？
        问题2：不适用localStorge,直接传递，如何做?
        其实说的就是两个vue文件之间如何传值


    2.首先明确父和子是谁，在父引入子(被引入的就是子组件)

        1.父子组件传值的语法：
                1.在compoents下创建.vue组件
                2.在父组件中引入组件
                3.局部使用组件

        2.组件通信_父传子——props
            1.子组件内，定义变量，准备接收，然后使用变量  (子组件内 定义props变量，准备接收)
            2.在父组件内的标签内，以属性的方式传值给子组件，可以用v-bind 绑定vue变量传值给子组件
        
        
        3.组件通信_ 父向子传值_配合循环
            1.能v-for 循环使用组件吗，或者说能在组件上使用vue指令吗，能！，将vue组件当作标签来看
            2.将共性的代码抽取出来到组件中，组件中在将具有动态的数据抽取成 props 变量在插值表达式中渲染
               父组件调用子组件就能传入不同的值渲染不同的组件数据


        4.单向数据流： 从父组件传值到子组件这个过程叫做单向数据流

          重点: 子组件修改父组件的数据，是可以的，但是Vue不允许这样做,因为子组件的props值是依赖于父组件
                    传入的值，并且Vue规定props里的变量是只读的
                


        5.自定义事件： 就是自己定义一个名字 比如 @click 是一个事件名， 而我们自定义一个可以叫@btnClick
          1.因为我们子组件的props值，是依赖于父组件的变量传过来的，所以我们只要修改父组件的值，子组件的props的值就会改变
          1. 子组件触发父组件中的自定义事件
            1.父组件内，给子组件的标签，绑定自定义事件和事件处理函数
            2.语法: @自定义事件名="父methods里函数名"
            3.在子组件内，根据需求在恰当的时机，使用this.$emit("事件名",参数)触发父给我绑定的自定义事件，让父组件里的methods中对应的事件回调函数执行
            4.子组件在触发父组件给我绑定的自定义事件时，还可以传值给父组件中绑定的回调函数
    


            1.通过索引修改数据,把索引传给子组件
            2.在父组件中引用的子组件标签内使用自定义事件，在父组件的methods中定义自定义事件的回调函数
            3.在子组件内使用this.$emit("事件名","事件回调函数的参数")   ，在恰当的时机调用
     
     
            4.为什么可以直接修改引用类型的值? 目测引用类型修改不会报错，而基本数据类型的props会报错，但是还是不建议直接修改props的值

               有时候，可以直接传整个引用类型的对象给子组件，这样子组件在修改数据时，直接通过引用类型数据修改就不会报错 
                1.子组件改变对象里的属性会影响父组件数组里的对象吗
                2.会，因为对象之间引用的是相同的内存地址

            5.  props: {
                可以对props中的变量进行校验,换成对象的写法

                background: String, // 外部传入此变量的值，必须是字符串类型，否则报错
                color: {
                type: String, // 约束color的类型
                default: "#fff" // color变量的默认值(外部不给color传值，使用默认值)
                },
                title: {
                type: String,
                required: true //表示必须传入此变量的值

                }

            }    
     -->