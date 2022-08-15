<template>
  <div>
    <MyHeader title="购物车" background="red"></MyHeader>
    <MyGoods v-for="good in goods" :key="good.id" class="main" :good="good"></MyGoods>
    <MyFooter :goods="goods"></MyFooter>
  </div>
</template>

<script>
import MyGoods from '@/components/MyGoods.vue'
import MyHeader from '@/components/MyHeader.vue'
import MyFooter from '@/components/MyFooter.vue'
export default {
  components: {
    MyFooter,
    MyGoods,
    MyHeader,
    MyGoods,
    MyFooter
  },
  data() {
    return {
      goods: []
    }
  },
  created() {
    // 1.打印查看Vue的PropType原型链是否挂载了$axios
    // console.log(this) 
    // 2.调用axios发起请求
    this.$axios({
      url: "/api/cart",


    })
    // 3.axios会返回Promise,里面是Axios异步请求的处理结果
    .then(res=>{
      this.goods=res.data.list
      console.log(res.data.list)
    })
  },
}
</script>
<style lang="less" scoped>
.main {
  padding-top: 45px;
  padding-bottom: 50px;
}
</style>

    <!-- 
          1.vue create 命令创建项目
          2. 下载bootstap,less,less-loader
          3. main.js中引入booststap.css 
          4.创建4个文件组件，从笔记拿到标签的样式
          5.把组件相应的引入到对应位置使用


      1. 
        1.MyHeader 和MyFooter使用了绝对定位(绝对定位会脱离文档流),脱离文档流的元素会覆盖在文档流的元素
        2.将MyGoods和MyFooter中的样式的内边距或者外边距调整成 MyHeader的高度

      2.让MyHeader组件能够使用不同的背景颜色和文字的颜色, 让组件内的背景颜色使用props动态化
        如何让封装的组件支持不同的项目需求(组件内部样式的数据,css样式等)? 可以定义props变量使用



      3. 如何定义全局变量,在Vue的原型链上添加，组件对象通过原型链可以全局访问
          将axios挂载到Vue类的PropType原型链上面，这样每一个.vue文件 new出来Vue实例都可以使用axios
          1.在main.js中引入,比在.vue单独引入方便,将axios添加到vue的PropType原型上，作为全局属性,让任务的.vue文件都可以任意的访问axios这个方法

            import axios from 'axios'

          2.将基准地址添加到axios上
            axios.defaults.baseURL="https:www.escook.cn"

          3.将axios添加到Vue的PropType原型链上
            Vue.prototype.$axios=axios  


          4.在.vue文件使用this 的时候就表示为Vue的实例对象，console.log(this)就可以查看到axios实例被挂载到了Vue的PropType原型链上
     -->