import Vuex from "vuex";

const url = "http://localhost:3000/api"

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: [],
    },
    mutations: {
    },
    actions: {
      // nuxtServerInit(vuexContext, context) {
      //   return context.app.$axios
      //     .$get()
      //     .then(
      //     )
      //     .catch(e => context.error(e));
      // },
      authenticateUser(_, authData) {
        return this.$axios
          .$post(`${url}/users`, {
            user: {
            name: authData.name,
            email: authData.email,
            password: authData.password,
            password_confirmation: authData.password_confirmation
            }
          })
          .catch(e => console.log(e));
      },
      loginUser(vuexContext,authData) {
        return this.$axios
          .post(`${url}/login`, {
            user: {
              email: authData.email,
              password: authData.password
            }
          })
          .catch(e => console.log(e));
      },
      logoutuser() {
        return this.$axios
          .delete(`${url}/logout`)
          .catch(e => console.log(e));
      },
    },
    getters: {
    }
  });
};

export default createStore;
