import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        user: null,
        notifi: {
            code: null,
            mess: "",
        },
        isPending: false,
    },
    mutations: {
        setUser(state, user) {
            state.user = user;
        },
        setIsPending(state, change) {
            state.isPending = change
        }
    },
    actions: {
        actionSetUser({ commit }, user) {
            commit('setUser', user);
        },
        actionSetIsPending({ commit }, change) {
            commit('setIsPending', change)
        }
    },
    modules: {}
})