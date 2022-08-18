<template>
  <div>
<!-- 要在 Find.vue页面当中,配置一个新的路由系统，这里面切换的所有路由都属于二级路由
     语法:1.在 路由规则数组给当前的页面的children数组中添加要被嵌套子路由
          2.在Find.vue 当中, 使用 router-view 组件 指定页面被渲染的位置 
          3.在Find.vue当中,如果要用 编程式导航/声明式导航  路径一定要写全，从根路径开始比如  '/find/recommend'

    1800集，router-link激活类名的区别
 -->
    <div class="nav_main">

      <!-- 1. 二级路由导航的地址，一定要从根/开始写 -->
      <router-link to="/find/recommend">推荐</router-link>
      <router-link to="/find/ranking">排行榜</router-link>
      <router-link to="/find/songlist">歌单</router-link>
    </div>

    <div style="1px solid red;">
      <!--2. 渲染二级路由的router-view组件 -->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.nav_main {
  background-color: red;
  color: white;
  padding: 10px 0;
}
.nav_main a {
  text-align: center;
  text-decoration: none;
  color: white;
  font-size: 12px;
  margin: 7px 17px 0;
  padding: 0px 15px 2px 15px;
  height: 20px;
  display: inline-block;
  line-height: 20px;
  border-radius: 20px;
}
.nav_main a:hover {
  background-color: brown;
}
.nav_main .router-link-active{
  background-color: brown;
}
</style>