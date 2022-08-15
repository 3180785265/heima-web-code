<template>
  <div class="my-goods-item">

    <div class="left">
      <!-- 1.组件传的数据进行绑定 -->
      <div class="custom-control custom-checkbox">
        <!-- 2.绑定复选框的状态，使用v-model
              bug:循环所有的label的for都是input ，id也都是input- 默认只有第一个生效
              解决: 每个对象里的id值，都和input 的 id 属性和 lable 的for 属性绑定
               把input 的 id属性 和lable 属性 写成 从 good.id 取唯一值 
         -->
        <input type="checkbox" class="custom-control-input" :id="good.id" v-model="good.goods_state">
        <label class="custom-control-label" :for="good.id">
          <img :src="good.goods_img" alt="">
        </label>
      </div>
    </div>
    <div class="right">
      <div class="top">{{ good.goods_name }}</div>
      <div class="bottom">
        <span class="price">{{ good.goods_price }}</span>
        <span>
          <!-- 数量组件,props传值，传入整个对象，方便子组件修改count时，直接通过对象的引用修改props，就不会报错 -->
          <MyCount :good="good"></MyCount>

        </span>
      </div>
    </div>

  </div>
</template>

<script>
import MyCount from '@/components/MyCount.vue'

export default {
  components: {
    MyCount
  },
  props: {
    good: {
      type: Object,
      default: []
    }
  },
  methods: {
    getGoods() {

    }
  },


  created() {

  },
}
</script>

<style lang="less" scoped>
.my-goods-item {
  display: flex;
  padding: 10px;
  border-bottom: 1px solid #ccc;

  .left {
    img {
      width: 120px;
      height: 120px;
      margin-right: 8px;
      border-radius: 10px;
    }

    .custom-control-label::before,
    .custom-control-label::after {
      top: 50px;
    }
  }

  .right {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .top {
      font-size: 14px;
      font-weight: 700;
    }

    .bottom {
      display: flex;
      justify-content: space-between;
      padding: 5px 0;
      align-items: center;

      .price {
        color: red;
        font-weight: bold;
      }
    }
  }
}
</style>