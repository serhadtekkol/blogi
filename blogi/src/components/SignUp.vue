<template>
  <form v-if="!confirmpassword" @submit.prevent="signUp">
    <div>
      <h3 class="capitalize text-sm font-medium text-gray-600 tracking-wide mb-4">
        New User
      </h3>
      <div class="mb-2">
        <input
          v-model="username"
          class="input-general"
          type="text"
          placeholder="User Name"
        />
      </div>
      <div class="mb-2">
        <input
          v-model="email"
          class="input-general"
          type="text"
          placeholder="Mail Adress"
        />
      </div>
      <div class="mb-2">
        <input
          v-model="password"
          class="input-general"
          type="password"
          placeholder="password"
        />
      </div>

      <button class="bg-teal-600 text-sm py-2 px-2 rounded-md text-slate-100">
        Create New User
      </button>
    </div>
  </form>

  <div class="alert-danger" v-if="error.message.length > 0">
    <i class="fas fa-exclamation-triangle mr-2"></i> {{ error.message }}
  </div>
  <div v-if="confirmpassword" class="mb-2">
    <input v-model="code" class="input-general" type="password" placeholder="code" />
    <button
      @click="confirmSignUp"
      class="bg-teal-600 text-sm py-2 px-2 rounded-md text-slate-100"
    >
      Confirm Code
    </button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      email: "",
      error: { message: "" },
      confirmpassword: false,
      code: "",
    };
  },
  methods: {
    async signUp() {
      if (!this.email || !this.password) return;
      try {
        await this.$store.dispatch("auth/signUp", {
          username: this.username,
          password: this.password,
          email: this.email,
        });
        this.confirmpassword = true;
      } catch (error) {
        this.error = error;
      }
    },
    async confirmSignUp() {
      if (!this.username || !this.code) {
        return;
      }
      try {
        await this.$store.dispatch("auth/confirmSignUp", {
          username: this.username,
          code: this.code,
        });
        console.log("New User Added");
      } catch (error) {
        console.log(error);
        this.error = error;
      }
    },
  },
};
</script>
