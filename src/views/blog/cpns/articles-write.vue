<template>
  <div class="write">
    <button class="addArticle" @click="articleEditor">写文章</button>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router"
const router = useRouter() // 使用 useRouter 获取路由实例

function articleEditor() {
  router.push("/articlesEditor") // 使用路由 push 方法跳转
}
</script>

<style lang="less" scoped></style>
