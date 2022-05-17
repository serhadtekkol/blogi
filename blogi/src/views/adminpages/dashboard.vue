<template>
  <div>
    <span v-if="user" class="capitalize"> Welcome {{ user.username }}</span>
    <button v-if="user" @click="logOut" class="bg-slate-200 py-2 px-2 rounded-md text-xs">
      LogOut
    </button>
  </div>

  <div>this is dashbaordpage</div>

  <newUser></newUser>
</template>
<script>
import NewUser from "../../components/SignUp.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    newUser: NewUser,
  },
  methods: {
    async logOut() {
      await this.$store.dispatch("auth/logout");
      this.$router.push("/private/login");
    },
  },
  computed: {
    ...mapGetters({
      user: "auth/user",
    }),
  },
};
</script>
