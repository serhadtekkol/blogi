<template>
  <div class="bg-cyan-800">
    <newpost> </newpost>

    <div>posts</div>

    <input type="text" class="input-general" v-model="postTitle" placeholder="title" />
    <input type="text" class="input-general" v-model="content" placeholder="content" />
    <button class="bg-red-300 p-2" @click="createPosts()">Createpost</button>
    <p>{{ error }}</p>

    <div
      v-for="(item, idx) in posts"
      :key="idx"
      class="cursor-pointer mt-4 ml-4 w-3/12 h-24 shadow-xl flex items-center justify-center"
      @click="openPostDetail(item)"
    >
      <div class="text-2xl">{{ item.author }}</div>
    </div>

    <hr />

    kategori kaydet

    <div>
      <input type="text" class="input-general" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import newpost from "../components/newpost.vue";

export default {
  async mounted() {
    this.$store.dispatch("postInfo/getIcerikData");
  },
  data() {
    return {
      postTitle: "",
      content: "",
      error: "",
    };
  },
  components: {
    newpost,
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
      this.$store.dispatch("postInfo/createIcerik", newPost);
    },
  },
  computed: {
    ...mapGetters({
      user: "auth/user",
      posts: "postInfo/postss",
    }),
  },
};
</script>
