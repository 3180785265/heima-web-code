<template>

  <div>
    <div class="footer_wrap">
      <!-- 1.在App.vue下的切换的页面/都是一级路由 -->

      <router-link to="/find">发现音乐</router-link>
      <router-link to="/part">朋友</router-link>
      <router-link to="/my">我的音乐</router-link>
    </div>
    <div class="top">

      <!-- 2.会根据浏览器上的#hash路径匹配路由规则数组，将对应的组件渲染到 router-view 组件的位置当中 -->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.footer_wrap {
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  width: 100%;
  text-align: center;
  background-color: #333;
  color: #ccc;
}

.footer_wrap a {
  flex: 1;
  text-decoration: none;
  padding: 20px 0;
  line-height: 20px;
  background-color: #333;
  color: #ccc;
  border: 1px solid black;
}

.footer_wrap a:hover {
  background-color: #555;
}

.top {
  padding-top: 62px;
}

/* 激活时的样式 */
.footer_wrap .router-link-active {
  color: white;
  background: red;
}
</style>

    <!-- 
                        路由嵌套
                        问题: 某路由页面，可否在套入一套路由的系统?
                        比如：我想在一个现有的一级路由下，在嵌套二级导航和二级路由页面

                        一级导航和一级路由页面.. 在App.vue 中的就是一级导航和一级路由页面。(以App.vue作为单页面然后切换路由，所以在App.vue中切换的所有页面都称为一级路由)
                        在一级路由页面中，又嵌套一个路由系统，可以切换不同的页面，里面就属于二级路由



                      语法:main.js配置2级路由
                          1.一级路由path  "从/开始定义"
                          2.二级路由往后path直接写名字，"不需要用/开头"
                          3.嵌套路由在上级路由的 children数组里,编写路由信息对象
                      


                      二级路由需要注意什么: 
                      二级路由path 一般不写根路径
                      跳转时路径要从/开始写全
                      

                语法：
                      二级路由如何配置
                      1.创建需要的二级页面组件
                      2.路由规则里 children 中配置二级路由规则对象
                      3.一级页面中设置router-view 显示二级路由页面



                  二级路由注意：
                   1.二级路由path一般不写根路径/ 
                   2.跳转二级路由时,路径要从/开始写 
     -->
