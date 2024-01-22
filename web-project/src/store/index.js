import {createStore} from 'vuex'

export default createStore({ 
    state: { authenticated: false }, 
    mutations: { SET_AUTH: function (state, auth) { state.authenticated = auth } }, 
    actions: { setAuth: function ({commit}, auth) { commit('SET_AUTH', auth) } }, 
    modules: {} 
})