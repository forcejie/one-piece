<template>
  <div class="navbar">
    <el-row>
      <el-col :span="4">
        <div class="box-logo">
          <img src="../../assets/images/onepieceskull.png" />
          <div class="logo">One Piece</div>
        </div>
      </el-col>
      <el-col :span="16">
        <el-menu
          :default-active="activeIndex"
          class="nav-menu"
          mode="horizontal"
          router
        >
          <el-menu-item index="main">
            <template #title>
              <el-icon><House /></el-icon>
              <span>首页</span>
            </template>
          </el-menu-item>
          <el-menu-item index="algorithms">
            <template #title>
              <el-icon><Finished /></el-icon>
              <span>题目</span>
            </template>
          </el-menu-item>
          <el-menu-item index="rank">
            <template #title>
              <el-icon><Trophy /></el-icon>
              <span>排行榜</span>
            </template>
          </el-menu-item>
          <el-menu-item index="contest">
            <template #title>
              <el-icon><AlarmClock /></el-icon>
              <span>竞赛</span>
            </template></el-menu-item
          >
          <el-menu-item index="blog">
            <template #title>
              <el-icon><Edit /></el-icon>
              <span>博客社区</span>
            </template></el-menu-item
          >
          <el-menu-item index="discuss">
            <template #title>
              <el-icon><ChatSquare /></el-icon>
              <span>讨论</span>
            </template></el-menu-item
          >
          <el-menu-item index="about">
            <template #title>
              <el-icon><MoreFilled /></el-icon>
              <span>更多</span>
            </template></el-menu-item
          >
        </el-menu>
      </el-col>
      <el-col :span="4">
        <div class="user">
          <user-info></user-info>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import { ref } from "vue"
import UserInfo from "./cpns/user-info.vue"
const activeIndex = ref("main")
</script>

<style lang="less" scoped>
.navbar {
  position: relative;
  background-color: #fff;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  height: 60px;
  line-height: 60px;
  // position: fixed;
  // top: 0;
  width: 100%;
  // z-index: 999;
  .box-logo {
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 48px;
      height: 48px;
    }
    .logo {
      font-size: 16px;
      font-weight: bold;
    }
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
  .user {
    position: absolute;
    top: 12px;
    right: 14px;
    :focus-visible {
      outline: none;
    }
  }
}
:deep(.el-menu--horizontal) {
  border-bottom: none;
}
</style>
