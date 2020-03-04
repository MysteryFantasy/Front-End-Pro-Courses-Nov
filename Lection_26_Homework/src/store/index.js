import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    name: "Костя",
  },
  getters: {
    getName(state) {
      return state.name;
    },
  },
  mutations: {
  },
  actions: {
  }
})