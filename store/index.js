import Vuex from "vuex";

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
        let authUrl = "http://localhost:3000/api/users"
        return this.$axios
          .$post(authUrl, {
            user: {
            name: authData.name,
            email: authData.email,
            password: authData.password,
            password_confirmation: authData.password_confirmation
            }
          })
          .catch(e => console.log(e));
      },
    },
    getters: {
    }
  });
};

export default createStore;
