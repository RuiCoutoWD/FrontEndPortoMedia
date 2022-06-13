import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    outdoors: [],
    token: "",
    userFavorites: []
  },
  getters: {
    getToken: (state) => {
      return state.token;
    },
    getOutdoors: (state) => {
      return state.outdoors;
    },
    getUserFavorites: (state) => {
      return state.userFavorites;
    }
  },
  mutations: {
    SET_OUTDOORS(state, payload) {
      state.outdoors = payload;
    },
    SET_TOKEN(state, payload) {
      state.token = payload;
    },
    SET_USERFAVORITES(state, payload) {
      state.userFavorites = payload;
    }
  },
  actions: {},
  modules: {},
});