<template>
  <b-container>
    <b-col offset-md="1" md="10" class="mt-3">
      <h3 class="text-center">ログイン</h3>

      <Notification :message="error" v-if="error" class="mb-4 pb-3" />

      <b-form @submit.prevent="login">
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
        <b-button block type="submit" variant="primary">送信</b-button>
      </b-form>
    </b-col>
  </b-container>
</template>

<script>
export default {
  data: function () {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    // loginメソッドの呼び出し
    async login() {
      await this.$auth
        .loginWith("local", {
          // emailとpasswordの情報を送信
          data: {
            email: this.email,
            password: this.password,
          },
        })
        .then(
          (response) => {
            // レスポンスで返ってきた、認証に必要な情報をlocalStorageに保存
            localStorage.setItem(
              "access-token",
              response.headers["access-token"]
            );
            localStorage.setItem("client", response.headers.client);
            localStorage.setItem("uid", response.headers.uid);
            localStorage.setItem("token-type", response.headers["token-type"]);
            return response;
          },
          (error) => {
            return error;
          }
        );
    },
  },
};
</script>

<style></style>
