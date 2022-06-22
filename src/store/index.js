import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    outdoors: [],
    user: {},
    token: "",
    userFavorites: [],
    photosSrc: [
      require("@/assets/faces/Face1.png"),
      require("@/assets/faces/Face2.png"),
      require("@/assets/faces/Face3.png"),
      require("@/assets/faces/Face4.png"),
      require("@/assets/faces/Face5.png"),
      require("@/assets/faces/Face6.png"),
      require("@/assets/faces/Face7.png"),
      require("@/assets/faces/Face8.png"),
      require("@/assets/faces/Face9.png"),
      require("@/assets/faces/Face10.png"),
      require("@/assets/faces/Face11.png"),
      require("@/assets/faces/Face12.png"),
      require("@/assets/faces/Face13.png"),
      require("@/assets/faces/Face14.png"),
      require("@/assets/faces/Face15.png"),
      require("@/assets/faces/Face16.png"),
      require("@/assets/faces/Face17.png"),
      require("@/assets/faces/Face18.png"),
      require("@/assets/faces/Face19.png"),
      require("@/assets/faces/Face20.png"),
      require("@/assets/faces/Face21.png"),
      require("@/assets/faces/Face22.png"),
      require("@/assets/faces/Face23.png"),
      require("@/assets/faces/Face24.png"),
      require("@/assets/faces/Face25.png"),
      require("@/assets/faces/Face26.png"),
      require("@/assets/faces/Face27.png"),
      require("@/assets/faces/Face28.png"),
      require("@/assets/faces/Face29.png"),
      require("@/assets/faces/Face30.png"),
      require("@/assets/faces/Face31.png"),
      require("@/assets/faces/Face32.png"),
      require("@/assets/faces/Face33.png"),
      require("@/assets/faces/Face34.png"),
      require("@/assets/faces/Face35.png"),
      require("@/assets/faces/Face36.png"),
      require("@/assets/faces/Face37.png"),
      require("@/assets/faces/Face38.png"),
      require("@/assets/faces/Face39.png"),
      require("@/assets/faces/Face40.png"),
      require("@/assets/faces/Face41.png"),
      require("@/assets/faces/Face42.png"),
      require("@/assets/faces/Face43.png"),
      require("@/assets/faces/Face44.png"),
      require("@/assets/faces/Face45.png"),
      require("@/assets/faces/Face46.png"),
      require("@/assets/faces/Face47.png"),
      require("@/assets/faces/Face48.png"),
      require("@/assets/faces/Face49.png"),
      require("@/assets/faces/Face50.png"),
    ],
    ftSrc: [
      require("@/assets/FT/FT1.png"),
      require("@/assets/FT/FT2.png"),
      require("@/assets/FT/FT3.png"),
      require("@/assets/FT/FT4.png"),
      require("@/assets/FT/FT5.png"),
      require("@/assets/FT/FT6.png"),
      require("@/assets/FT/FT7.png"),
      require("@/assets/FT/FT8.png"),
      require("@/assets/FT/FT9.png"),
      require("@/assets/FT/FT10.png"),
      require("@/assets/FT/FT11.png"),
      require("@/assets/FT/FT12.png"),
      require("@/assets/FT/FT13.png"),
      require("@/assets/FT/FT14.png"),
      require("@/assets/FT/FT15.png"),
      require("@/assets/FT/FT16.png"),
      require("@/assets/FT/FT17.png"),
      require("@/assets/FT/FT18.png"),
      require("@/assets/FT/FT19.png"),
      require("@/assets/FT/FT20.png"),
      require("@/assets/FT/FT21.png"),
      require("@/assets/FT/FT22.png"),
      require("@/assets/FT/FT23.png"),
      require("@/assets/FT/FT24.png"),
      require("@/assets/FT/FT25.png"),
      require("@/assets/FT/FT26.png"),
      require("@/assets/FT/FT27.png"),
      require("@/assets/FT/FT28.png"),
      require("@/assets/FT/FT29.png"),
      require("@/assets/FT/FT30.png"),
      require("@/assets/FT/FT31.png"),
      require("@/assets/FT/FT32.png"),
      require("@/assets/FT/FT33.png"),
      require("@/assets/FT/FT34.png"),
      require("@/assets/FT/FT35.png"),
      require("@/assets/FT/FT36.png"),
      require("@/assets/FT/FT37.png"),
      require("@/assets/FT/FT38.png"),
      require("@/assets/FT/FT39.png"),
      require("@/assets/FT/FT40.png"),
      require("@/assets/FT/FT41.png"),
      require("@/assets/FT/FT42.png"),
      require("@/assets/FT/FT43.png"),
      require("@/assets/FT/FT44.png"),
      require("@/assets/FT/FT45.png"),
      require("@/assets/FT/FT46.png"),
      require("@/assets/FT/FT47.png"),
      require("@/assets/FT/FT48.png"),
      require("@/assets/FT/FT49.png"),
      require("@/assets/FT/FT50.png"),
    ]
  },
  getters: {
    getUser: (state) => {
      return state.user;
    },
    getToken: (state) => {
      return state.token;
    },
    getOutdoors: (state) => {
      return state.outdoors;
    },
    getUserFavorites: (state) => {
      return state.userFavorites;
    },
    getPhotosSrc: (state) => {
      return state.photosSrc;
    },
    getFTSrc: (state) => {
      return state.ftSrc;
    }
  },
  mutations: {
    SET_USER(state, payload) {
      state.user = payload;
    },
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