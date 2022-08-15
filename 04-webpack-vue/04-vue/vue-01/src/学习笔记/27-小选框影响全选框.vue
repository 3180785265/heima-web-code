<template>
    <div id="app">



        <div>
            <!-- 3.v-model 属性绑定全选框的值 -->
            <label>{{  !isAll ? "全选" : "取消" }}</label>
            <input type="checkbox" id="isAll" v-model="isAll">

            <ul>
                <!-- 1. v-for 遍历对象的li标签，li中的子标签使用对象的属性 -->
                <li v-for=" (obj, index) in arr" :key="index">
                    <!-- 2.让对象的 c 属性值 关联复选框的选中状态 -->
                    <input type="checkbox" v-model="obj.c">
                    <label>名字</label>
                </li>
            </ul>
        </div>


    </div>
</template>

<script>
export default {
    data() {
        return {
            text: "全选",
            arr: [
                {
                    name: "猪八戒",
                    c: true
                },
                {
                    name: "猪八戒",
                    c: false
                },
                {
                    name: "猪八戒",
                    c: false
                },
                {
                    name: "猪八戒",
                    c: false
                },
            ]
        }
    },
    methods: {

    },
    computed: {
        // 5.全选的属性，要根据每个小checkbox 的计算得来
        isAll: {

            // 1.当视图的值改变会调用set
            set(val) {

                this.arr.forEach(obj => obj.c = val)

            },

            // 2.当获取的值，依赖的变量改变了会调用get
            get() {
                return this.arr.every(val => val.c === true)


            }

        }

    }
}


</script>

<style lang="less">
ul {
    list-style: none;
}
</style>