<template>
  <div>
    <button @click="$emit('input','无敌的')">修改username</button>
  </div>
</template>

<script>
export default {
   props:['value'],
}
</script>

<style>

</style>