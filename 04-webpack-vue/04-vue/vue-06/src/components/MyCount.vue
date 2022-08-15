<template>
  <div class="my-counter">
    <!-- 1.用disable属性控制，如果扣减到了 0 ,就让disable禁用
         2.@click 事件用 逻辑&&  good.goods_count>1&&good.goods_count--   如果大于了1, 则执行good.goods_count--
     -->
    <button type="button" class="btn btn-light" :disabled="good.goods_count === 1"
      @click="good.goods_count > 1 && good.goods_count--">-</button>


    <!-- 3.用v-model.number的修饰符，
         4.限制输入框输入值不能输入负数,用watch() 监听器侦测变量,如果 count小于了1,则重置为1
    -->
    <input type="number" class="form-control inp" v-model.number="good.goods_count">
    <button type="button" class="btn btn-light" @click="good.goods_count++">+</button>
  </div>
</template>

<script>
export default {
  props: {
    good: {
      type: Object,
    }
  },
  watch: {

    // 深度监听
    good: {
      deep: true,
      handler() {
        // 如果 count小于了1,则重置为1
        if(this.good.goods_count<1){
          // 子组件改变对象里的属性会影响父组件数组里的对象吗
          // 会，因为对象之间引用的是相同的内存地址
          this.good.goods_count=1
        }
      }
    }
  },
  methods: {

  },
}
</script>

<style lang="less" scoped>
.my-counter {
  display: flex;

  .inp {
    width: 45px;
    text-align: center;
    margin: 0 10px;
  }

  .btn,
  .inp {
    transform: scale(0.9);
  }
}
</style>