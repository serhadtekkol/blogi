<script setup>
import { RouterLink, RouterView } from "vue-router";

import Nav from "@/components/Nav.vue";
</script>

<template>
  <appNav> </appNav>

  <RouterView />
</template>

<script>
import { mapActions } from "vuex";
export default {
  components: {
    appNav: Nav,
  },
  mounted() {
    this.authAction();
  },

  methods: {
    ...mapActions("auth", ["authAction"]),
  },
};
</script>

<style></style>
