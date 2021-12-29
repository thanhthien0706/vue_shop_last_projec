<template>
  <div id="app">
    <!-- header trang -->
    <the-header @IdFormLogin="showLogin" @openRegister="openRegister" />
    <router-view />

    <!-- footer -->
    <the-footer />

    <!-- login -->
    <the-login
      :isShowLogin="isShowLogin"
      @closeFormLogin="closeFormLogin"
    />

    <!-- Đăng kí -->
    <the-register
      :isShowRegister="isShowRegister"
      @closeFormRegister="closeFormRegister"
    />

    <div
      :class="[
        { 'modal-backdrop fade in': isShowLogin },
        { 'modal-backdrop fade in': isShowRegister },
      ]"
      @click="closeFormLogin"
    ></div>
  </div>
</template>

<script>
// import AuthService from "@/services/auth-service.js";
import { fireStoreCore } from "./configs/firebase.js";
import { collection, getDocs } from "firebase/firestore/lite";

import TheFooter from "./components/common/TheFooter.vue";
import TheHeader from "./components/common/TheHeader.vue";
import TheLogin from "./components/common/TheLogin.vue";
import TheRegister from "./components/common/TheRegister.vue";

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
    // this.changeInforLogin();
    // this.getCities();
    this.getCities();
  },
  methods: {
    // login
    showLogin() {
      this.isShowLogin = true;
    },
    closeFormLogin() {
      this.isShowLogin = false;
    },
    // async changeInforLogin() {
    //   this.closeFormLogin();
    //   const dataMe = await AuthService.me();
    //   if (dataMe != false) {
    //     if (dataMe.code === 200) {
    //       // console.log(dataMe.data.user)
    //       this.$store.dispatch("actionSetUser", dataMe.data.user);
    //     }
    //   }
    // },

    // register
    openRegister() {
      this.isShowRegister = true;
    },
    closeFormRegister() {
      this.isShowRegister = false;
    },
    // afterRegister() {
    //   this.closeFormRegister();
    //   this.showLogin();
    // },

    // firebas

    // async getCities() {
    //   console.log(database)
    // },
    // Get a list of cities from your database
    async getCities() {
      const citiesCol = collection(fireStoreCore, "Login");
      const citySnapshot = await getDocs(citiesCol);
      const cityList = citySnapshot.docs.map((doc) => doc.data());
      console.log(cityList);
    },
  },
};
</script>

<style scoped></style>
