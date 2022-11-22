<template>
    <div>

        <!-- 在标签内使用 template 配合 v-slot:名字 来使用具名插槽  -->

        <Pannle>


            <!-- 1.使用 template 配合 v-slot:名字 来分发对应标签 -->
            <template v-slot:title>古诗啦啦啦</template>
            
            <!-- 2.使用 slot='插槽名'  也可以插入插槽 -->
            <template slot='title'>古诗啦啦啦</template>

            <!-- 3.template 中 v-slot:名字  可以简写成 #插槽名字 -->
            <template #content>

                <p>寒雨连江夜入吴,</p>  
                <p>平明送客楚山孤。</p>
                <p>洛阳亲友如相问，</p>
                <p>一片冰心在玉壶。</p>
            </template>
        </Pannle>

        <!-- 如果直接传入，则使用的不是具名插槽，而是普通的插槽 -->
        <!-- <Pannle>
            <p>寒雨连江夜入吴,</p>
            <p>平明送客楚山孤。</p>
            <p>洛阳亲友如相问，</p>
            <p>一片冰心在玉壶。</p>
        </Pannle> -->
    </div>
</template>

<script>

import Pannle from '@/views/05/Pannle.vue'
export default {
    components: {
        Pannle
    }
}
</script>

    <!-- 
            具名插槽： 一个组件可以传入多个不同位置的插槽
            目标:一个组件内有两处以上不确定的地方，需要外部传入标签进行显示


            语法:
                1.slot标签占位, 并用name 属性区分名字
                2.使用组件,在标签夹着的地方, 用template 配合 v-slot:名字 来替换不同区域的slot插槽
                
                3.简写方式: template 中 v-slot:名字  可以简写成 #插槽名字,  也可以 简写为 slot="插槽名字"
     -->