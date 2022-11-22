<template>
    <div>
        <!-- <input type="text" v-gfoucs> -->
        <input type="text" v-focus>
        <p v-color="'red'">修改元素的颜色1</p>
        <p v-color="colorStr">修改元素的颜色2</p>

        <button @click="colorStr = 'red'">点击变色</button>
    </div>
</template>

<script>
export default {

    // 2.局部注册 
    directives: {
        focus: {
            inserted(el) {
                console.log(el)
                el.focus()
            },

        },
        color: {
            inserted(el, binding) {
                el.style.color = binding.value
            },
            // 当指定传入的vue变量数据或者标签更新时，此方式执行
            update(el, binding) {
                console.log(binding.value)
                el.style.color = binding.value
            },

        },
    },
    data() {
        return {
            colorStr: "green"
        }
    },
}
</script>

  <!-- 
        自定义指令:
        全局注册 -语法:
        局部注册 -语法:
        1.inserted():函数是只有在标签被插入到网页时在执行(而这个函数也只会触发一次)
        bug: 如果自定义指令接收的参数是直接用vue变量，那么它不会执行 inserted()
            函数，因为 inserted() 函数是只有在标签被插入到网页时在执行(而这个函数也只会触发一次)

        2.使用update(): 当指定传入的vue变量数据或者标签更新时，此方式执行


        3. el : 指定所在的DOM对象
           binding: 里面的value属性，就是传递的参数

   -->