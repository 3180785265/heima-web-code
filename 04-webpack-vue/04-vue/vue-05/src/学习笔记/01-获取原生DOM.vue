<template>
  
  <div>
    <h1 ref="myH1" id="h">1.ref或者id获取原生dom</h1>


  </div>

</template>

<script>
export default {
    data() {
        return {
            
        }
    },

    //template 加载完成将dom挂载到vue之后
    mounted() {
        console.log(document.querySelector('#h'))

        console.log(this.$refs.myH1)
    },


}
</script>

   <!--        1747
            1.通过id或者ref属性获取原生dom
                1.在mounted生命周期-2中方式获取原生dom标签
                2.恰当时机 通过id/通过ref属性 获取目标标签

            2.ref 可以标记在普通的html上用来获取原生dom，也可以用来标记在组件上，获取组件对象，并且可以用组件对象获取组件内的函数和方法调用
    -->