<template>
  <!-- 底部 -->
  <div class="my-footer">
    <!-- 全选 -->
    <div class="custom-control custom-checkbox">
      <input type="checkbox" class="custom-control-input" id="footerCheck" v-model="isAll">
      <label class="custom-control-label" for="footerCheck">全选</label>
    </div>
    <!-- 合计 -->
    <div>
      <span>合计:</span>
      <span class="price">¥{{ totalPrice }}</span>
    </div>
    <!-- 按钮 -->
    <button type="button" class="footer-btn btn btn-primary">结算{{ totalCount }}</button>
  </div>
</template>

<script>
export default {
  props: {
    goods: {
      type: Array,
      default: []
    }
  },
  // 计算属性
  computed: {
    // 依赖 goods 数组，计算出 isAll 属性
    isAll: {
      //1.通过set 修改计算属性
      set(val) {

        // 通过引用类型对象直接修改，让原数组改变

        this.goods.forEach(obj => obj.goods_state = val);

      },
      // 2.goods 数组，计算出 isAll 属性
      get() {
        // 过滤数据，如果全部都选中，则isAll为true
        return this.goods ? this.goods.every(obj => obj.goods_state === true) : []
      }

    },

    // 依赖goods数组，计算总价格属性
    totalPrice() {
      return this.goods.reduce((num, obj) => {
        if (obj.goods_state) {
         return num += obj.goods_price * obj.goods_count
        }
        return num
        
      }, 0)

    },
    totalCount() {
      return this.goods.reduce((num, obj) => {
          return !obj.goods_state ? num : num += obj.goods_count;

       

      }, 0)

    }
  }
}
</script>

<style lang="less" scoped>
.my-footer {
  position: fixed;
  z-index: 2;
  bottom: 0;
  width: 100%;
  height: 50px;
  border-top: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  background: #fff;

  .price {
    color: red;
    font-weight: bold;
    font-size: 15px;
  }

  .footer-btn {
    min-width: 80px;
    height: 30px;
    line-height: 30px;
    border-radius: 25px;
    padding: 0;
  }
}
</style>