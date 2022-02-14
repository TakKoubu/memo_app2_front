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
        state.loadedMemos.splice(index, 1);
      },
      addFavo(state, { id, favoriteCount }) {
        const index = state.loadedMemos.findIndex(
          memo => memo.id === id
        );
        const memo = state.loadedMemos[index]
        // サーバーのいいね数を代入する
        memo.favorite_count = favoriteCount
        memo.is_like = true
        // stateを変更する。
        // この処理がないとstateが書き換わらないので画面が更新されない。
        // ここの処理をコメントアウトしたり外したりして画面での違いを確認してください。
        state.loadedMemos.splice(index, 1, memo)
      },
      unFavo(state, { id, favoriteCount}) {
        // loadedMemoのIDを特定する
        const index = state.loadedMemos.findIndex(
          memo => memo.id === id
        );
        // memoにloadedMemosを代入
        const memo = state.loadedMemos[index]
        memo.favorite_count = favoriteCount
        memo.is_like = false
        // stateの値も同様に1減算したものを代入する
        state.loadedMemos.splice(index, 1, memo)
      }
    },
    actions: {
      fetchMemos(vuexContext, context) {
        return this.$axios
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
      // サーバー側にdeleteリクエストを投げる
      // mutationを実行する
      deleteMemo(vuexContext, id) {
        return this.$axios
        .$delete(`${url}/memos/${id}`)
          .then(res => {
            vuexContext.commit("deleteMemo", id);
          })
          .catch(e => console.log(e));
      },
      // サーバーにcreateリクエストを送る
      // mutationを実行する
      addFavo(vuexContext, id) {
        return this.$axios
          .$post(
            `${url}/favorites`,
            {memo_id: id, user_id: 1}
          )
          .then(res => {
            vuexContext.commit('addFavo', {id, favoriteCount: res.favorite_count})
          })
          .catch(e => console.log(e));
      },
      unFavo(vuexContext, id) {
        return this.$axios
          .delete(`${url}/favorites/${id}`)
          .then(res =>{
            vuexContext.commit('unFavo', { id, favoirteCount: res.favorite_count})
          })
          .catch(e => console.log(e));
      }
    },
    getters: {
      loadedMemos(state) {
        return state.loadedMemos;
      },
    }
  });
};

export default createStore;
