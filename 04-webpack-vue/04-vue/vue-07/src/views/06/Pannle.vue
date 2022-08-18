<template>
  <div>
    <!-- 按钮标题 -->
    <div class="title">
      <h4>芙蓉楼送辛渐</h4>
      <span class="btn" @click="isShow = !isShow">
        {{ isShow ? "收起" : "展开" }}
      </span>
    </div>
    <!-- 下拉内容 -->
    <div class="container" v-show="isShow">

      <!-- 1.slot标签，自定义属性和内变量关联 -->
      <slot :row1="defaultObj" :row2="isShow" >
        <!-- 2.如果插槽没有传标签默认显示的内容 -->
        {{ defaultObj.defaultOne }}
      </slot>

      <slot :row1="defaultObj" :row2="isShow" name="slotB">
        {{ defaultObj.defaultOne }}
      </slot>
    </div>
  </div>
</template>

<script>
// 1.目标:作用域插槽
// 2. 子组件上的 slot标签，在slot上自定义属性和绑定子组件内的vue变量
// 3. 使用组件, 传入自定义标签, 用template和v-slot="自定义变量名" 
// 4. scope变量名自动绑定slot上所有属性和值

export default {
  data() {
    return {
      isShow: false,
      defaultObj: {
        defaultOne: "无名氏",
        defaultTwo: "小船同学",
      }
    };
  },
};
</script>

<style scoped>
h3 {
  text-align: center;
}

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

img {
  width: 50%;
}
</style>