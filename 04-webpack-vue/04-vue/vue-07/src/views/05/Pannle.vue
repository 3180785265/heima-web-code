<template>
  <div>
    <!-- 1. slot使用 name 属性来区分插槽名字
         2.template配合v-slot:名字来分发对应标签
     -->
    <div class="title">
      <!-- 3.具名插槽:可以在组件中使用多个slot,要给一个name 属性区分具名插槽名字 -->
      <slot name="title"></slot>

      <span class="btn" @click="isShow = !isShow">
        {{ isShow ? "收起" : "展开" }}
      </span>
    </div>
    
    <div class="container" v-show="isShow">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: false,
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