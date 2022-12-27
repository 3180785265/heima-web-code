<template>
  
  <div>
    <!-- 1.调用Vuex中定义的 getters -->
    <p>{{$store.getters.fileList}}</p>
  </div>
</template>

<script>
export default {

}
</script>
  <!-- 
       1. 除了state之外，有时我们还需要从state中派生出一些状态，
       2. 这些状态总是依赖于state的，此时会出现getters。

       3. 它和计算属性非常像，依赖于state中的数据发生变化，只要依赖的state数据发生变化，getters中定义的计算属性函数，就会触发执行



              // 4.getters : 和计算属性类似，依赖于state ,如下代码在Vuex中定义getters
                
              getters: {
                    /* 
                       5. 放置所有的vuex的计算属性,属性值对应的是回调函数
                        getters中第一个参数为state, 指的是当前vuex中的state对象
                    */

                    fileList: state=>{
                        // 6. 根据state中的list数组计算，重新计算出所有大于3的数据 
                        return state.list.filter(obj => obj > 3)
                    }

                   
                }

     -->