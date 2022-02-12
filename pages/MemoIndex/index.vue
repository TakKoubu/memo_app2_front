<template>
  <section class="post-list">
    <MemoPreview
      v-for="memo in loadedMemos"
      :key="memo.id"
      :id="memo.id"
      :content="memo.content"
      :favoriteCount="memo.favoriteCount"
    />
  </section>
</template>

<script>
import MemoPreview from "@/components/Memos/MemoPreview";
import { mapActions } from "vuex";
import { mapGetters } from "vuex";

export default {
  components: {
    MemoPreview,
  },
  created() {
    this.fetchMemos();
  },
  methods: {
    ...mapActions(["fetchMemos"]),
  },
  computed: {
    ...mapGetters(["loadedMemos"]),
  },
};
</script>


<style scoped>
.post-list {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>

