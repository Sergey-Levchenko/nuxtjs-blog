<template>
  <article class="post">
    <header class="post-header">
      <div class="post-title">
        <h1>Post title</h1>
        <nuxt-link to="/">
          <el-button>
            <i class="el-icon-back"></i>
          </el-button>
        </nuxt-link>
      </div>
      <div class="post-info">
        <small>
          <i class="el-icon-time"></i>
          {{new Date().toLocaleString()}}
        </small>
        <small>
          <i class="el-icon-view"></i>
          42
        </small>
      </div>
      <div class="post-image">
        <img src="https://24tv.ua/resources/photos/news/201804/957757.jpg" alt="post image">
      </div>
    </header>
    <main class="post-main">
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero libero laboriosam similique, temporibus perspiciatis sint rerum, consequuntur fuga optio, assumenda nisi sequi. Itaque sint ut qui et consectetur hic dolore?</p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero libero laboriosam similique, temporibus perspiciatis sint rerum, consequuntur fuga optio, assumenda nisi sequi. Itaque sint ut qui et consectetur hic dolore?</p>
    </main>
    <footer class="post-footer">
      <app-comment-form v-if="canAddComment" @created="createCommentHandler"/>
      <div class="post-comments" v-if="true">
        <app-comment v-for="comment in 4" :key="`comment${comment}`"></app-comment>
      </div>
      <div class="text-center" v-else>Комментариев нет</div>
    </footer>
  </article>
</template>
<script>
import AppComment from "@/components/main/Comment";
import AppCommentForm from "@/components/main/CommentForm";
export default {
  validate({ params }) {
    return Boolean(params.id);
  },
  components: {
    AppComment,
    AppCommentForm
  },
  data: () => ({
    canAddComment: true
  }),
  methods: {
    createCommentHandler() {
      this.canAddComment = false;
    }
  }
};
</script>
<style lang='scss' scoped>
.post {
  max-width: 600px;
  margin: 0 auto;
  &-header {
  }
  &-title {
    display: flex;
    margin-bottom: 1rem;
    justify-content: space-between;
    align-items: center;
    h1 {
      font-size: 30px;
    }
  }
  &-image {
    img {
      width: 100%;
      margin-bottom: 1.5rem;
    }
  }
  &-info {
    margin-bottom: 0.5rem;
  }
  &-main {
    p {
      margin-bottom: 0.5rem;
    }
  }
}
</style>