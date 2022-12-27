<template>
  <div>
    <!--  -->

    <div>
      <span>姓名</span>
      <input type="text" v-model="full">
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  computed: {
    // full() {
    //   return "无名氏";
    // }

    full:{
      // 1.给full赋值，触发set方法
      set(val){
        console.log(val)
      },
      // 2.使用full提取值的时候触发get方法
      get(){
        return "无名氏"
      }
    }
  }
}
</script>

    <!-- 

              目标：计算属性也是变量

                给计算属性赋值，把视图层的值，赋值给计算属性，需要用完整写法,seter


              1. 语法：

                 computed: {

                  "属性名": () {

                      set(值){

                      },
                      get(){
                        return "值"
                      }

                  }

                }
                1.给计算属性赋值，触发set方法

                2.提取计算属性的值的时候触发get方法

     -->
