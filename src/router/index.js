import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeScreen from '../pages/HomeScreen.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HomeScreen',
    component: HomeScreen,
    meta: { title: "Trang chủ" },
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
