<template>
  <div class="content">
    <el-card :style="{width:'500px'}" shadow="always">
      <h3 :style="{marginBottom:'1.5rem'}">Войти в панель администратора</h3>
      <el-form :model="controls" :rules="rules" ref="form" @submit.native.prevent="onSubmit">
        <el-form-item label="Логин" prop="login">
          <el-input v-model.trim="controls.login"/>
        </el-form-item>

        <el-form-item label="Пароль" prop="password" :style="{marginBottom:'2.5rem'}">
          <el-input v-model.trim="controls.password" type="password"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button :loading="loading" type="primary" native-type="submit" round>Войти</el-button>
        </el-form-item>
      </el-form>
    </el-card>
    <el-button class="button" round>
      <nuxt-link to="/">Вернуться на главную</nuxt-link>
    </el-button>
  </div>
</template>
<script>
export default {
  layout: "empty",
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
            await this.$store.dispatch("auth/login", formData);
            this.$router.push("/admin");
          } catch (error) {
            this.loading = false;
          }
        }
      });
    }
  },
  computed: {
    error() {
      this.$store.getters.error;
    }
  },
  watch: {
    error(value) {
      this.$message.error(value)
    }
  },
  mounted() {
    const { message } = this.$route.query;
    if (message === "login") {
      this.$message.error("Нужна авторизация");
    } 
    if (message === "logout") {
      this.$message.success("Вы успешно вышли");
    } 
  }
};
</script>
<style lang='scss' scoped>
.content{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.button {
  margin-top: 2rem;
  a {
    text-decoration: none;
    color: #999999;
  }
}
</style>