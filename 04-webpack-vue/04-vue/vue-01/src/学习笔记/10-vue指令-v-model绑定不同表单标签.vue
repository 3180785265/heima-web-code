<template>
    <div>
        <!-- 
        不同的表单标签绑定 v-model 指令
        -->

        <div>
            <label>用户名</label>
            <input type="text" v-model="username">
            <br>
            <label>密码</label>

            <input type="text" v-model="password">
        </div>

        <div>
            <span>来自于</span>
            <select v-model="form">
                <!--  option 中间是展示的，value属性是值,选中某一个的optoin 就是select 的值-->
                <option value="北京">北京</option>
                <option value="天京市">天京市</option>
                <option value="南京市" selected>南京市</option>
            </select>
        </div>


        <!-- 遇到复选框，v-model的变量值

           如果v-model的变量是  非数组  则关联的而是复选框的checked属性是否选中
           如果v-model的变量是  数组    则关联的是选中的复选框的value值
         -->

        <div>

            <span>爱好：</span>
            <input type="checkbox" value="抽烟" v-model="hobbby">抽烟
            <input type="checkbox" value="喝酒" v-model="hobbby">喝酒
            <input type="checkbox" value="睡琪琪" checked v-model="hobbby">睡琪琪
        </div>

        <!-- 单选框， 多个单选框，的v-model 绑定同一个变量，单选框的值也是value  -->
        <div>
            <span>性别</span>
            <input type="radio" name="sex" id="d1" value="男" v-model="gender"> <label for="d1">男</label>
            <input type="radio" name="sex" id="d2" value="女" v-model="gender"><label for="d2">女</label>

        </div>


        <div>
            <span>自我介绍</span>
            <textarea cols="10" rows="1" v-model="textareaMsg"></textarea>
        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            form: "",
            username: "",
            password: "",
            hobbby: ["睡琪琪"],
            gender: "",
            textareaMsg: ""
        }
    },
}
</script>

<style>
</style>

  <!-- 
        1.遇到复选框，v-model的变量值
           0.在select 复选框中， value 是在optoin上的，而v-model要写在 select 上
           1.如果v-model的变量是  非数组  则关联的而是复选框的checked属性
           2.如果v-model的变量是  数组    则关联的复选框的value值
           
         2.复选框 <input type="checkbox" value="喝酒" v-model="hobbby">: 
           v-model的变量是什么
           非数组- 关联的是checked属性
           数组 -关联的是value属性  




        3.单选框， 多个单选框，的v-model 绑定同一个变量，单选框的值也是value  


        vue变量初始值会影响表单的默认状态，因为数据是双向绑定的，会互相影响
   -->  