<template>
  <div>
    <!-- 
        当我们传递给子组件的username 既要传值，又要让子组件修改
        :username="username"
        简写为v-model="username", 会自定义事件
        @input="username='xxx'"

     -->
     <span>{{username}}</span>
    <Demo v-model="username"></Demo>
  </div>
</template>

<script>
import Demo from '@/components/07-demo.vue'

export default {
    data() {
        return {
            username:""
        }
    },
    components:{
        Demo
    }
}
</script>
   <!-- 
        如果传给子组件的值，既要传值，子组件又要修改父组件依赖的值，我们往往都会通过自定义事件去修改父组件的值，但是以下方法可以简化
        可以在父组件中使用 v-model=""   这种写法即能给子组件传值，并且还能绑定一个 @input=""  事件，子组件能调用这个事件去修改值

     -->