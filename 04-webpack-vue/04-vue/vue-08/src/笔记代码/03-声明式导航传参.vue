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


      <router-link to="/find">发现音乐</router-link>

     

      <!-- 
          路由传参的第1种方式，
          1.在RouterLink组件的to属性上传值，语法如下
            to="/path/参数名=值:  
          3. 组件内使用 $route.query.参数名  取值
       -->
      <router-link to="/part?name=小明">朋友</router-link>



       <!-- 路由传参的第2种方式，
          1.  /path/值   这种方式需要在路由对象的path提前配置 path: "/path/参数名"
          2.  组件内使用 $route.parmas.参数名  取值 
       -->
      <router-link to="/my/鸡你太美">我的音乐</router-link>
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
      
      

          1.在跳转路由时，给路由对应的组件内传值

            声明式导航传参的两种方式
              1.声明式路由导航，跳转时传参   
                语法1: 在RouterLink组件的to属性上传值，语法如下
                  /path/参数名=值  
                  组件内使用 $route.query.参数名  取值

              2.声明式路由导航，跳转时传参       
                语法1: 在RouterLink组件的to属性上传值，语法如下
                    /path/值   这种方式需要在路由对象的path提前配置 path: "/path/参数名"
                    组件内使用 $route.query.参数名  取值


              3. 也可以用对象的语法传参{name:'',params:{key:value}}
     -->