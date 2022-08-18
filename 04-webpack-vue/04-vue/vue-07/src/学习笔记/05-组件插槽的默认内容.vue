<template>
    <div>
      
        <Pannle>

        </Pannle>
    </div>
</template>

<script>
import Pannle from '@/views/04/Pannle.vue'
export default {
    components: {
        Pannle
    }
}
</script>

    <!-- 
          组件插槽的默认显示内容
          目标:如果外面不给传，想给个默认显示内容
          语法:如果<slot> 内放置内容，作为默认显示内容
              效果:
              1.不给组件传标签，slot内容原地显示
              2.给组件内传标签，则slot整体被换掉


     -->