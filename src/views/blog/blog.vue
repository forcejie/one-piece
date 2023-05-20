<template>
  <div class="blog">
    <div class="list">
      <articles-list></articles-list>
    </div>
    <div class="write">
      <articles-write></articles-write>
    </div>
  </div>
</template>

<script setup>
import ArticlesList from "./cpns/articles-list.vue"
import ArticlesWrite from "./cpns/articles-write.vue"
</script>

<style lang="less" scoped>
.blog {
  margin-top: 10px;
  position: relative;
  .write {
    position: absolute;
    top: 0;
    right: 110px;
    width: 180px;
    height: 150px;
    background-color: antiquewhite;
  }
}
</style>
