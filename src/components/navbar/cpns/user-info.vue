<template>
  <div class="header-info">
    <div class="info">
      <el-dropdown>
        <span class="user">
          <img src="../../../assets/images/user.jpg" />
          <span class="name">炸毛可乐</span>
        </span>

        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="handleExitClick">
              <el-icon><CircleClose /></el-icon>
              <span>退出系统</span>
            </el-dropdown-item>
            <el-dropdown-item divided>
              <el-icon><InfoFilled /></el-icon>
              <span>个人信息</span>
            </el-dropdown-item>
            <el-dropdown-item>
              <el-icon><Unlock /></el-icon>
              <span>修改密码</span>
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router"

// const router = useRouter()
// function handleExitClick() {
//   localCache.removeCache(LOGIN_TOKEN)
//   router.push("/login")
// }
</script>

<style lang="less" scoped>
.header-info {
  display: flex;
  align-items: center;
}
.info {
  .user {
    display: flex;
    align-items: center;
    img {
      width: 36px;
      height: 36px;
      border-radius: 18px;
      margin-right: 5px;
    }
  }
}
</style>
