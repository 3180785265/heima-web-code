<template>
  <div>
        <!--

            v-model指令的修饰符
            1、.number修饰符，把值parsFlot转换在赋值给v-model绑定的变量
          -->

        <div>
            <span>年龄</span>
            <input type="number" v-model.number="age">
        </div>



    <!--             
            2、.trim修饰符，把字符串的首尾空格 格式化掉在赋值给v-model绑定的变量
     -->
        <div>
            <span>人生格言</span>
            <input type="text" v-model.trim="msg">
        </div>



        <!-- 
            .lazy修饰符: 表单的值改变并且失去焦点时(change事件)，才把内容同步给v-model变量

         -->
        <div>
            <span>个人简介</span>
            <textarea cols="10" rows="2" v-model.lazy="intro"></textarea>
        </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            age:0,
            msg:"",
            intro:""
        }
    },
}
</script>

<!--

         v-model指令的修饰符
            1、.number修饰符，转换成数值类型在赋值给Vue的数据变量
            2、.trim修饰符，去除左右两边空格在赋值给v-model绑定的变量
            3、.lazy修饰符: 表单的值改变并且失去焦点时(change事件)，才把内容同步给v-model变量


-->