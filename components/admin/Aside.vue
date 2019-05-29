<template>
  <div>
    <el-menu
      :style="{height: '100vh'}"
      :default-active="$route.path"
      router
    >
      <el-menu-item index="/admin">
        <i class="el-icon-menu"></i>
        <span>Аналитика</span>
      </el-menu-item>
      <el-menu-item index="/admin/create">
        <i class="el-icon-edit-outline"></i>
        <span>Создать</span>
      </el-menu-item>
      <el-menu-item index="/admin/list">
        <i class="el-icon-tickets"></i>
        <span>Посты</span>
      </el-menu-item>
      <el-menu-item index="/admin/user">
        <i class="el-icon-service"></i>
        <span>Пользователи</span>
      </el-menu-item>
      <el-menu-item index="/admin/logout">
        <i class="el-icon-caret-right"></i>
        <span>Выйти</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>
<script>
export default {
};
</script>
<style lang='scss' scoped>
</style>