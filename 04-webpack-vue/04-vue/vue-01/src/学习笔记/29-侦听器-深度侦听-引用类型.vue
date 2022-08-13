<template>
    <div>
        <input type="text" v-model="user.name">
        <input type="text" v-model="user.age">

    </div>
</template>

<script>
export default {
    data() {
        return {
            user: {
                name: "",
                age: 0

            }
        }
    },
    watch: {
        // 侦听器，深度监听引用数据类型的属性
         user:{
            immediate:true,  //1.立即执行一次 handler(newVal ,oldVal) 函数
            deep:true,      //2.深度侦听复杂类型内属性的变化
            handler(newVal,oldVal){
                //打印的是user对象
                console.log(newVal,oldVal)
            } 
        }
    },
    methods: {

    },
}
</script>
<!-- 
        侦听复杂类型，或者立即执行侦听函数
        语法:
        "要侦听的属性名":{
            immediate:true, //立即执行一次 handler(newVal ,oldVal) 函数
            deep:true,      //深度侦听复杂类型内属性的变化
            handler(newVal,oldVal){  //对象内的属性发生改变就会执行

                //打印的是 整个对象
                console.log(newVal,oldVal)
            } 
        }

-->