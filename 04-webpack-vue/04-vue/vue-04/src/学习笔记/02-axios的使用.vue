<template>
    <div>
        <p>1.获取所有的图书</p>
        <ul>
            <li v-for="book in books" :key="book.id">
                <span>{{ book.bookname }}</span>
            </li>
        </ul>


        <div>
            <p>根据名称查询某本书籍</p>
            <!-- v-model 绑定表单组件收集输入的值 -->
            <input type="text" v-model="bName">
        </div>

        <button @click="getAllFn">查询</button>
        <button @click="findFn">根据名称查询</button>





        <p>2.新增图书信息</p>
        <div>
            <input type="text" placeholder="请写书名" v-model="bookObj.bookname">
            <input type="text" placeholder="作者" v-model="bookObj.author">
            <input type="text" placeholder="出版社" v-model="bookObj.publisher">
            <button @click="addFn">添加书本</button>

        </div>

    </div>
</template>

<script>
// 目标: 获取所有的图书信息
// 下载axios
//import 导入axios
import axios from 'axios'
// 全局配置
axios.defaults.baseURL="http://123.57.109.30:3006"
export default {
    data() {
        return {
            books: [],
            bName: "",
            bookObj: {
                // 参数名和后台的参数名对象，这样发送请求就不用对接了
                bookname: "",
                author: "",
                publisher: ""
            }
        }
    },
    methods: {
        getAllFn() {
            // 1.发起axios请求
            axios({
                //1. get post  默认就是get请求可以不写
                method: 'GET',

                // 2.接口的请求地址
                url: "/api/getbooks",

                // 3.接口的请求参数,拼接到请求体body的参数,  post请求的参数
                // data: {    
                //     xxx: xxx,
                // },

                // 4.请求参数,拼接到请求url的参数, get请求的参数
                params: {
                    bookname: this.bName
                }
            })
                //2.会返回一个promise对象，可以通过then() 中的两个回调函数处理promise执行的结果
                //1.成功的处理
                .then(res => {
                    console.log(res.data) // 后台返回的结果
                    this.books = res.data.data
                })
                //2.失败的处理
                .catch(err => {
                    console.log(err) // 后台报错返回
                })
        },

        findFn() {
            // 1.发起axios请求
            axios({
                //1. get post  默认就是get请求可以不写
                method: 'GET',

                // 2.接口的请求地址
                url: "/api/getbooks",

                // 3.接口的请求参数,拼接到请求体body的参数,  post请求的参数
                // data: {    
                //     xxx: xxx,
                // },

                // 4.请求参数,拼接到请求url的参数, get请求的参数, 会将值转为另一个编码格式 ?bookname="XXX"
                params: {
                    bookname: this.bName
                }
            })
                //2.会返回一个promise对象，可以通过then() 中的两个回调函数处理promise执行的结果
                //1.成功的处理
                .then(res => {
                    console.log(res.data) // 后台返回的结果
                    this.books = res.data.data
                })
                //2.失败的处理
                .catch(err => {
                    console.log(err) // 后台报错返回
                })
        },
        addFn() {
            
            // 扩展运算符，能把对象中的key-value 卸到另一个对象展开
            let obj={...this.bookObj};
            console.log(obj)
            // 1.发起axios请求
            axios({
                //1. get post  默认就是get请求可以不写
                method: 'post',

                // 2.接口的请求地址
                url: "/api/addbook",

                // 3.接口的请求参数,拼接到请求体body的参数,post请求的参数
                data: {
                    appkey: "7250d3eb-18e1-41bc-8bb2-11483665535a",
                    ...this.bookObj //将对象中的属性和值，合并到另一个对象中
                },


            })
                //2.会返回一个promise对象，可以通过then() 中的两个回调函数处理promise执行的结果
                //1.成功的处理
                .then(res => {
                    console.log(res.data) // 后台返回的结果
                    this.books = res.data.data
                })
                //2.失败的处理
                .catch(err => {
                    console.log(err) // 后台报错返回
                })
        }
    }




}
</script>

<!-- 

        ajax: 局部刷新页面，提高网页的性能,只刷新网页的一部分内容
        axios的使用:
        1.它是一个专门用于封装ajax请求的库
        2.支持服务端node.js发送请求
        3.支持promise相关语法
        4.支持请求和响应的拦截器功能 (能够拦截发起请求之前的动作)
        5.能够将接口返回的数据自动转换为 JSON数据

        什么是ajax: 一种前端异步请求后端, 局部刷新网页的技术
        ajax原理: 是用浏览器window的xmlHttprequest对象,去请求的接口

        promise复习:
        一个promise对象里面其实就包裹了一个异步任务，每个promise 里面都包含了一个异步任务的失败或者成功的结果
        promise 会返回下一个promise对象, 让.then()可以被链式调用


        axios: 是基于ajax+Promise封装的一个请求库 

        接口在请求时，要和后端对象的属性名一致，否则后端接收不到参数！

        请求体body参数: data 属性传参
        url拼接的参数:  params属性参数

        axios 默认发送给后台请求体数据格式是
        json字符串格式





        6.将服务器的地址，单独用一个公共的全局配置维护
        加了axios.defaults.baseURL="http://123.57.109.30:3006",每次在请求接口时，会自定拼接服务器的地址，不需要我们在自己写服务器地址

        7.将axios挂载到全局上，作为一个全局的属性
     -->