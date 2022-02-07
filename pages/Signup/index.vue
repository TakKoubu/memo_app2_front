<template>
  <b-container>
    <b-col offset-md="1" md="10" class="mt-3">
      <h3 class="text-center">登録ページ</h3>

      <Notification :message="error" v-if="error" class="mb-4 pb-3" />

      <b-form @submit.prevent="signUp">
        <b-form-group label="名前:">
          <b-form-input
            placeholder="Enter your name"
            required
            v-model="name"
            type="text"
          ></b-form-input>
        </b-form-group>
        <b-form-group label="メールアドレス:">
          <b-form-input
            placeholder="Enter email"
            required
            v-model="email"
            type="email"
          ></b-form-input>
        </b-form-group>
        <b-form-group label="パスワード:">
          <b-form-input
            placeholder="Enter password"
            required
            v-model="password"
            type="password"
          ></b-form-input>
        </b-form-group>
        <b-form-group label="パスワード確認用:">
          <b-form-input
            placeholder="password confirmation"
            required
            v-model="password_confirmation"
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
  data: function () {
    return {
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
      error: null,
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
