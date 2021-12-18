<template>
  <div id="app">
    <!-- header trang -->
    <the-header @IdFormLogin="showLogin" @openRegister="openRegister"  />
    <router-view />

    <!-- footer -->
    <the-footer />

    <!-- login -->
    <the-login :isShowLogin="isShowLogin" @closeFormLogin="closeFormLogin" @changeInforLogin="changeInforLogin" />

    <!-- Đăng kí -->
    <the-register :isShowRegister="isShowRegister" @closeFormRegister="closeFormRegister" @afterRegister="afterRegister"/>

    <div
      :class="[{ 'modal-backdrop fade in': isShowLogin } , { 'modal-backdrop fade in': isShowRegister }]"
      @click="closeFormLogin"
    ></div>
  </div>
</template>

<script>
import AuthService from '@/services/auth-service.js'

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
    this.changeInforLogin()
  },
  methods: {

    // login
    showLogin() {
      this.isShowLogin = true;
    },
    closeFormLogin(){
      this.isShowLogin = false;
    },
    async changeInforLogin()
    {
      this.closeFormLogin();
      const dataMe = await AuthService.me();
      if(dataMe != false){
        if(dataMe.code === 200) {
          // console.log(dataMe.data.user)
          this.$store.dispatch('actionSetUser', dataMe.data.user );
        }
      }

    },

    // register
    openRegister(){
      this.isShowRegister = true;
    },
    closeFormRegister(){
      this.isShowRegister = false;
    },
    afterRegister(){
      this.closeFormRegister()
      this.showLogin()
    }
  },
};
</script>

<style></style>
