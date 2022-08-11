<template>
  <div>
    <p v-text="str"></p>
    <p v-html="str"></p>
  </div>

  <!-- 
        v-text和v-html 都是把当前绑定的变量，插入到标签里面

        区别
        v-text:  会将vue变量当做普通字符串插入到标签内显示 (innerText)
        v-html:  会把vue变量当作HTMl标签解析插入到标签内 (innerHtml)

   -->
</template>

<script>
export default {
    data() {
        return {
            str:"<span>我是一个span</span>",

        }
    },
}
</script>

<style>

</style>