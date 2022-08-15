<template>
  <div>
    <Com></Com>
  </div>
</template>

<script>
import Com from '@/components/Com.vue'
export default {
  comments:{
    [Com.name]: Com
  }
}
</script>
  