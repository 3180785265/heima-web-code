<template>
  <div>

</template>

<script>
export default {

}
</script>

<!-- 

        1.路由重定向redirect

          网页打开url默认的hash值都是/路径,怎么办?
          
          1.在路由数组里，定义规则path:'/'监测默认路由
          2.用 redirect 重定向, redirect 表示当访问到路由对象的path时，就会重新路由到指定的新路由path，将对应的组件渲染
          比如: 
            {
              path:"/",        // 1.匹配的是浏览器url默认的hash值/路径
              redirect:"/find" //2.重定向到find，会将浏览器url #后面的路径改变成/find 然后在重新到路由数组匹配对应的组件渲染
            },
          

        2.路由-404 
           找不到路径给个提示页面
           要放到路由数组的最后一个作为路由映射， path:"*" 前面不匹配最后就会命中这个
           语法为: 
           {
            path:"*" //表没有名字前面路径后的其他任意路径，前面不匹配最后就会命中这个
           }


        3.路由模式的设置
         1.hash路由：在浏览器的url都是在#后面的路由路径, 比如http://192.168.0.106:8080/#/home

         2.如果不想让路由在#后面,可以设置
          histoey路由: 以后上线需要服务器端支持(需要自己设置服务端)，否则找的是文件夹，而不是真正意义上的路径   http://192.168.0.106:8080/home

        语法:
        在路由对象中配置
        const router = new VueRouter({
          routes, //4.1routers是固定的key，值必须是一个规则数组
          mode:"history" //设置路由为history模式(不显示#)
        })


-->
  </div>