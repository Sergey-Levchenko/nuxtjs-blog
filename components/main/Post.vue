<template>
  <el-card shadow="hover" :body-style="{padding:0}" class="post">
    <header slot="header" class="post-header">
      <h3>Post title</h3>
      <small><i class="el-icon-time"></i> {{new Date().toLocaleString()}}</small>
    </header>
    <div class="post-body">
      <img
        src="https://24tv.ua/resources/photos/news/201804/957757.jpg"
        alt="post image"
        class="post-img"
      >
    </div>
    <footer class="post-footer">
      <el-button round @click.prevent="openPost">Открыть</el-button>
      <span class="post-comments">
        <i class="el-icon-message"></i>
        <span>12</span>
      </span>
    </footer>
  </el-card>
</template>
<script>
export default {
  methods: {
    openPost() {
        const id = 'test-id'
        this.$router.push(`/post/${id}`)
    }
  }
};
</script>
<style lang='scss' scoped>
.post {
  margin-bottom: 1rem;
}
/deep/.post-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  small {
    color: #999999;
  }
}
/deep/.post-body {
    margin-bottom: 1rem;
}

/deep/.post-img {
  width: 100%;
  
}
/deep/.post-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 1rem;
}
/deep/.post-comments{
    cursor: pointer;
}
</style>