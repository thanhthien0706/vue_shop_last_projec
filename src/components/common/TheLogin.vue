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
        'modal-open in': isShowLogin,
      },
    ]"
  >
    <div class="modal-dialog modal-lg">
      <button
        type="button"
        class="close close-btn popup-cls"
        data-dismiss="modal"
        aria-label="Close"
        @click.prevent="closeFormLogin"
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
            <a class="fb-btn btn spcbtm-15" href="#">
              <i class="fa fa-facebook btn-icon"></i>Login with Facebook
            </a>

            <p class="bold-font-2 fsz-12 signup">OR SIGN UP</p>

            <form class="login" @submit.prevent="onLogin">
              <div class="form-group">
                <input
                  type="text"
                  placeholder="Email"
                  v-model="userForm.email"
                  class="form-control"
                />
              </div>
              <div class="form-group">
                <input
                  type="text"
                  placeholder="Password"
                  class="form-control"
                  v-model="userForm.password"
                />
              </div>
              <div class="form-group">
                <button class="alt fancy-button" type="submit">
                  <span class="fa fa-lightbulb-o"></span> Login
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

export default {
  name: "TheLogin",
  props: {
    isShowLogin: {
      type: Boolean,
    },
  },
  data() {
    return {
      userForm: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    //   tắt form đăng nhập
    closeFormLogin() {
      this.$emit("closeFormLogin");
    },
    onLogin(){
      console.log(this.userForm)
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
