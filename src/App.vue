<template>
  <div class="app">
    <AppMenu />
    <router-view />
  </div>
</template>

<style lang="scss">
html,
body,
.app {
  height: 100%;
}
</style>

<script lang="ts">
import Vue from "vue";
import AppMenu from "@/views/AppMenu.vue";
export default Vue.extend({
  name: "App",
  components: {
    AppMenu,
  },
});
</script>
