<template>
  <div>
    <!-- vant是一个基于vue的组件库
        vant 支持vue2和vue3
        支持按需引入和主题定制



        目标: 如何引入Vant组件库
          看官网文档，下载，引入Vant组件库
        1.安装vant组件库包: yarn add vant 或者  npm i vant@latest-v2 -S 下载
      
        2.按照官网文档指引,在main.js中引入css, 和vant组件全局注册到vue中
            1.全部引入: 体积会很大。
              import Vant from 'vant';
              import 'vant/lib/index.css';
              Vue.use(Vant);//2.1表示将vant工程里的组件都全局注册到vue中

            2.手动按需引入: 
              手动引入使用的某一个组件，不会将整个vant都引入

              1.在 某个 .vue 文件中引入, 并注册当局部组件中
              import Button from 'vant/lib/button';
              import 'vant/lib/button/style';

            3.自动按需引入: 

              1.需要安装插件: npm i babel-plugin-import -D
              2.对于使用 babel7 的用户，可以在 babel.config.js 中配置
                  module.exports = {
                    plugins: [
                      ['import', {
                        libraryName: 'vant',
                        libraryDirectory: 'es',
                        style: true
                      }, 'vant']
                    ]
                  };
               3.main.js按需引入某个组件,  在用Vue.use全局注册Vant中的某一些组件   

        3.直接到某个.vue文件直接使用Vant-组件名，全局使用Vant提供的组件
     -->
     
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>

