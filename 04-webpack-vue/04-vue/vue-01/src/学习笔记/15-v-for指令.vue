<template>
    <div>
        <!-- 
            语法1:
                v-for="(值变量,索引变量)  in  目标解构"  :key='index'
                口诀: 想要谁循环生成dom就放到谁身上

        -->


        <ul>
            <li v-for="(item, index) in arr" :key="index">
                {{ item.name }}-----{{ index }}
            </li>
        </ul>

        <!-- 语法2   v-for=" 值变量  in  目标解构"  -->
        <ul>
            <li v-for="item in stuArr" :key="item.id">

                <span> {{ item.name }}-----{{ item.id }}</span>

            </li>
        </ul>

        <!-- 语法3： 遍历对象   v-for=" (属性值,属性名  in  目标解构" 
            v-for 编辑对象， 和 for (  in  )  遍历是一个意思
         -->
        <ul>
            <li v-for="(value,index) in tObj" :key="index">

                <span> {{ value }}---{{ index }}</span>

            </li>
        </ul>


        
        <!-- 语法4： 遍历数字   v-for=" (变量名  in  数字" 
            注意: 它是从1 ~ 10 开始遍历
         -->

         <ul>
            <li v-for="index in 10" :key="index">
                <span>{{index}}</span>
            </li>
         </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            arr: ["小明", "小欢欢", "大黄"],
            stuArr: [
                {
                    id: 1001,
                    name: "孙悟空",
                    sex: "男",
                    hobby: "吃桃子",
                },
                {
                    id: 1002,
                    name: "猪八戒",
                    sex: "男",
                    hobby: "背媳妇",
                },
            ],
            tObj: {
                name: "小黑",
                age: 18,
                class: "1期",
            },
            count: 10,
        }
    },


}
</script>


 <!-- 

            js原生要用for 循环创建 dom 的方式 ，创建多个li 标签 ，在渲染到ul 上
            而 vue 只需要用2行代码 v-for 指令 就能完成这个事情


            v-for语法:
            1.口诀: 想要谁循环生成dom就放到谁身上
            2.v-for="(值变量,索引变量)  in  目标解构"  :key='index'
            3.v-for="(item,index)  in  arr"
            

            v-for 指令 用于循环遍历标签, 并且可以在v-for的标签内部取出变量使用
 -->

