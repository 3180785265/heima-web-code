<template>
  <div>
    <!--  -->
    <input type="text" v-model="name">
  </div>
</template>

<script>
export default {
    data() {
        return {
            name:""
        }
    },
    watch:{
        name(newVal,oldVal){
            console.log(newVal,oldVal)
        }
    }
}
</script>

 <!-- 
        侦听器:
            1.能对某一个属性变量(包括vuex的getters变量,computed计算属性,vue变量等)进行监测，如果值被改变就会调用一次侦听器函数
            2.语法: newVal是当前最新的值， oldVal是改变前的值
                watch:{
                    "被侦听的属性名"(newVal,oldVal){
                        
                    }
                }

            3.注意点：侦听器既可以侦听data 里的变量 也可以侦听 computed 里的变量
 
-->