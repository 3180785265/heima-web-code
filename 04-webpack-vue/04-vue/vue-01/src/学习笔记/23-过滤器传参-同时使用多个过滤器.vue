<template>
    <div>
         <!-- 
            1.过滤器格式:  vue变量 | 过滤器名
            {{  msg | reverseFileter }}
         -->
        <p>{{ msg | reverseFileter('|') }}</p>

        <br>
        <!--  2.同时使用多个过滤器 
              vue变量 | 过滤器1(值) | 过滤器2
        -->
        <p :title="msg | toUp('yes') | reverseFileter('')">鼠标悬停显示title</p>

        <!-- 
            3. 定义格式化日期对象的过滤器
                1.下载使用moment模块, 格式化 YYYY-MM-DD格式
                2.定义格式化日期的过滤器,
         -->
        <p>{{ new Date() |formatDate }}</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            msg: "Hello Word Vue"
        }
    },
    filters: {
        // 1.转换成大写
        toUp(val, str) {
            return val.toUpperCase() + str
        },

    }

}
</script>

<style>
</style>
    <!--

          3.过滤器在 html中的使用
          插值表达式或者 v-bind中使用 过滤器
            1.过滤器格式:  vue变量 | 过滤器名
          {{  msg | reverseFileter }}

          :title="msg | toUp"


          4.如果给过滤器传额外的参数?
            语法: 
             1.vue变量 | 过滤器名(值)
             2.在msin.js 里注册过滤器, 语法Vue.filter("过滤器名",(要处理的值,传递的参数) = >{return "处理返回后的新值"  })   
          5.如果同时使用多个过滤器 
             1.vue变量 | 过滤器1(值) | 过滤器2


          // 2.定义格式化日期对象的过滤器
                1.下载使用moment模块, 格式化 YYYY-MM-DD格式
                2.定义格式化日期的过滤器,

          

    
    -->


        