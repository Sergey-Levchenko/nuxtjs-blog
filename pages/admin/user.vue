<template>
  <div class="content">
      <h3 :style="{marginBottom:'1.5rem'}">Создать пользователя</h3>
      <el-form :model="controls" :rules="rules" ref="form" @submit.native.prevent="onSubmit">
        <el-form-item label="Логин" prop="login">
          <el-input v-model.trim="controls.login"/>
        </el-form-item>

        <el-form-item label="Пароль" prop="password" :style="{marginBottom:'2.5rem'}">
          <el-input v-model.trim="controls.password" type="password"></el-input>
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
      login: "",
      password: ""
    },
    rules: {
      login: [
        {
          required: true,
          message: "Введите логин",
          trigger: "blur"
        }
      ],
      password: [
        {
          required: true,
          message: "Введите пароль",
          trigger: "blur"
        },
        {
          min: 4,
          message: "пароль должен быть не мение 4 символов",
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
          try {
            const formData = {
              login: this.controls.login,
              login: this.controls.password
            };
            await this.$store.dispatch("auth/createUser", formData);
            this.$message.success('Новый пользователь добавлен');
            this.controls.login = '';
            this.controls.password = '';
            this.loading = false
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
form{
    max-width: 500px;
}
</style>