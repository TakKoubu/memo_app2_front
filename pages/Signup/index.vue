<template>
  <div class="admin-auth-page">
    <div class="auth-container">
      <form @submit.prevent="onSubmit">
        <AppControlInput type="text" v-model="name">Name</AppControlInput>
        <AppControlInput type="email" v-model="email">E-Mail</AppControlInput>
        <AppControlInput type="password" v-model="password"
          >Password</AppControlInput
        >
        <AppControlInput type="password" v-model="password_confirmation"
          >Password(確認用)</AppControlInput
        >
        <AppButton type="submit">Sign Up</AppButton>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Signup",
  layout: "default",
  data() {
    return {
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
    };
  },
  methods: {
    onSubmit() {
      this.$store
        .dispatch("authenticateUser", {
          name: this.name,
          email: this.email,
          password: this.password,
          password_confirmation: this.password_confirmation,
        })
        .then(() => {
          this.$router.push("/login");
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
