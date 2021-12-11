import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueAwesomeSwiper from 'vue-awesome-swiper'
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

// Vue.loadScript("./assets/plugins/jquery/jquery-2.1.3.js")
// Vue.loadScript("./assets/plugins/royalslider/jquery.royalslider.min.js")
// Vue.loadScript("./assets/plugins/bootstrap/js/bootstrap.min.js")
// Vue.loadScript("./assets/plugins/bootstrap-select-1.9.3/dist/js/bootstrap-select.min.js")
// Vue.loadScript("./assets/plugins/owl-carousel2/owl.carousel.min.js")
// Vue.loadScript("./assets/plugins/malihu-custom-scrollbar-plugin-master/jquery.mCustomScrollbar.concat.min.js")

// Vue.loadScript("./assets/plugins/isotope-master/dist/isotope.pkgd.min.js")
// Vue.loadScript("./assets/plugins/subscribe-better-master/jquery.subscribe-better.min.js")

// Vue.loadScript("./assets/js/countdown.js")
// Vue.loadScript("./assets/js/jquery.sticky.js")
// Vue.loadScript("./assets/js/custom.js")

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

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')