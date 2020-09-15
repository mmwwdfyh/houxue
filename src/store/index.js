import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    activeIndex: 0,
    getoken: "",
    getinfo: "",
  },
  getters: {

  },
  mutations: {
    getoken(state, token) {
      state.token = token
    },
    getinfo(state, user) {
      state.user = user
    },
  },
  actions: {},
  modules: {}
});
