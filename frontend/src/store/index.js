import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cart: [],
    isAuthenticated: false
  },
  mutations: {
    ADD_TO_CART(state, product) {
      const existing = state.cart.find(item => item.id === product.id)
      existing ? existing.quantity++ : state.cart.push({ ...product, quantity: 1 })
    },
    SET_AUTH_STATUS(state, status) {
      state.isAuthenticated = status
    }
  },
  actions: {
    addToCart({ commit }, product) {
      commit('ADD_TO_CART', product)
    },
    logoutUser({ commit }) {
      commit('SET_AUTH_STATUS', false)
    }
  },
  getters: {
    cartItemCount: state => state.cart.reduce((total, item) => total + item.quantity, 0)
  }
})