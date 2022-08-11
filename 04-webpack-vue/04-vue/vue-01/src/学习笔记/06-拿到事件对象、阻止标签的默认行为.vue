<template>
  
  <div>
    <!--1.无传参，通过形参直接接收-->
    <a @click="one" href="http://www.baidu.com">阻止百度1</a>
    <br>

    <!-- 2.传参，通过$evnt 指代事件对象传给事件处理函数  -->
    <a @click="two(1,$event)" href="http://www.baidu.com">阻止百度2</a>
  </div>
</template>

<script>
export default {
    data() {
        return {
            url:""
        }
    },
    methods:{
        one(e){
            e.preventDefault();
            
        },
        two(num,e){
            e.preventDefault()
        }
    }
}
</script>

<style>

</style>

<!-- 

            vue事件处理函数中，拿到事件对象
            语法: 
             1.无传参，通过形参直接接收
             2.传参，通过$evnt 指代事件对象传给事件处理函数


 -->
