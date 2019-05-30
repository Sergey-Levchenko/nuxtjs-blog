<template>
  <div>
    <el-breadcrumb separator="/" :style="{marginBottom:'1rem'}">
      <el-breadcrumb-item to="/admin/list">Посты</el-breadcrumb-item>
      <el-breadcrumb-item>
        <a href="/">{{post.title}}</a>
      </el-breadcrumb-item>
    </el-breadcrumb>

    <el-form :model="controls" :rules="rules" ref="form" @submit.native.prevent="onSubmit">
      <el-form-item label="Текст в формате .md или .html" prop="text">
        <el-input type="textarea" resize="none" :rows="10" v-model.trim="controls.text"/>
      </el-form-item>

      <div :style="{marginBottom:'1rem'}">
        <i class="el-icon-time"></i>
        <span style="margin-left:0.5rem">{{new Date(post.date).toLocaleString()}}</span>
      </div>
      <div :style="{marginBottom:'1rem'}">
        <i class="el-icon-view"></i>
        <span style="margin-left:0.5rem">{{post.views}}</span>
      </div>

      <el-form-item>
        <el-button :loading="loading" type="primary" native-type="submit" round>Обновить</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  layout: "admin",
  middleware: ["admin-auth"],

  async asyncData({ store, params }) {
    const post = await store.dispatch("post/fetchAdminById", params.id);
    return { post };
  },
  data: () => ({
    loading: false,
    controls: {
      text: ""
    },
    rules: {
      text: [
        {
          required: true,
          message: "Текст не должен быть пустым",
          trigger: "blur"
        }
      ]
    }
  }),
  methods: {
    onSubmit() {
      this.$refs.form.validate(async valid => {
        if (valid) {
          this.loading = true;
          const formData = {
            text: this.controls.text,
            id: this.post._id
          };

          try {
            await this.$store.dispatch("post/update", formData);
            this.$message.success("Пост обновлён");
            this.loading = false;
          } catch (error) {
            this.loading = false;
          }
        }
      });
    }
  }
};
</script>
<style lang='scss' scoped>
form {
  max-width: 600px;
}
</style>