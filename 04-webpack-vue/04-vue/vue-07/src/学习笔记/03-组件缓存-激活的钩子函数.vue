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
import UserInfo from '@/views/02/UserInfo.vue'
import UserName from '@/views/02/UserName.vue'
export default {

    data() {
        return {
            comName: "UserName"
        }
    },

    components: {
        UserInfo,
        UserName
    },
 
}
</script>

   <!-- 
            

            组件的激活和非激活的两个钩子函数

            activeted-激活时触发
            deactiveted-失去激活状态触发


    -->