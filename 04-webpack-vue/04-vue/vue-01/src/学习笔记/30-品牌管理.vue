<template>
    <div id="app">
        <div class="container">
            <!-- 顶部框模块 -->
            <div class="form-group">
                <div class="input-group">
                    <h4>品牌管理</h4>
                </div>
            </div>

            <!-- 数据表格 -->
            <table class="table table-bordered table-hover mt-2">
                <thead>
                    <tr>
                        <th>编号</th>
                        <th>资产名称</th>
                        <th>价格</th>
                        <th>创建时间</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="obj in list" :key="obj.id">
                        <td>
                            <span>{{ obj.id }}</span>
                        </td>
                        <td>
                            <span>{{ obj.name }}</span>
                        </td>

                        <!-- 如果价格超过100，就有red这个类 -->
                        <td>
                            <span :class="{ red: Number(obj.price) > 100 }">{{ obj.price }}</span>
                        </td>
                        <td>
                            <span>{{ obj.time | formatDate }}</span>
                        </td>
                        <td><a href="#" @click.prevent="delFn(obj.id)">删除</a></td>
                    </tr>

                    <tr class="statistics">
                        <td>
                            统计
                        </td>
                        <td colspan="2">
                            <span>总价{{ totalPrice }}</span>
                        </td>


                        <td colspan="2">
                            <span>平均价{{ averagePrice }}</span>

                        </td>
                    </tr>
                </tbody>

                <tfoot v-show="list.length === 0">
                    <tr>
                        <td colspan="5" style="text-align: center">暂无数据</td>
                    </tr>
                </tfoot>

            </table>

            <!-- 添加资产 -->
            <!-- 给 input 表单组件 绑定 v-model 绑定vue变量收集用户的输入内容  -->
            <form class="form-inline">
                <div class="form-group">
                    <div class="input-group">
                        <input type="text" class="form-control" placeholder="资产名称" v-model.trim="inputObj.name" />
                    </div>
                </div>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <div class="form-group">
                    <div class="input-group">
                        <input type="text" class="form-control" placeholder="价格" v-model.number="inputObj.price" />
                    </div>
                </div>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <!-- 阻止表单提交 -->
                <button class="btn btn-primary" @click.prevent="addFn()">添加资产</button>
            </form>
        </div>
    </div>
</template>

<script>
// 引入 moment 模块
import moment from 'moment';

export default {
    data() {
        return {
            name: "", // 名称
            price: 0, // 价格
            list: JSON.parse(localStorage.getItem("list")) || [],// 从本地存储获取数据,如果逻辑或左边为false ，就会执行右边
            inputObj: {
                name: "",//资产名称
                price: "",//资产价格
                time: null//时间

            }
        };
    },
    watch: {
        list: {
            deep: true,      //深度侦听复杂类型内属性的变化
            handler(newVal, oldVal) {  //对象内的属性发生改变就会执行
                localStorage.setItem("list", JSON.stringify(newVal));

            }
        }

    },
    methods: {

        // 1.新增数据
        addFn() {
            //1. 判断是否为空
            if (this.inputObj.name.trim().length === 0
                || !this.inputObj.price) {
                alert('请输入')
                return;
            }

            // 2.定义对象
            let inputObj = {
                id: this.list.length == 0 ? 100 : this.list[this.list.length - 1].id + 1, // 无数据在新增时要判断
                name: this.inputObj.name,//资产名称
                price: this.inputObj.price,//资产价格
                time: new Date() //时间
            }

            // 3.添加到数组当中
            this.list.push(inputObj)

            console.log(this.list)

        },

        // 2.删除数据
        delFn(id) {
            // 1.通过findIndex找出这个id 的索引
            let index = this.list.findIndex(currentValue => currentValue.id === id);
            // 2.通过指定索引删除数据
            this.list.splice(index, 1)


        }
    },


    // 4.定义局部过滤器
    filters: {
        // 2.定义格式化日期的过滤器
        formatDate(val) {

            // 3.将日期对象,格式化为指定的字符串格式
            return moment(val).format('YYYY-MM-DD')

        }
    },



    //5.定义计算属性

    computed: {
        // 1.定义总价格计算属性
        totalPrice() {
            // 2.用 reduce() 计算,  0表示参数的初始值
            return this.list.reduce((total, item) => total + item.price, 0)
        },
        // 2.定义平均价格计算属性
        averagePrice() {
            let num = 0;
            // 1.计算价格
            num = this.list.reduce((total, item) => total + item.price, 0)

            // 2. 计算平均值，并用 toFixed(2) 保留两位小数
            return (num / this.list.length).toFixed(2);
        }
    },

}
</script>

<style >
.red {
    color: red;

}

.statistics {
    background-color: antiquewhite;
}
</style>

  <!-- 

    1.明确需求
    1.v-for 渲染 tr 把对象遍历到td中
    2.用动态class 判断超过100的价格 有 color:red 样式
    3.增加新的品牌


    1.新增，
        1.添加资产按钮-绑定点击事件
        2.给 input 表单组件 绑定 v-model 绑定vue变量收集用户的输入内容
        3.给表单组件的v-model 加修饰符，去除空格和格式化成数值类型
        3.把对象插入到数组当中, v-for 就会重新更新页面
        4.无数据在新增时要判断

    2.删除
        1.给删除按钮的点击事件
        2.给事件方法传入id
        3.通过id找到这个数据在数组中的索引下标
        4.设置foot,无数据时显示，用v-show 命令判断数组为0时显示
     
    3.总价 和  平均价 的显示效果
      这两个价格都是依赖于列表的每个数据的价格进行计算,所以需要使用计算属性


    4. 数组一但改变，就将数据同步到本地缓存中
        1.使用watch侦听器，数组变化就存储到本地存储中
            watch: {
                list: {
                    deep: true,      //深度侦听复杂类型内属性的变化
                    handler(newVal, oldVal) {  //对象内的属性发生改变就会执行
                        localStorage.setItem("list", JSON.stringify(newVal));

                    }
                }

            }
        2. 数组的初始值从本地存储获取: 
           list: JSON.parse(localStorage.getItem("list")) || [],// 从本地存储获取数据,如果本地存储没有，就给一个[] 数组，
           防止null 空指针







      经验:
      1.数组.reduce()    对数值进行累加，或者递减
      2.数值.tofixed(2)  保留几位小数

   -->



    <!-- 
        1.以前普通项目是直接引入，而现在的工程是要用包管理器下载到第三方模块包 node_modelus中

        2.这个案例用到了booststap, 所以在当前的工程里，要npm 下载 bootstarp包
          并且要将boosttartp import 导入到main.js 主入口中，才能被webpack打包
          插入到 public/index.html中被使用

          如果不导入到main.js 中，webpack打包src下的代码，就会跟bootstartp没关系


        3、在main.js中导入bootstatp的css:  1.导入bootstrap的css, css文件只需要import 进来就行，不需要有变量值接收
              import 'bootstrap/dist/css/bootstrap.css';  

    -->