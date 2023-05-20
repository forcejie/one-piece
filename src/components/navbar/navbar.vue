<template>
  <div class="navbar">
    <el-row :gutter="20">
      <el-col :span="4">
        <div class="logo">one-piece</div>
      </el-col>
      <el-col :span="20">
        <el-menu
          :default-active="activeIndex"
          class="nav-menu"
          mode="horizontal"
          router
        >
          <el-menu-item index="main">首页</el-menu-item>
          <el-menu-item index="algorithms">题目</el-menu-item>
          <el-menu-item index="rank">排行榜</el-menu-item>
          <el-menu-item index="contest">竞赛</el-menu-item>
          <el-menu-item index="blog">博客社区</el-menu-item>
          <el-menu-item index="discuss">讨论</el-menu-item>
          <el-menu-item index="about">更多</el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import { ref } from "vue"

const activeIndex = ref("main")
</script>

<style lang="less" scoped>
.navbar {
  background-color: #fff;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  height: 59px;
  line-height: 59px;
  // position: fixed;
  // top: 0;
  width: 100%;
  // z-index: 999;
  .logo {
    font-size: 24px;
    font-weight: bold;
  }
  .nav-menu {
    font-size: 16px;
    margin-right: 20px;
    .el-menu-item {
      padding: 0 20px;
      .el-menu-item--active {
        color: #409eff;
      }
    }
  }
}
</style>
