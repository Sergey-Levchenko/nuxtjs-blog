<template>
  <div>
    <el-form :model="controls" :rules="rules" ref="form" @submit.native.prevent="onSubmit">
      <h1>Создать новай пост</h1>

      <el-form-item label="Введите название поста" prop="title">
        <el-input v-model.trim="controls.title"/>
      </el-form-item>
      <el-form-item label="Текст в формате .md или .html" prop="text">
        <el-input type="textarea" resize="none" :rows="10" v-model="controls.text"/>
      </el-form-item>

      <el-dialog title="Предпросмотр" :visible.sync="previewDialog">
        <h2>{{controls.title}}</h2>
        <br>
        <div>{{controls.text}}</div>
      </el-dialog>

      <el-upload
        class="upload"
        ref="upload"
        drag
        action="https://jsonplaceholder.typicode.com/posts/"
        :on-change="handleImageChange"
        :auto-upload="false"
      >
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">
          Перетащите картинку
          <em>или нажмите</em>
        </div>
        <div class="el-upload__tip" slot="tip">Файлы с расширением jpg/png до 500kb</div>
      </el-upload>

      <el-button class="preview-btn" type="success" plain @click="previewDialog = true">Предпросмотр</el-button>

      <el-form-item>
        <el-button :loading="loading" type="primary" native-type="submit" round>Создать</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  layout: "admin",
  middleware: ["admin-auth"],
  data: () => ({
    loading: false,
    previewDialog: false,
    image: null,
    controls: {
      title: "",
      text: ""
    },
    rules: {
      text: [
        {
          required: true,
          message: "Текст не должен быть пустым",
          trigger: "blur"
        }
      ],
      title: [
        {
          required: true,
          message: "Название не должно быть пустым",
          trigger: "blur"
        }
      ]
    }
  }),
  methods: {
    onSubmit() {
      this.$refs.form.validate(async valid => {
        if (valid && this.image) {
          this.loading = true;

          const formData = {
            title: this.controls.title,
            text: this.controls.text,
            image: this.image
          };

          try {
            await this.$store.dispatch("post/create", formData);
            this.controls.title = "";
            this.controls.text = "";
            this.image = null;
            this.$refs.upload.clearFiles();
            this.$message.success("Пост создан");
          } catch (error) {
          } finally {
            this.loading = false;
          }
        } else {
          this.$message.warning("Форма не валидна");
        }
      });
    },
    handleImageChange(file, fileList) {
      console.log(file);
      this.image = file.raw;
    }
  }
};
</script>
<style lang='scss' scoped>
form {
  max-width: 600px;
}
h1 {
  margin-bottom: 1rem;
}
.preview-btn {
  margin-bottom: 1rem;
}
.upload {
  margin-bottom: 1.5rem;
}
</style>