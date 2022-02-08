<template>
  <form @submit.prevent="onSave">
    <AppControlInput control-type="textarea" v-model="createMemo.content"
      >Content
    </AppControlInput>
    <AppButton type="submit">Save</AppButton>
    <AppButton
      type="button"
      style="margin-left: 10px"
      btn-style="cancel"
      @click="onCancel"
    >
      Cancel
    </AppButton>
  </form>
</template>

<script>
export default {
  props: {
    memo: {
      type: Object,
      required: false,
    },
  },
  data() {
    return {
      createMemo: this.memo
        ? { ...this.memo }
        : {
            content: "",
          },
    };
  },
  methods: {
    onSave() {
      this.$store.dispatch("addMemo", this.createMemo).then(() => {
        this.$router.push("/memoindex");
      });
    },
    onCancel() {
      // Navigate back
      this.$router.push("/memoindex");
    },
  },
};
</script>
