<template>
  <div>
    <button @click="$emit('update-usernameVal','无敌的')">修改username</button>
  </div>
</template>

<script>
export default {
  model:{
    prop:"usernameVal", //默认是value
    event:"update-usernameVal" //默认是 @input
  },
   props:{
    usernameVal:{
      type:String,
    }
   },
}
</script>

<style>

</style>