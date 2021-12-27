import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import axios from "axios";
import AuthService from '@/services/auth-service.js'
import Vuelidate from 'vuelidate'

// import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'

import LoadScript from 'vue-plugin-load-script';

// CSS Global
import './assets/plugins/bootstrap/css/bootstrap.min.css'
import './assets/plugins/bootstrap-select-1.9.3/dist/css/bootstrap-select.min.css'
import './assets/plugins/subscribe-better-master/subscribe-better.css'
import './assets/plugins/owl-carousel2/assets/owl.carousel.css'
import './assets/plugins/malihu-custom-scrollbar-plugin-master/jquery.mCustomScrollbar.min.css'
import './assets/plugins/royalslider/skins/universal/rs-universal.css'
import './assets/plugins/royalslider/royalslider.css'


// syple page
// import './assets/styles/global/reset.css'
// import './assets/styles/global/global.css'

// Icons Font CSS
import './assets/plugins/font-awesome/css/font-awesome.min.css'

// Theme CSS
import './assets/css/style.css'
import './assets/css/header.css'


Vue.config.productionTip = false

// import style (<= Swiper 5.x)
import 'swiper/css/swiper.css'


router.afterEach((to) => {
    Vue.nextTick(() => {
        document.title = to.meta.title;
    });
});

// Vue.use(BootstrapVue)
// Vue.use(IconsPlugin)
Vue.use(LoadScript);
Vue.use(VueAwesomeSwiper)
Vue.use(Vuelidate)

axios.defaults.baseURL = "https://vue-shop.tk/api"
axios.defaults.headers.common['project-name'] = 'go-shop'

AuthService.initAuthHeader();

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')