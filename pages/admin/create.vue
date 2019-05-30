<template>
  <div>
    <el-form :model="controls" :rules="rules" ref="form" @submit.native.prevent="onSubmit">
      <el-form-item label="Текст в формате .md или .html" prop="text">
        <el-input type="textarea" resize="none" :rows="10" v-model.trim="controls.text"/>
      </el-form-item>

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
      ],
    }
  }),
  methods: {
    onSubmit() {
      this.$refs.form.validate(async valid => {
        if (valid) {
          this.loading = true;
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