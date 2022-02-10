<template>
  <div>
    <article>
      <div class="post-content">
        <p>{{ content }}</p>
      </div>
      <AppButton
        type="button"
        style="margin-left: 10px"
        btn-style="cancel"
        @click="onDelete(id)"
      >
        Delete
      </AppButton>
    </article>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  name: "MemoPreview",
  props: {
    id: {
      type: Number,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  computed: {},
  methods: {
    onDelete(id) {
      console.log(id);
      this.$store.dispatch("deleteMemo", id).then(() => {
        this.$router.push("/memoindex");
      });
    },
  },
};
</script>


<style scoped>
.post-preview {
  border: 1px solid #ccc;
  box-shadow: 0 2px 2px #ccc;
  background-color: white;
  width: 90%;
}

a {
  text-decoration: none;
  color: black;
}

@media (min-width: 850px) {
  .post-preview {
    width: 400px;
    margin: 10px;
  }
}

.post-thumbnail {
  width: 100%;
  height: 200px;
  background-position: center;
  background-size: cover;
}

.post-content {
  display: inline-block;
  padding: 10px;
  text-align: center;
}

a:hover .post-content,
a:active .post-content {
  background-color: #ccc;
}

.btn-area {
  display: inline-block;
}
</style>
