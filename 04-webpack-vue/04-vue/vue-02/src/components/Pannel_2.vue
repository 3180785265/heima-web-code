<template>
    <div>
        <div class="title">
            <h4>芙蓉楼送辛渐</h4>
            <span class="btn" @click="isShow = !isShow">
                {{ isShow ? "收起" : "展开" }}
            </span>
        </div>
        <div class="container" v-show="isShow">
            <p>寒雨连江夜入吴,</p>
            <p>平明送客楚山孤。</p>
            <p>洛阳亲友如相问，</p>
            <p>一片冰心在玉壶。</p>
        </div>
       
    </div>
</template>

<script>
export default {
    data() {
        return {
            isShow: false
        }
    },

}
</script>

<style scoped lang="less">
.title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #ccc;
    padding: 0 1em;
}

.title h4 {
    line-height: 2;
    margin: 0;
}

.container {
    border: 1px solid #ccc;
    padding: 0 1em;
}

.btn {
    /* 鼠标改成手的形状 */
    cursor: pointer;
}
</style>

 <!-- 
            定义组件:
            1.将组件写到compoemts文件夹下
            2.将要导入的组件 在<script>  </script>   标签内部用 import  组件名 from'组件路径'   模块化方式导入
            3. 将 import 接收到的组件， 定义在 vue 的 components 当中
            components: {
                
            }
            4.在template  html 当中 用标签的方式引入组件<组件名></组件名>


-->