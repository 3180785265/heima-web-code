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
                params:{
                    musicName:"基尼太美"
                },
                query:{
                    name:"哈哈哈"
                }
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

            js编程式导航，跳转传参

            语法: query或者paramsa两种方式
            1.query: this.$router.push({path:"路由路径", name:"路由名", query:{"参数名":值} })
            2.params:  this.$router.push({path:"路由路径", name:"", params:{"参数名":值} })

            注意： 采用path路由路径的跳转方式，不能和params一起使用，path会忽略掉params, path在用params不能传参数组件接收不到值
            注意： 采用name路由名称的跳转方式，query和params都可以使用，所以在路由时我们都建议用name进行路由切换

            推荐：name+query 方式进行传参
            重要：path会自动忽略params
            注意：如果当前url上hash值和? 参数于你要跳转的hash值和参数一致，
            爆出冗余导航的问题


            传值: 推荐使用name跳转
              方式1：query=>   this.$router.push({name:"路由名", query:{"参数名":值} })
              方式2: params=>  this.$router.push({name:"路由名", params:{"参数名":值} })


            取值: 
            方式1：  query=> $route.query.参数名
            方式2：  params=> $route.params.参数名

-->