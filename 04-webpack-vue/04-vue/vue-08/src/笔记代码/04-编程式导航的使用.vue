<template>

    <div>
        <div class="footer_wrap">

            <!-- 
                    使用编程式导航 router.puth({path:""}) 进行路由

             -->

            <!-- 2.使用 路由的path属性 进行跳转 -->
            <span @click="btnPath('/find')">
                发现音乐
            </span>


            <span @click="btnPath('/my')">
                我的音乐
            </span>

            <!-- 3.使用路由的name属性进行跳转 -->
            <span @click="btnName('Part')">
                歌单
            </span>


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
    methods: {
        // 1.根据路由Path进行跳转
        btnPath(targetPath) {
            // 使用 path 跳转
            this.$router.push({
                path: targetPath,
            })
        },
        // 1.根据路由Name进行跳转
        btnName(targetName) {
            // 使用 path 跳转
            this.$router.push({
                name: targetName,
            })
        }
    },
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
              


      2. 编程式导航： 用js代码来进行跳转
          path或者name 两种方式

          1. this.$router.push({path:"路由路径"})
          
          
        根据 name属性进行跳转，首先要在路由对象中给组件定义name属性比如: 
        1. 在路由数组中，用name属性给路由对象,定义路由的名称
            {
                path: "/find", 
                name: "Find",// 用name属性定义路由的名称
                component: Find //组件
            },

           

           
        2. this.$router.push({name:"路由名称"}) //根据路由名称, 路由切换对应的组件
           注意:虽然是用的name路由名称进行跳转，但是浏览器url的路径切换的还是
           路由的path路径。

       
       3. 注意： 在路由时我们都建议用name进行路由切换





     

     -->