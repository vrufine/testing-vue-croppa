<template>
  <div id="app">
    <cropper />
  </div>
</template>

<script>
import Cropper from '@/components/Cropper.vue'

export default {
  name: 'app',
  components: {
    Cropper
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
