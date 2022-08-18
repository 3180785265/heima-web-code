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
              
        1.路由：
            nodejs服务器路由: 接口和服务的映射关系

        
        2.路由和组件的映射关系: 
          1. 浏览器url上# 后的hash值，对应一个不同的组件，这就是路由和组件的映射关系，
          2. 我们就可以根据url上不同的#hash值，在单页面中，切换不同的组件显示不同显示

        3.为什么要使用路由: 
        4.一个网页可以局部刷新吗:

        单页面：所有切换的网页，都在一个一个网页中的局部进行刷新的, 


        1.单页面应用: 所有功能页面都在一个html上面切换
        
        2.前端路由的作用: 实现业务场景的切换，
            实现不同的页面在一个html上切换，一个路由路径对应一个一套页面标签
        
        3.那为什么要把所有的页面写在一个单页面html里?
            1.整体不刷新页面，只刷新局部的某一部分，用户体验更好
            2.数据传递容器，开发效率高

            缺点：
            首次加载单页面需要加载所有的静态资源，会很慢，不利于seo搜索引擎排名
            开发成本高(需要学习专门的知识)


        总结: 
        什么是单页面应用？
            1.所有的页面都放在一个html里面切换,
            2.切换页面的时候不刷新整个页面。,只刷新局部,用户体验好
            3.单页面要如何切换场景呢?
                依赖路由切换显示：
                只要浏览器上的 #后面的hash值改变了,对应下面的组件或者页面中局部的某一部分就会发生改变。


            vue-router: 
            本质上是一个第三方的包. 
            npm  下载第三方包到 node_moduls中使用
            vue-router模块包中有两种组件: RouterLink 和 RouterView 组件
            vue-router 的声明式导航,会自带激活的css class的类名







            vue组件的分类?

            1. 页面组件：  在单页面中展示的,要使用路由切换的组件。  也就是配合路由使用的组件
            
            2. 复用组件(comment)：  遇到有相同的业务需求，需要重复渲染结构一样的标签。
                封装成复用的组件 (被页面组件引入复用的组件,所以无需定义对应的路由)




          1.vue-router的使用: 
           1.下载vue-router模块到当前工程
           2.在main.js 中引入VueRouter
              import VueRouter from 'vue-router'

           3.添加Vue.use()身上-注册全局RouterLink和RouterView组件,
             注册全局组件，使用Vue.use(VueRouter)后，会将VueRouter包中的 RouterLink和RouterView 组件,全局注册到Vue中，方便全局使用
              语法如下: 
              Vue.use(VueRouter);

            
            vue-router模块包中有两种组件: 也就是说它们两都是被抽取成了 .vue 组件
             1.RouterLink(声明式导航)
             2. RouterView(当浏览器hash值改变代表被渲染组件的位置), 
                所以RouterView代表路由hash值切换时，路由组件展示的位置



           4.创建路由规则数组，在数组中写路径和组件名对应关系
            const routers = [  
              // path和computed属性配置路由和组件映射关系
              {
                path: "find", // 路由
                computed: Find //组件
              }
            ]
           5.用规则生成路由对象
            const router = new VueRouter({
              routers:routers //routers是固定的key，值必须是一个规则数组
            })


      
           6.把路由对象注入到 new Vue实例当中, 让整个项目的每个Vue对象，拥有路由的能力,
             而且还会在vue的原型链上挂载  $router  和 $route 两个内置属性和对应的值
              new Vue({
                router,//5.1 将路由对象注入
                render: h => h(App),
              }).$mount('#app')

           7.使用router-view作为挂载点，切换不同的路由页面: 

            1.用router-view组件，在页面的某一个局部位置设置挂载点，当浏览器url上的hash值路径切换，
              显示规则里对应的组件到这里显示,
           2.原理：每当url的#后边hash值切换，便会到路由数组中找到路径映射对应的组件，
           然后渲染到 <router-view> 组件的位置上显示


     -->