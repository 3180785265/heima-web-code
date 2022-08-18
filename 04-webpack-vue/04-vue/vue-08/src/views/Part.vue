<template>
  <div>
    <p>关注明星</p>
    <p>发现精彩</p>
    <p>寻找我们</p>
    <p>加入我们</p>
    <!-- 
       1.使用route.query.属性名的方式，获取参数值
         在模板当中,this可以省略
     -->
    <p>人名:{{$route.query.name}}</p>
    <p>歌名:{{$route.params.musicName}}</p>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>