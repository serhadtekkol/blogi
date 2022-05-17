<script setup>
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "@/components/HelloWorld.vue";
</script>

<template>
  <RouterView />
</template>

<script>
import { mapActions } from "vuex";
export default {
  mounted() {
    this.authAction();
  },

  methods: {
    ...mapActions("auth", ["authAction"]),
  },
};
</script>

<style></style>
