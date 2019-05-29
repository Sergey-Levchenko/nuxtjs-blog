<template>
  <div>
    <el-card class="card">
      <h1>Добавить комментарий</h1>
      <el-form :model="controls" :rules="rules" ref="form" @submit.native.prevent="onSubmit">
        <el-form-item label="Ваше имя" prop="name">
          <el-input v-model.trim="controls.name"/>
        </el-form-item>

        <el-form-item label="Текст комментария" prop="text">
          <el-input type="textarea" v-model.trim="controls.text" resize="none" :rows="2"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button :loading="loading" type="primary" native-type="submit" round>Добавить</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>
<script>
export default {
  data: () => ({
    loading: false,
    controls: {
      name: "",
      text: ""
    },
    rules: {
      name: [
        {
          required: true,
          message: "Имя не должно быть пустым",
          trigger: "blur"
        }
      ],
      text: [
        {
          required: true,
          message: "Введите Ваш комментарий",
          trigger: "blur"
        }
      ]
    }
  }),
  methods: {
    onSubmit() {
      this.$refs.form.validate(valid => {
        if (valid) {
          this.loading = true;
          const formData = {
            name: this.controls.name,
            name: this.controls.text,
            postId: ""
          };
          try {
            this.$message({
              message: '"Комментарий добавлен"',
              type: "success"
            });
            setTimeout(() => {
              this.$emit("created");
            }, 2000);
            console.log("form is valid");
          } catch (error) {
            this.loading = false;
          }
        } else {
          console.log("not valid");
        }
      });
    }
  }
};
</script>
<style lang='scss' scoped>
.card {
  margin: 1rem 0;
}
</style>