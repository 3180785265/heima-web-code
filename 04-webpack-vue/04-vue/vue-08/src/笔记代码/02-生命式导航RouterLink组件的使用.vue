<template>

  <div>
    <div class="footer_wrap">
    
      <!--
        1.用 a 标签的href属性, 使用hash时的方式改变url，从而切换不同的组件，
          但是这种会有缺点，需要我们自己写高亮的css

            <a href="#/find">发现音乐</a>
            <a href="#/my">我的音乐</a>
            <a href="#/part">朋友</a>
       -->


      <!--
        
         2.使用 vue-router 模块里提供的 <router-link >组件，它原理其实也是a标签,
            它有自带的css高亮效果, 传入 to 属性就和a标签的href属性一样，to可以省略#号
            to=""  属性代表要切换的路由路径
      -->
      <router-link to="/find">发现音乐</router-link>
      <router-link to="/part">朋友</router-link>
      <router-link to="/my">我的音乐</router-link>
    </div>
    <div class="top">
      <!-- 1.用router-view组件，设置挂载点，当浏览器url上的hash值路径切换，
              显示规则里对应的组件到这里显示,
           2.原理：每当url的#后边hash值切换，便会到路由数组中找到路径映射对应的组件，
           然后渲染到 <router-view> 组件的位置上显示   
       -->
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
     
       1.声明式导航 RouterLink组件的基础使用
        vue-router提供的全局组件 <Router-Link> 替代了a标签 , 但是它本质上就是一个a标签封装的
        router-link  替换a标签
          1.to属性: 必须传入, 用来替代href属性, 指定路由路径值
          2.好处:   router-link 自带高亮的类名(激活时类名)
     -->