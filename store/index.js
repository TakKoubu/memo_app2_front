import Vuex from "vuex";

const url = "http://localhost:5000/api"

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedMemos: [],
    },
    mutations: {
      addMemo(state, memo) {
        state.loadedMemos.push(memo);
      },
      setMemos(state, memos) {
        state.loadedMemos = memos;
      },
      // stateの中のloadedMemosの位置を特定する
      // 特定した位置のloadedMemosを削除する
      deleteMemo(state, id) {
        const index = state.loadedMemos.findIndex((v) => v.id === id);
        state.loadedMemos.splice(index,1);
      }
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        return context.app.$axios
          .$get(`${url}/memos`)
          .then(data => {
            vuexContext.commit("setMemos", data);
          })
          .catch(e => context.error(e));
      },
      addMemo(vuexContext, memo) {
        return this.$axios
          .$post(`${url}/memos`, memo)
          .then(data => {
            vuexContext.commit("addMemo", { ...memo, id: data });
          })
          .catch(e => console.log(e));
      },
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
      // サーバー側にdeleteリクエストを投げる
      // mutationを実行する
      deleteMemo(vuexContext, id) {
        return this.$axios
        .$delete(`${url}/memos/` + id)
          .then(res => {
            vuexContext.commit("deleteMemo", id);
          })
          .catch(e => console.log(e));
      },
    },
    getters: {
      loadedMemos(state) {
        return state.loadedMemos;
      },
    }
  });
};

export default createStore;
