<template>
  <div id="app">
    <!-- header trang -->
    <the-header @IdFormLogin="showLogin" @openRegister="openRegister"  />
    <router-view />

    <!-- footer -->
    <the-footer />

    <!-- login -->
    <the-login :isShowLogin="isShowLogin" @closeFormLogin="closeFormLogin" />

    <!-- Đăng kí -->
    <the-register :isShowRegister="isShowRegister" @closeFormRegister="closeFormRegister" />

    <div
      :class="[{ 'modal-backdrop fade in': isShowLogin } , { 'modal-backdrop fade in': isShowRegister }]"
      @click="closeFormLogin"
    ></div>
  </div>
</template>

<script>
import TheFooter from "./components/common/TheFooter.vue";
import TheHeader from "./components/common/TheHeader.vue";
import TheLogin from "./components/common/TheLogin.vue";
import TheRegister from './components/common/TheRegister.vue';
export default {
  components: { TheHeader, TheFooter, TheLogin, TheRegister },
  name: "App",
  data() {
    return {
      isShowLogin: false,
      isShowRegister: false,
    };
  },
  mounted() {
    // console.log(this.$router);
  },
  methods: {

    // login
    showLogin(event) {
      console.log(event);
      this.isShowLogin = true;
    },
    closeFormLogin(){
      this.isShowLogin = false;
    },

    // register
    openRegister(){
      this.isShowRegister = true;
    },
    closeFormRegister(){
      this.isShowRegister = false;
    }
  },
};
</script>

<style></style>
