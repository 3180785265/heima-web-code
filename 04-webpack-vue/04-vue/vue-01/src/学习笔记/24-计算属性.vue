<template>

    <div>
        <p>{{num}}变量num</p>


        <!-- 1.给表单组件的value绑定vue变量，收集用户输入的值 -->
        
        <input type="number" v-model.number="a">变量a 
        <input type="number" v-model.number="b">变量b


    </div>
</template>

<script>
export default {
    data() {
        return {
            a: 10,
            b: 20
        }
    },

    computed: {

        num() {
            return this.a + this.b
        }

    },

}
</script>

<style>
</style>


 <!-- 
            问题1:  以前要计算一个变量num的值, 来自于a+b的和
            问题2： 当a和b变量改变，要重新计算和 同步给num值, 就要监测a和b 


            vue的计算属性: 就是能让一个变量的值，依赖另一些数据计算而来得到结果
            1.计算属性的特点: 函数内使用的变量改变，会重新计算结果返回
            2.注意: 计算属性也是vue的变量，千万不要跟data里的变量名重复
            3.使用场景: 当一个变量的值, 需要用另外的一些变量计算而来，比如购物车
            4.计算属性的语法
            component:{

                "计算属性名"(){
                    return "值"
                }

            }
 -->
