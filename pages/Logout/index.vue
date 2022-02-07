<template>
  <div class="admin-auth-page">
    <div class="auth-container">
      <form @submit.prevent="$auth.logout()">
        <AppButton type="submit">Logout</AppButton>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Logout",
  layout: "default",
  methods: {
    onLogout() {
      this.$store.dispatch("logoutuser").then(() => {
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
