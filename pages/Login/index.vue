<template>
  <div class="admin-auth-page">
    <div class="auth-container">
      <form @submit.prevent="onLogin">
        <AppControlInput type="email" v-model="email">E-Mail</AppControlInput>
        <AppControlInput type="password" v-model="password"
          >Password</AppControlInput
        >
        <AppButton type="submit">Login</AppButton>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  layout: "default",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    onLogin() {
      this.$store
        .dispatch("loginUser", {
          user: {
            email: this.email,
            password: this.password,
          },
        })
        .then(() => {
          this.$router.push("/memo");
        });
    },
  },
};
</script>

<style scoped>
.admin-auth-page {
  padding: 20px;
}

.auth-container {
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 2px #ccc;
  width: 300px;
  margin: auto;
  padding: 10px;
  box-sizing: border-box;
}
</style>
