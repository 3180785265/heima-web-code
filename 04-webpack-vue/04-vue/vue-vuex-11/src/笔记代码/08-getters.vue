<template>
  
  <div>
    <p>{{$store.getters.fileList}}</p>
  </div>
</template>

<script>
export default {

}
</script>
  <!-- 
        除了state之外，有时我们还需要从state中派生出一些状态，
        这些状态总是依赖于state的，此时会出现getters。

        它和计算属性非常像，依赖于state中的数据发生变化



              // 5.getters : 和计算属性类似，依赖于state 
                getters: {
                    /* 
                        放置所有的vuex的计算属性,属性值对应的是回调函数
                    5.1 .getters中第一个参数为state, 指的是当前vuex中的state对象
                    
                    */

                   
                }
     -->