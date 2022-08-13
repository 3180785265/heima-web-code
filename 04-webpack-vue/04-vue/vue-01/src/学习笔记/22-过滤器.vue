<template>
    <div>
        <!-- 1.反转字符串，用过滤器 -->
        <p>{{ msg | reverseFileter }}</p>

        <br>
        <p :title="msg | toUp">鼠标悬停显示title</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            msg: "Hello ,vue"
        }
    },

    // 2.方式2: 注册局部过滤器,只能在当前vue文件内使用
    /* 
    语法:
        filters:{
            过滤器名字(要处理的值){
                return "处理后的值"
            }
        }
    
    */
    filters: {
        // 1.转换成大写
        toUp(val) {
            return val.toUpperCase()
        }
    }

}
</script>

<!-- 

        vue 的 过滤器，就是把一个值传进去，把这个值经过处理返回另一个值出来


        过滤器只能用在, 插值表达示是和v-bind 动态属性里
        vue 中的过滤器场景
        字符串反转 


        过滤器语法:
          1.注册过滤器：
            在msin.js 里注册全局过滤器, 语法Vue.filter("过滤器名",(要处理的值,传递的参数) = >{return "处理返回后的新值"  })   
          
          2.方式2: 注册局部过滤器,只能在当前vue文件内使用
            语法:
                filters:{
                    过滤器名字(要处理的值){
                        return "处理后的值"
                    }
                }   
               

          3.过滤器在 html中的使用
          插值表达式或者 v-bind中使用 过滤器
            1.过滤器格式:  vue变量 | 过滤器名
          {{  msg | reverseFileter }}

          :title="msg | toUp"


          4.如果给过滤器传额外的参数?

          5.如果同时使用多个过滤器 

 -->

