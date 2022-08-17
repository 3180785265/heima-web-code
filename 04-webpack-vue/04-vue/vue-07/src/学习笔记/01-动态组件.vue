<template>
    <div>
        <!-- 
            问题1:   如何切换2个组件，互斥的显示或者隐藏呢
            问题2:   不用v-if可以实现吗，有没有简单的方式呢

            动态组件: 多个组件使用同一个挂载点，并且动态切换
        -->

        <div>
            <button @click="comName = 'UserName'">账号密码填写</button>
            <button @click="comName = 'UserInfo'">个人信息填写</button>

            <p>下面显示注册组件-动态切换:</p>
            <div style="border: 1px solid red;">
                    <component :is="comName"></component>
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
            问题1:   如何切换2个组件，互斥的显示或者隐藏呢
            问题2:   不用v-if可以实现吗，有没有简单的方式呢



            1.准备被切换的组件 -userName, userInfo 2个组件
            2.引入到UserDynamic组件
            3. 准备变量成才要显示的组件
            4.设置挂载点<component> ,使用:is属性绑定变量 comName(存组件名),来设置要显示哪个组件
            5.改变 comName 属性的值为其他组件名，来做到动态切换组件的效果

        

    -->