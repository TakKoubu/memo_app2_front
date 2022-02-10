<template>
  <b-container>
    <b-col offset-md="1" md="10" class="mt-3">
      <h3 class="text-center">登録ページ</h3>
      <b-form @submit.prevent="signUp">
        <b-form-group label="メールアドレス:">
          <b-form-input
            placeholder="Enter email"
            required
            v-model="user.email"
            type="email"
          ></b-form-input>
        </b-form-group>
        <b-form-group label="パスワード:">
          <b-form-input
            placeholder="Enter password"
            required
            v-model="user.password"
            type="password"
          ></b-form-input>
        </b-form-group>
        <b-form-group label="パスワード確認用:">
          <b-form-input
            placeholder="password confirmation"
            required
            v-model="user.password_confirmation"
            type="password"
          ></b-form-input>
        </b-form-group>
        <b-button block type="submit" variant="primary">Submit</b-button>
      </b-form>
    </b-col>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      user: {
        password: "",
        email: "",
        password_confirmation: "",
      },
    };
  },
  methods: {
    signUp() {
      this.$axios.post("/api/auth", this.user).then((response) => {
        window.location.href = "/users/comfirmation";
      });
    },
  },
};
</script>

<style></style>
