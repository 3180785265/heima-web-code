<template>
    <div>
   

        <div>
            <button @click="comName = 'UserName'">账号密码填写</button>
            <button @click="comName = 'UserInfo'">个人信息填写</button>

            <p>下面显示注册组件-动态切换:</p>
            <div style="border: 1px solid red;">
                <keep-alive>
                    <component :is="comName"></component>
                </keep-alive>
            </div>
        </div>


    </div>
</template>

<script>
import UserInfo from '@/views/UserInfo.vue'
import UserName from '@/views/UserName.vue'
export default {

    data() {
        return {
            comName: "UserName"
        }
    },

    components: {
        UserInfo,
        UserName
    }
}
</script>

   <!-- 
            

            1.问题1:频繁的切换组件会不会导致组件的频繁创建和销毁呢
              在被切换的子组件上使用  created(),destroyed()测试，发生每次切换都会调用，
              所以每次切换都会频繁的创建和销毁
            2.我们可以使用组件缓存，在<component :is="comName"></component>
              在组件外面使用  <keep-alive>
                                <component :is="comName"></component>
                              </keep-alive>  就可以让组件缓存


    -->