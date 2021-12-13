<template>
  <!-- Popup: Login 1 -->
  <div
    class="modal fade login-popup"
    id="login-popup"
    tabindex="-1"
    role="dialog"
    aria-hidden="true"
    :class="[
      {
        'modal-open in': isShowRegister,
      },
    ]"
  >
    <div class="modal-dialog modal-lg">
      <button
        type="button"
        class="close close-btn popup-cls"
        data-dismiss="modal"
        aria-label="Close"
        @click.prevent="closeFormRegister"
      >
        <i class="fa-times fa"></i>
      </button>

      <div class="modal-content login-1 wht-clr">
        <div class="login-wrap text-center">
          <h2 class="fsz-35 spcbtm-15">
            <span class="bold-font-3 wht-clr">GoShop</span>
            <span class="thm-clr funky-font">fashion</span>
          </h2>
          <p class="fsz-20 title-3">WELCOME TO OUR WONDERFUL WORLD</p>
          <p class="fsz-15 bold-font-4">
            Did you know that we ship to over
            <span class="thm-clr"> 24 different countries </span>
          </p>

          <div class="login-form">

            <p class="bold-font-2 fsz-18 signup">Register</p>

            <form class="login" @submit.prevent="onRegister" >
              <div class="form-group">
                <input type="text" placeholder="Last name" v-model="userForm.lastname" class="form-control" />
              </div>
              <div class="form-group">
                <input type="text" placeholder="First name" v-model="userForm.firstname" class="form-control" />
              </div>
              <div class="form-group">
                <input type="email" placeholder="Email" v-model="userForm.email" class="form-control" />
              </div>
              <div class="form-group">
                <input type="password" placeholder="Password" v-model="userForm.password" class="form-control" />
              </div>
              <div class="form-group">
                <input type="password" placeholder="Password confirm" v-model="userForm.password_confirmation" class="form-control" />
              </div>
              <div class="form-group">
                <button class="alt fancy-button" type="submit">
                  <span class="fa fa-lightbulb-o"></span> Register
                </button>
              </div>
            </form>

            <p>* Denotes mandatory field.</p>
            <p>** At least one telephone number is required.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /Popup: Login 1 -->
</template>

<script>

import AuthService from '@/services/auth-service.js'

export default {
  name: "TheRegister",
  props: {
    isShowRegister: {
      type: Boolean,
    },
  },
  data() {
    return {
      userForm: {
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        password_confirmation: "",
      }
    }
  },
  methods: {
    closeFormRegister(){
      this.$emit('closeFormRegister');
    },
    async onRegister(){
      const dataregister = await AuthService.register(this.userForm);
      console.log(dataregister)
      this.$emit('afterRegister')
    }
  },
};
</script>

<style scoped>
.modal-open.modal {
  overflow-x: hidden;
  overflow-y: auto;
  display: block;
}
.fade.in {
  opacity: 1;
}
</style>
