<template>
  
  <div>
    <!-- 1.使用子模块
          $store.state.子模块名称.属性名
     -->
    <p>用户名称:{{$store.state.user.token}}</p>

    <div>应用名称{{$store.state.user.token}}</div>
  </div>
</template>

<script>
export default {

}
</script>

    <!-- 

        复习：actoins用 dispatch调用, mutation用commit调用

        由于使用单一树，应用的所有状态会集中到一个比较大的对象，
        应用越复杂时，state会变得相当得臃肿

        所有得数据,更新，操作都在一起，项目越来越大，难以维护

        于是分为了模块化,每一个模块都有自己的state,actoins,miutatoins

        1.语法: 
          modules: {

              user: {
                state: {
                  token: "12345"
                }
              },
              setting: {
                name:"Vuex实例"
              }

          }

          2.取值 this.$store.state.子模块名称.属性名
          3.但是通过 this.$store.state.子模块名称.属性名 这种方式有点麻烦，
            可以通过gettes建立快捷访问的方式


     -->