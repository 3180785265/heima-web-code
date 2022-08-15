<template>
    <div>

        <p>1. 获取原生DOM元素</p>
        <h1 id="h" ref="myH">我是一个孤独可怜又能吃的h1</h1>
        <p>2. 获取组件对象 - 可调用组件内一切</p>
        <Demo ref="de"></Demo>
        <p>3. vue更新DOM是异步的</p>
        <p ref="myP">{{ count }}</p>
        <button @click="btn">点击count+1, 马上提取p标签内容</button>

    </div>
</template>

<script>
export default {
    methods: {
       btn(){
        // vue监测数据更新, 开启一个DOM更新队列(异步任务)
            this.count++; 
            //1. 值为0,  原因: Vue变量改变还要更新对应dom,而viewModel底层帮我们更新DOM是一个异步任务,不会立马就执行,所以更新dom的异步任务还没执行,同步代码就会先执行了所以获取的是旧dom的innerHTML
            console.log(this.$refs.myP.innerHTML);  

           
            //2. 解决: this.$nextTick()
            // 过程: DOM更新完会挨个触发$nextTick里的函数体
            // 可以获得数据更新后的新dom,因为$nextTick 会阻塞等待 更新dom的异步任务执行完毕，才去执行nextTick绑定的回调函数
             this.$nextTick(() => {
                console.log(this.$refs.myP.innerHTML); // 1 ,可以获得数据更新后的新dom,因为$nextTick 会阻塞等待 更新dom的异步任务执行完毕，才去执行nextTick绑定的回调函数
            })
        }
    },
    data() {
        return {
            count: 0
        }
    },
}
</script>

        <!-- 



        vue监测数据更新, 会开启一个DOM更新队列(异步任务), 把更新vue数据的代码放到一个 异步任务队列里面，

        所以这个更新vue的代码,是不会被js主线程同步阻塞的,会直接跳过执行这些异步任务后面的代码

        简单来说:
        1.更新DOM是异步的代码。会被放到异步任务队列当中
        2.js又分为同步任务和异步任务。
        3.js主线程要先执行完同步任务,才会到异步任务队列中执行异步任务代码

       viewModel底层更新DOM的问题:  Vue变量改变还要更新对应dom,而viewModel底层帮我们更新DOM是一个异步任务,不会立马就执行,所以更新dom的异步任务还没执行,同步代码就会先执行了所以获取的是旧dom     

        解决办法: 
        使用this.$nextTick(回调函数),  它会阻塞等待dom更新的异步任务执行完, 才去执行this.$nextTick()中绑定的回调函数

         -->