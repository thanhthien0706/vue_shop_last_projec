import Vue from 'vue'
import VueRouter from 'vue-router'

// import HomeScreen from '../pages/HomeScreen.vue'
// import TestScreen from '../pages/TestScreen.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'HomeScreen',
        component: () =>
            import ("../pages/HomeScreen.vue"),
        meta: { title: "Trang chủ" },
    },
    {
        path: '/test',
        name: 'TestScreen',
        component: () =>
            import ("../pages/TestScreen.vue"),
        meta: { title: "Trang test" },
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router