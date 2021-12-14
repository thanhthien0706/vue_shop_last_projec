import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        user: null,
    },
    mutations: {
        setUser(state, token) {
            state.user = token;
        }
    },
    actions: {
        actionSetUser({ commit }, token) {
            commit('setUser', token);
        }
    },
    modules: {}
})