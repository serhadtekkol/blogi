<template>
  <div>posts</div>

  <input type="text" class="input-general" v-model="postTitle" placeholder="title" />
  <input type="text" class="input-general" v-model="content" placeholder="content" />
  <button class="bg-red-300 p-2" @click="createPosts()">Createpost</button>
  <p>{{ error }}</p>

  <div
    v-for="(album, idx) in posts"
    :key="idx"
    class="cursor-pointer mt-4 ml-4 w-3/12 h-24 shadow-xl flex items-center justify-center"
    @click="openPostDetail(album)"
  >
    <div class="text-2xl">{{ album.name }}</div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  async mounted() {
    this.$store.dispatch("postInfo/getPostsData");
  },
  data() {
    return {
      postTitle: "",
      content: "",
      error: "",
    };
  },
  methods: {
    openPostDetail(post) {
      this.$router.push("/post/${post.id}");
    },

    createPosts() {
      const newPost = {
        title: this.postTitle,
        content: this.content,
        author: this.user.username,
        createdAt: "abcde",
      };
      this.$store.dispatch("postInfo/createPosts", newPost);
    },
  },
  computed: {
    ...mapGetters({
      user: "auth/user",
      posts: "postInfo/posts",
    }),
  },
};
</script>
