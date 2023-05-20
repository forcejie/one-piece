<template>
  <div class="app">
    <navbar></navbar>
    <router-view />
  </div>
</template>

<script setup>
import navbar from "../src/components/navbar/navbar.vue"
</script>

<style lang="less" scoped>
// .app {
//   height: 100vh;
//   width: 100wh;
// }
</style>
