<template>
  <div class="bg-gray-700">
    <form @submit.prevent="login">
      <div class="min-h-screen py-6 flex flex-col justify-center sm:py-12">
        <div class="relative mx-auto animate__animated animate__fadeIn">
          <div
            :class="error.message.length > 0 ? 'bg-pink-700/10' : 'bg-gray-600'"
            class="border-pink-600 border rounded-sm px-8 py-8 shadow-md"
          >
            <div class="mb-2">
              <input
                v-model="username"
                class="input-login w-full"
                type="text"
                placeholder="Username"
              />
            </div>
            <div class="mb-2">
              <input
                v-model="password"
                class="input-login w-full"
                type="password"
                placeholder="Password"
              />
            </div>
            <div class="mb-2">
              <button
                :disabled="signStatus == 'Please Wait' ? true : false"
                class="bg-green-300 text-green-700 px-3 py-1 rounded-sm w-full text-xs hover:text-green-100 hover:bg-green-600"
              >
                {{ signStatus }}
              </button>
            </div>

            <div class="alert-danger" v-if="error.message.length > 0">
              <i class="fas fa-exclamation-triangle mr-2"></i> {{ error.message }}
            </div>
          </div>

          <div class="text-xs text-gray-500 text-center 0 hover:animate-pulse">
            Powered By Serhad with VueJS
          </div>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      signStatus: "SignIn",
      username: "",
      password: "",
      email: "",
      error: { message: "" },
    };
  },

  methods: {
    ...mapActions({
      loginVue: "auth/login",
    }),
    async login() {
      try {
        this.signStatus = "Please Wait";
        await this.loginVue({
          username: this.username,
          password: this.password,
        });
        this.$router.push("/private");
      } catch (error) {
        this.signStatus = "SignIn";
        this.error = error;
      }
    },
  },
};
</script>
<style></style>
