<template>
  <div id="app">

    <!-- header trang -->
    <the-header/>
    <router-view />
  </div>
</template>

<script>
import TheHeader from './components/common/TheHeader.vue';
export default {
  components: { TheHeader },
  name: "App",
  mounted(){
    console.log(this.$router)
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
