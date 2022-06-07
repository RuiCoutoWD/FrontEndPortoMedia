import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    outdoors: [],
    token: "",
  },
  getters: {
    getToken: (state) => {
      return state.token;
    },
  },
  mutations: {
    SET_OUTDOORS(state, payload) {
      state.outdoors = payload;
    },
    SET_TOKEN(state, payload) {
      state.token = payload;
    },
  },
  actions: {},
  modules: {},
});
