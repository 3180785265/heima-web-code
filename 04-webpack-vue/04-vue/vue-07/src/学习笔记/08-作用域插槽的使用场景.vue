<template>
    <div>
        <MyTable :arr="list">

            <!-- 1.使用插槽,插入一个a标签，并在插槽中,使用子组件上的变量 -->
            <template v-slot="scope">
                <a :href="scope.row">
                    {{ scope.row }}
                </a>
            </template>
        </MyTable>



        <MyTable :arr="list">

            <!-- 1.使用插槽,插入一个img标签，并在插槽中,使用子组件上的变量 -->
            <template v-slot="scope">
                <!-- 插入一个img标签，并使用slot上的绑定的属性和变量 -->
                <a :href="scope.row">
                    <img :src="scope.row" alt="">
                </a>
            </template>
        </MyTable>



        <MyTable></MyTable>
    </div>
</template>

<script>
import MyTable from '@/components/MyTable.vue'
export default {
    components: {
        MyTable
    },
    data() {
        return {
            list: [
                {
                    name: "小传同学",
                    age: 18,
                    headImgUrl:
                        "http://yun.itheima.com/Upload/./Images/20210303/603f2d2153241.jpg",
                },
                {
                    name: "小黑同学",
                    age: 25,
                    headImgUrl:
                        "http://yun.itheima.com/Upload/./Images/20210304/6040b101a18ef.jpg",
                },
                {
                    name: "智慧同学",
                    age: 21,
                    headImgUrl:
                        "http://yun.itheima.com/Upload/./Images/20210302/603e0142e535f.jpg",
                },
            ],
        }
    },
}
</script>

<style>
</style>