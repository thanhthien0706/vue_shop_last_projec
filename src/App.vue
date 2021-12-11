<template>
  <div id="app">
    <!-- header trang -->
    <the-header />
    <router-view />
    <the-footer />
  </div>
</template>

<script>
import TheFooter from "./components/common/TheFooter.vue";
import TheHeader from "./components/common/TheHeader.vue";
export default {
  components: { TheHeader, TheFooter },
  name: "App",
  mounted() {
    console.log(this.$router);
  },
};
</script>

<style>
</style>
